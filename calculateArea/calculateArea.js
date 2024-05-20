


function calculateArea() {
    // length = document.getElementById("length").value
    // width = document.getElementById("width").value

    //use parseFloat to convert the length, width which are sting at the moment
   let   length = parseFloat(document.getElementById("length").value);
   let   width = parseFloat(document.getElementById("width").value);
    

    let area = length * width
    console.log(area)

    // Display the result using template literals
    document.getElementById("result").innerHTML = `The Area is  ${area}`;

}