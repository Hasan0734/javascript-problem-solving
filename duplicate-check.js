//কোন Arrray থেকে duplicate number থেকে কিভাবে বের করতে পরি?

const numbers = [1,2,3,4,5,6,5,4,2,8,9,9];
const duplicates = numbers.filter(function(value, index, array){
   return array.indexOf(value) !==index;
});

console.log(duplicates);


//কোন Arrray থেকে unique number থেকে কিভাবে বের করতে পরি?

const unique = numbers.filter(function(value, index, array){
   return array.indexOf(value) ===index;
});

console.log(unique);
