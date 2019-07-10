
function Automobile(year, make, model, type)
{
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. 
You pass it a comparator and an array of objects appropriate for that comparator 
and it will return a new array which is sorted with the largest object in index 0 
and the smallest in the last index */
function sortArr(comparator, array)
{
    var newArray = array.slice(0);

    /*Use a bubble sort to compare the values in two array positions and swap
    if the latter value is greater. */
    for (var i = 0; i < newArray.length-1; i++)
    {
        for (var j = i+1; j < newArray.length; j++)
        {
            if(comparator(newArray[j], newArray[i]))
            {
                var temp = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = temp;
            }
        }
    }
    return newArray;
}

/*A comparator takes two arguments and uses some algorithm to compare them. 
If the first argument is larger or greater than the 2nd it returns true, 
otherwise it returns false. Here is an example that works on integers*/
function exComparator(int1, int2)
{
    if (int1 > int2)
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order 
of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2)
{
    //Compare the auto years and return true if the first is greater than the second
    if (auto1.year > auto2.year)
    {
        return true;
    }
    else
    {
        return false;
    }   
}

/*This compares two automobiles based on their make. 
It should be case insensitive and makes which are alphabetically 
earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator(auto1, auto2)
{
    //Variables to change the automobile makes to uppercase in order to compare
    var makeVal1 = auto1.make.toUpperCase();
    var makeVal2 = auto2.make.toUpperCase();

     //Compare the auto makes and return true if the first is greater than the second
     if (makeVal2 > makeVal1)
     {
         return true;
     }
     else
     {
         return false;
     } 
}

/*This compares two automobiles based on their type. 
The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, 
(types not otherwise listed). It should be case insensitive. 
If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator(auto1, auto2)
{
    var typeOrder = ["WAGON", "SUV", "PICKUP", "ROADSTER"];

    var typeVal1 = auto1.type.toUpperCase();
    var typeVal2 = auto2.type.toUpperCase();

    //Compare the auto types and return true if the first is greater than the second
    if (typeOrder.indexOf(typeVal1) > typeOrder.indexOf(typeVal2))
    {
        return true;
    }
    else if(typeOrder.indexOf(typeVal1) == typeOrder.indexOf(typeVal2))
    {
        yearComparator(auto1, auto2);
    }
    else
    {
        return false;
    } 
}

//Function prototype, logMe function to print each automobile
Automobile.prototype.logMe = function(status)
{
    //If status is true, prints year, make, model, and type
    if(status == true)
    {
        console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
    }
    //Otherwise, print the year, make, and model.
    else
    {
        console.log(this.year + " " + this.make + " " + this.model + " ");
    }
}

//Function calls logMe to print the contents of the array passed through and the properties specified in prototype
function printArray(array, bool)
{
    array.forEach(function(x)
    {
        x.logMe(bool);
    })
}

/*Your program should output the following to the console.log, 
including the opening and closing 5 stars. All values in parenthesis should be 
replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. 
This function should be added to the Automobile class and accept a single boolean argument. 
If the argument is 'true' then it prints "year make model type" with the year, make, model and type 
being the values appropriate for the automobile. If the argument is 'false' then the type is ommited 
and just the "year make model" is logged.

*/

//Variables to hold the arrays sorted using a specific comparator and automobiles array
var yearArray = sortArr(yearComparator, automobiles);
var makeArray = sortArr(makeComparator, automobiles);
var typeArray = sortArr(typeComparator, automobiles);

console.log("*****");
console.log("The cars sorted by year are:");
console.log("The year make model of the 'greatest' car: ");
printArray(yearArray, false);
console.log("year make model of the 'least' car");


console.log("The cars sorted by make are:");
console.log("year make model of the 'greatest' car");
printArray(makeArray, false);
console.log("year make model of the 'least' car");


console.log("The cars sorted by type are:");
console.log("year make model type of the 'greatest' car");
printArray(typeArray, true);
console.log("year make model type of the 'least' car");
console.log("*****");
