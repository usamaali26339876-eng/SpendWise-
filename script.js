// ==========================================
// 1. STORE APPLICATION DATA (ARRAYS)
// ==========================================
// This array replaces single variables to hold multiple expense records
let expenses = [];
let monthlyBudget = 0;

// DOM Element Hooks (Grabbing items from the HTML webpage)
const budgetForm = document.getElementById('budget-form');
const expenseForm = document.getElementById('expense-form');
const budgetInput = document.getElementById('budget-input');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategorySelect = document.getElementById('expense-category');

const budgetDisplay = document.getElementById('budget-display');
const totalExpensesDisplay = document.getElementById('total-expenses-display');
const balanceDisplay = document.getElementById('balance-display');
const statusMessage = document.getElementById('status-message');
const balanceCard = document.getElementById('balance-card');
const expenseList = document.getElementById('expense-list');

// ==========================================
// 2. HANDLE USER INTERACTIONS (EVENT LISTENERS)
// ==========================================

// Event Listener for Budget Form Submission
budgetForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from reloading
    
    // Explicit string conversion using parseFloat() to ensure mathematical operations work
    monthlyBudget = parseFloat(budgetInput.value);
    
    updateDashboard();
    budgetInput.value = ''; // Clear input field
});

// Event Listener for Adding an Expense
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from reloading
    
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategorySelect.value;
    
    // Create an object structure to hold our record data
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };
    
    // Push our new object record directly into our array collection
    expenses.push(newExpense);
    
    updateDashboard();
    expenseForm.reset(); // Clear input elements automatically
});

// ==========================================
// 3. PROCESS DATA WITH LOOPS & 4. UPDATE DOM
// ==========================================
function updateDashboard() {
    let totalExpenses = 0;
    
    // LOOP: Iterates through the array to add up individual expense amounts
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }
    
    let remainingBalance = monthlyBudget - totalExpenses;
    
    // DOM MANIPULATION: Push results directly onto the webpage layout
    budgetDisplay.textContent = `$${monthlyBudget.toFixed(2)}`;
    totalExpensesDisplay.textContent = `$${totalExpenses.toFixed(2)}`;
    balanceDisplay.textContent = `$${remainingBalance.toFixed(2)}`;
    
    renderExpenseList();
    evaluateBudgetConditionals(monthlyBudget, remainingBalance);
}

// Sub-render loop that populates our table ledger UI
function renderExpenseList() {
    expenseList.innerHTML = ''; // Clear prior elements out first
    
    // LOOP: Process array data objects one by one to create table rows
    for (let i = 0; i < expenses.length; i++) {
        const item = expenses[i];
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td>${item.category}</td>
            <td>$${item.amount.toFixed(2)}</td>
            <td><button class="btn btn-danger" onclick="deleteExpense(${item.id})">Delete</button></td>
        `;
        
        expenseList.appendChild(row);
    }
}

// ==========================================
// 5. DECISION MAKING (CONDITIONALS)
// ==========================================
function evaluateBudgetConditionals(budget, balance) {
    balanceCard.classList.remove('warning-state', 'danger-state');
    
    if (budget === 0) {
        statusMessage.textContent = "Please set an initial budget budget goal.";
    } 
    else if (balance < 0) {
        // Condition checking if balance has dropped below zero
        balanceCard.classList.add('danger-state');
        statusMessage.textContent = "Warning: Overdraft budget limits breached!";
    } 
    else if (balance <= (budget * 0.2)) {
        // Condition checking if low on budget funds (under 20% left)
        balanceCard.classList.add('warning-state');
        statusMessage.textContent = "Caution: Critical budget thresholds reached (under 20% left).";
    } 
    else {
        statusMessage.textContent = "Status: Sound tracking margins maintained.";
    }
}

// Handler mapping object record deletions on button clicks
window.deleteExpense = function(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateDashboard();
};
