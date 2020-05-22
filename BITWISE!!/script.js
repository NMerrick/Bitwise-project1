let buttonsArray = document.getElementsByClassName('btn');

for (let i = 0; i < buttonsArray.length; i++) {
    console.log(buttonsArray[i]);
    console.log(buttonsArray[i].innerHTML);
    buttonsArray[i].addEventListener('click', (event) => {
        buttonsArray[i].innerHTML = 'WHOAHAH';
        buttonsArray[i].animate([
            { transform: 'translateY(0px)' }, 
            { transform: 'translateY(-300px)' }
          ], { 
            duration: 400,
            iterations: 3
          }
          );
    });
}


let rowText = document.querySelectorAll(".row span");

for(let i=0; i<rowText.length; i++) {
    console.log(rowText[i].innerHTML);
    rowText[i].addEventListener('click', () => {
        rowText[i].innerHTML = "WHOA";
        console.log(rowText[i].innerHTML);
        rowText[i].animate([
            { transform: 'translateY(0px)' }, 
            { transform: 'translateY(-300px)' }
          ], { 
            duration: 400,
            iterations: 3
          }
          );
    });
};

let boxText = document.querySelectorAll(".box span");

for(let i=0; i<boxText.length; i++) {
    console.log(boxText[i].innerHTML);
    boxText[i].addEventListener('click', () => {
        boxText[i].innerHTML = "WHOA";
        console.log(boxText[i].innerHTML);
        boxText[i].animate([
            { transform: 'translateY(0px)' }, 
            { transform: 'translateY(-300px)' }
          ], { 
            duration: 400,
            iterations: 3
          }
          );
    });
};

let backgroundMove = document.querySelectorAll('.main-header');
for(let i=0; i < backgroundMove.length; i++) {
    backgroundMove[i].addEventListener("mousemove", (e) => {
        backgroundMove[i].style.backgroundPositionX = .01 * e.offsetX + 'px';
        backgroundMove[i].style.backgroundPositionY = .01 * e.offsetY + 'px';
    });
}

let backgroundMove2 = document.querySelectorAll('.box-container');
for(let i=0; i < backgroundMove2.length; i++) {
    backgroundMove2[i].addEventListener("mousemove", (e) => {
        backgroundMove2[i].style.backgroundPositionX = .01 * e.offsetX + 'px';
        backgroundMove2[i].style.backgroundPositionY = .01 * e.offsetY + 'px';
    });
}  //not sure why backgroundMove2 is still reacting to the individual boxes inside the container

let backgroundMove3 = document.querySelectorAll('.footer-background');
for(let i=0; i < backgroundMove3.length; i++) {
    backgroundMove3[i].addEventListener("mousemove", (e) => {
        backgroundMove3[i].style.backgroundPositionX = .01 * e.offsetX + 'px';
        backgroundMove3[i].style.backgroundPositionY = .01 * e.offsetY + 'px';
    });
}


let buttonClickEvent = document.getElementById('button1');

buttonClickEvent.addEventListener("click", addElement);


function addElement () {
    var newDiv = document.createElement("div");
    var parentDiv = document.getElementById('parentDiv');
    parentDiv.appendChild(newDiv);

    newDiv.className = 'test-section';
    newDiv.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos nihil quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at molestias, ex quo voluptates mollitia. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>`

}
