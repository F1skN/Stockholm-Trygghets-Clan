// Enkel validering och bekräftelse innan formulär skickas

function setupForm(formId, messageId) {
  const form = document.getElementById(formId);
  const messageElem = document.getElementById(messageId);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      messageElem.textContent = "Vänligen fyll i alla obligatoriska fält korrekt.";
      messageElem.style.color = "#d32f2f";
      form.reportValidity();
      return;
    }

    // Disable button under skickning
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Skickar...";

    // Skicka formuläret via Netlify (standard form submit)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(() => {
        messageElem.style.color = "#388e3c";
        messageElem.textContent = "Tack! Ditt formulär har skickats.";
        form.reset();
      })
      .catch(() => {
        messageElem.style.color = "#d32f2f";
        messageElem.textContent = "Oj då, något gick fel. Försök igen senare.";
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Skicka";
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupForm("ansokanForm", "ansokanMessage");
  setupForm("kontaktForm", "kontaktMessage");
});