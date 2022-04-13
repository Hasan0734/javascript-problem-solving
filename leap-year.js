//কোন সাল leap year কিনা তা বের করতে পারি কিভাবে?

//condition
//1. 400 ভাগ করলে ভাগশেষ 0 হবে
//2. 4 এর গনিতক হতে হাবে আর সেটা 100 এর গনিতক হতে পারবে না


function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is leap year`)
    }else{
        console.log(`${year} is not leap year`)
    }
}

isLeapYear(2020);