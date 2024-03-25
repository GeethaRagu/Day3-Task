//Task 1:-
// Compare two JSON having same properties without order

var obj1 = { name : "Person 1", age: 15};
var obj2 = { age: 15, name : "Person 1"};

if(JSON.stringify(obj1,Object.keys(obj1).sort())===JSON.stringify(obj2,Object.keys(obj2).sort()))
{
console.log("Two JSON have same properties");
}
else console.log("Two JSON have different properties")

//Task 2:-
// Display all countries flag

var myrequest = new XMLHttpRequest();
myrequest.open("GET","https://restcountries.com/v3.1/all",true);
myrequest.send();
myrequest.onload = function(){
    var data = myrequest.response;
    //console.log(data);
    var result = JSON.parse(data);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png)
    }
}

//Task 3:-
//Print countries name,regions,subregion and populations

myrequest.onload = function(){
  var data1 = myrequest.response;
  //console.log(data);
  var result1= JSON.parse(data1);
  for(var i=0;i<result1.length;i++){
      console.log("County name: "+result1[i].name.common+",Region: "+result1[i].region,",Subregion: "+result1[i].subregion+",Populations: "+result1[i].population);
  }
}
//Task4:-
//Task1
//1. Declaring four variables and not assigning values

let variable1;
var variable2;
let variable3;
var variable4;
console.log(variable1, variable3, variable3, variable4);

//2. How to get value of the variable myvar as output

let myvar = 10;
console.log(myvar);

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstname = "Geetha";
let lastname = "Palanisamy";
let maritalstatus = "Married";
let country = "India";
let age = 40;
console.log(firstname);
console.log(lastname);
console.log(maritalstatus);
console.log(country);
console.log(age);

//4. Declare variables to store your first name, last name, marital status, country and age in a single line

let firstname1 = "Geetha",
  lastname1 = "Palanisamy",
  maritalstatus1 = "Married",
  country1 = "India",
  age1 = 40;
console.log(firstname1);
console.log(lastname1);
console.log(maritalstatus1);
console.log(country1);
console.log(age1);

//5.  Declare variables and assign string, boolean, undefined and null data types

let var1 = 10;
let var2 = "Stringdatatype";
let var3 = true;
let var4;
let var5 = null;
console.log(var1, typeof var1);
console.log(var2, typeof var2);
console.log(var3, typeof var3);
console.log(var4, typeof var4);
console.log(var5, typeof var5);

//6. Convert the string to integer

let stringvar = "3105";
console.log(parseInt(stringvar));
console.log(Number(stringvar));
console.log(+stringvar);

//7. Truthy and Falsy values
let point1 =
  "True and False are Boolean values, while truthy and falsy can be any type of value.";
let point2 =
  "Used to check if a variable has been initialized or if a value is empty.";
let point3 = "All values are truthy unless they are defined as falsy.";
let point4 =
  "false, 0, -0, NaN, undefined, null, and the empty string are falsy";
let point5 =
  "They are used in many JavaScript constructs, such as conditional statements and logical operators.";
let point6 =
  "When non-boolean values are used in a boolean context, such as the condition of an if statement, they will be coerced into either true or false. Values that are coerced into true are called truthy and values that are coerced into false are called falsy.";
console.log("1." + point1);
console.log("2." + point2);
console.log("3." + point3);
console.log("4." + point4);
console.log("5." + point5);
console.log("6." + point6);

//Task 2
//1. Square of a number
let number1 = 5;
console.log("Power of " + number1 + " is " + Math.pow(number1, 2));

//2.Swapping of two numbers

let value1 = 10;
let value2 = 20;
let temp;
console.log("Numbers before swapping: " + value1, value2);
temp = value1;
value1 = value2;
value2 = temp;
console.log("Numbers after swapping: " + value1, value2);

//3.Addition of 3 numbers

let int1 = 34;
let int2 = 45;
let int3 = 78;
let add = int1 + int2 + int3;
console.log(add);

//4. Celcius to Farenheit conversion

