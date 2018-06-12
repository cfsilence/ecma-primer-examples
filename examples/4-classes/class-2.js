class Character {
    
    constructor(health, strength, experience) {
        this.health = health || 100;
        this.strength = strength || 100;
        this.experience = experience || 100;
    }

    /* how much damage should a strike do */
    strike() {
        return 1;
    }

    /* an enemy has struck us */
    absorbDamage(damage) {
        if( !this.isAlive() ) {
            return 0;
        }
        this.health = this.health - damage;
        return this.health;
    }

    isAlive() {
        return this.health > 0;
    }

    battlecry() {
        return 'For great justice!'
    }
}

class Warrior extends Character {
    
  constructor(health, strength, experience) {
    super(health, strength, experience);
    this.damageModifier = 4;
  }

  strike() {
    return 1 * this.damageModifier;
  }

  battlecry() {
    return 'I am a mighty warrior!!';
  }
}

class Knight extends Character {

  constructor(health, strength, experience) {
    super(health, strength, experience);
    this.damageModifier = 2;
    this.armorModifier = 2;
    this.armorHealth = 10;
  }

  strike() {
    return 1 * this.damageModifier;
  }

  absorbDamage(damage) {
    if( !this.isAlive() ) {
      return 0;
    }
    const strike = ( damage - ( this.armorHealth > 0 ? this.armorModifier : 0 ) );
    this.health = this.health - ( strike > 0 ? strike : 0 );
    this.armorHealth = this.armorHealth > 0 ? this.armorHealth - 1 : 0;
    return this.health;
  }

  drinkPotion() {
    this.armorHealth = 10;
  }
}

const knight = new Knight();
const warrior = new Warrior();

console.log( warrior );
console.log( knight );

console.log( knight.battlecry() );

for( let i=1; i<36; i++) {
  if( i === 16 ) {
    knight.drinkPotion();
  }
  console.log( `strike ${i}-->`, knight.absorbDamage( warrior.strike() ) );
}

console.log( 'isAlive-->', knight.isAlive() );
console.log( warrior.battlecry() );

