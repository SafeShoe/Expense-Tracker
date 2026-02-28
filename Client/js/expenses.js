function requireLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function logoutSetup() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("loggedIn");
      window.location.href = "login.html";
    });
  }
}

function getExpenses() {
  return JSON.parse(localStorage.getItem("expenses") || "[]");
}

function saveExpenses(expenses) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function renderExpenses() {
  const body = document.getElementById("expensesBody");
  if (!body) return;

  const expenses = getExpenses();
  body.innerHTML = "";

  expenses.forEach((exp) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${exp.title}</td>
      <td>$${Number(exp.amount).toFixed(2)}</td>
      <td>${exp.expense_date}</td>
      <td>${exp.notes || ""}</td>
      <td class="actions">
        <button data-id="${exp.expense_id}" class="editBtn">Edit</button>
        <button data-id="${exp.expense_id}" class="deleteBtn">Delete</button>
      </td>
    `;
    body.appendChild(tr);
  });

  document.querySelectorAll(".editBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      window.location.href = `edit-expense.html?id=${id}`;
    });
  });

  document.querySelectorAll(".deleteBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const filtered = getExpenses().filter(e => String(e.expense_id) !== String(id));
      saveExpenses(filtered);
      renderExpenses();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  requireLogin();
  logoutSetup();

  // Dashboard page
  renderExpenses();

  // Add expense page
  const addForm = document.getElementById("addExpenseForm");
  if (addForm) {
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const expenses = getExpenses();
      const newExpense = {
        expense_id: Date.now(),
        title: document.getElementById("title").value,
        amount: document.getElementById("amount").value,
        expense_date: document.getElementById("expense_date").value,
        notes: document.getElementById("notes").value
      };
      expenses.push(newExpense);
      saveExpenses(expenses);
      window.location.href = "dashboard.html";
    });
  }

  // Edit expense page
  const editForm = document.getElementById("editExpenseForm");
  if (editForm) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const expenses = getExpenses();
    const exp = expenses.find(e => String(e.expense_id) === String(id));

    if (exp) {
      document.getElementById("expense_id").value = exp.expense_id;
      document.getElementById("title").value = exp.title;
      document.getElementById("amount").value = exp.amount;
      document.getElementById("expense_date").value = exp.expense_date;
      document.getElementById("notes").value = exp.notes || "";
    }

    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const updated = expenses.map(e => {
        if (String(e.expense_id) === String(id)) {
          return {
            expense_id: e.expense_id,
            title: document.getElementById("title").value,
            amount: document.getElementById("amount").value,
            expense_date: document.getElementById("expense_date").value,
            notes: document.getElementById("notes").value
          };
        }
        return e;
      });
      saveExpenses(updated);
      window.location.href = "dashboard.html";
    });
  }
});