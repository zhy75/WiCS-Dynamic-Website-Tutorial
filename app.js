'use strict'

const switcher = document.querySelector('.btn');

// button event listener
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == 'light-theme') {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});


// form function
function myFunction() {
  var x, text;

  //Finish the function
  x = document.getElementById("teammate").value;
  text = "Your team name idea is " + x;
  document.getElementById("formbtn").innerHTML = text;
  // Get the value of the input field with id="teamname"
  

  

  
} 