/* 
This is the comment
Trying to produce some of the bottom function here
*/

console.log("js working")
var showButton = document.getElementById("getAllFood");
showButton.onclick = getFood;

function getFood(){
    $.get('/food',function(data){
        if(!data){
            console.log("No data received");
        }
        console.log("Received data: ");
        for(var i =0 ;i < data.length ;i++){
            console.log(data[i].name);
        }
        showFood(data);
    });
}
function showFood(food){
    var foodSection = document.getElementById("allFoodSection");
    for (var i=0 ; i< food.length; i++){
        var section = document.createElement("section");
        section.className += "foodSection";
        var heading = document.createElement("h3");
        heading.innerHTML = food[i].name + "  "+ food[i].price;
        section.appendChild(heading);
        foodSection.appendChild(section);
    }

}
















var searchButton = document.getElementById("searchButton");

console.log(searchButton);


searchButton.onclick = searchFood;

function searchFood(){
    var food = document.getElementById("foodSearch").value;
    //field checks
    if (food == ""){
        alert("please enter the field");
        return;
    }
    string = "are you sure you want " +food+" ?";
    alert(string);
    window.location.href="page1.html";

}



