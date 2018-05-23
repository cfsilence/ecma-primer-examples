class SuperArray extends Array {

    min() {
        return Math.min.apply(null, this);
    }

    max() {
        return Math.max.apply(null, this);
    }
    
    median() {
        this.sort(function(a, b) {
            return a - b;
        });
        const mid = this.length / 2;
        return mid % 1 ? this[mid - 0.5] : (this[mid - 1] + this[mid]) / 2;
    }

}

const example = new SuperArray(100,150,200,1000)
console.log( 'median-->', example.median() );
console.log( 'min-->', example.min() );
console.log( 'max-->', example.max() );