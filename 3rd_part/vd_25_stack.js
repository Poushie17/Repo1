function one(){
    console.log(1);
    two()
}
function two(){
    console.log(2);
    three()
}
function three(){
    console.log(3);
}
one()
two()
three()
