// Importar dependencias
import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

// Cargar configuración API Key
dotenv.config();

// Cargar Express
const app = express();
const PORT = process.env.PORT || 3000;

// Servir FrontEnd
app.use("/", express.static("public"));

// Middleware para procesar JSON (convierto JSON a un Objeto de JavaScript)
app.use(express.json());

// Instancia de OpenAI y pasarle el API Key
const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.DEEPSEEK_API_KEY
});

console.log("API KEY:", process.env.DEEPSEEK_API_KEY);
console.log("***BASE URL***", openai.baseURL);

// Ruta/endpoint/url
app.post("/api/generate-post", async(req, res) => {

    const {userPreferences} = req.body;

    try {

        let promptSystem = `
            Eres un experto en redes sociales y eres capaz de escribir publicaciones
            muy creativas.

            El usuario te va a mandar sus preferencias, gustos personales o temáticas
            de las que suele hablar, y tú como su asistente experto debes crear
            un texto para una publicación de máximo 177 caracteres (basado en los gustos
            del usuario).

            Los textos deben tener un toque ácido o humorístico, incluso puedes
            incluir datos curiosos o divulgativos.

            Alterna el tipo de publicación.

            Las publicaciones no tienen por qué cubrir todos los gustos del usuario,
            pueden ser dedicadas a solo uno de esos gustos.

            RECORDATORIO IMPORTANTE: Nunca debes generar texto con más de 177 letras.
        `;

        const completion = await openai.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                {role: "system", content: promptSystem},
                {role: "user", content: "Genera un texto de una de estas temáticas, creativo y diferente: " + userPreferences}
            ],
            max_tokens: 500
        });

        const response = completion.choices[0].message.content;

        return res.json({generatedText: response});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error generando publicación"
        });
    }
});

// Servir el BackEnd
app.listen(PORT, () =>  {
    console.log("Servidor corriendo correctamente en http://localhost:" + PORT);
});