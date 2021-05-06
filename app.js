    let friends = ["Bobby", "Jacob", "Trish", "Mike", "Morgan"];
    let body = document.body;
    let buttonCreate = document.createElement("button");
    let buttonText = document.createTextNode("Sing!");

    window.addEventListener("DOMContentLoaded", function () {
    buttonCreate.appendChild(buttonText);
    body.appendChild(buttonCreate);
    }
    )

    buttonCreate.addEventListener("click", function () {
    friends.forEach(function (name, index){
        let newFriendDiv = document.createElement("div");
        let newFriendHeader = document.createElement("h3");
        let newFriendParagraph = document.createElement("p");

        newFriendDiv.setAttribute("class", "friend");
        newFriendHeader.innerText = name;
        newFriendDiv.appendChild(newFriendHeader);
        newFriendHeader.appendChild(newFriendParagraph);
        
        for (var j = 99; j > 0 ; j--){
            if (j > 1) {
              newFriendParagraph.innerHTML += j + " lines of code in the file, " + j + " lines of code; " + name + " strikes one out, clears it all out, " + (j - 1) +  " lines of code in the file" + "<br />"; 
             } else {
              newFriendParagraph.innerHTML += "1 line of code in the file, 1 line of code; " + name + " strikes one out, clears it all out, 0 lines of code in the file" + "<br />";
     
             }
              
          }

          body.appendChild(newFriendDiv);

    })
    }

    );