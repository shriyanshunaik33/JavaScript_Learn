// basic camprisons like <,>,>=,==,!=  work the same in js

//  console.log("2">1)     //it converts it to number but doesnt do it always
//  console.log("02">1)

console.log(null > 0)   // the comp oprators >,< convert it to number which is 0, but == doesnt convert it.
console.log(null == 0)
console.log(null >= 0)


// ===
// this checks the data type too, it doesnt convert the datatype like the == does

console.log("2"==2)   //will give true
console.log("2"===2)  //will give false 