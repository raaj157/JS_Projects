const expenses = [];

function addExpense() {
    const expenseDescription = document
        .getElementById("expenseInput")
        .value.trim();
    const expenseAmount = parseFloat(
        document.getElementById("amountInput").value
    );

    if (
        expenseDescription === "" ||
        isNaN(expenseAmount) ||
        expenseAmount <= 0
    ) {
        alert("Please enter a valid expense description and amount.");
        return;
    }

    expenses.push({
        description: expenseDescription,
        amount: expenseAmount,
    });

    document.getElementById("expenseInput").value = "";
    document.getElementById("amountInput").value = "";

    updateUI();
}

function removeExpense(index) {
    expenses.splice(index, 1);
    updateUI();
}

function updateUI() {
    const expenseList = document.getElementById("expenseList");
    const totalElement = document.getElementById("total");

    expenseList.innerHTML = "";

    let total = 0;
    expenses.forEach((expense, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                <span>${expense.description}</span>
                <span>$${expense.amount.toFixed(2)}</span>
                <i class="fas fa-trash delete-icon" onclick="removeExpense(${index})"></i>
            `;
        expenseList.appendChild(listItem);
        total += expense.amount;
    });

    totalElement.textContent = total.toFixed(2);
}