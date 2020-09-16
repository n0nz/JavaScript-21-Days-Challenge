(() => {
  let draggingElem;

  function onDragStart() {
    console.log('Drag');
    draggingElem = this;
    console.log(this);
  }

  function onDrop() {
    console.log('Drop!');

    this.append(draggingElem);
    draggingElem = null;
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDragEnter(event) {
    event.preventDefault();
  }

  function run() {
    const taskElems = Array.from(document.querySelectorAll('.task'));
    console.log(taskElems);

    const dropZoneElems = Array.from(document.querySelectorAll('.drop-zone'));
    console.log(dropZoneElems);

    taskElems.forEach((taskElem) => {
      taskElem.addEventListener('dragstart', onDragStart);
    });

    dropZoneElems.forEach((dropZoneElem) => {
      dropZoneElem.addEventListener('drop', onDrop);
      dropZoneElem.addEventListener('dragover', onDragOver);
      dropZoneElem.addEventListener('dragEnter', onDragEnter);
    });
  }
  run();
})();
