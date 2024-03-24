# courier_service

## Description


## Project Setup and Structure


### Directory Structure

```bash
courier_service/
│
├── src/                    # Source files
│   ├── constants/          # Constant values, e.g., offer codes
│   │   └── offers.js
│   │
│   ├── services/           # Business logic
│   │   ├── deliveryCostCalculator.js
│   │   └── offerService.js
│   │
│   └── utils/              # Utility functions
│       └── inputHandler.js
│
├── tests/                  # Test files
│   ├── services/
│   │   ├── deliveryCostCalculator.test.js  # Tests for delivery cost calculation
│   │   └── offerService.test.js            # Tests for offer service logic
│   │
│   └── utils/
│       └── inputHandler.test.js            # Tests for input handling
│
├── node_modules/           # Node.js modules (not included in the repository)
│
├── .babelrc                # Babel configuration for ES6+ support
├── jest.config.cjs         # Jest configuration for handling tests
├── .gitignore              # Specifies intentionally untracked files to ignore
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Locked versions of the entire dependency tree
└── index.js                # Entry point of the application
```


### Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**
```bash
git clone https://github.com/akram-tello/courier_service.git
cd courier_service
```


2. **Install Dependencies**

Run the following command to install the required node modules:
```bash
npm install
```


3. **Running the Application**

To start the application, run:

```bash
node index.js
```

4. **Running Tests**

To run the tests, use the following command:

```bash
npm test
```

### Development Best Practices

- **Clean Code**: We strive to write clean, readable, and maintainable code. This includes using meaningful variable and function names, organizing code logically, and commenting where necessary.

- **Test-Driven Development (TDD)**: Our development process emphasizes writing tests before implementing functionality. This ensures robust and error-free code.

- **Regular Commits**: We use Git for version control and encourage frequent commits with meaningful messages. This practice helps in tracking changes and facilitating collaboration.

