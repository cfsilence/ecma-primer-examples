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
    if( this.health < 0 ) this.health = 0;
    return this.health;
  }

  isAlive() {
    return this.health > 0;
  }

  battlecry() {
    return 'For great justice!';
  }
}

const char = new Character();
console.log( char );
console.log( char.absorbDamage(5) );
console.log( char.isAlive() );

const weakChar = new Character(50,50,100);
console.log( weakChar );
console.log( weakChar.absorbDamage(51) );
console.log( weakChar.isAlive() );