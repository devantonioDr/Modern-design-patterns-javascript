/**
 Imagine you are running a hotdog stand and when 
 a customer places an order they need to tell you 
 everything they want in the sandwich in the constructor.
*/

class Hotdog {
    constructor(
        public bun: string,
        public ketchup?: boolean,
        public mustard?: boolean,
        public kraut?: boolean,
    ) {

    }
};
new Hotdog('wheat', false, true, true);

// it works but it is hard to keep track all of this options.
// We might want to defer each step at a later point.

/*
 * With the builder pattern we create the object step by step .
 * Using methods rather then the constructor.  
*/
class Hotdog2 {
    constructor(
        public bun: string,
        public ketchup?: boolean,
        public mustard?: boolean,
        public kraut?: boolean,
    ) { }
    addKetchup() {
        this.ketchup = true;
    }
    addMustard() {
        this.mustard = true;
    }
    addKraut() {
        this.kraut = true;
    }
};
// And we can even delegate the building logic to an entirely defferent class.

// In javascript we'll have each method return "this" wich is a refrence to the object intance.
class Hotdog3 {
    constructor(
        public bun: string,
        public ketchup?: boolean,
        public mustard?: boolean,
        public kraut?: boolean,
    ) { }
    addKetchup() {
        this.ketchup = true;
        return this;
    }
    addMustard() {
        this.mustard = true;
        return this;
    }
    addKraut() {
        this.kraut = true;
        return this;
    }
};
// That allow us to implement method chaining where we instaciate and object.
const myLunch = new Hotdog3('gluten free');

myLunch.addKetchup()
    .addKraut()
    .addMustard();

// you'd come across this with libraries like jquery.
// but it's gone out of style in recent years.

