// Функция, отправляющая сообщение пользователя боту.
function SendMessageUser() {
    lastMessage = textArea.value.trim();

    textArea.value = '';
    sendImage.src = '../images/disabledMessageButton.svg';

    messages.append(createNewMessage(lastMessage, 'user'));

    messages.scrollTop = messages.scrollHeight;

    sendMessageBot()
}

function sendMessageBot() {
    if (lastMessage == '/stop') {
        chooseOperator.style.display = 'none';

        messages.append(createNewMessage('Всего доброго, если хочешь поговорить - пиши /start', 'bot'));

        isDialogueStarted = false;
        isNameMentioned = false;
    }
    else {
        if (!isDialogueStarted) {
            hint.style.display = 'none';
    
            if (lastMessage == '/start') {
                messages.append(createNewMessage('Привет, меня зовут Чат-бот, а как зовут тебя?', 'bot'));
                isDialogueStarted = true;
            } else {
                messages.append(createNewMessage('Введите команду /start, для начала общения', 'bot'));
            }
        } else {
            if (lastMessage == '/start') {
                messages.append(createNewMessage('Мы с тобой уже разговариваем :) Введи другую команду!', 'bot'));
            } else if (lastMessage.indexOf('/name: ') == 0) {
                let name = lastMessage.split('/name: ')[1].trim();
                if (name != '') {
                    if (!isNameMentioned) {
                        messages.append(createNewMessage(`Привет, ${name}, приятно познакомиться. Я умею считать, введи числа, которые надо посчитать`, 'bot'));
                        isNameMentioned = true;   
                    } else {
                        messages.append(createNewMessage(`Хорошо, буду теперь звать тебя ${name}`, 'bot'));
                    }
                } else {
                    messages.append(createNewMessage(`Ты ввел некорректное имя, попробуй еще раз!`, 'bot'));
                }
            } else if (isNameMentioned && lastMessage.indexOf('/name: ') == 0) {
                messages.append(createNewMessage(`Хорошо, буду теперь звать тебя ${name}`, 'bot'));
            } else if (isDialogueStarted && isNameMentioned) {
                if (lastMessage.indexOf('/numbers: ') == 0) {
                    let numbers = lastMessage.split('/numbers: ')[1];
                    let numbersArr = numbers.split(', ');
        
                    if (numbersArr.length == 2) {
                        firstNum = parseInt(numbersArr[0]);
                        secondNum = parseInt(numbersArr[1]);
        
                        if (!(isNaN(firstNum) || isNaN(secondNum))) {
                            messages.append(createNewMessage('Выбери математический оператор!', 'bot'));
                            chooseOperator.style.display = 'flex';
                        } else {
                            messages.append(createNewMessage('Ты ввел не числа, попробуй еще раз!', 'bot'));
                        }
                    } else {
                        messages.append(createNewMessage('Ты ввел некорректное количество чисел, попробуй еще раз!', 'bot'));
                    }
                } else {
                    chooseOperator.style.display = 'none';
                    messages.append(createNewMessage('Я не понимаю, введите другую команду!', 'bot'));
                }
            } else {
                messages.append(createNewMessage('Я не понимаю, введите другую команду!', 'bot'));
            }
        }
    }

    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
}

// Функция, создающая новое сообщение.
function createNewMessage(messageText, sender) {
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
