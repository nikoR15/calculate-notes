const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
// const note3 = document.getElementById('note3');
const Calculate = document.getElementById('calculate');
const result = document.getElementById('result');
const recover = document.getElementById('recover');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const winHonors = document.getElementById('winHonors');

Calculate.addEventListener('click', calculate);

function calculate() {
    let data1 = Number(note1.value);
    let data2 = Number(note2.value);

    if(note1.value.length == 0 || note2.value.length == 0){
        result.textContent = "Algun campo esta vacio"
    }else if (data1 < 0 || data1 > 5 || data2 < 0 || data2 > 5) {
        result.textContent = "El rango de notas es de 0 a 5"
    }else{
            let operationData = (data1+ data2)/2;
            result.textContent = operationData;
        
            let porcent1 = ((data1*30)/100);
            let porcent2 = ((data2*30)/100);
        
            let porcentRecover = porcent1+porcent2;
            let scoreRecover = 2.1 - porcentRecover;
            let finalScoreRecover = (scoreRecover / 0.40).toFixed(3);
            recover.textContent = finalScoreRecover;


            let porcentWin = porcent1+porcent2;
            let scoreWin = 3.5 - porcentWin;
            let finalScoreWin = (scoreWin / 0.40).toFixed(3);
            win.textContent = finalScoreWin


            let porcentWinHonors = porcent1+porcent2;
            let scoreWinHonors = 4.6 - porcentWinHonors;
            let finalScoreWinHonors = (scoreWinHonors / 0.40).toFixed(3);
            winHonors.textContent = finalScoreWinHonors


    }

}