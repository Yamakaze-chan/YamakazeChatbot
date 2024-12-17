let testChatbot = new Chatbot();
testChatbot.setTag('a')
testChatbot.setData('a','who are you', ['I am Yama','Chatbot of Yamakaze']);
testChatbot.addResponses('a','b')
testChatbot.setData('a', ['b','c','d'],['nani?'], feighr)
// console.log(testChatbot.getData('a'))
testChatbot.getAction('a')()
console.log(testChatbot.data)
console.log(testChatbot.getBotAnswer('e', testChatbot.data)[1])
function feighr(variable) {
    console.log("____________________________________")
}