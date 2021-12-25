var fname = ["Sushma Chhabria", "Venkatesh Chhabria", "Naisha Chhabria"];
var album = ["https://ideas.hallmark.com/wp-content/uploads/2021/04/Mothers_Day_Quotes-MC.jpg", "https://image.shutterstock.com/z/stock-vector-father-and-his-cute-little-daughter-happy-fathers-day-cartoon-illustration-isolated-on-white-1419842672.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2PaY5MZaGg4fkPbWhHEVI8vCBHD9OnI4zw&usqp=CAU"];
var i = 0;
function update (){
    if (i>2) {
        i=0;
    }
    document.getElementById ("album").src = album [i];
    document.getElementById ("fname").innerHTML = fname [i];
    i++;
}