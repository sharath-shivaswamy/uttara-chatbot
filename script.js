const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage('User', message);
        userInput.value = '';
        // Here you would typically send the message to your backend
        // and receive a response. For this example, we'll just echo the message.
        setTimeout(() => addMessage('Bot', `You said: ${message}`), 1000);
    }
}

userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

sendButton.addEventListener('click', sendMessage);

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}