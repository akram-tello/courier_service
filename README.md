# courier_service

## Description
The Courier Service project is a command-line application designed to estimate delivery costs and delivery times for a courier service company. The application supports various functionalities, including cost calculation with offer codes and delivery time estimation based on package weight, distance, and vehicle availability.

## Project Setup and Structure

### Technologies Used

- **Node.js**: A JavaScript runtime environment that executes JavaScript code outside a web browser.
- **Jest**: A JavaScript testing framework for Node.js applications.
- **Babel**: A JavaScript compiler that converts ECMAScript 2015+ code into a backward-compatible version of JavaScript.
- **ESLint**: A static code analysis tool for identifying problematic patterns found in JavaScript code.
- **Prettier**: An opinionated code formatter that enforces a consistent coding style.

### Prerequisites

Before setting up the project, ensure you have the following installed on your local machine:

- **Node.js**: (version 17.4.0 or later) Download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org).
- **npm**: Node.js comes with npm (Node Package Manager) installed by default. You can check the version by running `npm -v` in the terminal.


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

## Key Functionalities

The Courier Service application offers two main functionalities accessible via a command-line interface (CLI):

### 1. Delivery Cost Calculation

This feature allows users to calculate the delivery cost for a set of packages. It takes into account the weight and distance of each package, applying any applicable discount based on predefined offer codes.

**How to Use:** Run the application and select "Calculate Delivery Cost" from the main menu. Follow the prompts to enter package details, including weight, distance, and offer code (if any).

**Technical Details:** This functionality is implemented in `costEstimator.js` and utilizes services defined in `deliveryCostCalculator.js`. Discounts are calculated based on the rules specified in `offers.js`.

### 2. Delivery Time Estimation

This feature estimates the delivery time for packages given the constraints of vehicle availability, their carrying capacity, and speed. It prioritizes packages based on weight and distance to optimize delivery times.

**How to Use:** Start the application and choose "Estimate Delivery Time" from the menu. You'll be prompted to enter details for each package and vehicle information, including the number of vehicles, their maximum speed, and carrying capacity.

**Technical Details:** The core logic for this feature is located in `deliveryTimeCalculator.js`, with user interactions handled by `deliveryTimeEstimator.js`. The application can shared configurations from `config.js` to determine vehicle speed and weight limits if need it in the prodction.


### Development Best Practices

- **Clean Code**: We strive to write clean, readable, and maintainable code. This includes using meaningful variable and function names, organizing code logically, and commenting where necessary.

- **Test-Driven Development (TDD)**: Our development process emphasizes writing tests before implementing functionality. This ensures robust and error-free code.

- **Regular Commits**: We use Git for version control and encourage frequent commits with meaningful messages. This practice helps in tracking changes and facilitating collaboration.