let celcius = 45;
let farenheit = (celcius * 9) / 5 + 32;
console.log("Farenheit of " + celcius + "'C is " + farenheit);

//5. Meter to mile

let meter = 35;
let mile = meter * 0.00062137;
console.log(meter + " meter is equal to " + mile + " mile");

//6.Pounds to Kg

let pounds = 50;
let kg = pounds * 0.453592;
console.log(pounds + " pounds is equal to " + kg + " kg");

//7.Calculate Batting Average

let runs = 100;
let timesout = 15;
let battingaverage = runs / timesout;
console.log(
  "A batting average of a player with " +
    runs +
    " runs and is out " +
    timesout +
    " times is " +
    battingaverage.toFixed(3) +
    " or " +
    (battingaverage * 100).toFixed(2) +
    "%"
);

//8.Calculate five test scores and print their average
let score1 = 150;
let score2 = 200;
let score3 = 25;
let score4 = 75;
let score5 = 50;
let average = (score1 + score2 + score3 + score4 + score5) / 5;
console.log(
  "Average of a player with scores of " +
    score1 +
    "," +
    score2 +
    "," +
    score3 +
    "," +
    score4 +
    " and " +
    score5 +
    " is " +
    average
);

//9. Power of any number x ^ y.
let x = 8;
let y = 2;
console.log("Power of " + x + " ^ " + y + " is " + Math.pow(x, y));

//10.Calculate Simple Interest

let principle = 50000;
let rateofinterest = 8;
let time = 1;
let simpleinterest = (principle * rateofinterest * time) / 100;
console.log(
  "If you invest Rs. " +
    principle +
    " in a fixed deposit account for a period of " +
    time +
    " year at an interest rate of " +
    rateofinterest +
    "then the interest received at the end of" +
    time +
    "tenure will be Rs." +
    simpleinterest
);

//11.Area of equilateral triangle

let side = 4;
let areaoftriangle = (Math.sqrt(3) * Math.pow(side, 2)) / 4;
console.log(
  "Area of equilateral triangle of side " + side + " is " + areaoftriangle
);

//12. Area Of Isosceles Triangle

let base = 4;
let height = 5;
let areatriangle = (1 / 2) * base * height;
console.log(
  "Area of Isosceles triangle with base " +
    base +
    " and height " +
    height +
    " is " +
    areatriangle
);

//13.Volume Of Sphere
let radius = 3;
let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
console.log("Volume of Sphere with radius " + radius + " units is " + volume);

//14.Volume Of Prism

let base1 = 5;
let height1 = 10;
let prismvolume = base1 * height1;
console.log(
  "Volume of prism with base " +
    base1 +
    " and height " +
    height1 +
    " is " +
    prismvolume
);

//15.Find area of a triangle.

let base2 = 4;
let height2 = 5;
let areatriangle2 = (1 / 2) * base2 * height2;
console.log(
  "Area of triangle with base " +
    base2 +
    " and height " +
    height2 +
    " is " +
    areatriangle2
);

//16.Give the Actual cost and Sold cost, Calculate Discount Of Product

let actualcost = 215;
let soldcost = 115;
let discount = actualcost - soldcost;
console.log(
  "Discount for actual cost of Rs" +
    actualcost +
    " and sold cost of Rs" +
    soldcost +
    " is Rs" +
    discount
);

//17.Given their radius of a circle and find its diameter, circumference and area.
let radiusCircle = 2;
let diameter = 2 * radiusCircle;
let circumference = 2 * Math.PI * radiusCircle;
let area = Math.PI * Math.pow(radiusCircle, 2);
console.log(
  "Diameter of Circle with radius " +
    radiusCircle +
    " units is " +
    diameter +
    " units"
);
console.log(
  "Circumference of Circle with radius " +
    radiusCircle +
    " units is " +
    circumference.toFixed(2) +
    " units"
);
console.log(
  "Area of Circle with radius " +
    radiusCircle +
    " units is " +
    area.toFixed(2) +
    " square units"
);

//18.Given two numbers and perform all arithmetic operations.

