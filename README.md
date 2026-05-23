# Cognigen Frontend

Frontend application for **Cognigen**, an AI-powered personalized learning platform that enables users to generate adaptive learning paths, manage learning progress, interact with notebook-style learning content, and complete AI-generated quizzes.

## My Role in the Project

> **Full-Stack Developer (Profile Management & Learning Path Module)**

This project was developed collaboratively as a team project.  
I was responsible for designing and implementing the **Profile Management** and **Learning Path** modules, including authentication flow, dashboard interactions, notebook-based learning experience, topic management, drag-and-drop reordering, and notebook cell editing workflows.

### Modules Implemented by Me

#### Profile Management

- Signup UI
- Signin UI
- JWT Authentication Flow (Cookie-based)
- Protected Routes
- Profile Page
- Settings Page
- Logout Flow

#### Learning Path Module

- Learning Path Dashboard
- Learning Path Generation Modal
- Learning Path Details Page
- Topic Management UI
- Topic Editing & Add Topic Flow
- Topic/Submodule Rearrangement (Drag-and-Drop)
- Notebook Learning Page
- Notebook Cell CRUD UI (Add/Edit/Delete)
- Rearrangement of Notebook Content

---

# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Context API
- Axios

## UI & Animation Libraries

- shadcn/ui
- Material UI
- Framer Motion
- Lucide React
- React Icons

## Editor

- Markdown Editor

---

# Authentication Flow

Authentication is handled using **JWT stored in HTTP-only cookies** from the backend.

```text
User Login / Signup
        │
        ▼
Backend Authentication
        │
        ▼
JWT Cookie Generated
        │
        ▼
Protected Routes Access
```

---

# UI Showcase

## Landing Page

Modern landing page introducing Cognigen platform.

![Landing Page](./assets/1-landing-page.png)

---

## Authentication

### Signup Page

![Signup](./assets/2-signup.png)

### Signin Page

![Signin](./assets/3-signin.png)

---

## Dashboard

User dashboard showing learning overview.

![Dashboard](./assets/4-dashboard.png)

---

## Leaderboard

Leaderboard system for user rankings and progress comparison.

![Leaderboard](./assets/5-leaderboard.png)

---

## Profile Management

Manage account information.

![Profile](./assets/6-profile.png)

---

## Settings

Update preferences and account settings.

![Settings](./assets/7-settings.png)

---

## Logout Modal

Logout confirmation interface.

![Logout Modal](./assets/8-logout-confirmation-modal.png)

---

## Learning Resources

Browse educational learning resources.

![Learning Resources](./assets/9-learning-resources-page.png)

---

## Learning Path Generation

Generate AI-personalized learning paths.

![Learning Path Modal](./assets/10-learning-path-generation-modal.png)

---

## Learning Path Details

View generated learning path and progress.

![Learning Path Details](./assets/11-learning-path-details-page.png)

---

## Edit Learning Path

### Manage Topics

![Manage Topics](./assets/12-edit-path-modal-manage-topics.png)

### Path Information

![Path Info](./assets/13-edit-path-modal-path-info.png)

### Editing Topics

![Edit Topics](./assets/14-edit-path-modal-manage-topics-editing-section.png)

### Add Topic

![Add Topic](./assets/15-edit-path-modal-manage-topics-add-topic-section.png)

---

## Rearranging Content

### Rearrange Topics

Drag-and-drop topic organization.

![Rearrange Topics](./assets/16-rearrange-modal.png)

### Rearrange Notebook Content

![Rearrange Content](./assets/17-rearrange-content-modal.png)

---

## Notebook Learning Interface

Notebook-style content system for interactive learning.

![Notebook](./assets/18-notebook-page.png)

---

## Notebook Cell Editing

### Add Cell

![Add Cell](./assets/19-add-cell.png)

### Edit Cell

![Edit Cell](./assets/20-edit-cell.png)

### Delete Confirmation

![Delete Cell](./assets/21-delete-confirmation-modal.png)

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd cognigen-frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Application runs on:

```text
http://localhost:5173
```

---

# Backend Requirement

This frontend depends on:

- Cognigen Backend
- Cognigen AI Service

Ensure both services are running.

Backend:

```text
http://localhost:5000
```

AI Service:

```text
http://localhost:8000
```

---

# Major Functional Workflows

## Learning Path Workflow

```text
Generate Learning Path
        │
        ▼
View Generated Topics
        │
        ▼
Manage Topics/Submodules
        │
        ▼
Generate Topic Content
        │
        ▼
Notebook Learning
        │
        ▼
Generate Quiz
        │
        ▼
Track Progress
```

---

## Notebook Workflow

```text
Notebook Page
      │
      ├── Add Cell
      ├── Edit Cell
      ├── Delete Cell
      ├── Rearrange Content
      └── Learn Progressively
```

---

# Contribution

This project was developed collaboratively as a team project.

### My Contributions

#### Profile Management Module

Implemented:

- Signup UI
- Signin UI
- Profile Page
- Settings Page
- Logout Flow
- Protected Authentication Flow

#### Learning Path Module

Implemented:

- Learning Path Dashboard
- Learning Path Generation Modal
- Learning Path Details Page
- Topic Management UI
- Topic Editing
- Add Topic Flow
- Rearrangement System
- Notebook Learning Page
- Notebook Cell CRUD UI
- Drag-and-Drop Content Reordering

---

# Future Improvements

- Dark Mode
- Real-time Collaboration
- Rich Text Notebook Editor
- Mobile-first Optimization
- PWA Support
- Offline Learning Support
- Analytics Dashboard

---

# License

This project is intended for educational and portfolio purposes.
