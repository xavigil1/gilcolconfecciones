function createSlider(container) {
  const images = container.querySelectorAll('.images > img');

  const displayImage = container.querySelector('[data-display]')

  // State
  let imageIndex;
  
  function setImage(index) {
    imageIndex = index;
    displayImage.src = images[index].src;
  }

  // Show the first image initially
  setImage(0);

  // Button listener
  container.addEventListener('click', event => {
    if (event.target.hasAttribute('data-prev')) {
      setImage(imageIndex === 0 ? images.length - 1 : imageIndex - 1)
    } else if (event.target.hasAttribute('data-next')) {
      setImage(imageIndex === images.length - 1 ? 0 : imageIndex + 1)
    }
  });
}

document.querySelectorAll('.image-slider').forEach(createSlider);