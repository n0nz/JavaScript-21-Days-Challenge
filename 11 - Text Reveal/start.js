(() => {
  function onScroll() {
    const sectionElems = Array.from(document.querySelectorAll('section'));
    console.log(sectionElems);

    sectionElems.forEach((sectionElem) => {
      const imageElem = sectionElem.querySelector('img');
      const textElem = sectionElem.querySelector('.text');

      const scrollPosition = window.pageYOffset;
      console.log(scrollPosition);

      const revealPosition = imageElem.offsetTop + imageElem.offsetHeight / 10; // 1/10 of the image

      if (scrollPosition >= revealPosition) {
        textElem.classList.add('reveal');
      }
    });
  }

  function run() {
    document.addEventListener('scroll', onScroll);
  }
  run();
})();
