class City {
    constructor(population, region) {
        this.population = population;
        this.region = region;
    }
}

class Atlanta extends City {
    constructor(population, region, amazingDevelopers, culture) {
        super(population, region);
        this.amazingDevelopers = amazingDevelopers;
    }

    canRecruit() {
        return this.amazingDevelopers ? 'Yes!!!' : ':(';
    }
}

const a = new Atlanta(1000000, 'SouthEast', true, 'Fantastic');
console.log( a );
console.log( a.canRecruit() );