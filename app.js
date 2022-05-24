
function order(num){
  
    var phone=document.getElementById("phoneCollection")

    var head= phone.getElementsByTagName("span")
        

    num = Number(num)


    head[num].style.display ="inline"
    
}

function remove(num){

    var phone=document.getElementById("phoneCollection")

    var head= phone.getElementsByTagName("span")
    
    num = Number(num)

    head[num].style.display =" "


}


function del(num){
    
var data = document.getElementById("table")

data = data.getElementsByTagName("tr")

    num = Number(num)
    
data[num].style.display ="none"


}

function change(plug){

    var car = document.getElementById("cAr")
  
  
    if(plug == "car1"){
        car.src = "./IMG/AE86.jpg"
    }
    else{
      car.src = "IMG/Civic Hatch.jpg"
    }

}

var output = document.getElementById("head").innerHTML = 0

function count(num){


    console.log(output)

    if(num == '1'){
       sum = output + 1
        output = document.getElementById("head").innerHTML = sum
    }
    else{
        sum = output - 1
        output = document.getElementById("head").innerHTML = sum
    }
        

}

// function remove(num){

//     var phone=document.getElementById("phoneCollection")

//     var head= phone.getElementsByTagName("span")
    
//     num = Number(num)

//     head[num].style.display ="none"


// }
