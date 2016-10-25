window.onload=turnpict;
var timer,index=0;  
 function turnpict(){
     var pickksArr=new Array();
        pickksArr[0]="images/one.jpg";
        pickksArr[1]="images/two.jpg";
        pickksArr[2]="images/three.jpg";
        pickksArr[3]="images/four.jpg";
        document.getElementById("pic1").src=pickksArr[index];
        if(index<3)
            index++;
        else
            index=(index+1)%4;
        
        timer=setTimeout(turnpict,1500);


        
    }








    