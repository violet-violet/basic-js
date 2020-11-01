// Наша машина будет иметь 2 модификации: **прямая** и **обратная** (тип машины определяется в момент создания). 
// **Прямая** машина просто шифрует и дешифрует строку, переданную в нее, а **обратная** машина возвращает 
// **перевернутую** задом наперед строку после шифрования и дешифрования.

// Ваша задача — реализовать класс `VigenereCipheringMachine`. `constructor` этого класса принимает `true` (**или ничего**), 
// чтобы создать **прямую** машину и `false`, чтобы создать **обратную** машину.
// Каждый экземляр `VigenereCipheringMachine` должен иметь 2 метода: `encrypt` и `decrypt`.

// Метод `encrypt` принимает 2 параметра: `message` (строка, чтобы ее зашифровать) и `key` (строку-кодовое слово).
// Метод `decrypt` принимает 2 параметра: `message` (строка, чтобы ее расшифровать) и `key` (строку-кодовое слово)

// Эти параметры для обоих методов являются **обязательными**. Если хотя бы один из них не был передан, должна быть выброшена ошибка. 
// Машины шифруют и дешифруют **только символы латинского алфавита** (другие символы не изменяются). 
// Строка, возвращаемая этими методами, должна иметь **верхний регистр**.
// Вам не нужно валидировать значение, переданное в `contructor` и в методы `encrypt` и `decrypt` (за исключением выбрасывания ошибки при отсутствии аргумента для для этих методов).

// Например:
// `const directMachine = new VigenereCipheringMachine();`
// `const reverseMachine = new VigenereCipheringMachine(false);`
// `directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'`
// `directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'`
// `reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'`
// `reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'`

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(string, key) {
    key = key.toLowerCase();
    string = string.toLowerCase();

    let keyString = '';
    let result = '';

    let j = 0;

    for (let i = 0; i <= (string.length - 1); i++) {
        
      if (!key[j]) {
        j = 0;
      }

      if ((/[a-z]/).test(string[i])) {
        keyString += key[j];
        j++;
      } else {
        keyString = keyString + string[i];
      }
    }

    for (let i = 0; i <= (string.length - 1); i++){
      if ((/[a-z]/).test(string[i])) {
        let num = (string[i].charCodeAt() - 97 + keyString[i].charCodeAt() - 97) % 26;
        result += String.fromCharCode(num + 97);
      }
      else {
        result += string[i];
      }
    }

    if (this.mode) {
      return result.toUpperCase();
    } else {
      return result.toUpperCase().split('').reverse().join('');
    }
  }    

  decrypt(string, key) {
    key = key.toLowerCase();
    string = string.toLowerCase();

    let keyString = '';
    let result = '';

    let j = 0;

    for (let i = 0; i <= (string.length - 1); i++) {
      if (!key[j]) {
        j = 0;
      }

      if ((/[a-z]/).test(string[i])) {
        keyString += key[j];
        j++;
      } else {
        keyString += string[i];
      }
     }

    for (let i = 0; i <= (string.length - 1); i++){
      if ((/[a-z]/).test(string[i])) {
        let num = ((string[i].charCodeAt() - 97) - (keyString[i].charCodeAt() - 97) + 26) % 26;
        result += String.fromCharCode(num + 97);
      } else {
        result += string[i];
      }
   }
  
    if (this.mode) {
      return result.toUpperCase();
    } else {
      return result.toUpperCase().split('').reverse().join('');
    }
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'), 'AEIHQX SX DLLU!');
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'), 'ATTACK AT DAWN!');
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'), '!ULLD XS XQHIEA');
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'), '!NWAD TA KCATTA');
