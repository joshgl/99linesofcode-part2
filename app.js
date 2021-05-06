    let friends = ["Bobby", "Jacob", "Trish", "Mike", "Morgan"];

    friends.forEach(function (name){
        for (var j = 99; j > 0 ; j--){
            if (j > 1) {
                console.log( j + " lines of code in the file, " + j + " lines of code; " + name + " strikes one out, clears it all out, " + (j - 1) +  " lines of code in the file");
             } else {
               console.log("1 line of code in the file, 1 line of code; " + name + " strikes one out, clears it all out, 0 lines of code in the file");
     
             }
              
          }

    });