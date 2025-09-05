# Database Troubleshooting Guide

This guide helps resolve common database connection issues encountered when setting up the Diversify project.

## Common Issues and Solutions

### 1. "getaddrinfo ENOTFOUND host" Error

**Problem**: The application is trying to connect to a database at "host" instead of localhost.

**Solution**: 
- Check your `.env` file and ensure `POSTGRES_URL` is correctly set
- Make sure you've replaced the placeholder values with actual values:
  ```
  POSTGRES_URL=postgres://your_username@localhost:5432/diversify_dev
  ```

### 2. "Can't find meta/_journal.json file" Error

**Problem**: The migration script can't find the migration files.

**Solution**:
- Ensure you're running the migration command from the correct directory (project root)
- Check that the `lib/db/migrations` directory exists and contains migration files
- Try running with an explicit path: `POSTGRES_URL=your_connection_string npx drizzle-kit push --config=drizzle.config.ts`

### 3. "Connection refused" or "Connection timeout" Errors

**Problem**: The application cannot connect to the PostgreSQL server.

**Solution**:
1. Check if PostgreSQL is running:
   ```bash
   pg_isready
   # or on macOS with Homebrew:
   brew services list | grep postgresql
   ```

2. If not running, start PostgreSQL:
   ```bash
   # macOS with Homebrew:
   brew services start postgresql
   
   # Ubuntu/Debian:
   sudo systemctl start postgresql
   
   # Generic:
   pg_ctl -D /usr/local/var/postgres start
   ```

3. Verify PostgreSQL is listening on the correct port:
   ```bash
   psql -U postgres -c "SHOW port;"
   ```

### 4. "Database does not exist" Error

**Problem**: The specified database doesn't exist.

**Solution**:
1. Create the database:
   ```bash
   createdb diversify_dev
   ```

2. Verify the database exists:
   ```bash
   psql -l | grep diversify_dev
   ```

### 5. "Permission denied" or "Authentication failed" Errors

**Problem**: The user doesn't have permission to access the database.

**Solution**:
1. Check your username:
   ```bash
   whoami
   ```

2. Ensure the user exists in PostgreSQL:
   ```bash
   psql -U postgres -c "\du" | grep your_username
   ```

3. If the user doesn't exist, create it:
   ```bash
   psql -U postgres -c "CREATE USER your_username WITH PASSWORD 'your_password';"
   ```

4. Grant privileges:
   ```bash
   psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE diversify_dev TO your_username;"
   ```

### 6. "Role does not exist" Error

**Problem**: PostgreSQL is trying to connect with a user that doesn't exist.

**Solution**:
1. Create the user:
   ```bash
   psql -U postgres -c "CREATE USER your_username;"
   ```

2. Or use an existing PostgreSQL user by updating your connection string:
   ```bash
   POSTGRES_URL=postgres://existing_user@localhost:5432/diversify_dev
   ```

## Verification Commands

Use these commands to verify your database setup:

1. Check PostgreSQL version:
   ```bash
   psql -U postgres -c "SELECT version();"
   ```

2. List databases:
   ```bash
   psql -l
   ```

3. Connect to your database:
   ```bash
   psql -d diversify_dev
   ```

4. List tables in your database:
   ```bash
   psql -d diversify_dev -c "\dt"
   ```

5. Check environment variables:
   ```bash
   echo $POSTGRES_URL
   ```

## Environment-Specific Issues

### macOS with Homebrew

If you installed PostgreSQL with Homebrew:

1. Start PostgreSQL:
   ```bash
   brew services start postgresql
   ```

2. Check service status:
   ```bash
   brew services list | grep postgresql
   ```

### Linux (Ubuntu/Debian)

1. Start PostgreSQL:
   ```bash
   sudo systemctl start postgresql
   ```

2. Enable PostgreSQL to start on boot:
   ```bash
   sudo systemctl enable postgresql
   ```

### Windows

1. Start PostgreSQL service through Services.msc
2. Or use the PostgreSQL command line:
   ```cmd
   pg_ctl -D "C:\Program Files\PostgreSQL\version\data" start
   ```

## Additional Tips

1. **Use explicit environment variables**: If you're still having connection issues, try setting the environment variable explicitly when running commands:
   ```bash
   POSTGRES_URL=postgres://your_username@localhost:5432/diversify_dev pnpm build
   ```

2. **Check for .env.local conflicts**: If you have both `.env` and `.env.local` files, the latter might override your settings.

3. **Restart your terminal**: After making changes to environment variables, restart your terminal to ensure changes take effect.

4. **Check firewall settings**: Ensure your firewall isn't blocking connections to PostgreSQL (default port 5432).

If you continue to experience issues, please reach out to the development team with:
- The exact error message
- Your operating system
- PostgreSQL version (`psql --version`)
- The connection string you're using (without password)