# API and Integration Documentation

This document covers the APIs and external integrations used in diversifi.

## Internal APIs

### Action API

The action API manages user actions and progress tracking.

#### Endpoints

- `GET /api/actions` - Get all available actions
- `POST /api/actions/:id/complete` - Mark an action as completed
- `GET /api/actions/:id/status` - Get status of a specific action

#### Data Structure

```typescript
interface Action {
  id: string;
  title: string;
  description: string;
  chain: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  reward: {
    type: "points" | "tokens";
    amount: number;
  };
  requirements: string[];
  steps: ActionStep[];
}

interface ActionStep {
  id: string;
  title: string;
  description: string;
  component: string;
  parameters: Record<string, any>;
}
```

### Wallet API

The wallet API handles wallet-related operations.

#### Endpoints

- `GET /api/wallet/balances` - Get token balances
- `POST /api/wallet/swap` - Initiate a token swap
- `GET /api/wallet/transactions` - Get transaction history

### User API

The user API manages user profiles and progress.

#### Endpoints

- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/progress` - Get user progress
- `GET /api/user/rewards` - Get user rewards

## External Integrations

### OpenAI Integration

diversifi uses OpenAI's GPT models for the AI chatbot functionality.

#### Configuration

- Model: `gpt-4-turbo` (or latest available)
- Temperature: 0.7 for balanced responses
- Max tokens: 1000 for detailed responses

#### Prompts

The system uses carefully crafted prompts to guide the AI:

1. **System Prompt**: Defines the AI's role and behavior
2. **User Action Prompt**: Provides context about available user actions
3. **Context Prompt**: Supplies conversation history and user state

### WalletConnect Integration

WalletConnect is used for wallet connection and session management.

#### Setup

1. Create a project at https://walletconnect.com
2. Obtain a Project ID
3. Configure the required chains and methods

#### Supported Chains

- Ethereum Mainnet (1)
- Celo Mainnet (42220)
- Base Mainnet (8453)
- Polygon Mainnet (137)
- Optimism Mainnet (10)

### CoinGecko API

CoinGecko provides real-time token pricing information.

#### Usage

- Endpoint: `https://api.coingecko.com/api/v3/simple/price`
- Parameters: `ids` (token IDs), `vs_currencies` (fiat currencies)
- Rate limiting: 10-30 calls/minute depending on plan

#### Supported Tokens

- ETH, USDC, USDT, DAI, cUSD, cEUR, cREAL, cKES, and others

### Brian API

Brian API enables Polygon DAI swaps through natural language processing.

#### Features

- Natural language transaction preparation
- Multi-chain support
- Gas optimization
- Transaction simulation

#### Integration Flow

1. User requests a swap through natural language
2. Brian API processes the request and prepares transaction data
3. User confirms the transaction details
4. Transaction is executed through the user's wallet

### Mento Protocol

Mento Protocol provides the infrastructure for Celo stablecoin swaps.

#### Integration Details

- Direct integration with Mento broker contracts
- Real-time exchange rate calculations
- Support for multiple regional stablecoins
- Slippage protection

#### Supported Stablecoins

- cUSD (Celo Dollar)
- cEUR (Celo Euro)
- cREAL (Celo Brazilian Real)
- cKES (Celo Kenyan Shilling)
- cCOP (Celo Colombian Peso)
- PUSO (Philippine Peso)
- cGHS (Celo Ghana Cedi)
- eXOF (CFA Franc)

### World Bank API

The World Bank API provides inflation data for the DiversiFi application.

#### Usage

- Endpoint: `https://api.worldbank.org/v2/country/{country}/indicator/FP.CPI.TOTL.ZG`
- Parameters: Country codes, date ranges
- Response format: JSON with inflation rates

### Alpha Vantage API

Alpha Vantage provides currency exchange rate data for the DiversiFi application.

#### Usage

- Endpoint: `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE`
- Parameters: From currency, to currency
- Response format: JSON with exchange rates

## Smart Contract Integrations

### BaseAerodromeSwap Contract

Facilitates ETH to USDbC swaps on Base network.

#### Key Functions

- `swapETHForUSDbC`: Swaps ETH for USDbC
- `swapERC20ForUSDbC`: Swaps ERC20 tokens for USDbC
- `getAmountOut`: Calculates output amount for a given input

#### Security Features

- Reentrancy protection
- Ownership controls
- Transaction fee mechanism (0.25% default)

### OptimismVelodromeSwap Contract

Facilitates ETH to EURA swaps on Optimism network.

#### Key Functions

- `swapETHForEURA`: Swaps ETH for EURA
- `swapERC20ForEURA`: Swaps ERC20 tokens for EURA
- `getAmountOut`: Calculates output amount for a given input

#### Security Features

- Reentrancy protection
- Ownership controls
- Support for both Velodrome V1 and V2 factories
- Transaction fee mechanism (0.25% default)

### SimpleCeloSwap Contract

Facilitates CELO to cUSD swaps on Celo network.

#### Key Functions

- `swapCeloForCUSD`: Swaps CELO for cUSD
- `getAmountOut`: Calculates output amount for a given input

#### Security Features

- Reentrancy protection
- Ownership controls
- Transaction fee mechanism (0.25% default)

## Database Integration

### Drizzle ORM

diversifi uses Drizzle ORM for database management.

#### Schema

The database schema includes tables for:

1. **Users**: User profiles and authentication
2. **Actions**: Available actions and their properties
3. **UserActions**: User progress on actions
4. **Rewards**: User rewards and points
5. **Tokens**: Token information and metadata
6. **Chains**: Blockchain network information

#### Migrations

Database migrations are managed through Drizzle Kit:

```bash
# Generate migration
pnpm drizzle-kit generate

# Apply migration
pnpm drizzle-kit push

# Run migrations manually
pnpm db:migrate
```

## Authentication Integration

### SIWE (Sign-In With Ethereum)

SIWE provides secure authentication using Ethereum wallets.

#### Flow

1. User connects wallet
2. Application generates SIWE message
3. User signs the message
4. Application verifies the signature
5. Session is established

#### Security Features

- Domain validation to prevent phishing
- Expiration timestamps
- Nonce generation for replay protection
- Encrypted session cookies

## API Security

### Rate Limiting

All APIs implement rate limiting to prevent abuse:

- 100 requests per hour per IP for general APIs
- 10 requests per hour per IP for sensitive APIs

### Authentication

APIs that require authentication use JWT tokens:

1. User authenticates through SIWE
2. Server generates JWT token
3. Client includes token in Authorization header
4. Server validates token before processing request

### Input Validation

All API inputs are validated:

1. Type checking
2. Length restrictions
3. Format validation
4. Sanitization to prevent injection attacks

## Monitoring and Analytics

### Error Tracking

Errors are tracked using Sentry:

- Automatic error capture
- Performance monitoring
- Release tracking

### Usage Analytics

Usage is tracked using PostHog:

- Event tracking
- User behavior analysis
- Feature usage metrics

### Performance Monitoring

Performance is monitored using:

- Server response times
- Database query performance
- Frontend load times
