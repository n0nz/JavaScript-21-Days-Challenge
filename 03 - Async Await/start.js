(() => {

  // 1 Asynchronous Function
  // function simulateAsync(text, timeout) {
  //   setTimeout(() => {
  //     console.log(text);
  //   }, timeout);
  // }

  // simulateAsync('Hello', 1000);
  // simulateAsync('World', 500);
  // simulateAsync('!', 100);

  // 2 Callback
  // function simulateAsync(text, timeout, callback) {
  //   setTimeout(() => {
  //     console.log(text);
  //     if (callback) {
  //       callback();
  //     }
  //   }, timeout);
  // }

  // // aka Callback hell
  // simulateAsync('Hello', 1000, () => {
  //   simulateAsync('World', 500, () => {
  //     simulateAsync('!', 500);
  //   });
  // });


  // 3 Promise
  // function simulateAsync(text, timeout, callback) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (text === 'World') return reject('rejected!');
  //       console.log(text);
  //       resolve();
  //     }, timeout);
  //   });
  // }

  // simulateAsync('Hello', 1000).then(() => {
  //   return simulateAsync('World', 500);
  // }).then(() => {
  //   return simulateAsync('!!', 100);
  // }).catch((error) => {
  //   console.error(error);
  // });

  // 4 Async / Await
  function simulateAsync(text, timeout, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (text === 'World') return reject('rejected!');
        console.log(text);
        resolve();
      }, timeout);
    });
  }

  async function run() {
    try {
      await simulateAsync('Hello', 1000);
      await simulateAsync('World', 500);
      await simulateAsync('!!!', 100);
    } catch (error) {
      console.error(error);
    }
  }

  run();
}
)();
