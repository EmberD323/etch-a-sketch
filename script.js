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
        gridColumn.style.minWidth = 960/16 + "px";
        gridColumn.style.height = 960/16 + "px";
        gridRow.appendChild(gridColumn);
    }
}

//add event listener for all columns. if mouse enters change background color
const boxes = document.querySelectorAll(".gridColumn")
boxes.forEach((gridColumn)=>{
    gridColumn.addEventListener("mouseenter",()=>{
        //change background color
        gridColumn.style.cssText="background:red;";
        gridColumn.style.minWidth = 960/16 + "px";
        gridColumn.style.height = 960/16 + "px";
    });
});

//add event listener for button
const refreshButton = document.querySelector("button");
refreshButton.addEventListener("click",()=>{
    let rowChoice = prompt("How many rows would you like in your new grid? (Maximum is 100)");
    console.log(rowChoice);
    let columnChoice = prompt("The new grid will have " + rowChoice +" rows. How many columns would you like in your new grid? (Maximum is 100)");
    console.log(columnChoice);
    //make sure choices are in the right format and less than 100
    if(rowChoice<101 && columnChoice<101 && rowChoice>0 && columnChoice>0){
        //remove old grid
        const grids = document.querySelectorAll(".gridRow");
        grids.forEach((gridRow)=>{
            container.removeChild(gridRow);
        });
        for(i=1;i<=rowChoice;i++){
            let gridRow = document.createElement("div");
            gridRow.classList.add("gridRow");
            container.appendChild(gridRow);
            for (j=1;j<=columnChoice;j++){
                let gridColumn = document.createElement("div");
                gridColumn.classList.add("gridColumn");
                
                gridColumn.style.minWidth = 960/columnChoice + "px";
                gridColumn.style.height = 960/columnChoice + "px";
                gridRow.appendChild(gridColumn);
            }
            
        }
        const boxes = document.querySelectorAll(".gridColumn")
        boxes.forEach((gridColumn)=>{
            gridColumn.addEventListener("mouseenter",()=>{
                //change background color
                gridColumn.style.cssText="background:red;";
                gridColumn.style.minWidth = 960/columnChoice + "px";
                gridColumn.style.height = 960/columnChoice + "px";
            });
        });

    }
    else{
        window.alert("Invalid input, try again");
    }

});


