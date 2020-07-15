// Функция, завершающая диалог.
function EndDialogue() {
    messages.append(CreateNewMessage('Всего доброго, если хочешь поговорить - пиши /start', 'bot'));

    isDialogueStarted = false;
    isNameMentioned = false;
}

// Функция, начинающая диалог.
function StartDialogue() {
    hint.style.display = 'none';
    
    if (lastMessage == '/start') {
        messages.append(CreateNewMessage('Привет, меня зовут Чат-бот, а как зовут тебя?', 'bot'));
        isDialogueStarted = true;
    } else {
        messages.append(CreateNewMessage('Введите команду /start, для начала общения', 'bot'));
    }
}

// Функция, указывающая боту имя пользователя.
function ChangeUserName() {
    let name = lastMessage.split('/name: ')[1].trim();
    if (name != '') {
        if (!isNameMentioned) {
            messages.append(CreateNewMessage(`Привет, ${name}, приятно познакомиться. Я умею считать, введи числа, которые надо посчитать`, 'bot'));
            isNameMentioned = true;   
        } else {
            messages.append(CreateNewMessage(`Хорошо, буду теперь звать тебя ${name}`, 'bot'));
        }
    } else {
        messages.append(CreateNewMessage(`Ты ввел некорректное имя, попробуй еще раз!`, 'bot'));
    }
}

// Функция, запускающая бота-калькулятор.
function CalculateNumbers() {
    let numbers = lastMessage.split('/numbers: ')[1];
    let numbersArr = numbers.split(', ');

    if (numbersArr.length == 2) {
        firstNum = parseInt(numbersArr[0]);
        secondNum = parseInt(numbersArr[1]);

        if (!(isNaN(firstNum) || isNaN(secondNum))) {
            messages.append(CreateNewMessage('Выбери математический оператор', 'bot'));
            chooseOperator.style.display = 'flex';
        } else {
            messages.append(CreateNewMessage('Ты ввел не числа, попробуй еще раз!', 'bot'));
        }
    } else {
        messages.append(CreateNewMessage('Ты ввел некорректное количество чисел, попробуй еще раз!', 'bot'));
    }
}

// Функция, показывающая температуру в определенном регионе.
async function GetCurrentWeather() {
    let region = lastMessage.split('/weather: ')[1].trim();

    if (region != '') {
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${api_key}`);
        const data = await api_url.json();

        if (data.cod == 200) {
            messages.append(CreateNewMessage(`Температура в ${data.name}, ${data.sys.country}: ${Math.floor((Number(data.main.temp) - 273.15) * 10) / 10}°C`, 'bot'));
        } else {
            messages.append(CreateNewMessage(`Регион ${region} не существует, попробуй ввести еще раз!`, 'bot'))
        }
    } else {
        messages.append(CreateNewMessage('Ты ввел некорректный регион, попробуй еще раз!', 'bot'));
    }

    messagesAndOperator.scrollTop = messagesAndOperator.scrollHeight;
}