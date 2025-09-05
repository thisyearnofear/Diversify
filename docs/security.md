# Wallet Authentication and Security

This document covers wallet authentication implementation and security considerations for Stable Station.

## Sign-In With Ethereum (SIWE)

Stable Station uses Sign-In With Ethereum (SIWE) for secure authentication, providing a seamless integration of wallet connection and authentication.

### SIWE Flow

1. User connects wallet through ConnectKit/Wagmi
2. Application generates SIWE message with:
   - Domain verification
   - User's Ethereum address
   - Current timestamp
   - Unique nonce
   - Statement explaining the purpose
3. User signs the message with their wallet
4. Application verifies the signature on the backend
5. Secure session is established with encrypted cookies

### Message Format

The SIWE message follows the EIP-4361 standard:

```
service.org wants you to sign in with your Ethereum account:
0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2

I accept the ServiceOrg Terms of Service: https://service.org/tos

URI: https://service.org/login
Version: 1
Chain ID: 1
Nonce: 32891756
Issued At: 2021-09-30T16:25:24Z
Resources:
- ipfs://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq/
- https://example.com/my-web2-claim.json
```

### Implementation

#### Frontend

```typescript
import { SiweMessage } from 'siwe';

async function signInWithEthereum(address: string, chainId: number) {
  try {
    // Create SIWE message
    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in to Stable Station',
      uri: origin,
      version: '1',
      chainId,
      nonce: await getNonceFromServer(),
    });
    
    const preparedMessage = message.prepareMessage();
    
    // Request signature from user
    const signature = await signMessage(preparedMessage);
    
    // Send to backend for verification
    const response = await verifySignature({
      message: preparedMessage,
      signature,
      address,
    });
    
    if (response.ok) {
      // Authentication successful
      return { success: true };
    } else {
      throw new Error('Signature verification failed');
    }
  } catch (error) {
    console.error('SIWE authentication failed:', error);
    return { success: false, error: error.message };
  }
}
```

#### Backend

```typescript
import { SiweMessage } from 'siwe';

async function verifySiweSignature(message: string, signature: string, address: string) {
  try {
    const siweMessage = new SiweMessage(message);
    const fields = await siweMessage.validate(signature);
    
    // Additional validation
    if (fields.nonce !== getExpectedNonceForAddress(address)) {
      throw new Error('Invalid nonce');
    }
    
    if (fields.domain !== getExpectedDomain()) {
      throw new Error('Invalid domain');
    }
    
    // Create secure session
    const session = await createSecureSession(address);
    
    return {
      success: true,
      session,
    };
  } catch (error) {
    console.error('SIWE verification failed:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}
```

## Session Management

### Secure Cookies

Sessions are managed through secure, encrypted HTTP-only cookies:

```typescript
// Session cookie configuration
const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: '/',
};
```

### Session Security

1. **Encryption**: Session data is encrypted before being stored in cookies
2. **Expiration**: Sessions automatically expire after a period of inactivity
3. **Revocation**: Users can explicitly log out to invalidate sessions
4. **Rotation**: Session identifiers are rotated periodically for long-lived sessions

## Wallet Integration Security

### ConnectKit/Wagmi Security

1. **Provider Validation**: Validate wallet providers before connecting
2. **Network Verification**: Ensure users are on the correct network
3. **Transaction Review**: Require user confirmation for all transactions
4. **Signature Requests**: Limit signature requests to authentication purposes

### Smart Contract Interaction

1. **Input Validation**: Validate all parameters before sending to contracts
2. **Gas Limiting**: Set appropriate gas limits to prevent excessive fees
3. **Revert Handling**: Properly handle transaction reverts
4. **Event Monitoring**: Monitor contract events for confirmation

```typescript
async function executeTokenSwap(params: SwapParameters) {
  try {
    // Validate inputs
    if (!isValidAddress(params.tokenIn) || !isValidAddress(params.tokenOut)) {
      throw new Error('Invalid token addresses');
    }
    
    if (params.amountIn <= 0) {
      throw new Error('Invalid swap amount');
    }
    
    // Estimate gas and set limit
    const gasEstimate = await contract.estimateGas.swap(
      params.amountIn,
      params.amountOutMin,
      params.path,
      params.to,
      params.deadline
    );
    
    const gasLimit = gasEstimate.mul(120).div(100); // Add 20% buffer
    
    // Execute swap
    const transaction = await contract.swap(
      params.amountIn,
      params.amountOutMin,
      params.path,
      params.to,
      params.deadline,
      {
        gasLimit,
      }
    );
    
    // Wait for confirmation
    const receipt = await transaction.wait();
    
    return {
      success: true,
      transactionHash: receipt.transactionHash,
    };
  } catch (error) {
    console.error('Swap execution failed:', error);
    
    // Handle specific error cases
    if (error.code === 'INSUFFICIENT_FUNDS') {
      return { success: false, error: 'Insufficient funds for gas' };
    }
    
    if (error.code === 'UNPREDICTABLE_GAS_LIMIT') {
      return { success: false, error: 'Transaction would fail' };
    }
    
    return { success: false, error: 'Swap execution failed' };
  }
}
```

