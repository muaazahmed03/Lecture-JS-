// function greet(){
//     alert("Hi")
// }

// function over(element){
//     element.src = "https://cdn.mos.cms.futurecdn.net/SyszAgx3d7jTkHSSEmKWo7-1200-80.jpg"
//     element.style.width = "700px";
//     element.style.borderRadius = "10px";
//     element.style.boxShadow = "10px 10px 10px brown"
// }

// function out(el){
//     el.src = "https://sm.ign.com/t/ign_pk/review/b/black-myth/black-myth-wukong-review_129s.1200.jpg"
//     el.style.width = "700px";
// }


// cHapter 48 (Events Field)


var anchor = document.getElementById("link");
anchor.href = 'https://www.google.com/'
anchor.target = "_blank"
anchor.style.color = "orange"
console.log(anchor);

var heading = document.getElementById("head");
heading.style.color = 'purple'
console.log(heading);

var paragraph = document.getElementsByClassName("para");
paragraph[0].style.color = 'red'
paragraph[1].style.color = 'orange'
paragraph[2].style.color = 'blue'


for(i=0; i<paragraph.length; i++){
    paragraph[i].style.height = '50px'
    paragraph[i].style.textAlign = 'center'
    paragraph[i].style.backgroundColor = 'black'
    paragraph[i].style.borderRadius = "10px"
    paragraph[i].style.boxShadow = "10px 10px 10px green"

}
console.log(paragraph);


function login(){
    var emailElement = document.getElementById("email");
    var passElement = document.getElementById("password");

    if(emailElement.value && passElement.value){
        console.log(emailElement.value);
        console.log(passElement.value);
    }
    else{
        alert("Missing")
    }  

}

var myButton = document.getElementById("btn");

myButton.style.height = '50px'
myButton.style.width = '70px'
myButton.style.fontSize = '20px'
myButton.style.fontWeight = 'bold'
myButton.style.backgroundColor = 'grey'
myButton.style.color = 'red'
myButton.style.borderColor = 'orange'
myButton.style.borderRadius = '15px'