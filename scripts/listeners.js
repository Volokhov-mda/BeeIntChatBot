// Событие, меняющее цвет кнопки на желтый, если содержимое textArea не пустое, на серый, если содержимое textArea пустое.
textArea.addEventListener('input', () => {
    if (textArea.value) {
        sendImage.src = '../images/activeMessageButton.svg';
    } else {
        sendImage.src = '../images/disabledMessageButton.svg'
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
    }

    if (e.which == 40) {
        textArea.value = tempMessage;
    }
});

// События выбора математической операции.
minusOperatorButton.addEventListener('click', () => {
    isOperatorChoosingInProgress = false;
    chooseOperator.style.display = 'none';
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML = 
        `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});

plusOperatorButton.addEventListener('click', () => {
    isOperatorChoosingInProgress = false;
    chooseOperator.style.display = 'none';
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML = 
        `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});

multiplyOperatorButton.addEventListener('click', () => {
    isOperatorChoosingInProgress = false;
    chooseOperator.style.display = 'none';
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML = 
        `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});

divideOperatorButton.addEventListener('click', () => {
    isOperatorChoosingInProgress = false;
    chooseOperator.style.display = 'none';
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML =
         `${firstNum} / ${secondNum} = ${Math.floor((firstNum / secondNum) * 10000) / 10000}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});