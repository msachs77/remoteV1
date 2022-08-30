const advDiv = document.getElementById("Advice");
const advNum = document.getElementById("num");
const advButton =document.getElementById('button');

advButton.addEventListener('click', () => {
    getAdvice()
});

window.onload = () => {
getAdvice();
}

function getAdvice(){
    fetch("https://api.adviceslip.com/advice").then(response =>{
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        advDiv.innerHTML = `"${Adviceobj.advice}"`;
        advNum.innerHTML = `<p> Advice # ${Adviceobj.id} </p>`;
    }).catch(error => {
        console.log(error);
    });
}

    