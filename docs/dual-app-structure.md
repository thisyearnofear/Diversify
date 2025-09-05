# Dual-App Structure

diversifi consists of two distinct but related applications that share a common codebase and infrastructure:

## 1. Main Application ("ai-chatbot" / diversifi)

### Purpose

The main diversifi application is a comprehensive Web3 learning platform that uses chat-based interactions combined with real blockchain actions to educate users about decentralized technologies.

### Key Characteristics

- Full-featured Web3 learning environment
- AI-powered chat interface with OpenAI and Agentkit integration
- Multi-chain support (Base, Celo, Ethereum, Polygon, Optimism)
- Action-based learning system with rewards and progress tracking
- Enterprise features including admin panels and analytics
- Desktop-focused UI with mobile responsiveness

### Technology Stack

- ConnectKit for wallet management
- Full wagmi stack for blockchain interactions
- Drizzle ORM for database management
- SIWE for authentication
- Next.js for the frontend framework

## 2. DiversiFi Application

### Purpose

DiversiFi is a MiniPay-optimized application focused specifically on inflation protection through stablecoin diversification using Mento's regional stablecoins.

### Key Characteristics

- MiniPay-optimized mobile experience
- Focused use case around inflation protection
- Regional token selection and portfolio visualization
- Educational components with real-world scenarios
- Lightweight and performance-optimized
- Direct Mento protocol integration

### Technology Stack

- viem/wagmi optimized for MiniPay
- Mento protocol integration
- Chart.js for data visualization
- World Bank and Alpha Vantage APIs for economic data

## Shared Infrastructure

Both applications share core infrastructure through the `packages/shared` directory:

### Shared Components

- UI components that work across both environments
- Common constants (regions, tokens, chains)
- Utility functions for formatting, environment detection, etc.
- React hooks for common functionality

### Environment-Aware Architecture

The codebase uses environment detection to provide the appropriate experience:

```typescript
// Example of environment-aware component
if (isMiniPayEnvironment()) {
  return <DiversiFiApp />;
}
return <MainApp />;
```

### Benefits of Dual-App Structure

1. **Targeted User Experiences**: Each app can be optimized for its specific use case and audience
2. **Performance**: DiversiFi is lightweight for mobile, while the main app has full features
3. **Maintainability**: Clear separation of concerns between the applications
4. **Scalability**: Each app can evolve independently while sharing common infrastructure
5. **Resource Optimization**: MiniPay app doesn't need to load desktop-focused components

## Deployment Strategy

The applications can be deployed either together or separately:

### Unified Deployment (Recommended)

- Single deployment with path-based routing
- Shared authentication and user data
- Easier maintenance and updates

### Separate Deployments (Current)

- Completely independent deployments
- Optimized for specific environments
- Easier to scale independently

## Development Workflow

When developing for both applications:

1. **Shared Code**: Place in `packages/shared`
2. **App-Specific Code**: Place in respective app directories
3. **Environment Detection**: Use utility functions to detect runtime environment
4. **Testing**: Test changes in both environments when modifying shared code

## Future Considerations

1. **Unified User Experience**: Potential to merge authentication and user data
2. **Cross-App Features**: Opportunities to integrate DiversiFi insights into main app
3. **Shared Analytics**: Unified tracking across both applications
4. **Consistent Design Language**: Maintaining visual consistency while preserving distinct identities
