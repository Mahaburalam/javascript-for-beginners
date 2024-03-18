//
const number = 20;
switch(number)
{
    case 20:
        console.log("test");
        break;
    case 18:
        console.log("done");
        break;
    case 21:
        console.log("yyyyyy");
        break;
    default:
        console.log('new');
}

const number2 = 20;

switch(true) {
    case number2 >= 20:
        console.log("test");
        break;
    case number2 <= 18:
        console.log("done");
        break;
    default:
        console.log("yyyyyy");
}


// another example
const fruitsName = "Mango";
switch(fruitsName)
{
    case "Banana":
        console.log("It is Banana");
        break;
    case "mango":
        console.log("It is mango");
        break;
    case "pineapple":
        console.log("It is pineapple fruit");
        break;
    case "Mango":
        console.log("Exact match!!It is mango..");
        break;
    default:
        console.log("No match yet!!");
}