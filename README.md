# ListProduct-FakeAPI-ReactNative
🧠 Purpose of the Interview
This isn't a brain teaser or an abstract data structures challenge. It’s designed to simulate the types of functional programming tasks you’d encounter as a real-world software engineer, such as parsing structured data, working with APIs, and writing clean, maintainable logic.
The goal is to understand how you think, how you approach problems, and how you develop working software.


✅ What We're Evaluating
1.	API Design
o	Can you design a simple, clean, and intuitive API or function interface?
o	Do you think about modularity, inputs/outputs, and error handling?
2.	Optimal Language & Library Usage
o	Do you leverage the standard libraries or well-known idiomatic approaches in your chosen language?
o	Are you using the tools of your language effectively and concisely?
3.	Code Correctness and Quality
o	Does your solution work as expected?
o	Is the code readable and maintainable?
o	Are edge cases handled appropriately?
4.	Completeness
o	Do you finish a working, testable solution in the given time?
o	Are you covering the end-to-end flow?


🧪 Mock Interview: Frontend Engineer (45–60 minutes)
👩‍💻 Part 1: Intro & Warm-Up (5–10 min)
Interviewer:
“Hi! Let’s start with a brief intro. Tell me a bit about your background, what excites you about frontend development, and what types of projects you've worked on recently.”
(Goal: gauge communication, confidence, and past experience relevance.)
 
🔧 Part 2: Coding Exercise (20–30 min)
Scenario:
“You’re building a simple web component to display and filter a list of restaurant orders from an API. Each order has an id, customerName, status (pending, in-progress, completed), and timestamp.
We want to:
1.	Fetch and display the orders in a table.
2.	Allow filtering by status.
3.	Show newest orders first (descending timestamp).”
Requirements:
•	Use React (or your preferred frontend framework)
•	Data can be mocked with useEffect
•	You should focus on code structure, component logic, and readability
Bonus (if time allows):
•	Add a "Mark as Completed" button that updates the order’s status.
•	Indicate which orders were updated without a full refresh (e.g., UI badge or toast).
 
Example Input (mocked data):
[
	{ id: 1, customerName: 'Alice', status: 'pending', timestamp: 1722208320000 },
	{ id: 2, customerName: 'Bob', status: 'in-progress', timestamp: 1722211920000 },
	{ id: 3, customerName: 'Charlie', status: 'completed', timestamp: 1722197520000 }
]
 
💬 Part 3: System Design Discussion (10–15 min)
Prompt:
“How would you architect a responsive dashboard that supports:
•	Display list in a table
•	Sorting, filtering, and pagination(optional)
•	Mobile + desktop layout

Focus Areas: (optional)
•	Component structure
•	State management (e.g., React Context, Redux, Zustand)
•	Optimization (memoization, virtualization, debouncing)
•	API design & caching strategies (e.g., SWR, React Query)
 
🧠 Part 4: Behavioral Questions (10 min)
1.	“Tell me about a time when a bug slipped into production. How did you handle it?”
2.	“How do you balance speed and code quality under tight deadlines?”
3.	“Describe a technical decision you made that significantly improved performance or user experience.”
 
📌 Evaluation Rubric
Criteria	What We’re Looking For
Code Correctness	Component renders accurately, filters, sorts, and updates data
Clarity	Clean structure, readable logic, good naming conventions
React Best Practices	Hooks, effect management, keys in lists, etc.
Design Thinking	Ability to structure scalable UI and data flow
Communication	Clear thought process and ability to reason about decisions

🧠 What's Covered
•	✅ Functional React hook with only JavaScript
•	✅ useState and useEffect for state and mock API fetch
•	✅ Clean component structure and logic
•	✅ Conditional rendering of buttons
•	✅ Filter by status, sort by timestamp, and update logic
•	✅ A “Mark as Completed” button for eligible orders
•	✅ Clean and readable table UI
<img width="468" height="637" alt="image" src="https://github.com/user-attachments/assets/f4a0bbe8-e1e6-4dc3-a980-2bc953e3a7db" />
