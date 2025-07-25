# Lesson 3 Summary: Git & JavaScript Basics

- Git
  - Undo actions
  - Branching model
- JavaScript basic
  - Logical operator
  - Object and array
  - Function

## Git Section

### Undo Actions

#### 1. Changing Commit Message

git commit --amend

- Press `i` to enter insert mode
- Press `esc` to exit insert mode
- Type `:wq` to write and quit

Alternative:
 
git commit --amend -m"new message"

#### 2. Moving Files from Staging to Working Directory

git restore --staged <file>


#### 3. Moving Files from Repository to Working Directory (Uncommit)

git reset HEAD~1  # Undo 1 commit

### Branching Model

**Branch** = nhánh (branch)
- Used to create a new working area without affecting the stable working area
- Alternative to manually backing up and copying files

#### Branch Commands

git branch <branch_name>          # Create branch
git checkout <branch_name>        # Switch to branch
git checkout -b <branch_name>     # Create and switch to branch


### .gitignore File

**.gitignore** = Git Ignore = Bỏ qua (Skip)
- Used to ignore files that don't need Git tracking

## JavaScript Section

### Conventions
**Convention** = quy tắc (rules)

Conventions help:
- Code follows a consistent format, easy to read
- Other team members can easily read the code

#### Naming Conventions
- `snake_case_now_now` - not used
- `kebab-case-now-now` - for file names
- `camelCaseNowNow` - for variable names
- `PascalCaseNowNow` - for class names


### Object
**Object** = đối tượng (object) - used to store a collection of values in a single variable or constant

### Logical Operators
- `&&` : Both sides of the statement must be true
- `||` : One of the two sides must be true
- `!` : Reverse the value of the statement

### Array
**Array** = Mảng (array)

#### Creating Arrays
- Declaration
- Usage

#### Array Access
- Array length: `length`
- Get element by index: `[0]`, `[1]`, `[2]`
