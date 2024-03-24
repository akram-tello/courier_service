# courier_service

## Description


## Project Setup and Structure


### Directory Structure

Here is an overview of the project's directory structure:
project-root/
│
├── src/ # Source files
│ ├── constants/ # Constant values, e.g., offer codes
│ │ └── offers.js # Offer codes and their criteria
│ │
│ ├── services/ # Business logic
│ │ ├── deliveryCostCalculator.js # Calculates delivery cost
│ │ └── offerService.js # Handles offer-related logic
│ │
│ └── utils/ # Utility functions
│ └── inputHandler.js # Handles command-line inputs
│
├── tests/ # Test files
│ ├── services/ # Tests for services
│ │ ├── deliveryCostCalculator.test.js
│ │ └── offerService.test.js
│ │
│ └── utils/ # Tests for utility functions
│ └── inputHandler.test.js
│
├── node_modules/ # Node.js modules (auto-generated)
│
├── .gitignore # Specifies untracked files to ignore
├── package.json # Project metadata and dependencies
├── package-lock.json # Dependency tree (auto-generated)
└── index.js # Entry point of the application


### Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**
git clone [repository-url]
cd courier_service


2. **Install Dependencies**

Run the following command to install the required node modules:
```bash
npm install
```

Follow the on-screen prompts to interact with the command-line application.

### Development Best Practices

- **Clean Code**: We strive to write clean, readable, and maintainable code. This includes using meaningful variable and function names, organizing code logically, and commenting where necessary.

- **Test-Driven Development (TDD)**: Our development process emphasizes writing tests before implementing functionality. This ensures robust and error-free code.

- **Regular Commits**: We use Git for version control and encourage frequent commits with meaningful messages. This practice helps in tracking changes and facilitating collaboration.

