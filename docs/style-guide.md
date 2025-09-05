# Style Guide and Coding Standards

This document outlines the coding standards and style guidelines for diversifi.

## Core Principles

### 1. Enhancement First

Consolidate existing components rather than creating new ones to prevent code duplication.

### 2. Aggressive Consolidation

Delete unnecessary duplicate code to maintain a clean codebase.

### 3. Prevent Bloat

Systematically audit before adding new features to avoid unnecessary complexity.

### 4. DRY (Don't Repeat Yourself)

Maintain a single source of truth for all shared logic and constants.

### 5. Clean Code

Ensure clear separation of concerns with explicit dependencies and well-organized structure.

### 6. Modular Design

Create composable, testable, and independent modules.

### 7. Performance Optimization

Optimize loading, caching, and resource management for better user experience.

### 8. Organized Structure

Follow predictable structure with domain-driven design principles.

## TypeScript Standards

### Type Safety

1. Use TypeScript for all new code
2. Enable strict type checking in `tsconfig.json`
3. Avoid using `any` type unless absolutely necessary
4. Prefer interfaces over types for object shapes

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

// Avoid
type User = {
  id: string;
  name: string;
  email: string;
};
```

### Naming Conventions

1. Use PascalCase for interfaces and type aliases
2. Use camelCase for variables, functions, and methods
3. Use UPPER_SNAKE_CASE for constants

```typescript
// Interfaces
interface UserProfile {
  userId: string;
  displayName: string;
}

// Constants
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com";

// Variables and functions
const userProfiles = getUserProfiles();
function calculateTotalBalance(accounts: Account[]): number {
  // Implementation
}
```

### Function Design

1. Keep functions small and focused on a single responsibility
2. Use descriptive function names
3. Prefer pure functions when possible
4. Use default parameters instead of conditionals

```typescript
// Good
function calculateSwapAmount(
  inputAmount: number,
  exchangeRate: number,
  feePercentage = 0.0025
): number {
  const feeAmount = inputAmount * feePercentage;
  return (inputAmount - feeAmount) * exchangeRate;
}

// Avoid
function calculateSwapAmount(
  inputAmount: number,
  exchangeRate: number,
  feePercentage?: number
): number {
  const fee = feePercentage || 0.0025;
  // Complex implementation with multiple responsibilities
}
```

## React Standards

### Component Structure

1. Create small, focused components
2. Use hooks to separate logic from UI
3. Implement proper error handling
4. Write clear prop interfaces

```typescript
// Good component structure
interface SwapCardProps {
  tokenFrom: Token;
  tokenTo: Token;
  onSwap: (amount: number) => void;
}

export function SwapCard({ tokenFrom, tokenTo, onSwap }: SwapCardProps) {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSwap = () => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    try {
      onSwap(numericAmount);
      setError("");
    } catch (err) {
      setError("Failed to execute swap");
    }
  };

  return <div className="swap-card">{/* Component UI */}</div>;
}
```

### Hooks

1. Custom hooks should start with "use"
2. Hooks should have a single responsibility
3. Return consistent data structures
4. Handle loading and error states

```typescript
// Good custom hook
function useTokenBalance(token: Token) {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        setLoading(true);
        const result = await getTokenBalance(token);
        setBalance(result);
        setError(null);
      } catch (err) {
        setError("Failed to fetch balance");
        setBalance(null);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchBalance();
    }
  }, [token]);

  return { balance, loading, error };
}
```

### State Management

1. Lift state up when needed by multiple components
2. Use context for global state
3. Prefer local state for component-specific data
4. Use reducers for complex state logic

```typescript
// Good state management
// For global state
const UserContext = createContext<UserContextType | null>(null);

// For complex local state
interface SwapState {
  step: "input" | "confirm" | "executing" | "completed";
  amount: string;
  estimatedOutput: number | null;
}

function swapReducer(state: SwapState, action: SwapAction): SwapState {
  switch (action.type) {
    case "SET_AMOUNT":
      return { ...state, amount: action.payload };
    case "SET_STEP":
      return { ...state, step: action.payload };
    // Other cases
    default:
      return state;
  }
}
```

## Styling Standards

### Tailwind CSS

1. Use Tailwind utility classes for styling
2. Follow the centralized styling approach
3. Use responsive prefixes for mobile-first design
4. Create reusable utility functions for complex styling

```typescript
// Good styling approach
import { cn } from "@/lib/utils";
import { getRegionStyle } from "@/lib/styles/style-utils";

