
console.log("JavaScript funcionando!");

const input = document.getElementById("url");

const form = document.getElementById("shortenForm");

const resultado = document.createElement("div");

form.insertAdjacentElement("afterend", resultado);

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const url = input.value;

    if (url === "") {

        resultado.textContent = "Digite uma URL.";

    } else {

        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let codigo = "";

        for (let i = 0; i < 5; i++) {

            codigo += caracteres[Math.floor(Math.random() * caracteres.length)];

        }

        resultado.replaceChildren();

        const texto = document.createElement("p");

        texto.textContent = "Seu código curto: " + codigo;

        const linkOriginal = document.createElement("a");

        linkOriginal.href = url;

        linkOriginal.textContent = "Acessar link original";

        linkOriginal.target = "_blank";

        linkOriginal.rel = "noopener noreferrer";

        const botao = document.createElement("button");

        botao.type = "button";

        botao.textContent = "Copiar código";

        botao.addEventListener("click", async function() {

            try {

                await navigator.clipboard.writeText(codigo);

                botao.textContent = "Copiado!";

            } catch {

                resultado.querySelector("p").textContent = "Não foi possível copiar o código.";

            }

        });

        resultado.appendChild(texto);

        resultado.appendChild(linkOriginal);

        resultado.appendChild(botao);

        console.log("URL recebida:", url);

        console.log("Código:", codigo);

    }

});
