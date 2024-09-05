//create a container for the grid
let body = document.querySelector("body");
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);
//create 16x16 grid squares

//create rows (no flex)
for(i=1;i<=16;i++){
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    container.appendChild(gridRow);
    //create columns (flex in css)
    for (j=1;j<=16;j++){
        let gridColumn = document.createElement("div");
        gridColumn.classList.add("gridColumn");
        gridColumn.textContent = j;
        gridRow.appendChild(gridColumn);
    }
}
