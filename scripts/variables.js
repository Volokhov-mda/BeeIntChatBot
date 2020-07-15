// Блок с полем ввода текста сообщения и кнопкой отправки сообщения.
const textInput = document.getElementById('text-input-wrapper');
// Поле ввода текста сообщения.
const textArea = document.getElementById('composer');
// Картинка, нажав на которую происходит отправка сообщения.
const sendImage = document.getElementById('send-image');
// Блок с сообщениями бота и пользователя и кнопками выбора математической операции.
const messagesAndOperator = document.getElementById('messages-wrapper');
// Блок с сообщениями бота и пользователя.
const messages = document.getElementById('messages');
// Блок с выбором математической операции.
const chooseOperator = document.getElementById('choose-operator');

// Кнопка '-'.
const minusOperatorButton = document.getElementById('minus');
// Кнопка '+'.
const plusOperatorButton = document.getElementById('plus');
// Кнопка '*'.
const multiplyOperatorButton = document.getElementById('multiply');
// Кнопка '/'.
const divideOperatorButton = document.getElementById('divide');

// Подсказка, просящая пользователя ввести сообщение.
const hint = document.getElementById('hint');
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

// Первое число, введенное пользователем.
let firstNum;
// Второе число, введенное пользователем.
let secondNum;

// API ключ для OpenWeatherMap.
const api_key = 'b544c42a24360814b1bde6d68cad6965';