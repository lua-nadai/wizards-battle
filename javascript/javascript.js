function diceDamage() {
    return Math.floor(Math.random() * 7);
}

function diceSuperDamage(){ 
    return Math.floor(Math.random() * 7) + 1;
} // pegar numeros 4 - 7 >>> *BONUS

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
        if (this.stackSuper === 3) {
            return this.strengthSuper * diceSuperDamage();
        }
    }

    receiveDamage(damage) {
        this.hp -= damage;

        if(this.hp <= 0){
            return `The Wizard has died!`
        };
        return `The Wizard has received ${damage} points of damage`
    };
};

class Dragon {
    constructor() {
        this.hp = 1000;
        this.maxHp = 1000;
        this.strength = 10;

    };

    attackDragon() {
        return this.strength * diceDamage();
    };

    receiveDamage(damage) {
        this.hp -= damage;

        if (this.hp <= 0) {
            return `The Dragon has died!`;
        };
        return `The Dragon has received ${damage} points of damage`;
    };


    receiveSuperDamage(damage) {
    
        if (wizardPlayer.stackSuper < 3) {

            return `You don't have mana enought...`;
        }
        this.hp -= damage;
        wizardPlayer.stackSuper = 0;
        return `The Dragon has received ${damage} points of damage`;  
    };

};


const wizardPlayer = new Wizard();
const dragonBot = new Dragon();


class Round {

    wizardAttack() {
        let receiveDamageDragon = dragonBot.receiveDamage(wizardPlayer.attackWizard());
            
        return receiveDamageDragon;
    };

    dragonAttack() {
        let receiveDamageWizard = wizardPlayer.receiveDamage(dragonBot.attackDragon());

        return receiveDamageWizard;
    };

    wizardSuperAttack() {
        let receiveSuperDamageDragon = dragonBot.receiveSuperDamage(wizardPlayer.attackSuper());

        return receiveSuperDamageDragon;
    }

    updateHpWizard(){
        return wizardPlayer.hp 
        
    }

    updateHpDragon(){
        return dragonBot.hp
    }

};


function hpBarWizard () { 
    const hpPercent = wizardPlayer.hp / wizardPlayer.maxHp

    return 250 * hpPercent

}

function hpBarDragon() {
    const hpPercent = dragonBot.hp / dragonBot.maxHp

    return 400 * hpPercent

}


const rounds = new Round;


const playerCommands = document.getElementById("commands-button");
const playerCommandAttack = document.getElementById('command-attack');
const playerCommandShield = document.getElementById('command-shield');
const playerCommandSuperAttack = document.getElementById('command-superattack')

// Button Elements

const attackButtonElement = document.createElement('button')

attackButtonElement.addEventListener('click', attackButton)
attackButtonElement.innerText = 'Attack'

const shieldButtonElement = document.createElement('button')

shieldButtonElement.addEventListener('click', shieldButton)
shieldButtonElement.innerText = 'Shield'

const superAttackElement = document.createElement('button')

superAttackElement.addEventListener('click', superAttackButton)
superAttackElement.innerText = 'Super Attack'

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
        receiveDmg()
    }, 1000);
    
    setTimeout(() => {
        playerCommands.innerHTML = ''
        playerCommands.appendChild(attackButtonElement);
        playerCommands.appendChild(shieldButtonElement);
        playerCommands.appendChild(superAttackElement);
        updateCanvas()
    }, 2000);
};

function receiveDmg(){
    playerCommands.innerHTML = rounds.dragonAttack();
};

function shieldButton() {
    playerCommands.innerHTML = "Damage blocked!";

    setTimeout(() => {
        playerCommands.innerHTML = ''
        playerCommands.appendChild(attackButtonElement);
        playerCommands.appendChild(shieldButtonElement);
        playerCommands.appendChild(superAttackElement);
        updateCanvas();
    }, 2000);
};

function superAttackButton() {
    playerCommands.innerHTML = rounds.wizardSuperAttack();
    setTimeout(() => {
        playerCommands.innerHTML = ''
        playerCommands.appendChild(attackButtonElement);
        playerCommands.appendChild(shieldButtonElement);
        playerCommands.appendChild(superAttackElement);
        updateCanvas();
    }, 2000);
};



