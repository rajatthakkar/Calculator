"use strict";

var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var opretar = null;
var store = 0 ;


for(var i=0;i < buttons.length;i++){

     buttons[i].addEventListener('click',  function claculator(){     
        var value = this.getAttribute("data-value");
       
        if(value=="+" || value =="-" || value=="*" || value =="/"){
           
           opretar = value;
           operand1 = parseFloat(display.textContent);
           display.innerText = " ";
          
          

        }else if( value == "%"){
            var hundred = "100";
            opretar = "/";
            operand1 = parseFloat(display.textContent);
            var result = eval(operand1 + " "+opretar+" "+hundred);
            display.innerText =result;
        } 
        else if(value=="+/-"){
            var currentNumber = display.innerHTML;
            if(currentNumber[0]==="-"){
                var newString = currentNumber.replace("-","");
                display.innerHTML=newString;
                operand1=parseFloat(display.textContent);
                console.log("print"+operand1); 
            }else{
             var newString = currentNumber.padStart(currentNumber.length+1,"-");
               display.innerText=newString;
               operand1 = parseFloat(display.textContent);
               console.log(operand1);
            }
           
        }else if(value == "="){

            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + " "+opretar+" "+operand2);
           if(result =="Infinity"){
            display.innerText = "Error";
           }else{
            display.innerText =result;
           }
            
        }else if(value=="AC"){
            operand1 = "";
            operand2 = "";
            // ac = " ";
            display.innerText =" ";
         
        }else{
             display.innerText += value;
             
            
        } 
    
    });
 
     
}