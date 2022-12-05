const image = document.querySelector(`img`);
image.style.position = `absolute`;
image.style.top = `0px`;
image.style.left = `0px`;
let interval = {id: null};

function move() {
  const x = parseInt(image.style.left) + 1;
  if(parseInt(image.style.left) < window.innerWidth - image.width)
    image.style.left = x.toString() + `px`;
  else 
    clearInterval(interval.id);
}

image.onclick = event => {
  interval.id = setInterval(move, 5);
}