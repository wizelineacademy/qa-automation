# Usage

Execute newman in command line
```
newman run qa-task2-ismael-andrade.postman_collection.json  -e todoist.postman_environment.json -g BDDGlobal.json
```
# Goals

* Get all projects
* Create a new Project
* Get a Project
* Update Project
* Delete Project
* Get active Tasks
* Create a new Task
* Get a Task
* Update a task
* Close a task
* Reopen a task
* Delete Task

# Validatios

Each endpoint should include at least the following validations (Bonus points for extra validations):
1. JSON Schema(if applies)
2. Content of the JSON schema (if applies)
3. Response Time less than some specific time 4. Status code
