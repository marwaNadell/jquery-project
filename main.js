


$("a[href^='#']").click(

function(){
    
let togetid=  $(this).attr("href");

let theoffset=$(togetid).offset().top ;

$("html,body").animate({scrollTop:theoffset},1000);

}

);







  var xx= "-"+ $(".theinnersidenav").innerWidth();
$(".theinnersidenav").css("left","-200%")
   var thepoint=0;

    $(".theico").click(function(){
        var thewidth=$(".theinnersidenav").innerWidth();
        
    
     
     
     
   
        if(thepoint==0){


   
        $(".theinnersidenav").animate({left:"0%"},200);
        $(this).animate({left:"25%"},200);
       $(".thetext").animate({left: "60%" },200);
       thepoint=1;
        }else{
            $(".theinnersidenav").animate({left:"-200%"},200);
            $(this).animate({left:"0"},200);
            $(".thetext").animate({left: "50%" },200);
            thepoint=0;
        }
   
    });

    $(".fa-xmark").click(function(){
        $(".theinnersidenav").animate({left:"-200%"},200);
            $(".theico").animate({left:"0"},200);
            $(".thetext").animate({left: "50%" },200);
            thepoint=0;

    });






    var thepointofaccor1=0;
    var thepointofaccor2=0;
    var thepointofaccor3=0;
    var thepointofaccor4=0;
    
    var allPanels = $(".theconofaccor").hide();
      
    $(".doit1").click(function() {
        if(thepointofaccor1==0){
            allPanels.slideUp();
      $(this).parent().next().slideDown();
      thepointofaccor1=1;
      thepointofaccor2=0;
      thepointofaccor3=0;
      thepointofaccor4=0;
      return false;
        }else{
     allPanels.slideUp();
      thepointofaccor1=0;
      thepointofaccor2=0;
      thepointofaccor3=0;
      thepointofaccor4=0;
      return false;
        }
     
    });






    $(".doit2").click(function() {
        if(thepointofaccor2==0){
            allPanels.slideUp();
      $(this).parent().next().slideDown();
      thepointofaccor2=1;
      thepointofaccor3=0;
      thepointofaccor1=0;
      thepointofaccor4=0;
      return false;
        }else{
     allPanels.slideUp();
      thepointofaccor2=0;
      thepointofaccor3=0;
      thepointofaccor1=0;
      thepointofaccor4=0;
      return false;
        }
     
    });



    
    $(".doit3").click(function() {
        if(thepointofaccor3==0){
            allPanels.slideUp();
      $(this).parent().next().slideDown();
      thepointofaccor3=1;
      thepointofaccor4=0;
      thepointofaccor2=0;
      thepointofaccor1=0;
      
     return false;
        }else{
     allPanels.slideUp();
     thepointofaccor4=0;
      thepointofaccor3=0;
      thepointofaccor2=0;
      thepointofaccor1=0;
      
     return false;
        }
     
    });



    $(".doit4").click(function() {
        if(thepointofaccor4==0){
            allPanels.slideUp();
      $(this).parent().next().slideDown();
      thepointofaccor4=1;
      thepointofaccor3=0;
      thepointofaccor2=0;
      thepointofaccor1=0;
     return false;
        }else{
     allPanels.slideUp();
     thepointofaccor4=0;
      thepointofaccor3=0;
      thepointofaccor2=0;
      thepointofaccor1=0;
     return false;
        }
     
    });









    let d = new Date();
let hour = d.getHours();
let days=d.getDate();
let mint=d.getMinutes();
//let seco=d.getSeconds();




let SS=setInterval(()=>{
    var d=new Date();
    if(60-d.getSeconds()==60){
        
        document.getElementById("rida1").innerHTML=`00 s`;
    }else{
   if(60-d.getSeconds()>=10){
    document.getElementById("rida1").innerHTML=60-d.getSeconds()+" s";}
    else{
        document.getElementById("rida1").innerHTML=` 0${60-d.getSeconds()} s `;

    }
}
d=null;
},100);


SS;










let MM=setInterval(()=>{
    var d=new Date();
    if(60-d.getMinutes()==60){
        
        document.getElementById("rida2").innerHTML="00"+" m";
    }else{
   


if(60-d.getMinutes()>=10){

    document.getElementById("rida2").innerHTML=60-d.getMinutes()+" m";
}else{

    var st="0";
    st+=60-d.getMinutes()+" m";
    document.getElementById("rida2").innerHTML=st;
}


    
}
d=null;
},100);


MM;



























let HH=setInterval(()=>{
    var d=new Date();
   
    
     if(24-d.getHours()>=10)
    document.getElementById("rida3").innerHTML=24-d.getHours()-1+" h";
     else{
        var king2="0";
        
        king2+=24-d.getHours()-1+" h";
        document.getElementById("rida3").innerHTML=king2;
     }

d=null;
},100);


HH;







let getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
};



function pleaseenterthedate(y,m,d){
    let dd = new Date();
    let day=d;//18
    let month=m-1;//5
    let year=y;//2022
    let cartona=0;
    
    if(year==dd.getFullYear()){
                    //6
for(let i= dd.getMonth()+2;i<=month;i++){
    
    cartona+= Number(getDays(year,i)) ;
    

}
var dog=cartona+day;
if(dd.getMonth()+1 !=m){
  
var dog2=getDays(dd.getFullYear(), dd.getMonth()+1)- dd.getDate();
 var dog3= dog+dog2-1;

}else{

   var dog3= dog- dd.getDate()-1;
  

}

if(dog3>=10)
document.getElementById("rida4").innerHTML=`-${dog3} D`; 
else{

    
    document.getElementById("rida4").innerHTML=`-0${dog3} D`;
}


    }

   
    
    }


let nowYouCanSeemee=setInterval(
    
    function(){
        pleaseenterthedate(2022,10,21);

    }
    
    ,100);

    nowYouCanSeemee;

























































    let theshow=100;
let theshowhtml=document.getElementById("thespan");
let theinp=document.getElementById("char");
let thearr=[];
let thearr2=[];
let theress=document.getElementById("theres");
let antara;
theinp.addEventListener("keydown",(e)=>{
   if(e.keyCode==37||e.keyCode==38||e.keyCode==39||e.keyCode==40)
   return 0;

 if(e.keyCode==8){
if(thearr.length!=0){
    thearr.pop();
    
}
  

    
    if( thearr.length<100){
         if(theshow<100)
        theshowhtml.innerHTML=++theshow;
}else{


}

    return 0;
 }else{
    antara=theinp.value.slice(-1);        
      thearr.push(antara);

      if( thearr.length<=100){
         
        theshowhtml.innerHTML=--theshow;
       
}else{


}


if(thearr.length>=100) {
 theshowhtml.innerHTML=" your available character finished"


        }






 }


   
      

})











