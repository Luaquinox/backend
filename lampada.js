const lamp = document.getElementById('lamp'); 
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff')

function isLampBroken(){
    return lamp.scr.inderOff('quebrada')> -1
}
function lampOn(){
    if(!isLampBroken()){
        lamp.scr= '.ligada.jpg';
    }
}
    function lampOff(){
    if(!isLampBroken()){
        lamp.scr= '.desligada.jpg';
    }
}
