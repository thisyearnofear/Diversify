# Developer Guide

This guide provides instructions for setting up a development environment and contributing to Stable Station.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 22+
- pnpm
- PostgreSQL database
- Git

## Initial Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd stable-station
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit the `.env` file with your own values for:

- Database connection string
- API keys (OpenAI, WalletConnect, etc.)
- Other service credentials

### 4. Set Up the Database

```bash
pnpm drizzle-kit push
```

### 5. Seed the Database

```bash
pnpm db:seed
```

## Development Workflow

### Running the Applications

#### Main Stable Station App

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

#### DiversiFi App

```bash
# Run development server
pnpm dev:diversifi

# Build for production
pnpm build:diversifi

# Start production server
pnpm start:diversifi
```

### Working with the Monorepo

The project uses pnpm workspaces to manage multiple packages and applications:

```bash
# Install dependencies for all workspaces
pnpm install

# Run development server for all packages
pnpm dev:packages

# Build only packages
pnpm build:packages

# Build only apps
pnpm build:apps

# Lint all workspaces
pnpm lint:all

# Run tests for all workspaces
pnpm test:all
```

## Project Structure

```
/
├── apps/
│   ├── web/               # Main Stable Station web app
│   │   ├── app/           # Next.js app directory
│   │   ├── components/    # App-specific components
│   │   ├── hooks/         # App-specific hooks
│   │   └── ...
│   └── diversifi/         # MiniPay DiversiFi app
├── packages/
│   ├── shared/            # Shared utilities, components, hooks
│   ├── mento/             # Mento-specific utilities
│   └── contracts/         # Smart contracts
├── docs/                  # Documentation
└── ...
```

## Code Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict type checking
- Provide clear type definitions for complex objects
- Use interfaces over types when possible

### Styling

- Use Tailwind CSS for styling
- Follow the centralized styling approach with style utilities
- Maintain consistency with existing components
- Use responsive design principles

### Component Structure

- Create small, focused components
- Use hooks to separate logic from UI
- Implement proper error handling
- Write clear prop interfaces

### Testing

- Write unit tests for utility functions
- Create integration tests for complex components
- Use mock data for API testing
- Test both success and error cases

## Making Changes

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Follow the established code patterns
- Update documentation if needed
- Add tests for new functionality

### 3. Run Linting and Tests

```bash
pnpm lint:all
pnpm test:all
```

### 4. Build the Project

```bash
pnpm build:all
```

### 5. Commit Your Changes

Follow conventional commit messages:

```
feat: add new feature
fix: resolve issue with component
docs: update documentation
refactor: restructure code without changing behavior
```

### 6. Push and Create a Pull Request

```bash
git push origin feature/your-feature-name
```

## Contribution Guidelines

### Code Reviews

All changes must be reviewed before merging:

1. Request review from team members
2. Address all feedback
3. Ensure all tests pass
4. Verify build succeeds

### Documentation

When adding new features:

1. Update relevant documentation files
2. Add code comments for complex logic
3. Include examples for new APIs
4. Update README if needed

### Testing

For new features:

1. Write unit tests for utility functions
2. Add integration tests for components
3. Test edge cases and error conditions
4. Verify cross-browser compatibility

## Debugging

### Common Issues

#### Database Connection Errors

1. Verify PostgreSQL is running
2. Check database credentials in `.env`
3. Ensure the database exists

#### Wallet Connection Issues

1. Verify WalletConnect project ID
2. Check network configuration
3. Test with different wallets

#### Build Failures

1. Check for TypeScript errors
2. Verify all dependencies are installed
3. Ensure environment variables are set

### Logging

Use console logging judiciously:

```typescript
// Good - descriptive messages
console.log('User connected wallet:', { address, chainId });

// Bad - unclear messages
console.log('Error happened');
```

## MiniPay Development

For DiversiFi development with MiniPay:

### Testing with MiniPay

1. Start development server:
   ```bash
   pnpm dev:diversifi
   ```

2. Use ngrok to expose local server:
   ```bash
   ngrok http 3001  # Use the same port as your dev server
   ```

3. Open MiniPay and load your ngrok URL

### MiniPay Requirements

1. Set proper headers:
   - `X-Frame-Options: SAMEORIGIN`
   - `Content-Security-Policy: frame-ancestors 'self' *.minipay.app *.celo.org *.opera.com;`

2. Use appropriate meta tags for mobile:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
   ```

3. Implement wallet connection for MiniPay:
   ```javascript
   const isMiniPay = window.ethereum && window.ethereum.isMiniPay === true;
   ```

## Deployment

### Environment Variables

Ensure all required environment variables are set in your deployment environment:

- `OPENAI_API_KEY`
- `POSTGRES_URL`
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
- `BRIAN_API_KEY`

### Build Process

The build process is configured to skip database migrations during deployment to avoid connection issues. Run migrations manually after deployment:

```bash
POSTGRES_URL=your_production_db_url pnpm db:migrate
```

## Getting Help

If you encounter issues:

1. Check existing documentation
2. Review recent commits for related changes
3. Ask team members for assistance
4. Create an issue if it's a bug