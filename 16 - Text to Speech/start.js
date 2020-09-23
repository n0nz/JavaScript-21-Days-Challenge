(() => {
  const message = new SpeechSynthesisUtterance();

  function onVoicesChanged() {
    const voices = speechSynthesis.getVoices();
    // console.log(voices);

    const thVoice = voices.find(voice => voice.lang === 'th-TH');
    message.voice = thVoice;
  }

  function onClick(event) {
    // console.log(event.target);
    message.text = event.target.getAttribute('alt');
    speechSynthesis.speak(message);
  }

  function run() {
    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

    const imageElems = Array.from(document.querySelectorAll('img'));
    // console.log(imageElems);
    imageElems.forEach(imageElem => {
      imageElem.addEventListener('click', onClick);
    });
  }

  run();
})();
