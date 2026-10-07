# 💵 SpendWise - Budget Tracker Foundation

SpendWise is a personal finance web application designed to help users manage their money effectively. This phase focuses on establishing a robust data processing system using core JavaScript architecture.

---

## 🛠️ JavaScript Implementation

This project implements fundamental JavaScript concepts to process, calculate, and manage budgeting inputs dynamically.

### 1. Concept Summary
* **Variables & Scope**: Built with modern `let` blocks to allow fluid, programmatic value reassignment based directly on incoming user interaction streams.
* **Data Types**: Captures structural string inputs and processes them into high-precision floating-point numbers (`numbers`) for reliable balance calculations.
* **User Input**: Captures incoming numerical data directly via browser prompts.
* **Calculations**: Uses standard arithmetic operators to evaluate data balances.
* **Functions**: Modules logic into clear, standalone blocks for better reuse and structure.

---

## 💻 Code System Overview

### How Variables Are Used
* **`globalBudget`**: A memory variable tracking the user's total available operational money pool.
* **`globalExpenses`**: Tracks total combined expense overhead strings cast down into floating numbers.
* **`remainingBalance`**: Isolated localized variable evaluating calculated liquid surplus values.

### How User Input is Collected
* Captured via standard browser-level interaction fields via `prompt()`.
* Safely wrapped into `parseFloat()` conversion handlers to strip away plain character strings, rendering numbers optimized for clean computation.
* Sanitized via `isNaN()` fallback checking to instantly balance corrupted or unentered values cleanly down to safe integer levels (`0`).

### How Calculations are Performed
* Simple arithmetic subtraction (`-`) is utilized inside evaluation methods.
* High-precision float constraints via `.toFixed(2)` format outputs to match standardized monetary notation patterns.

### How Functions Organize Code
* **`calculateBalance()`**: Pure processing method dedicated strictly to executing subtraction architecture safely without changing outside variables directly.
* **`runSpendWise()`**: Orchestrates application operational life cycles, binding runtime triggers, handling parameter checking, and handling interface printouts.

---

## 🚀 Execution Instructions
1. Open `index.html` inside any mainstream modern browser engine.
2. Provide test values into the prompt window triggers sequentially.
3. Open the browser's developer inspector panels via **Right-Click -> Inspect -> Console** to analyze logs.
