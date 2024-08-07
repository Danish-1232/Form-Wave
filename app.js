const allLables = document.querySelectorAll(".form-control label");
allLables.forEach((Label) => {
    label.innerHTML = label.innerHTML
    .split("")
    .map(
        (letter,index) => 
        `<span style="tansition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
})