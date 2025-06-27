const sendBtn = document.getElementById('send-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function botReply(input) {
  const lower = input.toLowerCase();
  if (lower.includes('hello') || lower.includes('hi')) return "Hey there! 😊";
  if (lower.includes('how are you')) return "I'm just a bunch of code, but I'm feeling smart today!";
  if (lower.includes('your name')) return "I'm Mini Bot 🤖, here to chat with you!";
  if (lower.includes('bye')) return "Goodbye! Come back soon!";
  return "Hmm, interesting... tell me more!";
}

function handleSend() {
  const input = userInput.value.trim();
  if (!input) return;

  appendMessage('user', input);
  userInput.value = '';

  setTimeout(() => {
    const reply = botReply(input);
    appendMessage('bot', reply);
  }, 500);
}

sendBtn.addEventListener('click', handleSend);
clearBtn.addEventListener('click', () => {
  chatWindow.innerHTML = '';
  userInput.value = '';
});

userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') handleSend();
});