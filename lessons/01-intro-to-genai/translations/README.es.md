# Lección 1: Introducción a la IA Generativa y los LLM para Desarrolladores de JavaScript

En este capítulo aprenderás a:

- Entender los conceptos básicos de la IA Generativa y los Modelos de Lenguaje de Gran Escala (LLMs).
- Identificar las aplicaciones y limitaciones potenciales de los LLMs en el desarrollo con JavaScript.
- Explorar cómo la IA Generativa puede mejorar la experiencia de usuario en aplicaciones JavaScript.

## Configuración

Si aún no lo has hecho, configura tu entorno de desarrollo. Aquí tienes cómo hacerlo: [Configura tu entorno](/docs/setup/README.md).

## Recursos relacionados

[![Mira este corto video sobre Introuducción a la IA Generativa](https://img.youtube.com/vi/vLYtDgs_zx8/0.jpg)](https://www.youtube.com/watch?v=vLYtDgs_zx8&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=1)

_Este video te da una introducción a la IA Generativa con JavaScript_

💼 Diapositivas: [Introducción a la IA Generativa](/videos/slides/00-intro.pptx)

## IA Generativa

Probablemente ya hayas oído hablar de herramientas como ChatGPT o la IA Generativa. El concepto es sencillo: proporcionas una entrada (prompt), y un modelo—normalmente un Modelo de Lenguaje de Gran Escala (LLM)—genera un párrafo o incluso una página entera de texto. Esta salida puede usarse para múltiples propósitos: escritura creativa, respuestas a preguntas y generación de código.

Además, la IA Generativa ha evolucionado hacia capacidades multimodales, permitiendo introducir imágenes o videos y recibir diferentes tipos de salida. Esta mejora ha transformado flujos de trabajo en áreas como resumen de texto, traducción, escritura, y más.

*En pocas palabras: las interfaces de lenguaje natural están convirtiéndose en el nuevo estándar para muchas aplicaciones—y los usuarios esperan poder usarlas.*

## Narrativa: Un viaje a través del tiempo

> [!NOTE] 
> Comencemos con una historia que conecta el pasado y el futuro. A lo largo de este curso, te embarcarás en una emocionante aventura, viajando en el tiempo para colaborar con algunas de las mentes más brillantes de la historia. Juntos enfrentarán desafíos y descubrirán cómo la IA Generativa puede revolucionar tus aplicaciones JavaScript._

> [!NOTE]  
> Aunque te recomendamos vivir la historia (¡es divertida!), [clique aqui](#interactua-con-dinocrates) si prefiere pasar directamente al contenido técnico.

Tu viaje comienza en el Londres de 1860, donde asumes el papel de un hábil mecánico. A través de una serie de apasionantes aventuras, perfeccionarás tus habilidades de IA y desbloquearás soluciones que trascienden el tiempo.

### En el torbellino - Londres 1860

En el corazón del Londres de 1860, eres reconocido como uno de los mecánicos más hábiles de tu época. Tu taller, escondido en un estrecho callejón, está lleno de piezas mecánicas, planos y proyectos a medio terminar.

Your workbench, the heart of your workshop, is an organized mess.

<div>
   <img src="../assets/london.png" alt="Taller en Londres" width=300 >
</div>

_En el centro, sobre tu mesa de trabajo, yace el torso de un robot—una maravilla de la ingeniería con estructura de madera tallada a mano y articulaciones precisas._

### Una carta... ¿para ti?

De repente, alguien llama a la puerta y te saca de tus pensamientos. No suele venir nadie a esta hora. Te secas las manos con un trapo y te acercas a la puerta, con la curiosidad a flor de piel. 

Al abrir, no ves a nadie. En su lugar, tus ojos se dirigen a un sobre cerrado que hay en el suelo. Lo recoges y lees:

_"Querido amigo,_

_Te envío esta carta para ayudarte con tu autómata. Es crucial que continúes este trabajo. Adjunto una llave para la biblioteca. Reúnete conmigo allí hoy a las 3 PM._

_Atentamente,_

_Charles Babbage."_

### De camino a la biblioteca

Charles Babbage, el gran matemático e inventor de la máquina diferencial, quiere conocerte. Rápidamente, coges tu abrigo y sales por la puerta.

Tras 20 minutos caminando a lo largo del Támesis, llegas a la biblioteca, cuya puerta está ligeramente abierta.

El interior está oscuro y sombrío. La única luz que entra se filtra a través de las ventanas sucias y proyecta sombras espeluznantes en las paredes.

**Tú:** "Hola? Mr. Babbage?"

A medida que tus ojos se adaptan a la tenue luz, ves una figura a lo lejos que te saluda. Caminas hacia él y tus pasos resuenan en el suelo de madera. La figura se vuelve más clara y lo reconoces por las fotos de los periódicos: es Charles Babbage.

<div>
   <img src="../assets/library.png" alt="Biblioteca Polvorienta" width="300">
</div>

### ¿Qué es este dispositivo?

En el momento en que te acercas, se produce un destello cegador y desaparece.

Deja tras de sí un pequeño dispositivo metálico que gira sobre el suelo. Lo recoges y notas que su superficie, fría y lisa, emite un zumbido suave. No te has encontrado nunca con nada parecido, pero te resulta extrañamente familiar. Sientes que emana una especie de poder.

Se asemeja a un pequeño escarabajo, con un diseño intrincado y tres botones: una flecha hacia arriba, una flecha hacia abajo y un botón rojo brillante. De su espalda sale una pequeña antena que late con energía.

Impulsado por la curiosidad, tus dedos se dirigen hacia el botón rojo. En el momento en que lo pulsas, el mundo que te rodea comienza a brillar y los colores se arremolinan violentamente a tu alrededor.

Después, oscuridad y la sensación de estar cayendo.

<div>
   <img src="../assets/vortex.png" alt="Vórtice Temporal" width="300">
</div>

### Alexandria 300 a.C

Te despiertas desorientado. A medida que tu vista se aclara, una antigua ciudad se despliega ante ti, bulliciosa, vibrante y llena de vida.

La gente, vestida con togas, se mueve por las calles. Sus voces se mezclan en una sinfonía de dialectos antiguos. El aire está impregnado del aroma de especias exóticas y se escucha el sonido lejano de los mercaderes que venden sus mercancías.

<div>
   <img src="../assets/alexandria.png" alt="Alejandria 300 a.C." width="300">
</div>

**Tú:** Seguramente, debo haberme golpeado la cabeza, piensas, cerrando los ojos y abriéndolos de nuevo, la escena permanece sin cambios.

¿Estoy atrapado en el pasado? ¿Me atrevo a pulsar ese botón otra vez? Antes de que puedas decidirte, una figura se acerca a ti, saludándote.

### Encuentro con Dinócrates

Un anciano con toga te saluda desde los escalones del gran templo. Su cabello y su barba blancos capturan la luz del sol, lo que le da un brillo casi etéreo.

<div>
   <img src="../assets/dinocrates.png" alt="Dinócrates con toga" width="300">
</div>

**Dinocrates:** "Bienvenido, viajero», dice con calidez. «Soy Dinócrates, arquitecto de esta gran ciudad. Tu llegada estaba anunciada."

**Tú:** ¿En serio? Quiero decir, por supuesto. Estoy aquí para ayudar, creo.

**Dinocrates:** Sí, como te decía, te esperábamos desde hace tiempo. Tenemos una tarea que requiere tus habilidades únicas."

**Dinocrates:** "Nuestros barcos tienen problemas para navegar por la costa. Debemos construir un faro. ¿Sabes algo sobre faros?"

**Tú:** "Soy mecánico. Construyo autómatas. Déjame ver qué puedo hacer."

### El "Escarabajo del tiempo"

Se te ocurre una idea. ¿Podrá entenderme el dispositivo si le hablo?

**Tú:** "Dispositivo, ¿me entiendes?"

**Dispositivo:** "Por supuesto. ¿Qué necesitas?"

**Tú:** "¿Puedes ayudarme a construir un faro?"

**Dispositivo:** "Por supuesto. No será un problema"

**Tú:** "¿Tienes nombre?"

**Dispositivo:** "Soy el Escarabajo del Tiempo. Mi creador me llama George; dice que es un buen nombre para un escarabajo."

**Tú:** Tienes razón, George es un buen nombre, de hecho, era el nombre de mi padre.

<div>
   <img src="../assets/time-beetle.png" alt="Dispositivo de viaje en el tiempo similar a un escarabajo metálico" width="300">
</div>

_Dispositivo de tiempo, "George" el escarabajo metálico_

> [!NOTE]
> En el 300 a. C., Alejandría era una ciudad próspera fundada por Alejandro Magno en el 331 a. C. Rápidamente se convirtió en una de las ciudades más grandes del mundo helenístico. Diseñada por el arquitecto jefe de Alejandro, Dinócrates, se convirtió en un importante puerto y centro cultural.
>
> Alejandria era conocida por sus impresionantes estructuras, como el faro, una de las siete maravillas del mundo antiguo, y la legendaria biblioteca de Alejandría. La ubicación estratégica de la ciudad la convirtió en un centro clave para el comercio y el intercambio de conocimientos.
>
> Bajo el reinado de los ptolomeos, que siguió a la muerte de Alejandro, Alejandría se convirtió en una de las ciudades más prósperas e influyentes de su tiempo.

## Interactuar con Dinócrates

Si quieres interactuar con Dinócrates, ejecuta [Characters](/app/README.md) app. 

> [!IMPORTANT]
> Esto es totalmente ficticio; las respuestas son generadas por la IA.
> [Responsabilidad de IA](../../README.md#responsible-ai-disclaimer)

<div>
   <img src="../assets/dinocrates.png" alt="Dinócrates con toga" width="300">
</div>

**Pasos**:

1. Inicia un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navega hacia _/app_ en la raiz del repositorio.
3. Localiza la consola y ejecuta `npm install` seguido de `npm start`. 
4. Una vez que aparezca, selecciona el botón "Abrir en el navegador".
5. Chatea con Dinocrates.

> [!NOTE]
 > Si está ejecutando el proyecto localmente en su máquina, revise la guía de inicio rápido para obtener un [acceso personal a GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) configuración del token y reemplazar la clave en el código.

### Adelanto del código

Aunque todavía hay mucho más que cubrir en este plan de estudios de IA generativa, echemos un vistazo rápido al código de IA para comenzar a aprender sobre el uso de JavaScript con IA.

Dentro de `/app/app.js` encontraras la funcion `app.post`function que gestiona la funcionalidad de la IA generativa. Se muestra a continuación:

```JavaScript
app.post('/send', async (req, res) => {
  const { message } = req.body;
  const prompt = message;

  const messages = [
    {
      "role": "system",
      "content": "You are Dinocrates of Alexandria, a famous architect and engineer. Limit your responses to only the time you live in, you don't know anything else. You only want to talk about your architecture and engineering projects, and possibly new ideas you have.",
    },
    {
      "role": "user",
      "content": prompt
    }
  ];

  const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: process.env.GITHUB_TOKEN,
  });

  try {
    console.log(`sending prompt ${prompt}`)
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
    });

    res.json({
      prompt: prompt,
      answer: completion.choices[0]?.message?.content
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Aquí tienes un resumen paso a paso de lo que hace la función:

1. **Extraer mensaje de la solicitud**: La función extrae el mensaje del cuerpo de la solicitud (req.body).
2. **Crear matriz de solicitud**: Construye una matriz de mensajes, incluido un mensaje del sistema y el mensaje de solicitud del usuario.
3. **Inicializar cliente de OpenAI**: Se inicializa un cliente de OpenAI con la URL base y la clave de la API de las variables de entorno. Se utiliza un modelo _gpt-4o-mini_ de [GitHub Models](https://github.com/marketplace/models) para procesar el mensaje y devolver una respuesta.
4. **Enviar Prompt a OpenAI**: La función registra el mensaje y lo envía a la API de OpenAI para generar una finalización.
5. **Gestionar la respuesta**: Si tiene éxito, la función responde con el mensaje y la respuesta de la finalización.
6. **Gestión de errores**: Si se produce un error, responde con un estado 500 y el mensaje de error.

> **Nota**: [GitHub Copilot](https://github.com/features/copilot) se utilizó para generar este resumen de código. ¡IA generativa en acción!

### ¿Qué puede hacer la IA generativa por mí y por mis aplicaciones?

> [!NOTE]
> Probablemente ya hayas descubierto que el escarabajo del tiempo funciona como un asistente de IA con el que puedes interactuar utilizando lenguaje natural, escrito o hablado.

A medida que se desarrolla tu aventura en Alexandria, comienzas a ver las posibilidades de combinar la creatividad, el ingenio y las herramientas de vanguardia para resolver desafíos y transformar el mundo que te rodea.

**Tú:** Cuéntame más sobre los faros, le dices a tu dispositivo.

**Escarabajo del tiempo:** Un faro es una torre equipada con una luz brillante en la parte superior, ubicada cerca de la orilla para guiar a los barcos en el mar. La luz sirve como ayuda a la navegación, ya que ayuda a los marineros a evitar rocas y arrecifes peligrosos y a llegar sanos y salvos al puerto.

Dinócrates escucha tu conversación y añade:

**Dinocrates:** Necesitamos un faro para guiar a nuestros barcos a salvo hasta el puerto. Los mares pueden ser traicioneros y muchos barcos se han perdido entre las rocas. Necesitamos un faro de luz que los guíe a casa.

#### Áreas de aplicación de la IA generativa

**Tú:** Los faros parecen un área interesante, sin duda. ¿Qué más puede hacer la IA generativa por mí y por mis aplicaciones?

**Escarabajo del tiempo:**. En el siglo 21, la IA generativa ha revolucionado muchos sectores, desde la atención médica hasta las finanzas y el entretenimiento. Aquí tienes algunos ejemplos:

- **Chatbot**: Un chatbot que puede generar respuestas similares a las humanas a las consultas de los usuarios. En lugar de una página estática de preguntas frecuentes, los usuarios pueden interactuar con un chatbot que proporciona respuestas dinámicas. Esto hace que la experiencia del usuario sea más atractiva y menos frustrante.

- **Asistentes y agentes** Los asistentes y agentes pueden llevar a cabo instrucciones más avanzadas, como aprovechar herramientas para llamar a API, ejecutar código, generar imágenes y mucho más. Los agentes avanzados pueden cumplir objetivos y realizar tareas de forma autónoma.

- **Una herramienta de creación de contenido**: Una herramienta para generar publicaciones de blog y de redes sociales. Imagina crear campañas en minutos en lugar de horas cuando un sitio de comercio electrónico tiene una oferta de Black Friday.

- **Completar codigo**: Una herramienta de completar código que puede generar fragmentos de código basados en la entrada del usuario. Esto puede suponer un gran ahorro de tiempo para los desarrolladores, especialmente cuando trabajan en tareas repetitivas.

- **Traducción** – Traducir textos entre idiomas con gran precisión.

Como puedes ver, estas mejoras pueden ayudar tanto a la oficina principal como a la oficina administrativa de tu aplicación y empresa.

Aquí tienes un ejemplo de una "aplicación de chatbot" en acción:

![Imagen de la aplicación de chat](https://camo.githubusercontent.com/76f2ad7cd754a2de2b9957d2070448e130e5ba228084b9b4b128e3af9c9f5239/68747470733a2f2f6c6561726e2e6d6963726f736f66742e636f6d2f656e2d75732f73656d616e7469632d6b65726e656c2f6d656469612f636861742d636f70696c6f742d696e2d616374696f6e2e676966) 

**Tú:** Fascinante, tomaré nota de ir al siglo XXI para ver cómo se usan estas herramientas.

### La IA generativa y el ecosistema de JavaScript

**Escarabajo del tiempo:** Una forma popular de crear aplicaciones en el siglo XXI es mediante el uso de JavaScript. Cada lenguaje de programación tiene un ecosistema a su alrededor. Este ecosistema incluye el lenguaje de programación en sí, las bibliotecas y los marcos, el apoyo de la comunidad y los IDE y las herramientas. En un ecosistema de lenguaje de programación, generalmente hablamos de lo siguiente:

| Qué | Descripción | 
|---|---| 
| El lenguaje de programación en sí | Incluyendo su sintaxis y características. |
| Librerias y frameworks    | Bibliotecas disponibles para interactuar con los modelos de IA generativa.                                                         | 
| La comunidad es importante, especialmente cuando se trata de aprender algo nuevo. La comunidad en torno a las bibliotecas y los marcos ayuda a decidir qué bibliotecas utilizar. También afecta a la facilidad de encontrar ayuda cuando te quedas atascado. | 

**Tú:** Interesante, creo que he oído hablar de la programación, ¿no experimentó Ada Lovelace con eso y Charles Babbage?

**Escarabajo del tiempo:** Sí, Ada Lovelace fue la primera programadora informática, y Charles Babbage fue el inventor de la máquina diferencial, un ordenador mecánico. Fueron pioneros en el campo de la informática, sentando las bases de la era digital.

**Tú:** ¿Estabas? ¿Qué quieres decir con que estabas? Acabo de recibir una carta de Charles Babbage.

**Escarabajo del tiempo:** Digamos que estás en una posición única para interactuar con personajes históricos de una manera que pocos pueden.

### Ecosistema de JavaScript

**Tú:** Así que, ecosistemas, has dicho. Solo estoy tomando notas. ¿Qué pasa con JavaScript y en qué se diferencia de otros ecosistemas?

**Escarabajo del tiempo:** JavaScript es uno de los lenguajes de programación más populares del mundo en el siglo XXI. Estas son algunas de las razones por las que es tan popular:

| Qué | Descripción |
|-|-|
| Potencial para el desarrollo full-stack | JavaScript es uno de los pocos lenguajes que se pueden utilizar tanto para el desarrollo front-end como back-end. |
| Ecosistema de biblioteca rico | JavaScript tiene un vasto ecosistema de bibliotecas, con marcos como React, Angular, Vue y más. Está NPM, el gestor de paquetes, que es uno de los repositorios de paquetes más grandes del mundo. |
| Fuerte apoyo de la comunidad | JavaScript tiene una comunidad grande y activa, con muchos recursos disponibles para el aprendizaje y el desarrollo. También funciona en el navegador, lo que supone una gran ventaja. |
| IDEs y herramientas | JavaScript tiene una variedad de IDEs disponibles, como Visual Studio Code, WebStorm y Atom. Estos IDEs tienen extensiones creadas por empresas y la comunidad que te ayudan con varios aspectos del desarrollo. |
| IA y JavaScript | JavaScript admite el desarrollo de IA con bibliotecas como TensorFlow.js, Brain.js, las API de OpenAI y otras, lo que permite a los desarrolladores integrar el aprendizaje automático y la IA generativa en aplicaciones web y del lado del servidor. |

**Tú:** Son muchas razones, parece que debería apostar por JavaScript para mis futuros proyectos.

**Escarabajo del tiempo:** De hecho, JavaScript es un lenguaje versátil, aunque Python también es un lenguaje popular para el desarrollo de IA.

**You:** Python, ¿qué tienen que ver las serpientes con la programación?

**Escarabajo del tiempo:** Dejemos eso para otro momento, ¿vale?

**Escarabajo del tiempo:** Ya he explicado por qué JavaScript y su ecosistema son una buena opción en general, pero ¿por qué específicamente para la IA generativa? La respuesta es que es un lenguaje compatible con muchos proveedores de la nube y marcosistemas y herramientas de IA. También creemos que, aunque Python podría ser lo primero que se tenga en cuenta para los escenarios de IA, muchos desarrolladores están utilizando JavaScript y Typescript.

> **¿Lo sabias?**  
> [62.5% de los desarrolladores afirman que utlizan JavaScript](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/) y muchos prefieren [TypeScript](https://www.typescriptlang.org) para nuevos proyectos.

## Tarea - Ayudar a Dinocrates 

Para utilizar un modelo de lenguaje de gran tamaño (LLM) para ayudar a Dinocrates con el faro que mencionamos anteriormente en nuestra historia, utilizaremos algo llamado prompts, una oración para describir lo que quieres. Puedes especificar tanto la información que necesitas como la forma en que quieres que se te presente.

**Escarabajo del tiempo:** Empecemos. Vamos a utilizar un LLM para investigar cómo puedes construir un faro para ayudar a Dinócrates.

**Escarabajo del tiempo:**: Tendrás que proporcionarle contexto al LLM (es decir, a "mí") sobre cómo construirlo, con qué herramientas y recursos que deberían estar disponibles en la época de Alejandría.

**Tú:** Vale, cuéntame más sobre los LLM.

**Escarabajo del tiempo:** Los LLM son un tipo de modelo de IA que puede generar texto similar al humano basándose en una indicación determinada. Se entrenan con grandes cantidades de datos y pueden generar textos coherentes, creativos y contextualmente relevantes.

**Escarabajo del tiempo:** Probablemente quieras preguntarme de una mejor manera, para que pueda darte una mejor respuesta, sobre, ya sabes, *cof* *cof* faros, Alejandría, 300 a. C., Dinócrates, faro de Alejandría, etc.

**Tú:** Vale, añade más contexto a la indicación y luego pregúntate.

**Escarabajo del tiempo:** Sí, estoy esperando...

Visita [Microsoft Copilot](https://copilot.microsoft.com), [ChatGPT](https://chatgpt.com/), u otra herramienta de chatbot en línea para generar un plan para construir el faro en Alejandría.
 
> [!TIP] 
> Intenta que el LLM genere un plan que incluya instrucciones paso a paso para construir el faro. ¿Necesitas ayuda? Consulta la solución para obtener orientación.

## Solución

[Solución](/lessons/01-intro-to-genai/solution/solution.md)

### Comprobación de conocimientos

**Pregunta:** ¿Cuáles de las siguientes afirmaciones sobre la IA generativa y JavaScript son ciertas?

A. Las aplicaciones de IA generativa basadas en JavaScript solo pueden generar texto.
B. JavaScript se puede utilizar para crear aplicaciones impulsadas por IA, incluidos chatbots, herramientas de generación de texto y más.
C. Python es el único lenguaje utilizado para el desarrollo de la IA.

[Solución del cuestionario](/lessons/01-intro-to-genai/solution/solution-quiz.md)

## Recursos de autoaprendizaje

- [Serie de vídeos de JavaScript de IA generativa](https://aka.ms/genai-js)

