
var df = document.getElementById('hou')
var ed = document.getElementById('min')
var sx = document.getElementById('sec')
var zp = document.getElementById('milsec')

var msec = 0;
var hour =0
var sec = 0 ;
var milisec = 0;
var ty ;

function lk(){
    milisec++
   
    zp.innerHTML = milisec

    if(milisec>=100){
        sec++
        milisec =00 ;
        sx.innerHTML = sec
       
        
    }
    else if(sec==60){
        msec++
        sec =0
       
        ed.innerHTML =msec ;
    }
    else if(msec>=60){
        hour++
      
        df.innerHTML = hour
        msec =0 
    }
}

function st(){
    if (!ty){
    ty= setInterval(lk,10)}
}
function pause(){
  clearInterval(ty)
    ty=false
}
function re(){
  
    zp.innerHTML = '00'
    sx.innerHTML = '00'
    ed.innerHTML = '00' ;
    df.innerHTML ='00'
    pause()
    ty =false

}

var  start = document.getElementById('start')
var reset = document.getElementById('reset')

var h = document.getElementById('hour')
var m = document.getElementById('minute')
var s = document.getElementById('second')

var startTimer = null ;


start.addEventListener('click',function(){

    function stad(){
        clearInterval(startTimer)
        startTimer = setInterval (function(){
                 timer()
        },1000)
    }
    stad()
})


reset.addEventListener('click',function(){
    h.value= 0
    m.value =0
    s.value =0
    stopintervel()
})

function timer(){
    if(h.value==0 && m.value==0 && s.value==0){

        h.value=0;
        m.value=0;
        s.value =0 ;

    }
    else if(s.value!=0){
        s.value--
     
    }
    else if(m.value!=0 && s.value==0){
        s.value=60;
        m.value--
      
    }
    else if(h.value!=0 && m.value==0){
       
        m.value=60
        h.value--
    }
    return
}

function stopintervel(){

    clearInterval(startTimer)
}
