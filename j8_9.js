// let p = new Promise((myresolve, yyreject) => {
//   let n = Number.parseInt(prompt("please enter a number"));
//   if (n == 1) {
//     myresolve(123344);

//   } else {
//     try(yyreject(1111111)){

//     }
//   }
// })
// console.log(p);

// let x = 5;
// try {
//   x = y + 1;
// } catch (errpp) {
//   document.getElementById("demo").innerHTML = errpp.message;
// }
// // document.getElementById("demo").innerHTML = "name";
// let b=fetch("https://cataas.com/cat/cute")
// console.log(b);

// const inht = (r, p) => {
//   let tt = document.querySelector("div");
//   tt.innerHTML += `<h>${r} is ${p}<br></br></h>`;
// };

// let p = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
//   .then((v) => {
//     return v.json();
//   })
//   .then((v) => {
//     console.log(v);
//     console.log("/////");
//     let r = v.meals[0];
//     console.log(r);
//     Object.keys(r)
//       .slice(0, 4)
//       .map((y) => {
//         console.log(r[y]);
//         if(r[y]!= null)
//         inht(y, r[y]);
//       });
//     // console.log(Array.from(().((p)=>console.log(p)));
//   });

// let p=new Promise((r,r1)=>{
//       let i,p=1;;
//       for (i=0;i<100000000;i++){
//        p +=p;
//       }
//       r(i)
//       console.log(p);
// })
// console.log("i am checking promise ")

// let p = new Promise((resolve, reject) => {
//   reject("i");
// }).then((r) => {
//       console.log(r);
//   console.log("jjj");
// }).catch((r)=>{
//       console.log(r);
// }).then((r)=>{
//       console.log(typeof r);
//       console.log("i am good boy")
// })
// console.log(p);
const foo = () => {
  return {
    foo: "foo",
  };
};

const bar = () => {
  return;
  {
    bar: "bar";
  }
};

console.log(foo(), bar());

const scrambled = { 2: "e", 5: "o", 1: "h", 4: "l", 3: "l" };

const result = Object.values(scrambled).reduce((agg, el) => agg + el, "");

console.log(result);
