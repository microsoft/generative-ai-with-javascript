Here's the solution

```javascript 

// 1. Define the prompt
// ----------------------------------- 

const messages = [ 
{ 
    "role": "developer", 
    "content": "You're a helpful assistant here to assist Leonardo Da Vinci with the calculations and design of his inventions." 

}, {
  "role": "user",
  "content": "users prompt goes here"
}]; 

// 2. Create client
// -----------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. Send the request
// -----------------------------------

const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
});
  
console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content); 
```