(() => {
  // 1. Lexical Scope & Dynamic Scope
  // function printName() {
  //   console.log(this);
  // }
  // printName(); // no invoker -> this is global object

  // 2. How to know what is "this"?
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // }

  // // - 2.1 Invoker object
  // const hello = { name: 'Hello', printName };
  // const world = { name: 'World', printName };

  // hello.printName(); // this = invoker object
  // world.printName(); // this = invoker object

  // // - 2.2 Global Object (window, global)
  // name = 'Global'; // name comes from 'Global' object
  // printName();

  // - 2.3 Constructor Function -> Create object from function
  // function Person(name) { // starts with upper case = can be used to create an object
  //   this.name = name;
  //   this.printName = printName;
  // }

  // const hello = new Person('Hello'); // new = create object
  // hello.printName();

  // 3. call(), apply(), and bind()
  function printName(nationality, city) {
    console.log(this);
    console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`)
  }

  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality, this.city);
    printName.call(this, this.nationality, this.city);
    printName.apply(this, [this.nationality, this.city])

    const printHello = printName.bind(this);
    printHello(this.nationality, this.city);
  }

  const hello = new Person('Hello', 'Thai', 'Bangkok');
  const world = new Person('World', 'Thai', 'Bangkok');
})();
