const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = 1300;
const cHeight = 700;

window.onload = () => {
    document.getElementById('play-button').onclick = () => {
        playGame()
    };

    function playGame() {
        const imgWizard = new Image();
        imgWizard.src = "./images/wizard.png";

        ctx.drawImage(imgWizard, 0, 250);
        
        const imgDragon = new Image();
        imgDragon.src = "./images/dragon.png";

        ctx.drawImage(imgDragon, 950, 10, 350, 350);

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 570, cWidth, 200);


        ctx.fillStyle = 'black';
        ctx.font = '50px Arial';
        ctx.fillText('Attack', 150, 650);
        ctx.fillText('Shield', 550, 650);
        ctx.fillText('Super Attack', 900, 650);
    }



}