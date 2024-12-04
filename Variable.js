

function checkVar(){
    console.log("Befor Declaration of Variable Var  "+ x);
    
    var x=10;

    console.log("After Declaration of Variable Var   "+ x);

    var x=4;

    console.log("After ReDeclaration of Variable Var   "+ x);

}

// checkVar();


function checkLet(){
    console.log("Befor Declaration of Variable Let"+ x);
    
    let x;

    x=10;

    console.log("After Declaration of Variable Let"+ x);

    // let x=12;

    // console.log("After ReDeclaration of Variable Var   "+ x);


}


// checkLet();


function checkConst(){
    const x=10;
    console.log("Befor Declaration of Variable Var  "+ x);
    
    x=7;
    console.log("After Declaration of Variable Var   "+ x);


}

checkConst();