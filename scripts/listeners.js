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
