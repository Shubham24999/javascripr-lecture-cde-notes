
var m=9;

function checkVar(){
    console.log("Befor Declaration of Variable Var  "+ x);
    
    var x=10;

    console.log("After Declaration of Variable Var   "+ x);

    var x=4;

    console.log("After ReDeclaration of Variable Var   "+ x);

    console.log("value of i is  "+i);

    console.log("m  "+m);
    
    

}

// checkVar();


function checkLet(){
    
    // console.log("Befor Declaration of Variable Let"+ x);
    
    let x;

    x=10;

    console.log("After Declaration of Variable Let "+ x);

    x=12;

    console.log("After ReDeclaration of Variable Var   "+ x);

    // console.log("value of j is   "+j);
    


}


// checkLet();


function checkConst(){

    const x=10;

    console.log("initially of Variable const  "+ x);
    
    x=7;
    console.log("After ReAssigning of Variable const   "+ x);

     console.log("value of k is   "+k);


}

checkConst();


var i=5;
let j=6;
const k=7;