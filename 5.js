// Map Method
// let data = new Map([["BMW",100], ["Audi", 200], ["Toyoto", 300]]);
// data.set("Alto", 500);
// data.set("Neno", 600);
// console.log(data);
// console.log(data.size);
// data.clear();
//data.delete("Alto");
// console.log(data.entries());
// console.log(data.get("BMW"));
// console.log(data.has("Bmw")); // console.log(data.keys());
// console.log(data.values());

// let txt = "";
// data.forEach((val, str) => { txt = txt + str + " => "+ val + "\n";
// });
// console.log(txt);

// String method
/*

1. -> lenth                   7. -> UpperCase()             13. -> padStart()            
2. -> slice()                 8. -> LowerCase()             14. -> padEnd()
3. -> substring()             9. -> concat()                15. -> charAt()
4. -> substr()               10. -> trim()                  16. -> charCodeAt()
5. -> replace()              11. -> trimStart()             17. -> split()
6. -> replaceAll()           12. -> trimEnd()

*/

let data="Java script is the wold`s most popular programming language.";

// 1.-> String lenth
// console.log(data.length);           //  60

// 2. -> slice()     

// console.log(data.slice(5,12));               //  cript i 
// console.log(data.slice(25));                //  most popular programming language.
// console.log(data.slice(-12,-3));            //  ng langua


// 3. -> substring() 
// console.log(data.substring(5,12));              //  cript i 
// console.log(data.substring(25));               //  most popular programming language.
// console.log(data.substring(-12));              //  Java script is the wold`s most popular programming language.
// console.log(data.substring(-12,-5));           // counting to 0


// 4. -> substr()

// console.log(data.substr(5,12));              //  cript is th
// console.log(data.substr(-15,12));            //  mming langua


// 5. ->  UpperCase() 

// console.log(data.toUpperCase());   //  JAVA SCRIPT IS THE WOLD`S MOST POPULAR PROGRAMMING LANGUAGE.


// 6. -> LowerCase() 

// console.log(data.toLowerCase());   //  java script is the wold`s most popular programming language.


//  7. -> charAt()

//  console.log(data.charAt(0));           //  J


// 8. -> charCodeAt()

// console.log(data.charCodeAt(0));        //  74


// 9. -> concat() 

// console.log(data.concat("Vijay","Dankhara"));  // joint this word backSide Vijay Dankhara
