// Функция, отправляющая сообщение пользователя боту.
function SendMessageUser() {
    lastMessage = textArea.value.trim();

    textArea.value = '';
    sendImage.src = '../images/disabledMessageButton.svg';

    messages.append(CreateNewMessage(lastMessage, 'user'));

    messages.scrollTop = messages.scrollHeight;

    sendMessageBot()
}

// Функция, отправляющая ответ бота пользователю.
function sendMessageBot() {
    chooseOperator.style.display = 'none';

    if (lastMessage == '/stop') {
        EndDialogue();
    }
    else {
        if (!isDialogueStarted) {
            StartDialogue();
        } else {
            if (lastMessage == '/start') {
                messages.append(CreateNewMessage('Мы с тобой уже разговариваем :) Введи другую команду!', 'bot'));
            } else if (lastMessage.indexOf('/name: ') == 0) {
                ChangeUserName();
            } else if (isNameMentioned && lastMessage.indexOf('/name: ') == 0) {
                messages.append(CreateNewMessage(`Хорошо, буду теперь звать тебя ${name}`, 'bot'));
            } else if (isDialogueStarted && isNameMentioned) {
                CalculateNumbers();
            } else {
                messages.append(CreateNewMessage('Я не понимаю, введите другую команду!', 'bot'));
            }
        }
    }

    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
}

// Функция, создающая новое сообщение.
function CreateNewMessage(messageText, sender) {
    let avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.innerHTML = `<img src="../images/${sender}Avatar.svg" alt="${sender}">`;

    let userMessage = document.createElement('div');
    userMessage.className = `message ${sender}-message`;

    let messageContent = document.createElement('div');
    messageContent.className = 'message-text';

    let newUserMessage = document.createElement('div');
    newUserMessage.className = `${sender}-message-wrapper message-wrapper`;

    messageContent.append(messageText);
    userMessage.append(messageContent);
    newUserMessage.append(avatar);
    newUserMessage.append(userMessage);

    return newUserMessage;
}
