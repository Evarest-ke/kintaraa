# Kintaraa Developer Guide

## Project Overview

Kintaraa is a platform that connects survivors of gender-based violence with essential services, including medical, legal, counseling, and police assistance. This guide documents the current state of the project, explains key architectural decisions, and outlines the planned migration path to Rust and a more scalable database solution.

## Current Architecture

### The Transition from ICP to Web2

This project was originally built on the Internet Computer Protocol (ICP) blockchain technology but has been **completely migrated to a standard Web2 architecture**. All ICP dependencies have been removed from the codebase. This transition was made for the following reasons:

1. **Simplified Development**: Standard web technologies allow for faster iteration and a larger pool of developers familiar with the stack
2. **Reduced Learning Curve**: Removing blockchain dependencies makes it easier for new developers to join the project
3. **Cost Efficiency**: Traditional hosting is more cost-effective for our current scale
4. **Focused Functionality**: Core functionality doesn't require blockchain features at this stage

### Frontend

- **Framework**: React.js with Vite for fast development
- **State Management**: React Context API for auth state
- **Styling**: Tailwind CSS for responsive UI components
- **Form Handling**: React Hook Form with Zod for validation
- **Notifications**: React Hot Toast for user notifications

### Backend

- **Framework**: Express.js (Node.js) - **temporary solution** during transition
- **Database**: MongoDB - **interim database** to be replaced
- **Authentication**: JWT-based authentication
- **API Style**: RESTful API endpoints

## Why Express.js and MongoDB?

### Express.js

Express.js was chosen **specifically as a quick makeshift solution** for our backend during the transition from ICP to Web2. It is not intended to be the long-term solution but rather a stepping stone to our Rust implementation. We selected it for the following reasons:

1. **Rapid Development**: Express enables quick API development with minimal boilerplate
2. **Mature Ecosystem**: A large number of middleware packages and integration options
3. **Developer Familiarity**: Most web developers have some experience with Express
4. **Flexibility**: Works well with various databases and authentication strategies
5. **Transition Speed**: Allowed us to quickly migrate from ICP to a standard backend within a tight timeframe

### MongoDB

MongoDB was selected as our **temporary database solution** for the following reasons:

1. **Schema Flexibility**: Schema-less nature allows for quick iterations during early development
2. **JSON-like Documents**: Natural fit for JavaScript/Node.js development
3. **Horizontal Scalability**: Can scale out across multiple servers
4. **Developer Experience**: Simple to set up and use with Mongoose ODM
5. **Transitional Step**: Serves as an intermediate solution before moving to our final database architecture

## Planned Migration to Rust Backend

### Why Rust?

1. **Performance**: Rust offers near-native performance with minimal runtime overhead
2. **Memory Safety**: Rust's ownership model prevents common memory-related bugs without garbage collection
3. **Concurrency**: Safe concurrency with no data races
4. **Reliability**: Strong type system and compiler checks reduce runtime errors
5. **Growing Ecosystem**: Web frameworks like Actix, Rocket, and Axum are maturing rapidly
6. **Future-Proof**: Rust is increasingly adopted for high-performance services

### Migration Steps

1. **Learning Phase**:
   - Team members should complete Rust basics training
   - Study Rust web frameworks (We recommend Actix-web or Axum)
   - Build small proof-of-concept services with Rust

2. **API Reimplementation**:
   - Document all existing Express endpoints thoroughly
   - Create OpenAPI/Swagger specifications for current APIs
   - Implement Rust equivalents starting with non-critical endpoints
   - Add comprehensive tests for each endpoint

3. **Database Layer**:
   - Implement database abstraction layer in Rust
   - Create migration scripts from MongoDB to the new database
   - Test data integrity during migration

4. **Authentication Overhaul**:
   - Implement JWT validation in Rust
   - Ensure secure token handling
   - Add refresh token functionality

5. **Deployment Strategy**:
   - Set up CI/CD for Rust services
   - Create Docker containers for consistent deployment
   - Implement health checks and monitoring

## Database Selection Guidelines

When selecting the final database for the Rust backend, consider these options:

### PostgreSQL
- **Pros**: ACID compliance, powerful query language, mature ecosystem, excellent Rust support
- **Cons**: Potentially more complex schema management
- **Best for**: If strong data consistency and relational integrity are critical

### CockroachDB
- **Pros**: Distributed SQL database, horizontal scaling, PostgreSQL compatibility
- **Cons**: Higher complexity, may have higher operational costs
- **Best for**: If global distribution and high availability are requirements

### Scylla DB (Cassandra alternative)
- **Pros**: High throughput, linear scalability, low latency
- **Cons**: Eventually consistent by default, complex data modeling
- **Best for**: High-volume time-series data, logs, or other write-heavy workloads

### DynamoDB (if staying with AWS)
- **Pros**: Fully managed, highly available, scales automatically
- **Cons**: Limited query capabilities, potential cost scaling issues
- **Best for**: Simple access patterns where AWS integration is important

### Recommendation

For most teams, **PostgreSQL** offers the best balance of features, ecosystem support, and Rust integration. We recommend:

1. Start with PostgreSQL with the `sqlx` or `diesel` Rust crates
2. Use database migrations from the beginning
3. Consider adding a caching layer (Redis) for performance-critical paths
4. Implement proper connection pooling

## Getting Started with Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start MongoDB with Docker:
   ```
   docker-compose up -d
   ```
4. Start the backend server:
   ```
   cd backend && npm run dev
   ```
5. Start the frontend:
   ```
   cd src/kintaraa_frontend && npm run dev
   ```

## Contributing Guidelines

1. Create feature branches from `develop` branch
2. Follow the conventional commits specification for commit messages
3. Write tests for new functionality
4. Ensure code passes linting and formatting checks
5. Submit pull requests for review

## Contact

For questions about the technical architecture or migration plans, contact the development team at `seniordev@kintaraa.com`. 