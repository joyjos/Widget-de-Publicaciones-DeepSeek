# Publications Widget
Generador automático de publicaciones usando **Inteligencia Artificial**.

Esta aplicación permite crear publicaciones breves sobre una temática específica (como salud, inteligencia artificial o viajes) utilizando el modelo **DeepSeek**. El resultado se presenta como un widget que puede integrarse fácilmente en cualquier página web.

- Uso de la API de DeepSeek mediante clave secreta (`DEEPSEEK_API_KEY`)

## Table of Content
-  [*01 Installation*](#section_01)
-  [*02 Languages and Technologies*](#section_02)
-  [*03 API Endpoints*](#section_03)
-  [*04 Notes*](#section_04)
-  [*05 Author*](#section_05)
-  [*06 License*](#section_06)
  
<br>

<a id="section_01"></a>
## *01 Installation*

- Clone the repository:

  ~~~
  git clone https://github.com/joyjos/Widget-de-Publicaciones-DeepSeek
  cd Widget-de-Publicaciones-DeepSeek
  ~~~

- Install `node_modules`:
  
  ~~~
  npm install
  ~~~

  - Configure your DeepSeek key in the `.env` file:

  ~~~
  DEEPSEEK_API_KEY = your_key_here
  ~~~

- Run the application:
  
  ~~~
  npm start
  ~~~

  - Abre en tu navegador: `http://localhost:3000`

<br>

<a id="section_02"></a>
## *02 Languages and Technologies*

### FrontEnd
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### BackEnd
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### APIs and services
![OpenAI](https://img.shields.io/badge/OpenAI_API-000000?style=for-the-badge&logo=openai&logoColor=white)
![DeepSeek](https://img.shields.io/badge/model-deepseek--chat-blueviolet?logo=deepnote&logoColor=white)

### Version control
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

### Other tools
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

<br>

<a id="section_03"></a>
## *03 API Endpoints*

| HTTP Method | Endpoint           | Comment                       |
|-------------|--------------------|----------------------------------|
| POST        | /api/generate-post | Generate Post                    |

<br>

<a id="section_04"></a>
## *04 📌 Notes*

Esta aplicación utiliza el modelo "deepseek-chat" del endpoint "api.deepseek.com/v1/chat/completions" de la API de DeepSeek.

Requiere una cuenta activa en DeepSeek.

<br>

<a id="section_05"></a>
## *05 🧑‍💻 Author*

Proyecto desarrollado por **JOYJOS** como parte del curso de Udemy:  
_“Desarrollo Web con IA: OpenAI, DeepSeek, JavaScript y NodeJS”_

<br>

<a id="section_06"></a>
## *06 📜 License*

Este proyecto está disponible bajo la licencia [MIT](LICENSE).