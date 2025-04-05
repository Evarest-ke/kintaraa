#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print status messages
print_status() {
    echo -e "${YELLOW}[*] $1${NC}"
}

print_success() {
    echo -e "${GREEN}[✓] $1${NC}"
}

print_error() {
    echo -e "${RED}[✗] $1${NC}"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check and install dependencies
check_and_install_dependencies() {
    print_status "Checking and installing dependencies..."

    # Check for curl
    if ! command_exists curl; then
        print_status "Installing curl..."
        sudo apt-get update && sudo apt-get install -y curl
    fi

    # Check for Git
    if ! command_exists git; then
        print_status "Installing git..."
        sudo apt-get update && sudo apt-get install -y git
    fi

    print_success "Dependencies installed successfully"
}

# Install Rust
install_rust() {
    print_status "Checking for Rust installation..."
    if ! command_exists rustc; then
        print_status "Rust not found. Installing Rust..."
        curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
        source $HOME/.cargo/env
        print_success "Rust installed successfully"
    else
        print_success "Rust is already installed"
    fi
}


# Install Node.js using nvm
install_node() {
    print_status "Checking Node.js installation..."

    # Install nvm if not present
    if ! command_exists nvm; then
        print_status "nvm not found. Installing latest nvm..."
        # Get latest nvm version from GitHub
        NVM_LATEST=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')
        curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/${NVM_LATEST}/install.sh" | bash

        # Load nvm
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
        
        # Reload shell configuration
        source ~/.bashrc
        print_success "nvm installed successfully"
    else
        print_success "nvm is already installed"
    fi

    # Install Node.js 18 LTS
    print_status "Installing Node.js v18 LTS..."
    nvm install 18
    nvm use 18
    nvm alias default 18
    
    # Verify installations
    print_status "Node.js version: $(node -v)"
    print_status "npm version: $(npm -v)"
}

# Install DFX
install_dfx() {
    print_status "Installing DFX..."
    if ! command_exists dfx; then
        DFX_VERSION=0.14.1  # Specify the version you want to install
        sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
        print_success "DFX installed successfully"
    else
        print_success "DFX is already installed"
    fi
}


# Setup project
setup_project() {
    print_status "Setting up project..."
    
    

    # Install root dependencies
    print_status "Installing root dependencies..."
    npm install 
    

    # Install frontend dependencies
    print_status "Installing frontend dependencies..."
    cd src/kintaraa_frontend
    npm install 
    
    cd ../..

    print_success "Project setup completed"
}

# Create environment file
create_env_file() {
    print_status "Creating .env file..."
    
    cat > .env << EOL
DFX_NETWORK=local
VITE_II_CANISTER_ID=bkyz2-fmaaa-aaaaa-qaaaq-cai
VITE_BACKEND_CANISTER_ID=bd3sg-teaaa-aaaaa-qaaba-cai
EOL

    print_success ".env file created successfully"
}

# Start DFX and deploy canisters
start_and_deploy() {
    print_status "Starting DFX network..."
    dfx start --background

    print_status "Deploying canisters..."
    dfx deploy

    print_success "Deployment completed"
}

# Main setup process
main() {
    print_status "Starting Kintaraa project setup..."

    check_and_install_dependencies
    install_rust
    install_node
    install_dfx
    setup_project
    create_env_file
    start_and_deploy

    print_success "Setup completed successfully!"

}

# Run main function
main