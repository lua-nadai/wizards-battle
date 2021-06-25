// require('./javascript')

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = 1300;
const cHeight = 700;

window.onload = () => {
    document.getElementById('play-button').onclick = () => {
        console.log('aaa')
        playGame()
    };

    function playGame() {
        const imgBackground = new Image();
        imgBackground.src = "./images/backgroundcanvas.png"

        ctx.drawImage(imgBackground, 0, 0)


        const imgWizard = new Image();
        imgWizard.src = "./images/wizard.png";

        ctx.drawImage(imgWizard, 0, 400, 230, 200);
        
        const imgDragon = new Image();
        imgDragon.src = "./images/dragon.png";

        ctx.drawImage(imgDragon, 950, 250, 350, 350);

        const imgHealth = new Image ();
        imgHealth.src = "./images/healthbar.png"
        
        ctx.drawImage(imgHealth, 50, 200, 200, 50)
        ctx.drawImage(imgHealth, 1000, 350, 200, 50)
        
        // ctx.fillStyle = 'white';
        // ctx.fillRect(0, 570, cWidth, 200);


        // ctx.fillStyle = 'black';
        // ctx.font = '50px Arial';
        // ctx.fillText('Attack', 150, 650);
        // ctx.fillText('Shield', 550, 650);
        // ctx.fillText('Super Attack', 900, 650);


        
    }

}






