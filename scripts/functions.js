// Функция, отправляющая сообщение пользователя боту.
function SendMessageUser() {
    lastMessage = textArea.value.trim();

    textArea.value = '';

    messages.append(CreateNewMessage(lastMessage, 'user'));

    messages.scrollTop = messages.scrollHeight;

    userTyping.remove();

    sendMessageBot();
}

// Функция, отправляющая ответ бота пользователю.
function sendMessageBot() {
    if (lastMessage.indexOf('/help') == 0) {
        Help();
    } else if (lastMessage == '/stop') {
        EndDialogue();
    } else {
        if (!isDialogueStarted) {
            StartDialogue();
        } else {
            if (lastMessage == '/start') {
                messages.append(CreateNewMessage('Мы с тобой уже разговариваем :) Введи другую команду!', 'bot'));
            } else if (lastMessage.indexOf('/name: ') == 0) {
                ChangeUserName();
            } else if (isNameMentioned && lastMessage.indexOf('/name: ') == 0) {
                messages.append(CreateNewMessage(`Хорошо, буду теперь звать тебя ${name}`, 'bot'));
            } else if (isNameMentioned && lastMessage.indexOf('/numbers: ') == 0) {
                CalculateNumbers();
            } else if (isNameMentioned && lastMessage.indexOf('/weather: ') == 0) {
                GetCurrentWeather();
            } else {
                chooseOperator.remove();
                messages.append(CreateNewMessage('Я не понимаю, введите другую команду!', 'bot'));
            }
        }
    }

    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
}

// Функция, показывающая, что пользователь печатает сообщение.
function ShowUserTyping() {
    messages.append(userTyping);
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

// Функция, меняющая цвет кнопуи отправки сообщения в зависимости от того, пуст ли textArea или нет.
// Цвет кнопки становится желтым, если содержимое textArea не пустое, на серым, если содержимое textArea пустое.
function ChangeSendButtonColor() {
    if (textArea.value) {
        sendButton.style.cursor = 'pointer';
        sendImage.src = '../images/activeMessageButton.svg';
    } else {
        sendButton.style.cursor = 'default';
        sendImage.src = '../images/disabledMessageButton.svg'
    }
}