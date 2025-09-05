#!/bin/bash

# Database setup script for diversifi project

set -e  # Exit on any error

echo "🔍 Checking for PostgreSQL installation..."
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install it first:"
    echo "   macOS: brew install postgresql"
    echo "   Ubuntu: sudo apt install postgresql"
    echo "   Windows: Download from https://www.postgresql.org/download/"
    exit 1
fi

echo "✅ PostgreSQL is installed"

echo "🔍 Checking if PostgreSQL service is running..."
if ! pg_isready &> /dev/null; then
    echo "⚠️  PostgreSQL service is not running. Starting it..."
    if command -v brew &> /dev/null; then
        brew services start postgresql
    else
        echo "❌ Could not start PostgreSQL automatically. Please start it manually."
        exit 1
    fi
fi

echo "✅ PostgreSQL service is running"

# Get the current username
USERNAME=$(whoami)
echo "👤 Current username: $USERNAME"

# Create database
echo "🔄 Creating database 'diversifi_dev'..."
createdb diversifi_dev 2>/dev/null || echo "⚠️  Database 'diversifi_dev' already exists or creation failed"

# Update .env file
echo "🔄 Updating .env file with database connection string..."

# Check if .env file exists, if not copy from .env.example
if [ ! -f ".env" ]; then
    echo "📄 Creating .env file from .env.example..."
    cp .env.example .env
fi

# Update the POSTGRES_URL in .env file
sed -i.bak "s|POSTGRES_URL=postgres://user:pass@host:5432/dbname|POSTGRES_URL=postgres://$USERNAME@localhost:5432/diversifi_dev|g" .env
sed -i.bak "s|POSTGRES_URL_NON_POOLING=${POSTGRES_URL}?sslmode=require|POSTGRES_URL_NON_POOLING=${POSTGRES_URL}|g" .env

# Remove backup file
rm -f .env.bak

echo "✅ .env file updated"

# Run database migrations
echo "🔄 Running database migrations..."
if POSTGRES_URL="postgres://$USERNAME@localhost:5432/diversifi_dev" npx drizzle-kit push --config=drizzle.config.ts; then
    echo "✅ Database migrations completed successfully"
else
    echo "❌ Database migrations failed"
    exit 1
fi

echo "🎉 Database setup completed successfully!"
echo ""
echo "To verify the setup, you can run:"
echo "   psql -d diversifi_dev -c \"\\dt\""
echo ""
echo "To run the development server:"
echo "   pnpm dev"