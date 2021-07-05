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

const imgShield = new Image(); 
imgShield.src = "./images/shield.png"

const imgAttackDragon = new Image();
imgAttackDragon.src = "./images/attackdragon.png";

const imgSuperAttackDragon = new Image();
imgSuperAttackDragon.src = "./images/superattackdragon.png";

const imgSuperAttackWizard = new Image();
imgSuperAttackWizard.src = "./images/superattackwizard.png";

const imgAttackWizard = new Image();
imgAttackWizard.src = "./images/attackwizard.png";

const imgGameOver = new Image();
imgGameOver.src = "./images/gameover.png";

const imgWinGame = new Image();
imgWinGame.src = "./images/win.png";

// ---

let frames = 0;

class Canvas {

    clearCanvas() {
        ctx.clearRect(0, 0, cWidth, cHeight);
    };

    draw() {
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

        ctx.fillStyle = 'black';
        ctx.fillRect(10, 395, 250, 15);

        ctx.fillStyle = 'blue';
        ctx.fillRect(10, 395, mpBarWizard(), 15);

        ctx.strokeStyle = 'black';
        ctx.strokeRect(10, 395, mpBarWizard(), 15);
    };


    finalGame() {
        if (wizardPlayer.hp <= 0) {
            ctx.clearRect(0, 0, cWidth, cHeight);
            ctx.drawImage(imgBackground, 0, 0);
            ctx.drawImage(imgGameOver, 450, 275, 400, 150);
            ctx.drawImage(imgDragon, 950, 250, 350, 350);
            ctx.drawImage(imgWizardDead, 50, 440, 230, 200);
        };
        if (dragonBot.hp <= 0) {
            ctx.clearRect(0, 0, cWidth, cHeight);
            ctx.drawImage(imgBackground, 0, 0);
            ctx.drawImage(imgWinGame, 500, 275, 300, 150);
            ctx.drawImage(imgWizard, 50, 400, 230, 200);
            ctx.drawImage(imgDragonDead, 950, 350, 350, 350);
        };
    };

    updateCanvas() {
        
        this.clearCanvas();
        this.draw();
        this.finalGame();
    };


    attackWizard(){

        const attackAnimation = new Attacks(imgAttackWizard, 200, 950);

        if (dragonBot.hp >= 1 && wizardPlayer.hp >= 1){
            const timeAnimation = setInterval(() => {
                this.updateCanvas();
                attackAnimation.moveRight();
                attackAnimation.draw();
            }, 15);


            setTimeout(() => {
                clearInterval(timeAnimation);
            }, 1500);
        }

    };

    attackDragon() {

        const attackAnimation = new Attacks(imgAttackDragon, 950, 180);

        if (dragonBot.stackSuper === 4 && dragonBot.hp >= 1 && wizardPlayer.hp >= 1){
            this.superAttackDragon(); 
        } else if (wizardPlayer.hp >= 1 && dragonBot.hp >= 1) {
            const timeAnimation = setInterval(() => {
                this.updateCanvas();
                attackAnimation.moveLeft();
                attackAnimation.draw();
            }, 15);

            setTimeout(() => {
                clearInterval(timeAnimation);
            }, 1800);
        };
    };

    superAttackDragon(){
        
        const attackAnimation = new Attacks(imgSuperAttackDragon, 800, 150);

        const timeAnimation = setInterval(() => {
            this.updateCanvas();
            attackAnimation.moveLeft();
            attackAnimation.drawSuperDragon();
            ctx.drawImage(imgDragonSuper, 930, 110, 400, 500);
            ctx.drawImage(imgDragon, 950, 250, 350, 350);
        }, 15);

        setTimeout(() => {
            clearInterval(timeAnimation);
        }, 1800);
    }

    superAttackWizard(){
        const attackAnimation = new Attacks(imgSuperAttackWizard, 200, 950);

        const timeAnimation = setInterval(() => {
            this.updateCanvas();
            attackAnimation.moveRight();
            attackAnimation.drawSuperWizard();
            // ctx.drawImage(imgDragonSuper, 930, 110, 400, 500);
            // ctx.drawImage(imgWizard, 950, 250, 350, 350);
        }, 15);

        setTimeout(() => {
            clearInterval(timeAnimation);
        }, 1800);
    }

    shieldWizard() {

        const shieldAnimation = new Attacks(imgShield, 200, 180);
        const attackAnimation = new Attacks(imgAttackDragon, 950, 250);
        const superAttackAnimation = new Attacks(imgSuperAttackDragon, 800, 210);

        if (dragonBot.stackSuper === 3 ) {
            
            const timeAnimation = setInterval(() => {
                this.updateCanvas();
                shieldAnimation.draw();
                superAttackAnimation.moveLeft();
                superAttackAnimation.drawSuperDragon();
                ctx.drawImage(imgDragonSuper, 930, 110, 400, 500);
                ctx.drawImage(imgDragon, 950, 250, 350, 350);
            }, 15);

            setTimeout(() => {
                clearInterval(timeAnimation);
            }, 1800);
        } else {
            const timeAnimation = setInterval(() => {
                this.updateCanvas();
                shieldAnimation.draw();
                attackAnimation.moveLeft();
                attackAnimation.draw();
            }, 20);

            setTimeout(() => {
                clearInterval(timeAnimation);
            }, 1800);
        }; 
    };

};

document.getElementById('play-button').onclick = () => {
    playGame();
    document.getElementById("commands-button").style.visibility = "visible"
};

let canvasBoard = new Canvas();

function playGame() {

   canvasBoard.draw();

   canvasBoard.finalGame();

   canvasBoard.updateCanvas();
    
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

class Attacks {
    constructor(img, x, y) {
        this.imgAttack = img;
        this.posInitial = x;
        this.posEnd = y;
        this.speed = 10;
    };

    draw() {
        ctx.drawImage(this.imgAttack, this.posInitial, 450, 100, 90);
    };

    drawSuperDragon(){
        ctx.drawImage(this.imgAttack, this.posInitial, 400, 450, 150);
    }

    drawSuperWizard(){
        ctx.drawImage(this.imgAttack, this.posInitial, 400, 200, 190);
    }

    moveRight() {
        if(this.posInitial <= this.posEnd) {
            this.posInitial += this.speed;
        } else {
            this.posInitial = this.posInitial;
        };
    };

    moveLeft(){
        if (this.posInitial >= this.posEnd) {
            this.posInitial -= this.speed;
        } else {
            this.posInitial = this.posInitial;
        };
    };
};
