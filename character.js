// function characterCheck(char) {
//   if (typeof(char) == 'number') {
//       console.log('is the number')
//   } else if (char == char.toUpperCase()) {
//     console.log("Capital letter");
//   } else if (char == char.toLowerCase()) {
//     console.log("Small letter");
//   } else {
//     console.log("is symbol");
//   }
// }

// characterCheck();



// const characterCheck = (char) => {
//     if (typeof(char) == 'string') {
//         if (char.match(/^[A-Z]*$/)) {
//             console.log('is Capital')
//         }else if(char.match(/^[a - z]*$/)){
//             console.log('is small')
//         }else{
//             console.log('is symbole')
//         }
//     }else if(typeof(char) == 'number'){
//         console.log('is number')
//     }
// }

// characterCheck(':')
function characterCheck (char){
    if(char >= 'A' && char <= 'Z'){
        console.log('is capital ')
    }else if(char >= 'a' && char <= 'z') {
        console.log('is small number')
    }else if(char >= '0' && char <= '9' ){
        console.log('is number')
    }else{
        console.log('is symbole')
    }
}   

characterCheck('&')