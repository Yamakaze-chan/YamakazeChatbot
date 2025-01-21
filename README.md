# **YamakazeChatbot**
# Introduction
This is a simple template to create your own chatbot without training or do anything too complicated. Add chatbot to your portfolio and impress interviewer:>
# Installation
You can copy file `Chatbot.js` and paste it into your project folder   
OR   
You can add this inside your `<head>` tag
```html
<script src="https://cdn.jsdelivr.net/gh/Yamakaze-chan/YamakazeChatbot/Chatbot.js"></script>
```
# Examples
You can use this chatbot with these lines of code
```js
let testChatbot = new Chatbot();

testChatbot.setTag("greeting");

testChatbot.setData("greeting", ["Hi", "Hello", "Hey"], ["Hi", "How do you do?"]);

console.log(testChatbot.getBotAnswer("Hiiiiiii"))
```
# Reference
### **Chatbot parameters**
- `tag`: Most impotant parameter. This parameter is define what kind of chatbot input and output.
- `pattern`: user's input of the defined tag
- `response`: this is the list of answer that chatbot will return after receive input from user.
- ...and you can define other paremeters if you want *(for example: function, value,...)*
### **Chatbot methods**
- `.getData(<tag>)`: this will return all of your chatbot data *(including tag, patterns, responses,...)*
- `.setData(<tag>, <pattern = undefined>, <response = undefined>, <action = undefined>)`: You can set data for your defined tag ***(This will remove your old data of your defined tag if it existed)***
- `.addData(<tag>, <pattern = undefined>, <response = undefined>, <action = undefined>)`: You can add more data for your defined tag
- `.setTag(<tag>)`: define your tag
- `.getAction(<tag>)`***(require action defined)***: You can get name of function that you set before
- `.setAction(<tag>, <action>)`: You can set the function you want to run for this tag
- `.getResponses(<tag>)`: get all responses of defined tag
- `.setResponses(<tag>, <response>)`: set reponses for your defined tag ***(This will remove your old data of your defined tag if it existed)***
- `.addResponses(<tag>, <response>)`: add data for defined tag responses
- `.getPatterns(<tag>)`: get all patterns of your defined tag
- `.setPatterns(<tag>, <pattern>)`: set patterns for your defined tag ***(This will remove your old data of your defined tag if it existed)***
- `.addPatterns(<tag>, <pattern>)`: add data for defined tag patterns
  
- `.getBotAnswer(<user_input>)`: return reponse based on user input *(return [tag, response, functionName?])*
# Caution
Please remember, this chatbot is not created for:
- use with large dataset
- commercial