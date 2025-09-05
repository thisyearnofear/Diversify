# Technical Documentation

## Architecture Overview

Stable Station follows a monorepo architecture with a clear separation of concerns between the main chat-based learning platform and the DiversiFi MiniPay application.

### Monorepo Structure

```
/
├── apps/
│   ├── web/               # Main Stable Station web app
│   └── diversifi/         # MiniPay DiversiFi app
├── packages/
│   ├── shared/            # Shared utilities, components, hooks
│   ├── mento/             # Mento-specific utilities
│   └── contracts/         # Smart contracts
└── ...
```

### Shared Package Structure

The `packages/shared` directory contains the core functionality used across both applications:

```
packages/shared/
├── src/
│   ├── constants/         # Shared constants (regions, tokens, chains)
│   ├── hooks/             # Shared React hooks
│   ├── components/        # Shared UI components
│   ├── utils/             # Utility functions
│   └── types/             # TypeScript type definitions
└── ...
```

## Implementation Details

### Wallet Integration

The platform uses a unified wallet system that works across both applications:

1. **Main App**: Uses ConnectKit for comprehensive wallet management
2. **DiversiFi**: Uses viem/wagmi optimized for MiniPay environment
3. **Shared Logic**: Common wallet connection and authentication flows

### Multi-Chain Support

Stable Station supports multiple blockchain networks:

- **Base**: For USDbC swaps and other Base network tokens
- **Celo**: For cUSD, cEUR, cREAL, cKES, and other Celo stablecoins
- **Ethereum**: For general Ethereum interactions
- **Polygon**: For DAI swaps using Brian API
- **Optimism**: For EURA swaps

### Action-Based Learning System

The core of Stable Station is its action-based learning system:

1. Actions are stored in a database with specific requirements
2. Users complete actions to unlock new features
3. Progress is tracked and rewarded
4. AI guides users through the action completion process

### Smart Contracts

Custom smart contracts have been deployed for token swaps:

1. **BaseAerodromeSwap**: Facilitates ETH to USDbC swaps on Base
2. **OptimismVelodromeSwap**: Facilitates ETH to EURA swaps on Optimism
3. **SimpleCeloSwap**: Facilitates CELO to cUSD swaps on Celo

### Mento Protocol Integration

For the DiversiFi app and Celo stablecoins in the main app:

1. Direct integration with Mento Protocol for stablecoin swaps
2. Support for multiple regional stablecoins (cUSD, cEUR, cREAL, cKES, etc.)
3. Real-time exchange rate calculations
4. Slippage protection and transaction optimization

## Performance Optimizations

### Code Consolidation

We've implemented aggressive code consolidation to eliminate duplication:

1. **Shared Constants**: Single source of truth for regions, tokens, and chains
2. **Unified Components**: Common UI components shared between apps
3. **Consolidated Hooks**: Reusable logic for wallet, swaps, and region management
4. **Environment-Aware Architecture**: Components adapt to their runtime environment

### Dependency Management

1. **Viem Standardization**: Using a single version of viem across the codebase
2. **Unused Package Removal**: Eliminated packages like ethers, datamaps, and moralis
3. **Environment-Specific Dependencies**: Moving environment-specific deps to respective apps

### Bundle Optimization

1. **Environment-Aware Component Loading**: Lazy loading for environment-specific components
2. **Bundle Splitting**: Optimized code splitting for better load times
3. **Tree Shaking**: Proper configuration to eliminate unused code

## Security Considerations

### Wallet Authentication

The platform uses Sign-In With Ethereum (SIWE) for secure authentication:

1. Seamless integration of wallet connection and authentication
2. Secure session management with encrypted cookies
3. Domain validation to prevent phishing attacks
4. Clear error messages for security-related issues

### Smart Contract Security

Deployed contracts include:

1. Reentrancy protection
2. Ownership controls
3. Transaction fee mechanisms
4. Gas optimization for cost efficiency

## Data Management

### Database Schema

The platform uses Drizzle ORM for database management with a schema designed for:

1. Action tracking and completion
2. User progress and rewards
3. Multi-chain wallet integration
4. Regional token categorization

### State Management

1. **Shared Context Providers**: Cross-app state synchronization
2. **State Persistence**: Especially important for MiniPay environment
3. **Optimized Re-rendering**: Efficient state update patterns

## API Integration

### External Services

1. **OpenAI**: Powers the AI chatbot functionality
2. **CoinGecko**: Provides real-time token pricing
3. **Brian API**: Enables Polygon DAI swaps
4. **World Bank/Alpha Vantage**: Powers DiversiFi inflation data
5. **Mento Protocol**: Enables stablecoin swaps on Celo

### Internal APIs

1. **Action APIs**: Manage action creation, completion, and tracking
2. **Wallet APIs**: Handle wallet-related operations
3. **Reward APIs**: Manage user rewards and points