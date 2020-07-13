// Блок с полем ввода текста сообщения и кнопкой отправки сообщения.
const textInput = document.getElementById('text-input-wrapper');
// Поле ввода текста сообщения.
const textArea = document.getElementById('composer');
// Картинка, нажав на которую происходит отправка сообщения.
const sendImage = document.getElementById('send-image');
// Блок с сообщениями бота и пользователя.
const messages = document.getElementById('messages');
// Последнее отправленное пользователем сообщение.
let lastMessage;
// Состояние чата - начат ли диалог?
let isDialogueStarted = false;