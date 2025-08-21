const testCases = [
  {
    id: "TC01",
    executions: [
      { date: "2025-08-01", status: "failed", duration: 10 },
      { date: "2025-08-02", status: "passed", duration: 8 }
    ]
  },
  {
    id: "TC02",
    executions: [
      { date: "2025-08-01", status: "skipped", duration: 0 },
      { date: "2025-08-03", status: "failed", duration: 12 },
      { date: "2025-08-02", status: "passed", duration: 9 }
    ]
  },
  {
    id: "TC03",
    executions: [
      { date: "2025-08-01", status: "passed", duration: 7 }
    ]
  }
];
//UPDATE 21.08.2025 i fumbled this assignment originally, i will rewrite the code entirely now that i had more practice

//original code
/* function analyzeTestCases(testCases){
    
  let averagePassDuration = 0
  let executions = 0
let executionsCount = testCases.map(exe => {exe.executions
  executions = exe.executions
  return executions})
executionsCount = executionsCount.flat(2);
let durationCount = executionsCount.map(dur => {dur.duration
  
  for (i = 0 ; i < executionsCount.length ; i++){
    if (dur.status = 'passed') {averagePassDuration = averagePassDuration + dur.duration[i];
      let passedTestsCount = dur.reduce((acc, val) => {val==='passed' ? acc + 1 : acc ;
    return {passedTestsCount, averagePassDuration}})};
  return {passedTestCount, averagePassDuration}}
  averagePassDuration = averagePassDuration/passedTestCount

return {averagePassDuration}})

console.log(averagePassDuration)
}

console.log(analyzeTestCases(testCases)) */


//new code
function analyzeTestCases() {
  let testCasesSorted = testCases.map((a) => a.executions);
  let latestStatusById = {};
  let averagePassDuration = {};
  let rerunStats = {};
  let casesNoSkipped = {};
  let mostFailedDayArray = [];
  let mostFailedDay = [];
  for (let i = 0; i < testCasesSorted.length; i++) {
    testCasesSorted[i] = testCasesSorted[i].map((a) => ({ ...a, date: Number(a.date.replaceAll('-', '')) }))
    testCasesSorted[i] = testCasesSorted[i].sort((a, b) => (a.date - b.date))
    testCasesSorted[i] = testCasesSorted[i].filter(a => a.status != 'skipped')

    casesNoSkipped[i] = testCasesSorted[i].filter(a => a.status === 'passed' || a.status === 'failed')
    if (casesNoSkipped[i].length <= 1) {
      casesNoSkipped[i] = [];
    }
    else {
      rerunStats[testCases[i].id] = casesNoSkipped[i].length
    }
    mostFailedDayArray[i] = testCasesSorted[i].filter(a => a.status == 'failed')
    mostFailedDayArray = mostFailedDayArray.flat()
    let latestID = `${testCases[i].id}`
    let latestStatus = testCasesSorted.map((a) => a.map((b) => b.status))
    latestStatus = latestStatus[i].shift()
    latestStatusById[latestID] = latestStatus

    testCasesSorted[i] = testCasesSorted[i].filter(a => a.status != 'failed')
  }

  for (let i = 0; i < mostFailedDayArray.length; i++) {

    if (mostFailedDayArray.length === 0) {
      mostFailedDay = ['There was no failures.']
    }
    else if (mostFailedDayArray.length === 1) {
      mostFailedDay[mostFailedDay] = mostFailedDayArray[0].date
    }
    else if (mostFailedDayArray.length === 2 && mostFailedDayArray[0].date === mostFailedDayArray[1].date) {
      mostFailedDay[mostFailedDay] = mostFailedDayArray[0].date
    }
    else if (mostFailedDayArray.length === 2 && mostFailedDayArray[0].date != mostFailedDayArray[1].date) {
      mostFailedDay[0] = mostFailedDayArray[0].date
      mostFailedDay[1] = mostFailedDayArray[1].date
    }
    else {
      mostFailedDay.push(mostFailedDayArray[i].date)
    }
  }

  let mostFailedDayDate = {};
  for (let i = 0; i < mostFailedDay.length; i++) {
    mostFailedDayDate[mostFailedDay[i]] = (mostFailedDayDate[mostFailedDay[i]] || 0) + 1
  }

  let mostFailedDayDateValues = Object.values(mostFailedDayDate)
  let mostFailedDayDateKeys = Object.keys(mostFailedDayDate)
  let date;

  for (i = 0; i < mostFailedDayDateValues.length; i++) {
    if (mostFailedDayDateValues[i] > mostFailedDayDateValues[i + 1]) {
      date = mostFailedDayDateKeys[0]
      break
    }
    else {
      date = [mostFailedDayDateKeys[0], mostFailedDayDateKeys[1]]
      break
    }
  }



  testCasesSorted = testCasesSorted.flat()
  averagePassDuration = testCasesSorted.map((a) => a.duration)
  averagePassDuration = averagePassDuration.reduce((a, b) => a + b) / averagePassDuration.length;

  let analyzeTestCasesObject= {latestStatusById: latestStatusById, averagePassDuration: averagePassDuration, rerunStats: rerunStats, mostFailedDay: date}
  console.log(analyzeTestCasesObject)
}


analyzeTestCases();