# QA Automation Certification
Repository created for the QA Automation Certification

# Goals

* Define Page Models
* Usage of the Page Object Pattern
* Objects Locators best practices
* Waits and code encapsulation


# Getting Started

### Prerequisites

You need to have the following tools installed on your computer.

Node.js v6.10.0 or higher.
To install Node.js, download it from the Node.js webpage.

### Install Git

Install Git on your console, follow [this tutorial](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Instructions.
Clone the repository in your local machine and create a new branch
```
git clone https://github.com/wizelineacademy/qa-automation.git
cd qa-automation
```

### Installation
Install package dependencies by running.

```npm install```

### Test Run

Once you have the environmet set up, you will need to start Webdriver-Manager by running the following command.
```
webdriver-manager update && webdriver-manager start
```
Now, you have selenium server running locally, so, to run the tests you have execute the next command.
```
protractor confs/conf.js
```
