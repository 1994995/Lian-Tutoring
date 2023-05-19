const separators = document.getElementsByClassName("separator");
const images = document.getElementsByClassName("image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let current = 0;
let numImg = images.length;


for (let sep of separators) {
  sep.addEventListener('click', () => {
    if (sep.style.backgroundColor == "blue") {
      sep.style.backgroundColor = "green";
    }
    else {
      sep.style.backgroundColor = "blue"
    }
  });
}

prev.addEventListener('click', () => {
  if (current != 0) {
    current -= 1;
  }
  else {
    current = numImg-1;
  }

  for (let i=0; i<numImg; i++) {
    const img = images[i];
    if (!img.classList.contains("hide")) {
      img.classList.add("hide")
    }
    if (i==current) {
      img.classList.remove("hide");
    }
  }
})

next.addEventListener('click', () => {
  if (current != numImg -1) {
    current += 1;
  }
  else {
    current = 0;
  }

  for (let i=0; i<numImg; i++) {
    const img = images[i];
    if (!img.classList.contains("hide")) {
      img.classList.add("hide")
    }
    if (i==current) {
      img.classList.remove("hide");
    }
  }
})





