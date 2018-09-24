# QA Automation Certification
Repository created for the QA Automation Certification


# Task1 Highlights

* I decided to give it a try to "class" objects for Pages instead functions, It seems to me that i looks cleaner, just wanted to give it a try
* Added a Test Step by step logger to easily reproduce tests (Each step being executed is displayed through the test execution)
* Custom Jasmine reporter that matches the test step logger.
* Implemented "Object builder" , which is a class that provides test objects to help out test harness
    
###Naming Convention for selectors:

|     UI/Control type       | Prefix |     Example     |
|---------------------------|--------|-----------------|
|Button                     | btn    | btnExit         |
|Check box                  | chk    | chkReadOnly     |
|Combo box                  | cbo    | cboEnglish      |
|Date picker                | dtp    | dtpPublished    |
|Option (In select)         | opt    | optNumber       |
|Dropdown List / Select tag | sel    | ddlCountry      |
|Image                      | img    | imgIcon         |
|Label                      | lbl    | lblHelpMessage  |
|Links/Anchor Tags          | lnk    | lnkForgotPwd    |
|List box                   | lst    | lstPolicyCodes  |
|Menu                       | mnu    | mnuFileOpen     |
|Radio button / group       | rdo    | rdoGender       |
|Table                      | tbl    | tblCustomer     |
|Text Area                  | txa    | txaDescription  |
|Text box                   | txt    | txtLastName     |


###Features


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


