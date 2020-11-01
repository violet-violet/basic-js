// Эта функция возвращает повторяющуюся **строку**, основываясь на заданных параметрах:
// *	`str` это **строка**, которая будет повторена
// *	`options` это **объект** опций, который содержит следующие свойства:
//   -	`repeatTimes` устанавливает число повторений `str`
//   - `separator` это строка, разделяющая повторения `str`
//   - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
//   - `additionRepeatTimes` устанавливает число повторений `addition`
//   - `additionSeparator` это строка, разделяющая повторения `addition`

// Параметры `str` и `addition` по умолчанию являются **строками**. В случае, если они другого типа, он должны быть преобразованы к строке.
// Параметры `separator` и `additionSeparator` являются строками.
// `repeatTimes` и `additionRepeatTimes` являются целыми числами (в случае отсутствия любого из них соответствующая строка не повторяется).
// Единственный обязательный параметр — это `str`, остальные могут не быть переданы.
// Значение `separator` по умолчанию это `'+'`. Значение `additionSeparator` по умолчанию это `'|'`.

// Например: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` 
// => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`

//let result = условие ? значение1 : значение2;

function repeater(str, options) {

  if (options === undefined) {
    return str;
  } else {
    options.repeatTimes = (options.repeatTimes === undefined) ? options.repeatTimes = 1 : options.repeatTimes = options.repeatTimes;
    options.separator = (options.separator === undefined) ? options.separator = '+' : options.separator = options.separator;
    options.additionSeparator = (options.additionSeparator === undefined) ? options.additionSeparator = '|' : options.additionSeparator = options.additionSeparator;
    options.additionRepeatTimes = (options.additionRepeatTimes === undefined) ? options.additionRepeatTimes = 1 : options.additionRepeatTimes = options.additionRepeatTimes;
    options.addition = (options.addition === undefined) ? options.addition = '' : options.addition = options.addition;


      let repeatablePartOfAddition = (options.additionSeparator + options.addition).repeat(options.additionRepeatTimes - 1);
      fullAddition = options.addition + repeatablePartOfAddition;  

    let fragmentBasic = options.separator + str + fullAddition;
    let fragmentFirst = str + fullAddition;
    const result = fragmentFirst + fragmentBasic.repeat(options.repeatTimes - 1);
    return result;
  }
};
  

// console.log(`Мы получили: `, repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
// console.log(`А должны были STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS`);
console.log(repeater('TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' }), 'TESTstrADD!');
// console.log(repeater('la', { repeatTimes: 3 }), 'la+la+la');
// console.log(repeater('single', { repeatTimes: 1 }), 'single');
// console.log(repeater('12345', { repeatTimes: 5 }), '12345+12345+12345+12345+12345');
