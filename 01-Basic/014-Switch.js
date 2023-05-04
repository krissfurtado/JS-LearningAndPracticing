//to work or not to work
/*
0- Sunday
1- Monday
2- Tuesday
3- Wednesday
4- Thursday
5- Friday
6- Saturday
*/

//format: new Date(year, month, day, hour, minute, second, millisecond)
today = new Date() //today
sunday = new Date(2023, 3, 30) //Sunday
monday = new Date(2023, 4, 1) //Monday
saturday = new Date(2023, 4, 6)
valueNotAllow = ""

date = today, weekday = date.getDay()
// date = sunday, weekday = date.getDay()
// date = monday, weekday = date.getDay()
// date = saturday, weekday = date.getDay()
// date = valueNotAllow, weekday = ""

console.log(`The date is: ${date} \nThe weekday is (according JS): ${weekday}`)
switch (weekday) {
    case 0:
        console.log("Today is Sunday, due to this you not work");
        break;
    case 1:
        console.log("Today is Monday, due to this you need work");
        break;
    case 2:
        console.log("Today is Tuesday, due to this you work");
        break;
    case 3:
        console.log("Today is Wednesday, due to this you gotta go to work");
        break;
    case 4:
        console.log("Today is Thursday, due to this you work");
        break;
    case 5:
        console.log("Today is Friday, due to this you work");
        break;
    case 6:
        console.log("Today is Saturday, due to this you not work");
        break;
    default:
        console.log("Value not allow")
        break;
}