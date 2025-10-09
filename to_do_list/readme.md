# Simple To-Do List 

A lightweight and minimal **To-Do List App** built using plain JavaScript, HTML, and CSS — no frameworks required.  
Tasks are stored in **localStorage**, so they stay saved even after you close or refresh the browser.

---

##  Features

- Add new tasks dynamically
- Tasks persist in browser using `localStorage`
- Mark tasks as complete (adds strike-through effect)
- Delete tasks instantly
-  Auto-saves updates after every change

---

##  How It Works

- When the user clicks **Add**, the input text is stored in an array (`taskarr`).
- That array is saved in `localStorage` as JSON.
- Each time the page loads, the `prev()` function:
  - Clears the list area
  - Loops through all stored tasks
  - Displays them with checkboxes and delete buttons
- Checking a box updates `task.complete` and applies a line-through style.
- Clicking **Delete** removes the task from both the UI and `localStorage`.

---

##  File Structure
📦 todo-app
┣ index.html
┣ script.js
┣ style.css
┗ README.md


---

##  Example Snippet

```js
checkbox.addEventListener('change', function() {
    task.complete = this.checked;
    localStorage.setItem('task', JSON.stringify(taskarr));
    textSpan.style.textDecoration = this.checked ? "line-through" : "none";
});