let num1 = 55;
let num2 = 34;
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
console.log("Addition of " + num1 + " and " + num2 + " is " + addition);
console.log("Subtraction of " + num1 + " and " + num2 + " is " + subtraction);
console.log(
  "Multiplication of " + num1 + " and " + num2 + " is " + multiplication
);
console.log(
  "Division of " + num1 + " and " + num2 + " is " + division.toFixed(2)
);

//19.Display the asterisk pattern as shown below(No loop needed):
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

//20.Calculate electricity bill?For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

let watts = 100;
let price = 10;
let energy = watts * 24 * 31; // multiply watts with total hours and number of days.assuming no of days is 31 in a month
let bill = (energy / 1000) * price;
console.log("The electricity bill is Rs" + bill);

//21.Program To Calculate CGPA

let marks = { English: 8.5, Tamil: 7.25, Maths: 9 };
let sum = 0;
for (let keys in marks) {
  sum = sum + marks[keys];
}
let cgpa = sum / Object.keys(marks).length;
console.log(
  "CGPA of a student with " +
    marks.English +
    " in English, " +
    marks.Tamil +
    " in Tamil and " +
    marks.Maths +
    " in Maths is " +
    cgpa
);

//Task 3

//1.Write a loop that makes seven calls to console.log to output the following triangle:

for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}

//2. Iterate through the string array and print it contents

var strArray = [
  "<option>Jazz</option>",
  ,
  "<option>Blues</option>",
  ,
  "<option>New Age</option>",
  ,
  "<option>Classical</option>",
  ,
  "<option>Opera</option>",
];

for (let i = 0; i < strArray.length; i++) {
  if (strArray[i]) console.log(strArray[i]);
}

//3. write a code to count the elements in the array . Don’t use length property

var myarray = [11, 22, 33, 44, 55];
let myarraylen = myarray.lastIndexOf(55) + 1;
console.log("The length of array is " + myarraylen);

//4.Declare an empty array.Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.How can you find your fifth favorite food?

let foods = [];
foods.push(
  "idly",
  "dosa",
  "vada",
  "poori",
  "pongal",
  "noodles",
  "chappati",
  "roti",
  "bread",
  "rice",
  "sambar",
  "payasam",
  "friedrice",
  "briyani",
  "curdrice",
  "sambarrice",
  "vada",
  "samaso",
  "mangojuice",
  "vanillaicecream"
);
console.log(foods.join(","));
console.log("The length of array is " + foods.length);
console.log("My favourite food is " + foods[4]);

//5. Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    if (friends[i] === "Mari") friends.splice(0, 1, "Munnabai");
  }
  console.log(friends);
}

dataHandling(friends);

//6.Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

const friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

function dataHandling1(input) {
  let friendsarray = input.indexOf("CaptianAmerica");
  let newarray = [];
  for (var i = 0; i < input.length; i++) {
    if (i <= friendsarray) newarray.push(friends[i]);
  }
  console.log(newarray);
}
dataHandling1(friends1);

//7.Find the person is ur friend or not.
const friends2 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
let flag1;
function dataHandling2(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (friends2[i] === name) {
      flag1 = true;
      break;
    } else flag1 = false;
  }
}

let found = dataHandling2(friends2, "Jeff");
if (flag1 === true) console.log("Person is my friend");
else console.log("Person is not my friend");

//8.We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends3 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

var friends4 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
function dataHandling3(input) {
  let sortedarray = input.sort();
  console.log(sortedarray);
}
let combinedarray = friends3.concat(friends4);
dataHandling3(combinedarray);

//9.Get the first item, the middle item and the last item of the array

let friends5 = [
  "Gabbar",
  "Rajinikanth",
  "Mass",
  "Spiderman",
  "Jeff",
  "ET",
  "Mari",
];
let firstitem = friends5.at(0);
let middleitem = friends5.at((friends5.length - 1) / 2);
let lastitem = friends5.at(friends5.length - 1);
console.log(
  "The first item is " +
    firstitem +
    ", the middle item is " +
    middleitem +
    " and the last item is " +
    lastitem
);

//10.Add your name to the end of the friends array, and add another name to beginning.

