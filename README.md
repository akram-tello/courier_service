# courier_service

## Description


## Project Setup and Structure


### Directory Structure

```bash
courier_service/
│
├── src/                    # Source files
│   ├── cli/                 # Entry points for CLI applications
│   │   ├── costEstimator.js
│   │   └── deliveryTimeEstimator.js
│   │
│   ├── constants/          # Constant values, e.g., offer codes, and shared configurations
│   │   ├── offers.js
│   │   └── config.js       # Shared configurations like vehicle speed, weight limits
│   │
│   ├── services/           # Business logic, including new services
│   │   ├── deliveryCostCalculator.js
│   │   ├── offerService.js
│   │   └── deliveryTimeCalculator.js  # New service for delivery time estimation
│   │
│   └── utils/              # Utility functions, including any shared utilities
│       ├── inputHandler.js
│       └── sharedUtilities.js        # Any shared utility functions
│
├── tests/                  # Test files for all functionalities
│   ├── services/
│   │   ├── deliveryCostCalculator.test.js
│   │   ├── offerService.test.js            # Tests for offer service logic
│   │   └── deliveryTimeCalculator.test.js  # Tests for the new delivery time calculator
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
└── index.js                # Main entry point to direct to specific functionalities

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

