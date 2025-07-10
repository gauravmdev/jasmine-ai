// Simple build script for Vercel
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create dist directory
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Build with vite from the client directory
process.chdir('client');
execSync('npx vite build --outDir ../dist --emptyOutDir', { stdio: 'inherit' });

console.log('Build completed successfully!');