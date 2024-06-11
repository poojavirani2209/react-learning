#### Objective:

Create a simple Todo List application using React that allows users to add, mark as completed, and delete tasks. This will help you understand how to use event handlers in React to manage user interactions.

#### Requirements:

1.  Add a Task:

-   There should be an input field where users can type the name of a task.

-   A button labeled "Add Task" should be present next to the input field.

-   When the "Add Task" button is clicked, the task should be added to the list of tasks.

3.  Display Tasks:

-   The list of tasks should be displayed below the input field and button.

-   Each task should have a checkbox and a delete button next to it.

5.  Mark a Task as Completed:

-   Each task should have a checkbox. When the checkbox is checked, the task should be marked as completed (you can use a different style, like a line-through, to indicate a completed task).

7.  Delete a Task:

-   Each task should have a delete button. When the delete button is clicked, the task should be removed from the list.

#### Functional Requirements:

-   State Management: Use React state to manage the list of tasks.

-   Event Handlers: Implement event handlers for adding tasks, marking tasks as completed, and deleting tasks.

-   Component Structure: Break the application into smaller components if necessary (e.g., a Task component for individual tasks).

#### Example:

Initial State:\
arduino\
Copy code\
Task List:

1.

Adding a Task:\
arduino\
Copy code\
Task List:

- [ ] Task 1

1.

Marking a Task as Completed:\
arduino\
Copy code\
Task List:

- [x] Task 1

1.

Deleting a Task:\
mathematica\
Copy code\
Task List:

(Empty)

1.

#### Hints:

-   useState Hook: Use the useState hook to manage the state of the task list.

-   Event Handling: Use onClick for handling button clicks and onChange for handling changes in the checkbox state.

-   Conditional Rendering: Use conditional rendering to apply different styles to completed tasks.