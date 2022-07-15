/**
   Prototype is just a fancy word for clone.
  
   You should be familiar with class inheritance where a class inheritance
   where a class can be extended with a subclass.

   The problem with inheritace is that it can lead to a complex hierarchy
   of code.

   The prototype pattern is an alternative way to implement inheritance.
   but instead of inheriting functionality from a class it comes from an
   object that's already been created.

   This creates a flat prototipe chain that makes it much easier to share
   functionality between objects specially in a dinamic language like javascript.
   wich supports prototipal inheritance out of the box.




 */

const zombie = {
    eatBrains(){
        return 'yummmy brain'
    }
};
const chad = Object.create(zombie,{ name: { value: 'chad'}});

// If you log this object you'll notice you only see the name.
// and not the eat brain method.

console.log(chad); // {name:{value:'chad'}}

// However if you try to call that method it would still work.
chad.eatBrains();

// that is because javascript would go up the protitype chain 
// untill it reaches the root looking for any methods or proprties.
// on the parent objects

// You can always get the prototype of an object by using the __proto__ 
// propery.

chad.__proto__;

// but that not a modern best practice.
// and instead you should use.

Object.getPrototypeOf(chad);


// when it comes to Classes in javascript.
// prototype referes to it's constructor.

// that means we can extend the class with additionals functions.

(<any>Array.prototype).bad = function(){
    console.log("im bad");
};

// however that's also generally considered a bad pratice.










