# Expense Tracker Activity Blog

## Entry 1: Project Planning and Setup

#### Date: 01/28/2026

### Meeting Minutes
This session focused on defining the scope and structure of the Personal Expense Tracker application. Since this is an solo project (just me), the meeting was conducted as a self planning session.

### Initial Task Assignments
- Project proposal   
- Feature list (Must have / Should have / Could have)  
- User stories 
- Wireframes and navigation 
- Data planning   
- Team plan and definition of done  
- GitHub repository and Kanban board setup  

### Progress Update
Milestone 01 planning tasks have been completed and documented. Tasks were moved on Kanban board to show progress and completion.



## Entry 2: Front-End Implementation

#### Date: 02/20/2026

### Work Completed
- Implemented login, register, dashboard, and add expense screens
- Built navigation bar
- Structured client folder
- Connected UI to mock backend routes

### Decisions Made
- Used clean minimal layout
- Separated client and server folders
- Started with stub API routes before database integration

### Blockers / Issues
- Navigation text blending into background
- Minor CSS layout inconsistencies

### Resolution
- Adjusted CSS styling and improved contrast



## Entry 3: Back-End Setup & Database Design

#### Date: 02/27/2026

### Work Completed
- Installed Node.js and Git
- Initialized Express server
- Created server entry point (server.js)
- Structured API routes
- Designed ER diagram 
- Wrote SQL CREATE TABLE statements
- Linked local project to GitHub

### Decisions Made
- Deferred full authentication to Milestone 03 so as of right now can login with any email and password
- Designed database with foreign key 

### Blockers / Issues
- Git merge conflict during first push
- PowerShell execution policy blocked npm

### Resolution
- Resolved merge with git pull

#### Date: 04/05/2026

### Work Completed
- Implemented full user authentication (register + login)
- Added password hashing using bcrypt
- Enforced unique email validation
- Connected frontend to backend API using fetch
- Implemented user session handling with localStorage
- Built expense CRUD functionality (create, read, update, delete)
- Linked expenses to specific users using user_id
- Displayed user specific expenses on dashboard
- Fixed API routing issues and JSON parsing errors
- Debugged login redirect and session persistence issues

### Issues 
- Login initially accepted any credentials without validation
- Expenses were shared across all users instead of being user-specific
- API routes returned 404 errors due to incorrect setup
- JSON parsing errors caused by backend returning HTML instead of JSON
- Login successful but not redirecting properly
- Frontend losing user session

### Resolution 
- Implemented proper authentication logic with database validation
- Fixed expense queries to filter by user_id
- Corrected API route structure and restarted server
- Ensured backend always returns valid JSON responses
- Fixed frontend login flow and redirect logic
- Stored and retrieved user data correctly from localStorage
