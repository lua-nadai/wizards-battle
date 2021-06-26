const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = 1300;
const cHeight = 700;

// Images

const imgBackground = new Image();
imgBackground.src = "./images/backgroundcanvas.png";

const imgWizard = new Image();
imgWizard.src = "./images/wizard.png";

const imgWizardDead = new Image();
imgWizardDead.src = "./images/wizarddead.png";

const imgDragon = new Image();
imgDragon.src = "./images/dragon.png";

const imgDragonDead = new Image();
imgDragonDead.src = "./images/dragondead.png";

const imgIconBoss = new Image();
imgIconBoss.src = "./images/iconboss.png";

const imgShield = new Image();
imgShield.src = "./images/shield.png"

const imgFireball = new Image();
imgFireball.src = "./images/fireball1.png";

const imgGameOver = new Image();
imgGameOver.src = "./images/gameover.png";

const imgWinGame = new Image();
imgWinGame.src = "./images/win.png";

// ---

document.getElementById('play-button').onclick = () => {
    playGame();
};

function playGame() {
    updateCanvas();

    imgBackground.onload = () => {
        ctx.drawImage(imgBackground, 0, 0)
        ctx.drawImage(imgWizard, 50, 400, 230, 200);
        ctx.drawImage(imgDragon, 950, 250, 350, 350);
        ctx.drawImage(imgIconBoss, 780, 200, 100, 65);
      
        // HP Bar
        ctx.fillStyle = 'red';
        ctx.fillRect(890, 220, 400, 30);

        ctx.fillRect(10, 360, 250, 30);

        ctx.fillStyle = 'black';
        ctx.fillRect(1290, 220, 0, 30);

        ctx.fillRect(10, 360, 250, 30);

        // HP Number
        ctx.font = '30px arial';
        ctx.fillText(`500 / ${wizardPlayer.hp}`, 70, 350);
        ctx.fillText(`1000 / ${dragonBot.hp}`, 1000, 210);
    };
};

function updateCanvas() {
    ctx.clearRect(0, 0, cWidth, cHeight)

    ctx.drawImage(imgBackground, 0, 0)
    ctx.drawImage(imgWizard, 50, 400, 230, 200);
    ctx.drawImage(imgDragon, 950, 250, 350, 350);
    ctx.drawImage(imgIconBoss, 780, 200, 100, 65);
    

    // HP Bar
    ctx.fillStyle = 'red';
    ctx.fillRect(890, 220, 400, 30);
    ctx.fillRect(10, 360, 250, 30);

    ctx.fillStyle = 'black';
    ctx.strokeRect(890, 220, 400, 30);
    ctx.strokeRect(10, 360, 250, 30);

    // HP Number
    ctx.fillStyle = 'red';
    ctx.font = '30px arial';

    ctx.fillText(`500 / ${wizardPlayer.hp}`, 70, 350);
    ctx.strokeText(`500 / ${wizardPlayer.hp}`, 70, 350);

    ctx.fillText(`1000 / ${dragonBot.hp}`, 1000, 210);
    ctx.strokeText(`1000 / ${dragonBot.hp}`, 1000, 210);

    // if (playerCommands.innerHTML === "Damage blocked!"){
    //     setTimeout(() =>{
            
    //         ctx.drawImage(imgShield, 50, 400)
    //     }

    // }

    finalGame();
};

function finalGame(){
    if(wizardPlayer.hp <= 0) {
        ctx.clearRect(0, 0, cWidth, cHeight);
        ctx.drawImage(imgBackground, 0, 0);
        ctx.drawImage(imgGameOver, 450, 275, 400, 150);
        ctx.drawImage(imgDragon, 950, 250, 350, 350);
        ctx.drawImage(imgWizardDead, 50, 440, 230, 200);
    };
    if(dragonBot.hp <= 0) {
        ctx.clearRect(0, 0, cWidth, cHeight);
        ctx.drawImage(imgBackground, 0, 0);
        ctx.drawImage(imgWinGame, 500, 275, 300, 150);
        ctx.drawImage(imgWizard, 50, 400, 230, 200);
        ctx.drawImage(imgDragonDead, 950, 350, 350, 350);        
    };
};














// function animationAttackWizard(){
//     let fireballX = 0;
//     let fireballY = 0;
    
//     ctx.drawImage(imgFireball, fireballX, fireballY, 140, 90)
    
//     ctx.beginPath()
//     ctx.moveTo(500, 600)
// }
