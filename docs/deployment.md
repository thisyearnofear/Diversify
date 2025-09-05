# Deployment and Environment Configuration

This document covers deployment strategies and environment configuration for diversifi.

## Deployment Options

### Netlify Deployment (Recommended)

diversifi is optimized for deployment on Netlify.

#### Setup Process

1. Connect your GitHub repository to Netlify
2. Set the build command to:
   ```
   pnpm install --no-frozen-lockfile && pnpm build
   ```
3. Set the publish directory to:
   ```
   .next
   ```

#### Environment Variables

Configure these environment variables in the Netlify dashboard:

| Variable                               | Description                         | Required                    |
| -------------------------------------- | ----------------------------------- | --------------------------- |
| `OPENAI_API_KEY`                       | OpenAI API key for AI functionality | Yes                         |
| `POSTGRES_URL`                         | PostgreSQL connection string        | Yes                         |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | WalletConnect project ID            | Yes                         |
| `BRIAN_API_KEY`                        | Brian API key for Polygon DAI swaps | Yes                         |
| `NEXT_PUBLIC_CELO_RPC`                 | Celo RPC URL                        | No (defaults to public RPC) |
| `NEXT_PUBLIC_COINGECKO_API_KEY`        | CoinGecko API key                   | No (limited without)        |

#### Deployment Hooks

Netlify automatically builds and deploys on pushes to the main branch.

### Manual Deployment

For manual deployment to any Node.js hosting provider:

1. Build the application:

   ```bash
   pnpm build
   ```

2. Start the server:

   ```bash
   pnpm start
   ```

3. Ensure environment variables are set in the deployment environment.

### Docker Deployment

A Dockerfile is available for containerized deployment:

```bash
# Build the image
docker build -t diversifi .

# Run the container
docker run -p 3000:3000 diversifi
```

## Environment Configuration

### Environment Files

The application uses environment files for configuration:

- `.env.example` - Template for environment variables
- `.env.local` - Local development environment
- `.env.production` - Production environment
- `.env.development` - Development environment

### Environment Variables

#### Required Variables

```bash
# OpenAI API key for AI functionality
OPENAI_API_KEY=sk-...

# PostgreSQL database connection string
POSTGRES_URL=postgres://user:password@host:port/database

# WalletConnect project ID
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=...

# Brian API key for Polygon DAI swaps
BRIAN_API_KEY=...
```

#### Optional Variables

```bash
# Celo RPC URL (defaults to public RPC if not set)
NEXT_PUBLIC_CELO_RPC=https://forno.celo.org

# CoinGecko API key (for higher rate limits)
NEXT_PUBLIC_COINGECKO_API_KEY=...

# Application URL
NEXT_PUBLIC_APP_URL=https://your-app-url.com

# Alpha Vantage API Key (for currency data in DiversiFi)
NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=...
```

### Environment Detection

The application automatically detects its environment:

```typescript
const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";
const isTest = process.env.NODE_ENV === "test";
```

### Feature Flags

Environment variables can be used as feature flags:

```typescript
const enableDiversiFi = process.env.NEXT_PUBLIC_ENABLE_DIVERSIFI === "true";
const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
```

## Multi-Environment Setup

### Development Environment

For local development:

1. Copy `.env.example` to `.env.local`
2. Fill in the required values
3. Run the development server:
   ```bash
   pnpm dev
   ```

### Staging Environment

For staging deployments:

1. Set environment variables in your staging platform
2. Use a separate database from production
3. Enable debugging features if needed

### Production Environment

For production deployments:

1. Set all required environment variables
2. Use production database
3. Disable development features
4. Enable performance optimizations

## Database Configuration

### PostgreSQL Setup

The application requires a PostgreSQL database:

1. Create a new PostgreSQL database
2. Set the `POSTGRES_URL` environment variable
3. Run initial migrations:
   ```bash
   pnpm db:migrate
   ```

### Migration Process

Database migrations should be run after deployment:

```bash
# Run migrations against production database
POSTGRES_URL=your_production_db_url pnpm db:migrate
```

The build process is configured to skip database migrations during the Netlify build process to avoid connection issues.

## CI/CD Configuration

### GitHub Actions

Example workflow for automated testing and deployment:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "22"
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - run: pnpm install
      - run: pnpm test:all
      - run: pnpm build:all

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod
```

### Testing in CI

Ensure all tests pass in CI environment:

```bash
# Run all tests
pnpm test:all

# Run type checking
pnpm type-check

# Run linting
pnpm lint:all
```

## Monitoring and Logging

### Error Tracking

Configure error tracking with Sentry:

```bash
NEXT_PUBLIC_SENTRY_DSN=https://...
```

### Analytics

Configure analytics with PostHog:

```bash
NEXT_PUBLIC_POSTHOG_KEY=...
NEXT_PUBLIC_POSTHOG_HOST=...
```

### Logging

The application uses structured logging:

```typescript
// Info level logging
logger.info("User completed action", { userId, actionId });

// Error level logging
logger.error("Failed to execute swap", { error, parameters });
```

## Performance Optimization

### Caching

Configure caching strategies:

```bash
# Redis connection for caching (optional)
REDIS_URL=redis://localhost:6379
```

### CDN Configuration

When using a CDN:

1. Set proper cache headers
2. Enable compression
3. Configure edge caching for static assets

### Image Optimization

Next.js automatic image optimization works with most CDNs:

```typescript
// Next.js image component with optimization
<Image src="/path/to/image.jpg" width={800} height={600} alt="Description" />
```

## Security Considerations

### Environment Variable Security

1. Never commit sensitive environment variables to version control
2. Use secret management in your deployment platform
3. Rotate API keys regularly

### HTTPS Configuration

Ensure all deployments use HTTPS:

1. Configure SSL certificates
2. Redirect HTTP to HTTPS
3. Set secure headers

### Content Security Policy

Set appropriate Content Security Policy headers:

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

## Backup and Recovery

### Database Backups

Implement regular database backups:

1. Automated backup schedules
2. Off-site storage of backups
3. Regular restore testing

### Disaster Recovery

Plan for disaster recovery:

1. Document recovery procedures
2. Regular backup testing
3. Secondary deployment environments

## Scaling Considerations

### Horizontal Scaling

For high-traffic deployments:

1. Use load balancers
2. Implement database connection pooling
3. Use caching layers
4. Consider microservice architecture for high-load features

### Vertical Scaling

For increasing capacity of existing deployment:

1. Upgrade server resources
2. Optimize database queries
3. Implement query caching

## Troubleshooting Deployment Issues

### Common Build Issues

1. **Dependency Resolution**: Ensure all dependencies are correctly specified
2. **Environment Variables**: Verify all required variables are set
3. **Node.js Version**: Ensure the correct Node.js version is used

### Runtime Issues

1. **Database Connection**: Verify database credentials and connectivity
2. **API Keys**: Check that all API keys are valid and have proper permissions
3. **CORS Issues**: Ensure proper CORS configuration for API endpoints

### Performance Issues

1. **Slow Database Queries**: Analyze and optimize slow queries
2. **Memory Leaks**: Monitor memory usage and investigate leaks
3. **Network Latency**: Optimize API calls and implement caching
