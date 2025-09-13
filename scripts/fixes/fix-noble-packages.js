#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Fixing @noble packages compatibility issues...');

// Function to find all @noble/hashes installations
function findNobleHashesPaths() {
  const paths = [];
  const pnpmDir = path.join(__dirname, '..', '..', 'node_modules', '.pnpm');
  
  if (fs.existsSync(pnpmDir)) {
    const entries = fs.readdirSync(pnpmDir);
    for (const entry of entries) {
      if (entry.includes('@noble+hashes@1.7.1')) {
        const packagePath = path.join(pnpmDir, entry, 'node_modules', '@noble', 'hashes');
        if (fs.existsSync(packagePath)) {
          paths.push(packagePath);
        }
      }
    }
  }
  
  return paths;
}

// Function to patch package.json exports
function patchPackageJson(packagePath) {
  const packageJsonPath = path.join(packagePath, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.log(`Package.json not found at ${packageJsonPath}`);
    return;
  }
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add explicit exports for the files that are failing
    if (!packageJson.exports) {
      packageJson.exports = {};
    }
    
    // Add missing exports
    const missingExports = {
      "./legacy": {
        "import": "./index.js",
        "require": "./index.js"
      },
      "./hmac": {
        "import": "./esm/hmac.js",
        "require": "./hmac.js"
      },
      "./hmac.js": {
        "import": "./esm/hmac.js",
        "require": "./hmac.js"
      },
      "./sha2": {
        "import": "./esm/sha2.js",
        "require": "./sha2.js"
      },
      "./sha2.js": {
        "import": "./esm/sha2.js",
        "require": "./sha2.js"
      },
      "./utils": {
        "import": "./esm/utils.js",
        "require": "./utils.js"
      },
      "./utils.js": {
        "import": "./esm/utils.js",
        "require": "./utils.js"
      },
      "./sha3": {
        "import": "./esm/sha3.js",
        "require": "./sha3.js"
      },
      "./sha3.js": {
        "import": "./esm/sha3.js",
        "require": "./sha3.js"
      },
      "./sha256": {
        "import": "./esm/sha256.js",
        "require": "./sha256.js"
      },
      "./sha256.js": {
        "import": "./esm/sha256.js",
        "require": "./sha256.js"
      },
      "./sha512": {
        "import": "./esm/sha512.js",
        "require": "./sha512.js"
      },
      "./sha512.js": {
        "import": "./esm/sha512.js",
        "require": "./sha512.js"
      }
    };
    
    // Merge missing exports
    Object.assign(packageJson.exports, missingExports);
    
    // Write back the modified package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`Patched package.json at ${packageJsonPath}`);
    
  } catch (error) {
    console.error(`Error patching package.json at ${packageJsonPath}:`, error.message);
  }
}

// Function to create symlinks for missing files
function createSymlinks(packagePath) {
  const esmDir = path.join(packagePath, 'esm');
  
  if (!fs.existsSync(esmDir)) {
    console.log(`ESM directory not found at ${esmDir}`);
    return;
  }
  
  const files = ['hmac.js', 'sha2.js', 'utils.js', 'sha3.js', 'sha256.js', 'sha512.js'];
  
  for (const file of files) {
    const esmFile = path.join(esmDir, file);
    const rootFile = path.join(packagePath, file);
    
    if (fs.existsSync(esmFile) && fs.existsSync(rootFile)) {
      console.log(`Files already exist for ${file}`);
    } else if (fs.existsSync(esmFile) && !fs.existsSync(rootFile)) {
      try {
        // Copy the ESM file to root for compatibility
        fs.copyFileSync(esmFile, rootFile);
        console.log(`Copied ${file} from esm to root`);
      } catch (error) {
        console.error(`Error copying ${file}:`, error.message);
      }
    }
  }
}

// Main execution
try {
  const nobleHashesPaths = findNobleHashesPaths();
  
  if (nobleHashesPaths.length === 0) {
    console.log('No @noble/hashes@1.7.1 installations found');
    return;
  }
  
  console.log(`Found ${nobleHashesPaths.length} @noble/hashes installations`);
  
  for (const packagePath of nobleHashesPaths) {
    console.log(`Processing ${packagePath}`);
    patchPackageJson(packagePath);
    createSymlinks(packagePath);
  }
  
  console.log('✅ @noble packages patching completed');
  
} catch (error) {
  console.error('❌ Error fixing @noble packages:', error.message);
  process.exit(1);
}