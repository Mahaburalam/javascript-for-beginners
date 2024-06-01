const person = {
    myName: "Md Mahabur Alam",
    age: 27,
    division: "Khulna"
}

text = '';
for(x in person) {
    text += " " + person[x];
}

document.getElementById('demo').innerHTML = text;


document.getElementById('obj-display').addEventListener('click', ()=>{
    // console.log('jdghb')
    const divContainer = document.getElementById('test');
    for(info in person) {
        console.log (info, person[info]);
        const p = document.createElement('p');
        p.innerHTML = `
            ${info} : ${person[info]}
        `
        divContainer.appendChild(p);
    }
})