// Функция, отправляющая сообщение пользователя боту.
function SendMessageUser() {
    lastMessage = textArea.value;

    textArea.value = '';
    sendImage.src = '../images/disabledMessageButton.svg';

    messages.append(createNewMessage(lastMessage, 'user'));

    messages.scrollTop = messages.scrollHeight;

    sendMessageBot()
}

function sendMessageBot() {
    if (!isDialogueStarted) {
        if (lastMessage == '/start') {
            messages.append(createNewMessage('Привет, меня зовут Чат-бот, а как зовут тебя?', 'bot'));
            isDialogueStarted = true;
        } else {
            messages.append(createNewMessage('Введите команду /start, для начала общения', 'bot'));
        }
    }

    messages.scrollTop = messages.scrollHeight;
}

// Функция, создающая новое сообщение.
function createNewMessage(messageText, sender) {
    var avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.innerHTML = `<img src="../images/${sender}Avatar.svg" alt="${sender}">`;

    var userMessage = document.createElement('div');
    userMessage.className = `message ${sender}-message`;

    var messageContent = document.createElement('div');
    messageContent.className = 'message-text';

    var newUserMessage = document.createElement('div');
    newUserMessage.className = `${sender}-message-wrapper message-wrapper`;

    messageContent.append(messageText);
    userMessage.append(messageContent);
    newUserMessage.append(avatar);
    newUserMessage.append(userMessage);

    return newUserMessage;
}