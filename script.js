// === Part 1: Event Handling ===

// Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = 
    document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// === Part 2: Interactive Elements ===

// Click Counter
let count = 0;
const counterBtn = document.getElementById('counter-btn');
const countDisplay = document.getElementById('count');

counterBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// === Part 3: Form Validation ===

const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop form from refreshing the page
  let errors = [];

  // Validate Name
  if (nameInput.value.trim() === "") {
    errors.push("Name is required.");
  }

  // Validate Email with Regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Show messages
  if (errors.length > 0) {
    formMessage.textContent = errors.join(" ");
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  }
});
