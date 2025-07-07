const textarea = document.querySelector(".widget__textarea");

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