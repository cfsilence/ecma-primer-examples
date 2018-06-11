/*
    arrow functions retain the scope of the surrounding block
*/
class Test {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    bad() {
        setTimeout( function() {
            console.log( {a: this.a, b: this.b} );
        }, 250);
    }

    workaround() {
        const self = this;
        setTimeout( function(){
            console.log( {a: self.a, b: self.b} );
        }, 250);
    }

    good() {
        setTimeout( () => {
            console.log( {a: this.a, b: this.b} );
        }, 250);
    }
}

const t = new Test(1, 2);
t.bad();
t.workaround();
t.good();