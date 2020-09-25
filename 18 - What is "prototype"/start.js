(() => {
  // 1. Class vs Prototype
  // class Person {

  // }

  // const nonthawat = new Person();
  // console.log(nonthawat);

  // 2. What's prototype? --> Object that store functions that can be called
  // --> ประหยัด memory

  // const name = 'Nonthawat';
  // console.log(name.__proto__)
  // console.log(name)

  // const arr = [];
  // console.log(arr.__proto__)

  // 3. Prototype chain
  // const name = 'Nonthawat';
  // console.log(name.__proto__);
  // console.log(name.toLocaleString());

  // 4. Extend a prototype
  const name = 'Nonthawat';
  function sayHello(val) {
    console.log(`Hello ${val}`);
  }
  String.prototype.sayHello = sayHello;
  console.log(name.__proto__);
  name.sayHello('World');
})();
