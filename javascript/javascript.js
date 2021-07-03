function diceDamage() {
    return Math.floor(Math.random() * 7);
};

function diceSuperDamage() {
    return Math.floor(Math.random() * 7) + 1;
};

class Wizard {
    constructor() {
        this.hp = 500;
        this.maxHp = 500;
        this.strength = 30;
        this.shield = 1000;
        this.strengthSuper = this.strength * 2;
        this.stackSuper = 0;
        this.strength1 = 30;
    };

    attackWizard() {
        this.strength1 = this.strength * diceDamage();
        this.stackSuperAttack();

        
        canvasBoard.attackWizard();

        return this.strength1;
    };

    stackSuperAttack() {
        if (this.strength1 >= 1) {
            this.stackSuper += 1
        } else {
            return this.stackSuper = this.stackSuper;
        }
    }

    attackSuper() {
        if (this.stackSuper >= 3) {
            return this.strengthSuper * diceSuperDamage();
        };
    };

    shieldWizard() {

        canvasBoard.shieldWizard();

        if (dragonBot.stackSuper === 3) {
            dragonBot.stackSuper = 0;
        };
        return `<p>Damage blocked!</p>`;
    };

    receiveDamage(damage) {
        this.hp -= damage;

        if (this.hp <= 0) {
            document.getElementById("commands-button").style.visibility = "hidden";
            return `<p>The Wizard has died!</p>`;
        };
        return `<p>The Wizard has received ${damage} points of damage</p>`;
    };
};


class Dragon {
    constructor() {
        this.hp = 1000;
        this.maxHp = 1000;
        this.strength = 15;
        this.strengthSuper = this.strength * 2;
        this.stackSuper = 0;
        this.strength1 = 15;
    };

    attackDragon() {
        this.strength1 = this.strength * diceSuperDamage();
        this.stackSuperDragon();
        canvasBoard.attackDragon()

        if (this.stackSuper === 4) {
            this.stackSuper = 0;

            ctx.drawImage(imgDragonSuper, 930, 110, 400, 500);
            ctx.drawImage(imgDragon, 950, 250, 350, 350);

            return this.strengthSuper * diceSuperDamage();
        };
        return this.strength1;
    };

    stackSuperDragon() {
        if (this.strength1 >= 1) {
            this.stackSuper += 1;
        } else {
            return this.stackSuper = this.stackSuper;
        };
    };

    receiveDamage(damage) {
        this.hp -= damage;

        if (this.hp <= 0) {
            document.getElementById("commands-button").style.visibility = "hidden";
            return `<p>The Dragon has died!</p>`;
        };
        return `<p>The Dragon has received ${damage} points of damage</p>`;
    };


    receiveSuperDamage(damage) {
        if (wizardPlayer.stackSuper < 3) {
            return `<p>You don't have mana enought...</p>`;
        }
        this.hp -= damage;
        wizardPlayer.stackSuper = 0;
        return `<p>The Dragon has received ${damage} points of damage</p>`;
    };

};

const wizardPlayer = new Wizard();
const dragonBot = new Dragon();

class Round {

    wizardAttack() {
        let receiveDamageDragon = dragonBot.receiveDamage(wizardPlayer.attackWizard());

        if (dragonBot.hp >= 0 || wizardPlayer.hp >= 0) {
            return receiveDamageDragon;
        };
        return "";
    };

    dragonAttack() {
        let receiveDamageWizard = wizardPlayer.receiveDamage(dragonBot.attackDragon());

        if (wizardPlayer.hp >= 0 || dragonBot.hp >= 0) {
            return receiveDamageWizard;
        }
        return "";
    };

    wizardSuperAttack() {
        let receiveSuperDamageDragon = dragonBot.receiveSuperDamage(wizardPlayer.attackSuper());

        return receiveSuperDamageDragon;
    };

};

const rounds = new Round;

const playerCommands = document.getElementById("commands-button");
const playerCommandAttack = document.getElementById('command-attack');
const playerCommandShield = document.getElementById('command-shield');
const playerCommandSuperAttack = document.getElementById('command-superattack');

// Button Elements

const attackButtonElement = document.createElement('button');

attackButtonElement.addEventListener('click', attackButton);
attackButtonElement.innerText = 'Attack';

const shieldButtonElement = document.createElement('button');

shieldButtonElement.addEventListener('click', shieldButton);
shieldButtonElement.innerText = 'Shield';

const superAttackElement = document.createElement('button');

superAttackElement.addEventListener('click', superAttackButton);
superAttackElement.innerText = 'Super Attack';

// ---

playerCommandAttack.onclick = () => {
    attackButton();
};

playerCommandShield.onclick = () => {
    shieldButton();
};

playerCommandSuperAttack.onclick = () => {
    superAttackButton();
};

function attackButton() {
    playerCommands.innerHTML = rounds.wizardAttack();
    setTimeout(() => {
        receiveDmg();
    }, 3000);

    setTimeout(() => {
        playerCommands.innerHTML = '';
        playerCommands.appendChild(attackButtonElement);
        playerCommands.appendChild(shieldButtonElement);
        playerCommands.appendChild(superAttackElement);
        canvasBoard.updateCanvas();
    }, 6000);
};

function receiveDmg() {
    playerCommands.innerHTML = rounds.dragonAttack();
};

function shieldButton() {
    playerCommands.innerHTML = wizardPlayer.shieldWizard();

    setTimeout(() => {
        playerCommands.innerHTML = '';
        playerCommands.appendChild(attackButtonElement);
        playerCommands.appendChild(shieldButtonElement);
        playerCommands.appendChild(superAttackElement);
        canvasBoard.updateCanvas();
    }, 3000);
};

function superAttackButton() {
    playerCommands.innerHTML = rounds.wizardSuperAttack();

    setTimeout(() => {
        receiveDmg();
    }, 3000);

    setTimeout(() => {
        playerCommands.innerHTML = '';
        playerCommands.appendChild(attackButtonElement);
        playerCommands.appendChild(shieldButtonElement);
        playerCommands.appendChild(superAttackElement);
        canvasBoard.updateCanvas();
    }, 6000);
};

function hpBarWizard() {
    const hpPercent = wizardPlayer.hp / wizardPlayer.maxHp;

    return 250 * hpPercent;

};

function hpBarDragon() {
    const hpPercent = dragonBot.hp / dragonBot.maxHp;

    return 400 * hpPercent;

};

function mpBarWizard() {
    const mpPercent = wizardPlayer.stackSuper / 3;

    if (wizardPlayer.stackSuper <= 3) {
        return 250 * mpPercent;
    }
    return 250;
};

document.getElementById("commands-button").style.visibility = "hidden"


