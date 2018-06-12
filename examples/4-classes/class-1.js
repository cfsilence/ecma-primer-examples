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
    return 'For great justice!';
  }
}

const char = new Character();
console.log(char);
console.log( char.absorbDamage(5) );
console.log( char.isAlive() );