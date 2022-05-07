'use strict';



/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false */

function capitalA(s){
    // Add your logic.
    let regex1 = /[A-Z]/gi && /A\b/g;
    let res1 = regex1.test(s)
    return res1;
}


/* Write a function that take a string and return true if the the sting is following the emails pattern
which end with io (example@example.io) */

function ioEmail(email){
    // Add your logic.
        // let regex2 = /[a-z0-9]+@[a-z]/ && /^[^\s@]+@[^\s@]+\.[^\s@]+$/ && /.io\b/g ;
//    let regex2 =  /^(?!.*[kpKP])[a-zA-Z]+@[]/g ;
// let regex2 = /example@example.io/g;
// let regex2 = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ && /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// let regex2 = /^(([^<>()[\]\,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[.io\b]{2,})$/i ;
// let regex2  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/  || /^\S+@\S+\.\S+$/ || /(io)\b/g ;
// let regex2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// let regex2 =  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i && /^[^\s@]+@[^\s@]+\.[^\s@]+$/ && /.io\b/g
// let regex2 = /^[\w.][^@.]+@([\w-]+.)+[\w-]{2}(.io)?$/gm ;
let regex = /^[A-Za-z]+@[A-Za-z]+.io$/
// let res = regex.test(email); 
return(regex.test(email));
// return res;
}

/* You have a text that contain image names with their extention you need to write a function to 
find all images in that text and return their names and extention in an array 
required extention are jpg, jpeg and png.
*/

function imagesSearcher(text){
    let arr = [];
    // let regex1 = / (\w+.jpg)(\b)/gi ;
    // let regex2 = / (\w+.jpeg)(\b)/gi ;
    // let regex3 = / (\w+.png)(\b)/gi ;
    // let regex = [ / (\w+.jpg)(\b)/gi  || / (\w+.jpeg)(\b)/gi || / (\w+.png)(\b)/gi ] ;
    // let regex =/([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$/
    let regex =(/[\w\.\$]+(?=png|jpg|jpeg)\w+/g)

//     let res1 = text.match(regex1);
//     let res2 = text.match(regex2);
//     let res3 = text.match(regex3);
//     let rege = res3.concat(res1,res2);
//    arr.push(rege);
// let res1= text.match(regex)
// arr.push(res1)
    // arr.push(res2);
    // arr.push(res3);
    let textArr = text.split(" ");
    for (let i = 0; i < textArr.length; i++) {
        let word = textArr[i];
        // if (regex1.test(word) == true ||  regex2.test(word) == true ||  regex3.test(word) ==true) {
            if (regex.test(word) == true) {
            arr.push(word);
        } 
        // else {
        //     return arr
        // }
    }
 
    return arr;
    }
    
//     if (arr.length == 0) {
//         return 0
//     }else {
//         arr.pop();   
// }
// arr[0]= res1;
    // let res2 = text.match(regex);
    // arr[0]= res1;
    // arr.push(res2);
    // let res3 = text.match(regex);
    // arr[0]= res1;
    // arr.push(res3);

    // arr = res1, res2, res3;
    
    // Add your logic.



describe("Test capitalA", ()=>{
    test("It should return true if the input has uppercase and lowercase characters (no numbers and symbols) and it should end with capital A else return false ", () => {
        expect(capitalA("Hello world A")).toStrictEqual(true);

        expect(capitalA("Hello world")).toStrictEqual(false);

        expect(capitalA("Hello world a")).toStrictEqual(false);
    })
});

describe("Test ioEmail", () => {
    test("It should return true if the input is in email format that end with .io", () => {
        expect(ioEmail("example@example.io")).toStrictEqual(true);
        expect(ioEmail("ex@ample@example.io")).toStrictEqual(false);
        expect(ioEmail("ex.ample@example.io")).toStrictEqual(false);
        expect(ioEmail("example@example.gmail")).toStrictEqual(false);
    })
});


describe("Test imagesSearcher", () => {
    test("It should return all images names that end with jpg, jpeg and png extention", () => {
        expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, cat.png sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dog.jpg Ut enim ad minim veniam, quis nostrud exercitation ullamco cow.jpeg laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toStrictEqual(['cat.png', 'dog.jpg', 'cow.jpeg']);
        expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toStrictEqual([]);
        expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. horse.gif Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore dolphin.pdf eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa mouse.tiff qui officia deserunt mollit anim id est laborum.")).toStrictEqual([]);
    })
})