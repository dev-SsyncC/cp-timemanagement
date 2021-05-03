let myVar; //for set interval variable;

// Event listners for buttons;

document.getElementById('start').addEventListener('click',function (){myVar =  setInterval(increment,1000);});
document.getElementById('stop').addEventListener('click',stop);


// variables 

let minutes = 0;
let seconds = 0;


// funvtions 

function increment (){ //clock
    document.getElementById('result').innerHTML = ``; // resets agian;
    
    seconds++;
    
    if(seconds===60){
        minutes++;
        seconds=0;
    }
    
    document.getElementById('display').innerHTML = `${minutes} : ${seconds}`;
    
    // set maximum time as you like ; 
    if(minutes===10){
        alert("times up");
    }
};

function stop(){ // resets the timer;
    
    clearInterval(myVar);
    document.getElementById('display').innerHTML = `0 : 0`;
    
    // alert(`Time used ${minutes} minutes and ${seconds} seconds.`); alert window not visble in extesions??? maybe
    
    document.getElementById('result').innerHTML = `Time used ${minutes} minutes and ${seconds} seconds.`;
    minutes = 0;
    seconds = 0;
}

