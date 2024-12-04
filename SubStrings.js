let text1 = "Home";

for(let i=2;i<text1.length;i++){
    subString="";
    for(let j=i;j<text1.length;j++){
        subString+=text1[j];
        console.log(subString);
        
    }
}









// let newtxt=text1.substring(0, 5);
// console.log(newtxt); // Output: "Hello"
// console.log(text1.substring(3));
//     // Output: "World!"
// console.log(text1.substring());
    
// console.log(text1.length);
    



// Swapping Indices
// If startIndex > endIndex, they are swapped automatically:




// let text2 = "JavaScript";
// console.log(text2.substring(5, 0)); // Output: "JavaS" (same as substring(0, 5))


// If endIndex is omitted

// let text3 = "Programming";
// console.log(text3.substring(3)); // Output: "gramming"

// Handling Out-of-Range Indices

// let text4 = "Developer";
// console.log(text4.substring(-5, 4)); // Output: "Deve" (negative index treated as 0)
// console.log(text4.substring(2, 50)); // Output: "veloper" (endIndex exceeds length)

