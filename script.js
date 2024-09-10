const capitals = {
    'india': 'New Delhi',
    'china': 'Beijing',
    'japan': 'Tokyo',
    'south korea': 'Seoul',
    'thailand': 'Bangkok',
    'vietnam': 'Hanoi',
    'indonesia': 'Jakarta',
    'malaysia': 'Kuala Lumpur',
    'singapore': 'Singapore',
    'philippines': 'Manila'
    // Add more countries and capitals as needed
};

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value.trim().toLowerCase();
    if (userInput === '') return;

    appendMessage(userInput, 'user-message');
    const response = getResponse(userInput);
    appendMessage(response, 'bot-message');
    
    inputField.value = '';
}

function appendMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = `message ${className}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(input) {
    const country = input.split('capital of ')[1];
    if (country && capitals[country]) {
        return `The capital of ${country.charAt(0).toUpperCase() + country.slice(1)} is ${capitals[country]}.`;
    } else {
        return "Sorry, I don't know the capital of that country.";
    }
}
