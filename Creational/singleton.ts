class Settings {
    static instance:Settings;
    // prevent new with private constructor
    private constructor(){}

    static getInstance():Settings{
        if(!Settings.instance){
            Settings.instance = new Settings();
        };
        return Settings.instance;
    }
};

// Here is when things become a little bit more nuanced.
// In javascript we have object literals and also the concept of global data.
// Objects in javascript are passed around by refrence.

// We have the same characteristics as the singleton pattern by just creating a global object.

const settings  = {
    dark:'true'
};

// The pattern itself is just extra builerplate that we don't need.

// It is entirely a difrent story in C++ but the moral of the story it to lean
// on your language built in features before implementing a fancy design pattern.



