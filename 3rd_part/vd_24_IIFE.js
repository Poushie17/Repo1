(function f1(){
    // named IIFE
    console.log(`Db 1`);
})();

( (name) => {
    console.log(`Db TWO ${name}`);
} )('poushie')
