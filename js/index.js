const endDate ="30 March 2023  10:30 pm"; 

document.getElementById('endDate').innerHTML=endDate;
const input =document.querySelectorAll('input');

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff =(end-now)/1000;
    
    // console.log('end');
    // console.log('now');

    if(diff < 0) return;
    
    input[0].value=Math.floor(diff / 3600 / 24);// convert day
    input[1].value=Math.floor(diff/3600)%24;// convert hours
    input[2].value=Math.floor(diff/60)%60;//convert min
    input[3].value=Math.floor(diff)%60;// convert sec
}
// convert days
// 1 day =24hr
// 1 hr= 60min
// 60min =3600 sec
clock();

setInterval(
    ()=>{
        clock();
    },1000
)