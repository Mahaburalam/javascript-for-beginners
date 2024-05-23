// find number from 1 to 100 where 3 & 5 or both are divided

function dividedNumber(numbers){
    for(let i = 1; i < numbers; i++){
        if((i % 3 === 0) & (i % 5 === 0)) {
                console.log(`${i} is divided by both numbers`);
            }
        else if(i % 3 === 0) {
            console.log(`${i} number is divided by 3`);
        }
        else if(i % 5 === 0) {
            console.log(`${i} is divided by 5`);
        }
        
    }
}
dividedNumber(100);