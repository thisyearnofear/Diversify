# Stable Station Documentation

Welcome to Stable Station, a chat-based Web3 onboarding experience that helps users learn about blockchain technology through hands-on action-based learning.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

Stable Station is an innovative platform that combines AI-powered chat interactions with real Web3 actions, allowing users to learn blockchain concepts by actually doing them. Users can:

- Complete specific blockchain actions to unlock new features
- Track progress across different learning categories
- Learn through hands-on experience with AI assistance
- Manage multi-chain wallets and perform token swaps
- Access educational content about stablecoins and DeFi

## Key Features

### Main Application ("ai-chatbot" / Stable Station)

1. **AI-Powered Learning**: Sophisticated AI chatbot with OpenAI + Agentkit integration
2. **Multi-Chain Support**: Works with Base, Celo, Ethereum, Polygon, and Optimism
3. **Action-Based System**: Users complete specific actions to unlock features
4. **Rich Ecosystem**: Full wallet management, token swaps, rewards, and starter kits
5. **Enterprise Features**: Admin panels, user management, and analytics
6. **Comprehensive Stack**: Full-featured with database, authentication, and file uploads

### DiversiFi Application

1. **MiniPay Optimization**: Specifically built for mobile/MiniPay environment
2. **Inflation Protection**: Focused use case around protecting savings from inflation
3. **Educational Visualizations**: Excellent visualizations and real-world scenarios
4. **Regional Personalization**: Tailored recommendations based on user's region
5. **Lightweight Performance**: Optimized for mobile experience
6. **Mento Integration**: Deep integration with Mento protocol for stablecoin swaps

## Architecture

Stable Station follows a monorepo structure with two main applications and shared packages:

```
/
├── apps/
│   ├── web/               # Main Stable Station web app
│   └── diversifi/         # MiniPay DiversiFi app
├── packages/
│   ├── shared/            # Shared utilities, components, hooks
│   ├── mento/             # Mento-specific utilities
│   └── contracts/         # Smart contracts
├── docs/                  # Documentation
└── ...
```

Both applications share core infrastructure while maintaining distinct purposes:
- The main app provides a comprehensive Web3 learning platform
- DiversiFi offers a focused MiniPay inflation protection tool

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm
- PostgreSQL database
- WalletConnect project ID
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd stable-station

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit the .env file with your own values

# Set up the database
pnpm drizzle-kit push

# Seed the database with actions
pnpm db:seed
```

### Running the Applications

```bash
# Run development server for the main app
pnpm dev

# Run development server for the DiversiFi app
pnpm dev:diversifi

# Build all workspaces
pnpm build:all
```

## Development

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
```

### Code Structure

The codebase follows these principles:

1. **Enhancement First**: Consolidating existing components rather than creating new ones
2. **Aggressive Consolidation**: Deleting unnecessary duplicate code
3. **Prevent Bloat**: Systematic audit before adding new features
4. **DRY**: Single source of truth for all shared logic
5. **Clean**: Clear separation of concerns with explicit dependencies
6. **Modular**: Composable, testable, independent modules
7. **Performant**: Optimized loading, caching, and resource management
8. **Organized**: Predictable structure with domain-driven design

### Styling

The project uses Tailwind CSS with a centralized styling approach:

1. **Consistency**: Use the centralized theme and style utilities for consistent styling across components
2. **Maintainability**: Keep styling logic separate from component logic where possible
3. **Responsiveness**: Use Tailwind's responsive prefixes and the useIsMobile hook for responsive design

## Deployment

### Netlify Deployment

To deploy this project on Netlify:

1. Connect your GitHub repository to Netlify
2. Set the build command to `pnpm install --no-frozen-lockfile && pnpm build`
3. Set the publish directory to `.next`
4. Add the required environment variables

### Environment Variables

Required environment variables include:

- `OPENAI_API_KEY`: Your OpenAI API key
- `POSTGRES_URL`: Your PostgreSQL connection string
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: Your WalletConnect project ID
- `BRIAN_API_KEY`: Your Brian API key for Polygon DAI swaps

## Contributing

We welcome contributions to Stable Station! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests if applicable
5. Update documentation as needed
6. Submit a pull request

## License

[License information to be added]