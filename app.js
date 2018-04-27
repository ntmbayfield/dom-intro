

    'use strict'
    var $ = function(id) {
      return document.getElementById(id);
    };

    let loadingStarted = function() {

      //STEP 1: Change the greeting from "Hello, There!" to "Hello, World!".
      document.getElementById("greeting").innerHTML = "Hello, World!";

      //STEP 2: Set the background color of each `<li>` to `yellow`.
      let list = document.querySelectorAll("li");
      for (let i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = "yellow";
      }

      //STEP 3: Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, and append the to the `#greeting` div.
      let makeImage = document.createElement("img");  //creates a IMG element
      makeImage.setAttribute("src",  "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
      document.getElementById("greeting").appendChild(makeImage);

      //STEP 6:
      let greyDiv = document.getElementById("ghosting");
      greyDiv.onmouseover= function() {
        greyDiv.remove("ghosting");
      }

      //STEP 7:
      let doubleWidth = document.getElementById("resize");
      doubleWidth.onmouseover = mouseOver;
      doubleWidth.onmouseout = mouseOut;

      function mouseOver() {
        doubleWidth.style.width = "400px";
      }

      function mouseOut () {
        doubleWidth.style.width = "200px";
      }

      //STEP5: Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
      document.querySelector("#reset")
        .addEventListener('click', function() {
          let currentSelected = document.querySelector('.selected');
          if (currentSelected) {
            currentSelected.className = "";
            list[1].className = 'selected';
          }
          document.querySelectorAll("img")[1].setAttribute('src', './images/panic.jpeg')
        })

        //STEP 8:
        document.addEventListener('keypress', (event) => {
          const keyName = event.key;
          if (keyName >= 0 && keyName <=9) {
            alert("I HATE NUMBERZZZ");
          }
        });

    };  //closes loadingStarted function declaration

    window.onload = function() {
      loadingStarted();  //call the loadingStarted function
      console.log("JavaScript is alive!");
    };


// For STEP2, I tried unsuccessfully to accomplish the task using this method
// unsuccessfully tried to write function to toggle "selected" class on li elements using this approach
// function toggle(element) {
//     if element.hasAttribute("class")) {
//       element.removeAttribute("class");
//     } else {
//       element.setAttribute("class", "selected");
//     }
//   }
// };

//For STEP4, I initially tried to change the style of the div by adding an EventListener which whould listen for the mouse moving over the the greyDiv and change its style attribute of visibility to hidden
//greyDiv.addEventListener("mouseover", (() => (greyDiv.style.visibility="hidden") ) , false);
