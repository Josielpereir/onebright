document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("form", data);
    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa o formulário após o envio
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao enviar a mensagem.");
      });
  });
});
