const img = document.getElementById('m');

const producto = params =>{
  const src = `./images/COLECCIONES/casualf/${params.id}.jpg`;
  return
  `<img src="{src}"/>`
}

img.innerHTML = for (let i = 1; i >= 0; i++) {
  producto({id: i});