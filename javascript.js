
const diceWizard = Math.floor(Math.random()*7);


// console.log(dice)

class Wizard {
    constructor(hp, strength, shield, damageSuper) {
        this.hp = 200;
        this.strength = 20;
        this.shield = [];
        this.strengthSuper = 150;
    }

    attack(){
        return this.strength * diceWizard;

    }


    receiveDamage(damage){
        this.hp -= damage;

        if(this.hp <= 0){
            return `A Wizard has died!`
        } 
        return `A Wizard has received ${damage} points of damage!`

    }

}


// Test
const wizard1 = new Wizard
// console.log(wizard1.attack())
// console.log(wizard1.receiveDamage(180))

class Dragon {
    constructor(){
        this.hp = 1000;
        this.damage = 50;

    }
}