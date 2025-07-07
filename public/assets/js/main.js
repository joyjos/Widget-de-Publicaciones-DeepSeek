const textarea = document.querySelector(".widget__textarea");
const postsBox = document.querySelector(".widget__posts");

// Botón IA
document.querySelector(".widget__button--ia").addEventListener("click", async() => {
    textarea.value = "Generando...";

    try {
        const response = await fetch("/api/generate-post", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userPreferences: "Fútbol y Gastronomía"
            })
        });

        const data = await response.json();

        textarea.value = data.generatedText || "No se generó nada";

    } catch (error) {
        textarea.value = "Error al generar publicación";
    }
});

// Botón Publicar
document.querySelector(".widget__button--pub").addEventListener("click", () => {
    const postText = textarea.value.trim();

    if(postText.length > 0){
        const postArticle = document.createElement("article");
        postArticle.classList.add("widget__post");
        postArticle.textContent = postText;

        postsBox.prepend(postArticle);
        textarea.value = "";

        if( postsBox.children.length > ){
            postsBox.classList.add("scrollable");
        }
    }
})