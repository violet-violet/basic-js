// Ваша задача — реализовать объект `chainMaker`, который будет создавать цепочки. 
// Оконченная цепочка это строка (тип `string`) и выглядит следующим образом: `'( value1 )~~( value2 )~~( value3 )'`.

// `chainMaker` имеет несколько **методов** для создания цепочек и их модификации:
// * `getLength` возвращает текущую длину цепи в виде числа;
// * `addLink(value)` добавляет звено, содержащее строковое представление `value` к цепочке;
// * `removeLink(position)` удаляет звено цепи, находящееся в заданном положении;
// * `reverseChain` разворачивает цепь задом наперед;
// * `finishChain` завершает цепь и **возвращает** ее.

// Методы `addLink`, `reverseChain` и `removeLink` **чейнятся**, в то время как остальные – нет. 
// Если `addLink` вызван без аргументов, он добавляет пустое звено (`'(  )'`) в цепочку. 
// Если `removeLink` принимает **некорректную** позицию (например, не являющуюся числом, 
// или дробное число, или ссылающуюся на несуществующее звено), он должен выбросить **ошибку**. 
// После вызова метода `finishChain` существующая на данный момент цепь должна быть удалена, как и в случае, если была выброшена **ошибка**.

// Например:
// `chainMaker.addLink(1).addLink(2).addLink(3).finishChain()` => `'( 1 )~~( 2 )~~( 3 )'`
// `chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()` => `'( 2 )~~( 3 )'`
// `chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()` => `'( 2 )~~( 1 )~~( 3 )'`


const chainMaker = {
  chain: [],  
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments === 0) {
      this.chain.push(`(  )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    // if (((position ^ 0) !== position) || (this.chain[position - 1] === undefined)) {
    // if (this.chain[position - 1] === undefined) {
    if ((!Number.isInteger(position)) || (position < 1) || (position > this.chain.length)) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice((position - 1), 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

console.log((chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain()), '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');
console.log((chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain()), '( 8.963 )~~( 0 )~~( false )');
console.log((chainMaker.addLink(null).addLink(false).addLink(22).reverseChain().reverseChain().removeLink(2).reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink('DEF').finishChain()), '( [object Object] )~~( 22 )~~( null )~~( DEF )');
console.log((chainMaker.addLink(3.14).addLink(1).addLink({0: 'first', 1: 'second', 'length': 2}).removeLink(1).addLink('DEF').addLink({0: 'first', 1: 'second', 'length': 2}).removeLink(1).addLink(true).addLink(false).addLink(333).reverseChain().reverseChain().finishChain()), '( [object Object] )~~( DEF )~~( [object Object] )~~( true )~~( false )~~( 333 )');
console.log((chainMaker.addLink('ABC').reverseChain().reverseChain().addLink('DEF').removeLink(1).addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(1.233).addLink(1.233).reverseChain().addLink('ABC').finishChain()), '( 1.233 )~~( 1.233 )~~( DEF )~~( [object Object] )~~( ABC )');
