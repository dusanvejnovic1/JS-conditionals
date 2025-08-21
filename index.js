 //this part is me writing/doodling stuff up as i learn/refresh about it, i will comment every line with relevant data

 // this a simple function using else if condidionals that takes an hour and then displays a message based on the time of day used a billion times
 function checkHour (hour) {
    if (hour >=6 && hour < 12) 
        console.log('Good Morning!')
    else if (hour >= 12 && hour < 18)
        console.log('Good Afternoon!')
    else 
        console.log('Good Evening!')
    }

checkHour('6');
checkHour('15');
checkHour('0');


// we will create a function where we will enter a number of a weekday and the use switch case conditionals to change type its actual name, 1 - Monday etc // this is usefull when we have 
// many different simple conditions to check so that we do not write a billion if else statements

function typeWeekDay (weekDay){
    switch (weekDay){
        case 1 : return 'Monday'
        case 2 : return 'Tuesday'
        case 3 : return 'Wednesday'
        case 4 : return 'Thursday'
        case 5 : return 'Friday'
        case 6 : return 'Saturday'
        case 7 : return 'Sunday'
        default : return 'Not a valid day of the week'
    }
}

console.log(typeWeekDay(1));
console.log(typeWeekDay(3));
console.log(typeWeekDay(5));
console.log(typeWeekDay(8));

// i will write another simple function since i dont remember ever using these before, it will take in the current color of the sky and guess the time of the day based on it, 
// UPDATE :this aint too bad and i can see how it can be usefull in automation, neat

function checkColorSky (colorSky){
    switch (colorSky){
        case 'Brown' : return 'Its currently evening!'
        case 'Black' : return 'Its current night!'
        case 'Orange' : return 'Its currently day!'
        case 'Yellow' : return "Its currently day!"
        case 'White' : return 'Its currently day!'
        case 'Blue' : return 'Its currently day!'
        default : return 'Not a valid sky color, please enter again!'
 }
}
console.log(checkColorSky('Brown'));
console.log(checkColorSky('Black'));
console.log(checkColorSky('White'));
console.log(checkColorSky('Green'));

//break is used to exit the switch case or loop conditional if a match is found to prevent fall through, if we use switch case inside a function that returns a value no break is needed though
//since once a return is executed it will immidiatelly exit the function

//ill write a simple switch case loop now to practice using break

number = 2
switch (number){
    case 1 : console.log('This number is odd!')
    break
    case 2 : console.log('This number is even!')
    break
    case 3 : console.log ('This number is odd!')
    break
    case 4 : console.log ('this Number is even!')
    break
}

//here i will create code that will loop through test case results saved in an array and after log to the console if the test is passed or failed

let testResult = [true, false, false, true, true, true];

for (arrayIndex = 0; arrayIndex <6; arrayIndex++){
    if (testResult[arrayIndex] === true) 
        console.log(`Test result ${arrayIndex} : Passed`)
        else console.log(`Test result ${arrayIndex} : Failed`)
}

//an exercise simple odd or even checker app

function oddOrEven(number){
    if (number % 2 == 0)
        console.log('This number is even')
        else console.log('This number is odd')
}

oddOrEven(2);
oddOrEven(7);

//an exercise "Write a function that takes a person's age and prints one of the following:"

function ageChecker(number){
    if (number < 13)
        console.log('This person is a Child')
    else if (number >= 13 && number < 18){
        console.log('This person is a Teenager')
    }
    else console.log('This person is an Adult')
}

ageChecker(12);
ageChecker(13);
ageChecker(14);
ageChecker(18);
ageChecker(19);

// hard exercise, Write a function that loops through an array of student test scores, then categorizes and prints results using both if-else and switch-case: WE CAN USE switch(true) 
// TO COVER CASE RANGES, FINALY DONE THAT WAS FUN AS HECK

gradeStudents = [105, 100, 99, 71, 35, 65, -10];


for (arrayPosition = 0; arrayPosition <gradeStudents.length; arrayPosition++){
    score = gradeStudents[arrayPosition]
    if (gradeStudents[arrayPosition] >100 || gradeStudents[arrayPosition] < 0)
        console.log('This grade is Invalid') 
    else switch(true){
        case (score <= 100 && score>= 90) : console.log('This test is graded A.')
        break
        case (score <= 89 && score>= 80) : console.log('This test is graded B.')
        break
        case (score <= 79 && score>= 70) : console.log('This test is graded C.')
        break
        case (score <= 69 && score>= 60) : console.log('This test is graded D.')
        break
        case (score <= 59) : console.log('This test is graded F.')
    }
}


// another hard one from copilot Challenge: Library Book Condition Evaluator
// You have an array of book objects. with title and an array with condition scores
// Each book object should have a method averageCondition() that calculates the average condition score.
// Write a helper function to validate each condition score (invalid if < 0 or > 100).
// Write a function to classify the condition for each score (100-90 excellent, 89-80 good, 79-70 fair, 69-60 poor,  else damaged )
// Print a report for each book containing Title, Each condition score, its classification, or "Invalid" and Average condition (rounded to one decimal)

let scoreClassification
const books = [
  { title: "The Odyssey", conditions: [98, 95, 102, 87, 75],
    averageCondition(){
        averageScore = (98+95+102+87+75)/5
        let averageScoreRounded = averageScore.toFixed(1);
        return averageScoreRounded
    }
},
  { title: "Moby Dick", conditions: [55, 68, 80, 91, -3000],    
        averageCondition(){
        averageScore = (55+68+80+91+-3000)/5 
        let averageScoreRounded = averageScore.toFixed(1);
        return averageScoreRounded
    }
},
  { title: "War and Peace", conditions: [1000, 99, 97, 96, 95],    
        averageCondition(){
        averageScore = (1000 + 99 + 97 + 96 + 95)/5 
        let averageScoreRounded = averageScore.toFixed(1);
        return averageScoreRounded
    }
},
]
function scoreValidation (averageScoreRounded){
    if (averageScoreRounded > 100 || averageScoreRounded < 0) {
        return  false
    }
    else return  true


}

function evaluateScoreClassification (averageScoreRounded){
    scoreValidation(averageScoreRounded)
    score = averageScoreRounded
    if (scoreValidation(averageScoreRounded) === false){
        return scoreClassification = 'INVALID'
        
    }
    else switch (true){
        case (score <= 100 && score>= 90) : return scoreClassification = 'Excellent'
        case (score <= 89 && score>= 80) : return scoreClassification = 'Good'
        case (score <= 79 && score>= 70) : return scoreClassification = 'Fair'
        case (score <= 69 && score>= 60) : return scoreClassification = 'Poor'
        case (score <= 59 && score >= 0) : return scoreClassification = 'Damaged'
        
}

}

console.log(`Book Title: ${books[0].title}, Scores ${books[0].conditions.join(', ')}. This books classification is ${evaluateScoreClassification(books[0].averageCondition())} and the average condition score is ${books[0].averageCondition()}`)
console.log(`Book Title: ${books[1].title}, Scores ${books[1].conditions.join(', ')}. This books classification is ${evaluateScoreClassification(books[1].averageCondition())} and the average condition score is ${books[1].averageCondition()}`)
console.log(`Book Title: ${books[2].title}, Scores ${books[2].conditions.join(', ')}. This books classification is ${evaluateScoreClassification(books[2].averageCondition())} and the average condition score is ${books[2].averageCondition()}`)


