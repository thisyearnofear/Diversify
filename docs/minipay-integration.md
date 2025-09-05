# MiniPay Integration

This document details the specific requirements and implementation details for MiniPay integration in the DiversiFi application.

## Overview

MiniPay is a mobile wallet application that provides a simplified Web3 experience for users. The DiversiFi app is specifically optimized for the MiniPay environment to provide an inflation protection solution through stablecoin diversification.

## Technical Requirements

### Headers Configuration

MiniPay requires specific headers to be set for proper embedding:

```http
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: frame-ancestors 'self' *.minipay.app *.celo.org *.opera.com;
```

### Meta Tags

Include these meta tags for optimal mobile experience:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

### Wallet Connection

MiniPay uses a simplified wallet connection approach:

```javascript
// Auto-detect MiniPay environment
const isMiniPay = window.ethereum && window.ethereum.isMiniPay === true;

// Connect to wallet
const connectWallet = async () => {
  try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    return accounts[0];
  } catch (error) {
    console.error("Failed to connect wallet:", error);
  }
};
```

### Chain Configuration

MiniPay only supports specific Celo networks:

- **Mainnet**: Chain ID 42220
- **Alfajores Testnet**: Chain ID 44787

### Transaction Requirements

MiniPay uses Custom Fee Abstraction based transactions:

1. Support the `feeCurrency` property when sending transactions
2. Only accept legacy transactions (not EIP-1559)

## Implementation Details

### Environment Detection

The DiversiFi app automatically detects when it's running in MiniPay:

```javascript
const detectMiniPayEnvironment = () => {
  const isMiniPay = window.ethereum && window.ethereum.isMiniPay === true;
  const isInIframe = window !== window.parent;
  const userAgent = navigator.userAgent;
  const referrer = document.referrer || "None";
  
  return {
    isMiniPay,
    isInIframe,
    userAgent,
    referrer
  };
};
```

### UI/UX Considerations

1. **Mobile-First Design**: All components are designed for mobile screens
2. **Touch-Friendly Interactions**: Buttons and interactive elements are appropriately sized
3. **Simple Navigation**: Use tabs for navigation on small screens
4. **Performance Optimization**: Minimize heavy animations or complex interactions

### Auto-Connection

When MiniPay is detected, the app automatically connects to the wallet:

```javascript
useEffect(() => {
  const connectIfNeeded = async () => {
    const { isMiniPay } = detectMiniPayEnvironment();
    if (isMiniPay) {
      // Add small delay to ensure everything is loaded
      setTimeout(() => {
        connectWallet();
      }, 500);
    }
  };
  
  connectIfNeeded();
}, []);
```

## Testing with MiniPay

### Development Setup

1. Start your development server:
   ```bash
   pnpm dev:diversifi
   ```

2. Use ngrok to expose your local server:
   ```bash
   ngrok http 3001  # Use the same port as your dev server
   ```

3. Open the MiniPay app on your Android device:
   - Go to Settings
   - Tap the version number repeatedly to enable developer mode
   - Go back to Settings and select "Developer Settings"
   - Enable "Developer Mode" and toggle "Use Testnet" if you want to use the Alfajores testnet
   - Tap "Load Test Page"
   - Enter your ngrok URL
   - Click "Go" to launch your app in MiniPay

### Debugging

Use console logging to debug MiniPay integration:

```javascript
const debugMiniPay = () => {
  const detection = detectMiniPayEnvironment();
  console.log('MiniPay detection:', detection);
  
  // Log connection results
  connectWallet().then(address => {
    console.log('Connected to wallet:', { address, chainId });
  });
};
```

## Supported Features

### Wallet Operations

1. **Connection**: Automatic connection in MiniPay environment
2. **Account Management**: Access to connected account address
3. **Network Switching**: Support for Celo mainnet and Alfajores testnet
4. **Transaction Sending**: Custom fee abstraction transactions

### Token Operations

1. **Balance Reading**: Fetch balances for supported stablecoins
2. **Token Swapping**: Direct integration with Mento protocol
3. **Token Approval**: ERC-20 token approval when required

### Limitations

1. **Network Support**: Only Celo networks are supported
2. **Transaction Types**: Only legacy transactions are accepted
3. **Fee Handling**: Custom fee abstraction is required

## Best Practices

### Performance

1. **Lazy Loading**: Load MiniPay-specific components only when needed
2. **Caching**: Cache token balances and exchange rates to reduce API calls
3. **Optimized Rendering**: Minimize re-renders in wallet-related components

### User Experience

1. **Clear Feedback**: Provide clear status updates during wallet operations
2. **Error Handling**: Display user-friendly error messages
3. **Progressive Enhancement**: Gracefully degrade when MiniPay features aren't available

### Security

1. **Input Validation**: Validate all user inputs, especially transaction parameters
2. **Session Management**: Properly manage wallet connection state
3. **Secure Communication**: Use HTTPS for all API communications

## Troubleshooting

### Common Issues

#### Wallet Not Connecting

1. Verify MiniPay is properly detected
2. Check that the user has granted wallet permissions
3. Ensure the app is loaded in the correct context

#### Transaction Failures

1. Verify fee currency is properly set
2. Check that the transaction is formatted as legacy (not EIP-1559)
3. Ensure sufficient balance for transaction + fees

#### Network Issues

1. Verify the correct chain ID is being used
2. Check that the RPC endpoint is accessible
3. Ensure the user is on the correct network

### Debugging Tools

1. **Console Logging**: Extensive logging of environment detection and wallet operations
2. **Visual Indicators**: Display MiniPay detection status in the UI
3. **Debug Page**: Dedicated page with detailed environment information