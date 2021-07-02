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

const imgDragonSuper = new Image();
imgDragonSuper.src = "./images/dragonsuper.png";

const imgShield = new Image(); // Colocar
imgShield.src = "./images/shield.png"

const imgFireball = new Image(); // Colocar
imgFireball.src = "./images/fireball1.png";

const imgGameOver = new Image();
imgGameOver.src = "./images/gameover.png";

const imgWinGame = new Image();
imgWinGame.src = "./images/win.png";

// ---

let frames = 0;

document.getElementById('play-button').onclick = () => {
    playGame();
};

function playGame() {

    // imgBackground.onload = () => {
    //     ctx.drawImage(imgBackground, 0, 0)
    //     ctx.drawImage(imgWizard, 50, 400, 230, 200);
    //     ctx.drawImage(imgDragon, 950, 250, 350, 350);
    //     ctx.drawImage(imgIconBoss, 780, 200, 100, 65);
      
    //     // HP Bar
    //     ctx.fillStyle = 'red';
    //     ctx.fillRect(890, 220, 400, 30);

    //     ctx.fillRect(10, 360, 250, 30);

    //     ctx.fillStyle = 'black';
    //     ctx.fillRect(1290, 220, 0, 30);

    //     ctx.fillRect(10, 360, 250, 30);

    //     // HP Number
    //     ctx.font = '40px Iceland';
    //     ctx.fillText(`500 / ${wizardPlayer.hp}`, 70, 350);
    //     ctx.fillText(`1000 / ${dragonBot.hp}`, 1000, 210);
    // };
   
    updateCanvas()
};

setInterval(() => {
    frames += 1;;
}, 10)


function updateCanvas() {
    console.log("1")
    ctx.clearRect(0, 0, cWidth, cHeight)

    ctx.drawImage(imgBackground, 0, 0);
    ctx.drawImage(imgWizard, 50, 400, 230, 200);
    ctx.drawImage(imgDragon, 950, 250, 350, 350);
    ctx.drawImage(imgIconBoss, 780, 200, 100, 65);

    // HP Bar
    ctx.fillStyle = 'black';
    ctx.fillRect(890, 220, 400, 30);
    ctx.fillRect(10, 360, 250, 30);

    ctx.fillStyle = 'red';
    ctx.fillRect(890, 220, hpBarDragon(), 30);
    ctx.fillRect(10, 360, hpBarWizard(), 30);


    ctx.strokeStyle = 'black';
    ctx.strokeRect(890, 220, 400, 30);
    ctx.strokeRect(10, 360, 250, 30);

    // HP Number
    ctx.fillStyle = 'red';
    ctx.font = '40px Iceland';

    ctx.fillText(`${wizardPlayer.hp} / ${wizardPlayer.maxHp}`, 60, 350);
    ctx.strokeText(`${wizardPlayer.hp} / ${wizardPlayer.maxHp}`, 60, 350);

    ctx.fillText(`${dragonBot.hp} / ${dragonBot.maxHp}`, 990, 210);
    ctx.strokeText(`${dragonBot.hp} / ${dragonBot.maxHp}`, 990, 210);

    // MP Bar

    ctx.fillStyle = 'black'
    ctx.fillRect(10, 395, 250, 15);

    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 395, mpBarWizard(), 15);

    ctx.strokeStyle = 'black'
    ctx.strokeRect(10, 395, mpBarWizard(), 15);

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

const imgAttackWizard1 = new Image();
imgAttackWizard1.src = "./images/wizardattack/attack1.png"

// const imgAttackWizard2 = new Image();
// imgAttackWizard2.src = "./images/wizardattack/attack2.png"

// const imgAttackWizard3 = new Image();
// imgAttackWizard3.src = "./images/wizardattack/attack3.png"

// const imgAttackWizard4 = new Image();
// imgAttackWizard4.src = "./images/wizardattack/attack4.png"

class Attacks {
    constructor(x,y){
        this.posInitial = x;
        this.posEnd = y;
        this.speed = 10;
    }

    draw(){
        ctx.drawImage(imgAttackWizard1, this.posInitial, 450, 100, 90)
        
    }

    move(){
        setTimeout(() => {      
            if(this.posInitial < this.posEnd){
                this.posInitial += this.speed;
            }
        }, 1)
        
    }

}

const attackAnimation = new Attacks(200, 950)

function updateAttacks() {
    updateCanvas()

    setInterval(() => {
        attackAnimation.draw()
        attackAnimation.move();
            
    }, 1);

    if(frames % 90 === 0){
        attackAnimation.move();
    }

}


