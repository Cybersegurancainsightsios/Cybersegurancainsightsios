const quizLink = document.getElementById("quiz");
const noticiasLink = document.getElementById("noticias");
const tipsLink = document.getElementById("dicas");
const noticiasDiv = document.getElementById("newscontainer");
const form = document.getElementById("send");
const userInput = document.getElementById("user");
const pwdInput = document.getElementById("pwd");
const news = document.querySelectorAll(".news");

tipsLink.addEventListener("click", function() {
    window.location.href = "../tips.html";
});

quizLink.addEventListener("click", function(){
    if (quizLink.textContent === "Notícias"){
        exibirNoticias();
    } else {
        exibirQuiz();
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Check if the fields are empty
    if (userInput.value.trim() === "" || pwdInput.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Save values in localStorage
        localStorage.setItem("usuario", userInput.value);
        localStorage.setItem("senha", pwdInput.value);

        // Redirect to warning.html
        window.location.href = "warning.html";
    }
});

function exibirQuiz() {
    quizLink.textContent = "Notícias";
    const h1 = document.querySelector(".quiz-title");
    const container = document.querySelector(".quiz-container");
    const newsElements = document.querySelectorAll(".news");

    // Adiciona a classe de fadeOut para os elementos de notícias
    newsElements.forEach(element => {
        element.classList.add("fadeOut");
        element.classList.remove("fadeIn");
    });

    container.style.display = "block";

    setTimeout(() => {
        newsElements.forEach(element => {
            element.style.display = "none";
        });

        h1.classList.remove("fadeOut");
        h1.classList.add("fadeIn");
        container.classList.remove("fadeOut");
        container.classList.add("fadeIn");
    }, 500); // Ajuste este valor para coincidir com a duração da sua animação de fadeOut

    noticiasDiv.style.marginBottom = "10rem";
}

function exibirNoticias() {
    quizLink.textContent = "Quiz";
    const h1 = document.querySelector(".quiz-title");
    const container = document.querySelector(".quiz-container");
    const newsElements = document.querySelectorAll(".news");

    h1.classList.remove("fadeIn")
    h1.classList.add("fadeOut")

    container.classList.remove("fadeIn")
    container.classList.add("fadeOut")

    h1.style.display = "none"
    container.style.display = "none"

    newsElements.forEach(element =>{
        element.style.display = "flex"
    })

    setTimeout(() => {
        newsElements.forEach(element=>{
            element.classList.remove("fadeOut")
            element.classList.add("fadeIn")
        })
    }, 500);

    noticiasDiv.style.marginBottom = "0"

}
