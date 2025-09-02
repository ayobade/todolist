## Todolist (React + Vite)

A clean, responsive todo app built with React and Vite. Add tasks, mark complete, edit names, delete items, and filter the list.

### Features
- **Add tasks**: Create new todos quickly
- **Complete tasks**: Toggle done/undone with a checkbox
- **Edit names**: Switch a task into edit mode and save changes
- **Delete tasks**: Remove items you no longer need
- **Filter buttons**: Placeholder UI ready for filter logic
- **Accessible UI**: Labels, focus states, and keyboard-friendly controls

### Tech Stack
- **React** (functional components, hooks)
- **Vite** for fast dev/build
- **NanoID** for unique IDs
- **Modern CSS**



## Project Structure
```text
.
├─ index.html
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ components/
│     ├─ Form.jsx
│     ├─ Todo.jsx
│     └─ FilterButton.jsx
└─ vite.config.js
```

## How It Works
- State is managed in `App.jsx` for the task list.
- `Form.jsx` adds tasks via `addTask(name)`.
- `Todo.jsx` handles toggle complete, edit name, and delete via props.
- Styling lives in `src/index.css`.




