// list a group of friends
var friend1 = "morgan"
var friend2 = "klaus"
var friend3 = "stefan"
var friend4 = "christopher"

// list group of friends

var cuntries = ["swedistan", "Noway", "WINLAND", "Denmark", "Island"]
// cuntries.foreach(function(country) {
//     console.log(country)
// })

// function cuntryList(a) {
//     console.log("************")
//     console.log(country)
//     console.log("************")
//     console.log("")

// }

function printReverse(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
   console.log(printReverse(cuntries))

   
    function isIdentical(arr1) {
        for(var i = 1; i < arr1.length; i++)
        {
            if(arr1[i] !== arr1[0])
                return false;
        }
    
        return true;
    }

   console.log(isIdentical([1,1,1]))