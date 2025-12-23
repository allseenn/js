const fs = require('fs');
// Простейший alert (синхронный)
function alert(message) {
  console.log(`❗ ${message}`);
}

// Простейший prompt (синхронный)
function prompt(question) {
  // Создаем буфер для ввода
  const buffer = Buffer.alloc(1024);
  
  // Выводим вопрос
  process.stdout.write(`${question} `);
  
  // Синхронное чтение с stdin
  const length = fs.readSync(0, buffer, 0, 1024);
  
  // Возвращаем введенную строку (без переноса строки)
  return buffer.toString('utf8', 0, length - 1);
}

// Простейший confirm (синхронный)
function confirm(question) {
  const answer = prompt(`${question} (y/N)`);
  return answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes';
}

// Пример использования
alert('Внимание! Это важное сообщение');

const name = prompt('Как вас зовут?');
alert(`Привет, ${name}!`);

const isReady = confirm('Вы готовы начать?');
alert(isReady ? 'Отлично!' : 'Жаль...');
