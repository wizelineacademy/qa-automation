# QA Automation Certification
Repository created for the QA Automation Certification


# Task Details

* I decided to give it a try to "class" objects for Pages instead functions, It seems to me that i looks cleaner because of the following reasons:
    
###Naming Convention for selectors:
+----------+----------------------------+--------+-----------------+
| Category |      UI/Control type       | Prefix |     Example     |
+----------+----------------------------+--------+-----------------+
| Basic    | Button                     | btn    | btnExit         |
| Basic    | Check box                  | chk    | chkReadOnly     |
| Basic    | Combo box                  | cbo    | cboEnglish      |
| Basic    | Common dialog              | dlg    | dlgFileOpen     |
| Basic    | Date picker                | dtp    | dtpPublished    |
| Basic    | Dropdown List / Select tag | ddl    | ddlCountry      |
| Basic    | Form                       | frm    | frmEntry        |
| Basic    | Frame                      | fra    | fraLanguage     |
| Basic    | Image                      | img    | imgIcon         |
| Basic    | Label                      | lbl    | lblHelpMessage  |
| Basic    | Links/Anchor Tags          | lnk    | lnkForgotPwd    |
| Basic    | List box                   | lst    | lstPolicyCodes  |
| Basic    | Menu                       | mnu    | mnuFileOpen     |
| Basic    | Radio button / group       | rdo    | rdoGender       |
| Basic    | RichTextBox                | rtf    | rtfReport       |
| Basic    | Table                      | tbl    | tblCustomer     |
| Basic    | TabStrip                   | tab    | tabOptions      |
| Basic    | Text Area                  | txa    | txaDescription  |
| Basic    | Text box                   | txt    | txtLastName     |
| Complex  | Chevron                    | chv    | chvProtocol     |
| Complex  | Data grid                  | dgd    | dgdTitles       |
| Complex  | Data list                  | dbl    | dblPublisher    |
| Complex  | Directory list box         | dir    | dirSource       |
| Complex  | Drive list box             | drv    | drvTarget       |
| Complex  | File list box              | fil    | filSource       |
| Complex  | Panel/Fieldset             | pnl    | pnlGroup        |
| Complex  | ProgressBar                | prg    | prgLoadFile     |
| Complex  | Slider                     | sld    | sldScale        |
| Complex  | Spinner                    | spn    | spnPages        |
| Complex  | StatusBar                  | sta    | staDateTime     |
| Complex  | Timer                      | tmr    | tmrAlarm        |
| Complex  | Toolbar                    | tlb    | tlbActions      |
| Complex  | TreeView                   | tre    | treOrganization |

###Features
* Test Step by step logger to easily reproduce tests
* Custom Jasmine reporter that matches the test step logger.
* Test Resuls in HTML??

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


