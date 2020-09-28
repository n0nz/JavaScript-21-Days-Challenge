(() => {
  const KEY = '';
  const loadElem = document.querySelector('.loader');
  let page = 1;

  function showLoader() {
    loadElem.classList.add('visible');
  }

  function hideLoader() {
    loadElem.classList.remove('visible');
  }

  async function displayImages() {
    showLoader();

    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`);
    const images = await result.json();
    const galleryElem = document.querySelector('.gallery');

    // console.log(images);
    images.forEach(image => {
      const imageElem = document.createElement('img');
      // console.log(image);
      imageElem.src = image.urls.small;
      // console.log(imageElem);
      galleryElem.appendChild(imageElem);
    });

    hideLoader();
    page += 1;
  }

  function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // console.log(scrollTop, clientHeight, scrollHeight); // scrollTop + clientHeight = scrollHeight
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      displayImages();
    }
  }

  function run() {
    document.addEventListener('scroll', onScroll);
    displayImages();
  }

  run();
})();
