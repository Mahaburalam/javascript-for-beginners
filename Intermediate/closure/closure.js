function stopwatch(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}
const firstWatch = stopwatch();
console.log('For first watch: ',firstWatch());
console.log('For first watch: ',firstWatch());
console.log('For first watch: ',firstWatch());
console.log('For first watch: ',firstWatch());

const secondWatch = stopwatch();
console.log('For second watch: ',secondWatch());

const thirdWatch = stopwatch();
console.log('For third watch: ',thirdWatch());
console.log('For third watch: ',thirdWatch());
console.log('For third watch: ',thirdWatch());

console.log('For second watch: ',secondWatch());