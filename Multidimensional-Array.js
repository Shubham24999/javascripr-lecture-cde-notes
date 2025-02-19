
let arr1=[2,45,7]

let arr2=[4,8,89]

let arr3=[93,23,6]

let mulDimArr=[
            [2,45,7],
            [4,8,89],
            [93,23,6]
        ]
let sum=0;
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        sum+=mulDimArr[i][j]
    }
}

console.log("Sum is : "+sum);
        