## Cross-Site Request Forgery (CSRF) Protection

### Token-Based Protection

1. **CSRF Tokens**: Generate unique tokens for each session
2. **Double Submit Cookie**: Verify tokens on state-changing requests
3. **Header Verification**: Check custom headers for AJAX requests

```typescript
// Generate CSRF token
function generateCsrfToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

// Middleware to check CSRF token
function csrfProtection(req, res, next) {
  const tokenFromHeader = req.headers['x-csrf-token'];
  const tokenFromCookie = req.cookies['csrf-token'];
  
  if (!tokenFromHeader || !tokenFromCookie || tokenFromHeader !== tokenFromCookie) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }
  
  next();
}
```

## Content Security Policy (CSP)

### Policy Configuration

Implement strict Content Security Policy:

```http
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://*.walletconnect.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://*.infura.io https://*.alchemy.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
```

## Rate Limiting and Abuse Prevention

### API Rate Limiting

Implement rate limiting to prevent abuse:

```typescript
// Rate limiting configuration
const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
};

// Stricter rate limiting for sensitive endpoints
const strictRateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again later.',
};
```

### Wallet Operation Rate Limiting

Specifically limit wallet operations:

```typescript
// Rate limiting for wallet signatures
const signatureRateLimit = {
  windowMs: 60 * 1000, // 1 minute
  max: 3, // Max 3 signatures per minute
};

// Rate limiting for transactions
const transactionRateLimit = {
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 2, // Max 2 transactions per 5 minutes
};
```

## Data Protection

### Encryption at Rest

1. **Sensitive Data**: Encrypt sensitive user data in the database
2. **Session Data**: Encrypt session information
3. **API Keys**: Store API keys securely with encryption

### Encryption in Transit

1. **HTTPS**: Enforce HTTPS for all communications
2. **HSTS**: Implement HTTP Strict Transport Security
3. **Certificate Pinning**: Consider certificate pinning for critical services

## Error Handling and Logging

### Secure Error Messages

1. **Generic Messages**: Don't expose internal errors to users
2. **Detailed Logging**: Log detailed errors server-side for debugging
3. **PII Protection**: Avoid logging personally identifiable information

```typescript
// Good error handling
try {
  await executeSwap(swapParams);
  res.json({ success: true });
} catch (error) {
  // Log detailed error server-side
  logger.error('Swap execution failed', {
    error: error.message,
    stack: error.stack,
    user: req.user.id,
    params: sanitizeParams(swapParams),
  });
  
  // Return generic error to user
  res.status(500).json({ 
    success: false, 
    error: 'Transaction failed. Please try again.' 
  });
}
```

### Audit Logging

Implement comprehensive audit logging for security-relevant events:

```typescript
// Audit log for authentication events
logger.info('User authenticated', {
  userId: user.id,
  address: user.walletAddress,
  ipAddress: req.ip,
  userAgent: req.get('User-Agent'),
  timestamp: new Date().toISOString(),
});

// Audit log for transactions
logger.info('Token swap executed', {
  userId: user.id,
  fromToken: swapParams.fromToken,
  toToken: swapParams.toToken,
  amount: swapParams.amount,
  transactionHash: receipt.transactionHash,
  gasUsed: receipt.gasUsed.toString(),
  timestamp: new Date().toISOString(),
});
```

## MiniPay Security Considerations

### Secure Headers

Set appropriate headers for MiniPay integration:

```http
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: frame-ancestors 'self' *.minipay.app *.celo.org *.opera.com;
```

### Wallet Connection Security

1. **Environment Detection**: Verify MiniPay environment before auto-connecting
2. **Secure Communication**: Use HTTPS for all MiniPay communications
3. **Transaction Validation**: Validate all transactions before submission

## Vulnerability Management

### Dependency Scanning

Regularly scan dependencies for vulnerabilities:

```bash
# Scan for vulnerabilities
pnpm audit

# Update dependencies to fix vulnerabilities
pnpm update
```

### Security Updates

1. **Regular Updates**: Keep dependencies up to date
2. **Security Patches**: Apply security patches promptly
3. **Monitoring**: Monitor for new vulnerabilities

## Incident Response

### Response Plan

1. **Detection**: Monitor for security incidents
2. **Containment**: Isolate affected systems
3. **Eradication**: Remove malicious components
4. **Recovery**: Restore systems from clean backups
5. **Lessons Learned**: Document and improve processes

### Communication

1. **Internal**: Notify development team immediately
2. **External**: Inform users if their data was compromised
3. **Regulatory**: Report to relevant authorities if required

By following these security practices, Stable Station ensures a secure authentication and wallet integration experience for users while protecting their assets and data.