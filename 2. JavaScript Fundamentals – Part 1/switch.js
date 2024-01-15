const number = 95;

switch(number)
{
    case 80: // 80 === 85
        console.log(`You can get 'A'`);
        break;
    case 85:
        console.log(`You can get A+`);
        break;
    case 90:
    case 95:
        console.log(`Better than A+`);
        break;
    case 70:
        console.log(`You get A-`);
    default:
        console.log(`You get fail the exam`);
}