//1.
myArr1=(...x)=>console.log(x);
myArr1(1,2,3,4,5,6);

//2.
let arr1=[1,2,3,4];
myArr2=(...y)=>{
    let arr2=[...arr1,...y];
    console.log(arr2);
}
myArr2(5,6,7,8);

//3.
let arr2=[12,21,13,47];
myArr3=(...y)=>{
    let array3=[...arr2,18,...y];
    console.log(array3);
}
myArr3(5,6,7,8);

//4.
let arr3=[1,2,3,4];
myArr4=(...y)=>{
    let array4=[...arr3,{name:"kaliraj", age:26},...y];
    console.log(array4);
}
myArr4(5,6,7,8);

//5.
myArr5=(...y)=>{
    let array5=[...arr2,...y];
    console.log(array5);
}
myArr5("hi","hello");

//6.
myArr5=(...y)=>{
    let array5=[...arr2,...y,{name:"kaliraj"},12,"hello World"];
    console.log(array5);
}
myArr5("hi","hello");

//7.
let obj={name:"kaliraj",batch:"FED-04",branch:"KPI"};
myArr6=(...y)=>{
    let array6=[obj,...y];
    console.log(array6);
}
myArr6("hi","hello",18,"how are you");

//8.
myArr7=(...y)=>{
    let array7=[obj,...y];
    console.log(array7);
}
myArr7({name:"virat",role:"player",no:18});

//9.
myArr8=(...y)=>{
    let array8=["hello",...y];
    console.log(array8);
}
myArr8("hi","virat",18,"how are you");

//10.
myArr9=(obj,...y)=>{
    let array9=["thanks","for","the","task",...y,obj];
    console.log(array9);
}
myArr9("hi",19,{name:"kaliraj"},"bye");