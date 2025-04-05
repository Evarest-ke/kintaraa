#!/bin/bash

echo "Cleaning up ICP-related files and directories..."

# Remove ICP-specific directories
rm -rf .dfx
rm -rf declarations
rm -rf src/declarations
rm -rf target
rm -rf src/kintaraa_backend
rm -rf src/kintaraa_frontend/declarations

# Remove ICP configuration files
rm -f dfx.json
rm -f canister_ids.json
rm -f Cargo.toml
rm -f Cargo.lock

echo "ICP-related files and directories have been removed!"
echo "Your project is now a standard web application." 