export function TokenCard({ token, isSelected }: TokenCardProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border cursor-pointer transition-colors",
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200",
        getRegionStyle(token.region, "light", "bg")
      )}
    >
      {/* Card content */}
    </div>
  );
}
```

### Style Utilities

1. Create centralized style utilities for consistent styling
2. Use theme-based styling for light/dark modes
3. Implement region-specific styling through utility functions

```typescript
// Style utility example
export function getRegionStyle(
  region: string,
  intensity: "light" | "medium" | "dark",
  type: "bg" | "text" | "border"
): string {
  const styles: Record<string, Record<string, Record<string, string>>> = {
    Africa: {
      light: {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
      },
      // Other intensities
    },
    // Other regions
  };

  return styles[region]?.[intensity]?.[type] || getDefaultStyle(type);
}
```

## Testing Standards

### Unit Testing

1. Write tests for utility functions
2. Test pure functions with various inputs
3. Mock external dependencies
4. Use descriptive test names

```typescript
// Good unit test
describe("calculateSwapAmount", () => {
  it("should calculate correct amount with default fee", () => {
    const result = calculateSwapAmount(100, 0.95);
    expect(result).toBeCloseTo(94.7625); // 100 * 0.95 * (1 - 0.0025)
  });

  it("should calculate correct amount with custom fee", () => {
    const result = calculateSwapAmount(100, 0.95, 0.01);
    expect(result).toBeCloseTo(94.05); // 100 * 0.95 * (1 - 0.01)
  });
});
```

### Component Testing

1. Test component rendering with different props
2. Test user interactions
3. Test error states
4. Use React Testing Library for testing

```typescript
// Good component test
describe("SwapCard", () => {
  it("should render token information correctly", () => {
    render(
      <SwapCard
        tokenFrom={mockTokenFrom}
        tokenTo={mockTokenTo}
        onSwap={vi.fn()}
      />
    );

    expect(screen.getByText(mockTokenFrom.symbol)).toBeInTheDocument();
    expect(screen.getByText(mockTokenTo.symbol)).toBeInTheDocument();
  });

  it("should call onSwap when swap button is clicked", async () => {
    const onSwap = vi.fn();
    render(
      <SwapCard
        tokenFrom={mockTokenFrom}
        tokenTo={mockTokenTo}
        onSwap={onSwap}
      />
    );

    const input = screen.getByPlaceholderText("Enter amount");
    await userEvent.type(input, "100");

    const swapButton = screen.getByText("Swap");
    await userEvent.click(swapButton);

    expect(onSwap).toHaveBeenCalledWith(100);
  });
});
```

## Documentation Standards

### Code Comments

1. Comment complex logic with explanations
2. Document function parameters and return values
3. Use JSDoc for public APIs
4. Avoid redundant comments

```typescript
/**
 * Calculates the output amount for a token swap
 * @param inputAmount - The amount of input tokens
 * @param exchangeRate - The exchange rate between tokens
 * @param feePercentage - The fee percentage (default: 0.0025)
 * @returns The estimated output amount after fees
 */
function calculateSwapAmount(
  inputAmount: number,
  exchangeRate: number,
  feePercentage = 0.0025
): number {
  // Implementation
}
```

### README Documentation

1. Keep README files up to date
2. Include setup instructions
3. Document key features
4. Provide examples for common use cases

## Git Workflow

### Commit Messages

Follow conventional commit format:

```
type(scope): description

body (optional)

footer (optional)
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Maintenance tasks

Examples:

```
feat(wallet): add support for MiniPay auto-connection

fix(swap): resolve issue with exchange rate calculation

docs: update deployment documentation

refactor(components): consolidate chart components
```

### Branch Naming

Use descriptive branch names:

```
feature/user-authentication
fix/wallet-connection-issue
docs/api-integration-guide
refactor/consolidate-wallet-hooks
```

## Performance Standards

### Optimization Techniques

1. Implement lazy loading for components
2. Use memoization for expensive calculations
3. Optimize bundle size by code splitting
4. Implement proper caching strategies

```typescript
// Good performance optimization
import { memo, useMemo } from "react";

interface TokenListProps {
  tokens: Token[];
  searchTerm: string;
}

// Memoize component to prevent unnecessary re-renders
export const TokenList = memo(({ tokens, searchTerm }: TokenListProps) => {
  // Memoize expensive filtering operation
  const filteredTokens = useMemo(() => {
    return tokens.filter(
      (token) =>
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tokens, searchTerm]);

  return (
    <div>
      {filteredTokens.map((token) => (
        <TokenItem key={token.id} token={token} />
      ))}
    </div>
  );
});
```

### Bundle Optimization

1. Analyze bundle size regularly
2. Remove unused dependencies
3. Use dynamic imports for code splitting
4. Implement tree shaking

## Security Standards

### Input Validation

1. Validate all user inputs
2. Sanitize data before processing
3. Use parameterized queries for database operations
4. Implement proper error handling

```typescript
// Good input validation
function validateSwapRequest(request: SwapRequest): ValidationResult {
  if (!request.fromToken) {
    return { isValid: false, error: "From token is required" };
  }

  if (!request.toToken) {
    return { isValid: false, error: "To token is required" };
  }

  const amount = parseFloat(request.amount);
  if (isNaN(amount) || amount <= 0) {
    return { isValid: false, error: "Invalid amount" };
  }

  return { isValid: true };
}
```

### Authentication

1. Use secure session management
2. Implement proper password hashing
3. Use HTTPS for all communications
4. Validate JWT tokens properly

## Accessibility Standards

### WCAG Compliance

1. Use semantic HTML elements
2. Provide proper alt text for images
3. Ensure sufficient color contrast
4. Implement keyboard navigation

```typescript
// Good accessibility practices
export function SwapButton({ onClick, disabled }: SwapButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label="Swap tokens"
      className="swap-button"
    >
      <SwapIcon aria-hidden="true" />
      <span>Swap</span>
    </button>
  );
}
```

## Error Handling

### Error Boundaries

1. Implement error boundaries for React components
2. Provide user-friendly error messages
3. Log errors for debugging
4. Implement retry mechanisms where appropriate

```typescript
// Good error handling
interface AsyncComponentProps {
  fetchData: () => Promise<Data>;
}

export function AsyncComponent({ fetchData }: AsyncComponentProps) {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchData();
        setData(result);
        setError(null);
      } catch (err) {
        setError("Failed to load data. Please try again.");
        console.error("Data loading error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [fetchData]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={loadData} />;
  if (!data) return <NoDataMessage />;

  return <DataView data={data} />;
}
```

By following these standards, we ensure a consistent, maintainable, and high-quality codebase that is easy to understand and extend.
