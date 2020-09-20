(() => {
  // 1. NaN
  // if (null === null) {
  //   console.log('Equal');
  // }

  // if (1 === 1) {
  //   console.log('Equal');
  // }

  // if (NaN === NaN) {
  // console.log('Equal');
  // } else {
  // console.log('!Equal'); // เพื่อป้องกันการคำนวณที่ผิดพลาด
  // }

  // if (NaN / NaN === 1) {
  //   console.log('Equal');
  // }

  // const result = 1 / 'hello';  // NaN
  // // console.log(result)

  // if (result === NaN) {
  //   console.log('Equal!');
  // }

  // if (Number.isNaN(result)) {
  //   console.log('Number.isNaN(result)');
  // }

  // 2. Type Coercion --> การบังคับ / การแปลง Type โดยอัตโนมัติใน JavaScript
  // if (1 < 2 < 3) { // if (true < 3) {} --> if (1 < 3) --> true
  //   console.log('1 < 2 < 3');
  // }

  // if (3 > 2 > 1) {
  //   console.log('3 > 2 > 1');
  // }

  // console.log(2 - '1'); // convert '1' to number
  // console.log(2 + '1'); // convert 2 to string
  // console.log(2 + Number.parseInt('1', 10)); // ถ้าไม่รู้ว่า Type เป็นอะไร ให้แปลงเป็น Type ที่ถูกต้องก่อน

  // console.log(true + true); // boolean --> true = 1 --> 1+1 = 2

  // 3. Interpreter & Compiler
  // function getPerson() {
  //   return // javascript auto insert semi-colon ; as it's end of the line
  //   {
  //     name: 'Nonthawat'
  //   };
  // }
  // console.log(getPerson()); // undefined

  // function getPerson() {
  //   return {
  //     name: 'Nonthawat'
  //   };
  // }
  // console.log(getPerson()); // undefined

  // 4. Checking Object Type
  // const person = {};
  // if (typeof person === 'object') {
  //   console.log('typeof person === object');
  // }

  // const person = null;
  // if (typeof person === 'object') {
  //   console.log('typeof person === object'); // print
  // }

  const person = null;
  if (typeof person === 'object' && person !== null) {
    console.log('typeof person === object');
  }
}
)();
