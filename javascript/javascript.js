// require('./index')

const diceDamage = Math.floor(Math.random()*7);
const diceSuperDamage = Math.floor(Math.random() * 7); // desconsiderar o 0 >>> *BONUS

// console.log(diceSuperDamage)
// console.log(diceDamage)

class Wizard {
    constructor(hp, strength, shield, damageSuper) {
        this.hp = 500;
        this.strength = 30;
        this.shield = 1000;
        this.strengthSuper = this.strength * 2;
    };

    attackWizard(){
        return this.strength * diceDamage;
    };


    receiveDamage(damage){
        this.hp -= damage;

        if(this.hp <= 0){
            return `The Wizard has died!`
        };
        return `The Wizard has received ${damage} points of damage`
    };

};

class Dragon {
    constructor(hp, strength) {
        this.hp = 1000;
        this.strength = 10;

    };

    attackDragon() {
        return this.strength * diceDamage;
    };

    receiveDamage(damage) {
        this.hp -= damage;

        if (this.hp <= 0) {
            return `The Dragon has died!`;
        };
        return `The Dragon has received ${damage} points of damage`;
    };

};


class Round {
    constructor(){
        this.wizard = new Wizard;
        this.dragon = new Dragon;
    }

    wizardAttack(){
        let receiveDamageDragon = this.dragon.receiveDamage(this.wizard.attackWizard());
            
        return receiveDamageDragon;
    };

    dragonAttack(){
        let receiveDamageWizard = this.wizard.receiveDamage(this.dragon.attackDragon());

        return receiveDamageWizard;
    };

    updateStatus(){
       return [this.wizard, this.dragon];

    };
};



const playerCommands = document.getElementById("commands-button");
const playerCommandAttack = document.getElementById('command-attack');
const playerCommandShield = document.getElementById('command-shield');
const playerCommandSuperAttack = document.getElementById('command-superattack')

playerCommandAttack.onclick = () => {
    attackButton();
};


const attackButtonElement = document.createElement('button')

attackButtonElement.addEventListener('click', attackButton)
attackButtonElement.innerText = 'Attack'

const shieldButtonElement = document.createElement('button')

shieldButtonElement.addEventListener('click', shieldButton)
shieldButtonElement.innerText = 'Shield'


function attackButton(){ 
    playerCommands.innerHTML = rounds.wizardAttack();
    setTimeout(() => {
        receiveDmg()
    }, 1000);
    
    setTimeout(() => {
        playerCommands.innerHTML = ''
        playerCommands.appendChild(attackButtonElement);
        playerCommands.appendChild(shieldButtonElement);
    }, 2000);
}

function receiveDmg(){
    playerCommands.innerHTML = rounds.dragonAttack();
}

document.getElementById('command-shield').onclick = () => {
    shieldButton();
};

function shieldButton() {
    playerCommands.innerHTML = "Damage blocked!"
}




// -----------------------
// Test
const wizardPlayer = new Wizard
const dragonBot = new Dragon
const rounds = new Round

// console.log(wizard1.attackWizard())
// console.log(wizard1.receiveDamage(180))
// console.log(dragon1.attackDragon())
// console.log(round1.wizardAttack())
// console.log(round1.dragonAttack())
// console.log(round1.updateStatus())

// -----------------------






