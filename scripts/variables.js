// Блок с полем ввода текста сообщения и кнопкой отправки сообщения.
const textInput = document.getElementById('text-input-wrapper');
// Поле ввода текста сообщения.
const textArea = document.getElementById('composer');
// Картинка, нажав на которую происходит отправка сообщения.
const sendImage = document.getElementById('send-image');
// Кнопка, отправляющее сообщение. 
const sendButton = document.getElementById('send-button');
// Блок с сообщениями бота и пользователя и кнопками выбора математической операции.
const messagesAndOperator = document.getElementById('messages-wrapper');
// Блок с сообщениями бота и пользователя.
const messages = document.getElementById('messages');

// Последнее отправленное пользователем сообщение.
let lastMessage;
// Неотправленное сообщение пользователя.
let tempMessage = '';
// Состояние чата - начат ли диалог?
let isDialogueStarted = false;
// Сказал ли пользователь свое имя?
let isNameMentioned = false;
// В процессе ли выбор математического оператора?
let isOperatorChoosingInProgress = false;
// Имя пользователя.
let userName;

// Первое число, введенное пользователем.
let firstNum;
// Второе число, введенное пользователем.
let secondNum;

// API ключ для OpenWeatherMap.
const api_key = 'b544c42a24360814b1bde6d68cad6965';

/* 
Сообщение, подсказывающее пользователю, что ему необходимо сделать при запуске бота.
*/
let hint = document.createElement('div');
hint.id = 'hint';
hint.innerHTML = 'Напишите что-нибудь боту!\n';

let subHint = document.createElement('div');
subHint.id = 'sub-hint';
subHint.innerHTML = '(Для получения понимания того, какой команды ждет от вас бот, рекомендуем вызывать команду "\help")';

/* 
Блок с выбором математической операции. 
*/
// Кнопка '-'.
const minusOperatorButton = document.createElement('div');
minusOperatorButton.id = 'minus';
minusOperatorButton.innerHTML = '-';
// Кнопка '+'.
const plusOperatorButton = document.createElement('div');
plusOperatorButton.id = 'plus';
plusOperatorButton.innerHTML = '+';
// Кнопка '*'.
const multiplyOperatorButton = document.createElement('div');
multiplyOperatorButton.id = 'multiply';
multiplyOperatorButton.innerHTML = '*';
// Кнопка '/'.
const divideOperatorButton = document.createElement('div');
divideOperatorButton.id = 'divide';
divideOperatorButton.innerHTML = '/';

let chooseOperator = document.createElement('div');

chooseOperator.id = 'choose-operator';
chooseOperator.append(minusOperatorButton);
chooseOperator.append(plusOperatorButton);
chooseOperator.append(multiplyOperatorButton);
chooseOperator.append(divideOperatorButton);

/* 
Сообщение, показывающее, что пользователь вводит текст в textArea.
*/
let userTyping;
// Далее идет создание данного сообщения.

// Аватар пользователя.
let avatar = document.createElement('div');
avatar.className = 'avatar';
avatar.innerHTML = '<img src="../images/userAvatar.svg" alt="user">';

// Сообщение пользователя.
let userMessage = document.createElement('div');
userMessage.className = 'message user-message';
userMessage.id = 'message-typing';

// Содержимое сообщения пользователя.
let messageTextTyping = document.createElement('div');
messageTextTyping.className = 'message-text-typing';

// Троеточие-ввод сообщения.
let messageTyping1 = document.createElement('div');
messageTyping1.className = 'message-typing-1';

let messageTyping2 = document.createElement('div');
messageTyping2.className = 'message-typing-2';

let messageTyping3 = document.createElement('div');
messageTyping3.className = 'message-typing-3';

userTyping = document.createElement('div');
userTyping.className = `user-message-wrapper message-wrapper`;

// Добавление всех дочерних элементов.
messageTextTyping.append(messageTyping1);
messageTextTyping.append(messageTyping2);
messageTextTyping.append(messageTyping3);

userMessage.append(messageTextTyping);

userTyping.append(avatar);
userTyping.append(userMessage);
