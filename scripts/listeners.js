// Cобытие, отображающее сообщение-подсказку при загрузке страницы.
document.addEventListener('DOMContentLoaded', () => {
    messages.append(hint);
    messages.append(subHint);
});

// Событие, меняющее цвет кнопки отправки сообщения на желтый, если содержимое textArea не пустое, на серый, если содержимое textArea пустое.
textArea.addEventListener('input', () => {
    ChangeSendButtonColor();
    
    if (textArea.value && !(document.getElementById('message-typing'))) {
        ShowUserTyping();
    } else if (!textArea.value) {
        userTyping.remove();
    }
});

// Событие, отправляющее сообщения пользователя при нажатии на кнопку отправки сообщения.
sendButton.addEventListener('click', (e) => {
    if (textArea.value) {
        SendMessageUser();
        ChangeSendButtonColor();
    } else {
        ChangeSendButtonColor();
    }
});

// Подсветка блока с полем ввода текста сообщения и кнопкой отправки сообщения при фокусе на него.
textArea.addEventListener('focus', () => {
    textInput.className = 'focused';
});

textArea.addEventListener('blur', () => {
    textInput.className = '';
});

// Событие, отправляющее сообщение при нажатии кнопки 'Enter'.
textArea.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        e.preventDefault();
    }

    if (e.which == 13 && !e.shiftKey && textArea.value) {
        SendMessageUser();
        tempMessage = '';

        ChangeSendButtonColor();
    }
});

// Событие, возвращающее прошлое сообщение в textArea при нажатии стрелочки вверх, 
// или возвращающее еще не отправленное сообщение при нажатии стрелочки вниз.
textArea.addEventListener('keydown', (e) => {
    if (e.which == 38 && lastMessage) {
        tempMessage = textArea.value == lastMessage ? tempMessage : textArea.value;
        textArea.value = lastMessage;

        setTimeout(() => {
            textArea.selectionStart = textArea.selectionEnd = textArea.value.length;
        }, 1);

        ChangeSendButtonColor();
    }

    if (e.which == 40) {
        textArea.value = tempMessage;

        ChangeSendButtonColor();
    }
});

// События выбора математической операции.
minusOperatorButton.addEventListener('click', () => {
    isOperatorChoosingInProgress = false;
    chooseOperator.remove();
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML = 
        `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});

plusOperatorButton.addEventListener('click', () => {
    isOperatorChoosingInProgress = false;
    chooseOperator.remove();
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML = 
        `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});

multiplyOperatorButton.addEventListener('click', () => {
    isOperatorChoosingInProgress = false;
    chooseOperator.remove();
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML = 
        `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});

divideOperatorButton.addEventListener('click', () => {
    isOperatorChoosingInProgress = false;
    chooseOperator.remove();
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML =
         `${firstNum} / ${secondNum} = ${Math.floor((firstNum / secondNum) * 10000) / 10000}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});