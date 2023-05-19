const separators = document.getElementsByClassName("separator");


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



