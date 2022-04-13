//কোনো sentence এ কতোগুলো vowel আছে তা নির্নয় করা যায় কি ভাবে?



const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];


function checkVowel(sentence){
  let count = 0;
  const letters = Array.from(sentence)
  letters.forEach(function(value){
      if (vowels.includes(value)) {
          count++;
      }
  })
  return count;
}


console.log(checkVowel('The name of our country is Bangladesh'))