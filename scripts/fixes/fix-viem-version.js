const fs = require('fs');
const path = require('path');

// Function to recursively find package.json files
function findPackageJson(dir) {
  const results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
      results.push(...findPackageJson(filePath));
    } else if (file === 'package.json') {
      results.push(filePath);
    }
  }
  
  return results;
}

// Function to update viem version in a package.json file
function updateViemVersion(filePath) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let updated = false;
    
    // Check dependencies
    if (packageJson.dependencies && packageJson.dependencies.viem) {
      if (!packageJson.dependencies.viem.includes('2.37.4')) {
        packageJson.dependencies.viem = '2.37.4';
        updated = true;
        console.log(`Updated viem version in ${filePath}`);
      }
    }
    
    // Check devDependencies
    if (packageJson.devDependencies && packageJson.devDependencies.viem) {
      if (!packageJson.devDependencies.viem.includes('2.37.4')) {
        packageJson.devDependencies.viem = '2.37.4';
        updated = true;
        console.log(`Updated viem version in ${filePath}`);
      }
    }
    
    // Check peerDependencies
    if (packageJson.peerDependencies && packageJson.peerDependencies.viem) {
      if (!packageJson.peerDependencies.viem.includes('2.37.4')) {
        packageJson.peerDependencies.viem = '2.37.4';
        updated = true;
        console.log(`Updated viem version in ${filePath}`);
      }
    }
    
    // Write back if updated
    if (updated) {
      fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '\n');
    }
    
    return updated;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Fixing viem versions...');
  
  // Find all package.json files
  const packageJsonFiles = findPackageJson(process.cwd());
  
  // Update viem versions
  let updatedCount = 0;
  for (const file of packageJsonFiles) {
    if (updateViemVersion(file)) {
      updatedCount++;
    }
  }
  
  console.log(`Updated ${updatedCount} package.json files`);
  console.log('Viem version fix completed.');
}

main();