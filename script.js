document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };

    // Send data to webhook
    fetch("https://hooks.zapier.com/hooks/catch/17171049/3j3x8x8/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Form submitted successfully!");
        console.log("Success:", data);
      })
      .catch((error) => {
        alert("Error submitting form.");
        console.error("Error:", error);
      });
  });
