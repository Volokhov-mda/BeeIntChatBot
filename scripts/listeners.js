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

// Событие, отправляющее сообщение при нажатии кнопки 'Enter'. Работает только если textInput в фокусе.
textArea.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        e.preventDefault();
    }

    if (e.which == 13 && !e.shiftKey && textArea.value) {
        SendMessageUser();
    }
});

// События выбора математической операции.
minusOperatorButton.addEventListener('click', () => {
    chooseOperator.style.display = 'none';
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML = 
        `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});

plusOperatorButton.addEventListener('click', () => {
    chooseOperator.style.display = 'none';
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML = 
        `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});

multiplyOperatorButton.addEventListener('click', () => {
    chooseOperator.style.display = 'none';
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML = 
        `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});

divideOperatorButton.addEventListener('click', () => {
    chooseOperator.style.display = 'none';
    document.getElementsByClassName('message-text')[document.getElementsByClassName('message-text').length - 1].innerHTML =
         `${firstNum} / ${secondNum} = ${Math.floor((firstNum / secondNum) * 10000) / 10000}`;
    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
});