let friends6 = [
  "Gabbar",
  "Rajinikanth",
  "Mass",
  "Spiderman",
  "Jeff",
  "ET",
  "Mari",
];
friends6.push("Geetha");
console.log("Added item at the end of array:- " + friends6);
friends6.unshift("Ragu");
console.log("Added item at beginning of array:-" + friends6);

//11.Add Mr or Ms to the names in the friends array.

let friends7 = [
  "Gabbar",
  "Rajinikanth",
  "Mass",
  "Spiderman",
  "Jeff",
  "ET",
  "Mari",
];
for (var i = 0; i < friends7.length; i++) {
  if (
    friends7[i].charAt(0) === "J" ||
    friends7[i].charAt(0) === "M" ||
    friends7[i].charAt(0) === "G"
  ) {
    friends7[i] = "Ms. " + friends7[i];
  } else {
    friends7[i] = "Mr. " + friends7[i];
  }
}

console.log(friends7);

//12.Concat all the names the friends array and return as comma “,” seperated string.

console.log(friends7.join(","));

//13.Find the friends names who has letter ‘a’ and return the list.
let friends8 = [
  "Gabbar",
  "Rajinikanth",
  "Mass",
  "Spiderman",
  "Jeff",
  "ET",
  "Mari",
];
let narray = [];
for (var i = 0; i < friends8.length; i++) {
  if (friends8[i].includes("a")) narray.push(friends8[i]);
}
console.log("Friends names who has letter `a`:- " + narray);

//14.Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let namelength = 0;
for (var i = 0; i < friends8.length; i++) {
  namelength += friends8[i].length;
}
console.log(
  "Average length of all the friends names:- " +
    (namelength / friends8.length).toFixed(2)
);

//15.Find the names and return the list starting with letter M.

let friends9 = [
  "Gabbar",
  "Rajinikanth",
  "Mass",
  "Spiderman",
  "Jeff",
  "ET",
  "Mari",
];
let narray1 = [];
for (var i = 0; i < friends9.length; i++) {
  if (friends9[i].startsWith("M")) narray1.push(friends8[i]);
}
console.log("Friends names starts with letter `M`:- " + narray1);

//16.Find the name with max characters and return the name.

let friends10 = [
  "Gabbar",
  "Rajinikanth",
  "Mass",
  "Spiderman",
  "Jeff",
  "ET",
  "Mari",
];
let strlength = 0;
for (var i = 0; i < friends10.length; i++) {
  if (friends10[i].length > strlength) {
    strlength = friends10[i].length;
  }
}
for (var i = 0; i < friends10.length; i++) {
  if (friends10[i].length == strlength) {
    console.log("Name with max characters:- " + friends10[i]);
  }
}

//17.Find the name with min characters and return the name.

let strlength1 = 0;
for (var i = 0; i < friends10.length; i++) {
  if (friends10[i].length < strlength) {
    strlength = friends10[i].length;
  }
}
for (var i = 0; i < friends10.length; i++) {
  if (friends10[i].length == strlength) {
    console.log("Name with min characters:- " + friends10[i]);
  }
}

//18.Output of object

let myobject = { 1: "one", 11: 1, name: "arun" };
console.log(myobject[11]);
console.log(myobject.name);

//19.add new key:value

myobject.ten = "ten";
console.log(myobject);

//20.Guvi, Geek, 6, IIT-M RP,Chennai.

let details = {
  line1: "Guvi",
  line2: "Geek",
  line3: 6,
  line4: "IIT-M RP",
  line5: "Chennai",
};
console.log(Object.values(details).join(","));

//21. displaying nested object

let details1 = {
  item1: ["Guvi", "Geek", 6, "IIT-M RP", "Chennai"],
  item2: ["Amazon", "Inc", 31, "IIT-SP Infocity RP", "Chennai"],
  item3: ["Google", "Alphabet", 34, "Amphitheater Parkway", "MountainView"],
  item4: ["Tesla", "Inc", 32, "333 Santana Row", "San Jose"],
};

console.log(Object.values(details1).join("\n"));
