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
│   └── utils/              # Utility functions, if any
│       └── inputHandler.js
│
├── tests/                  # Test files
│   ├── services/
│   │   ├── deliveryCostCalculator.test.js
│   │   └── offerService.test.js
│   │
│   └── utils/
│       └── inputHandler.test.js
│
├── node_modules/           # Node.js modules (not included in the repository)
│
├── .gitignore              # Specifies intentionally untracked files to ignore
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Locked versions of the entire dependency tree
└── index.js                # Entry point of the application

```


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

