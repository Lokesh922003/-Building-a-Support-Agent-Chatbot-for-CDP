document.getElementById('ask-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = '';
        getBotResponse(userInput);
    }
});

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('ask-btn').click();
    }
});

function addMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageContainer.textContent = message;

    document.getElementById('messages').appendChild(messageContainer);
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
}

function getBotResponse(question) {
    const responses = {
        'How do I set up a new source in Segment?': 'To set up a new source in Segment, go to your Segment workspace, click on "Sources" and follow the setup instructions.',
        'How can I create a user profile in mParticle?': 'To create a user profile in mParticle, log in to your account and navigate to the "Profiles" section.',
        'How do I build an audience segment in Lytics?': 'In Lytics, you can build an audience by going to the "Audiences" tab, and then click "Create Audience" to configure your segment.',
        'How can I integrate my data with Zeotap?': 'To integrate your data with Zeotap, follow their official integration guide available in the documentation.',
        'How does Segment’s audience creation process compare to Lytics?': 'Segment and Lytics both offer powerful tools for audience creation, but Segment uses event-based data, while Lytics focuses on behavior tracking.'
    };

    const response = responses[question] || "Sorry, I didn't understand that. Can you rephrase it?";
    setTimeout(() => addMessage(response, 'bot'), 1000);
}
