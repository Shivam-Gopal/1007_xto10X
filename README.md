# 1007_xto10X
# TaskMe: Employee Productivity Tracker

## Project Overview

**TaskMe** is an Employee Productivity Tracker application designed to empower employees to log and track their daily tasks while ensuring their efforts are transparent to employers. By fostering fairness and providing actionable insights, this application enhances productivity for both employees and employers.

---

## Features

### 1. Employee Task Logging
- **Task Timeline:**
  - Log tasks, including routine (BAU) and ad hoc tasks, with details like:
    - Task title and description.
    - Time spent.
    - Priority level.
    - Reference (e.g., manager or colleague who assigned the task).
  - Chronological task timelines for streamlined tracking.
- **Task Categorization:**
  - Categorize tasks into **BAU**, **Ad Hoc**, or **Project-Based**.
  - Attach supporting documents, emails, or links for better context.

### 2. Employer Dashboard
- **Productivity Insights:**
  - Visualize productivity using:
    - Graphs: Track productivity trends, task breakdowns, and time allocation.
    - Tables: Detailed task lists with filters for type, priority, or assignee.
  - Compare employee workloads and outputs.
- **Team Performance Trends:**
  - Identify team members’ performance levels.
  - Generate automatic **weekly/monthly productivity reports**.

### 3. Employee Notifications
- **Productivity Alerts:**
  - Notify low-performing employees with personalized recommendations.
  - Recognize high performers with appreciation messages or badges.
- **Deadline Reminders:**
  - Notify employees about upcoming deadlines or overdue tasks.

### 4. Comprehensive Dashboard Views
- **Graphical Analytics:**
  - Visualize productivity trends, task distribution, and efficiency scores with pie charts, bar graphs, and line charts.
- **Tabular Data:**
  - Detailed tables with advanced filtering and sorting options.
- **Customizable Reports:**
  - Generate custom reports tailored to specific timeframes, teams, or task types.

### 5. Role-Based Access Control
- **Employer View:**
  - Access dashboards, reports, and team productivity summaries.
- **Employee View:**
  - View personal timelines, progress, and performance analytics.

---

## Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-link>

2. **Navigate to the project directory:**
   ```bash
   cd 1007_xto10X
3. Configure environment variables:
  Edit the .env file and set your MongoDB URI:
  MONGODB_URI=<your-mongodb-atlas-uri>

4. Install and run the client:
  cd client
  npm install
  npm run dev

5. Install and run the server:
  cd server
  npm install
  npm start
