(() => {
  // เริ่มเขียนโค้ด
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function countDown() {
    var now = Date.now();
    var nextYear = Date.parse('1 Jan 2021 00:00:00 GMT');

    var diff = nextYear - now;
    replace("days", Math.floor(diff / DAY));
    replace("hours", Math.floor(diff % DAY / HOUR));
    replace("minutes", Math.floor(diff % HOUR / MINUTE));
    replace("seconds", Math.floor(diff % MINUTE / SECOND));
  }

  function replace(elem, value) {
    var temp = document.getElementById(elem);
    temp.innerHTML = value;
  }

  function run() {
    countDown();
    setInterval(countDown, SECOND)
  }

  run();
})();
