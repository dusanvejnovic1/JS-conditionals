# Hard Array/Object Manipulation Challenge: Test Case Analytics

You are given an array representing test cases executed on different days, possibly with re-runs. Each test case object contains:

id (string): Test case ID
executions (array): Each execution has:
date (ISO string)
status ("passed", "failed", "skipped")
duration (seconds)
Example Input
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
      { date: "2025-08-02", status: "failed", duration: 12 },
      { date: "2025-08-03", status: "passed", duration: 9 }
    ]
  },
  {
    id: "TC03",
    executions: [
      { date: "2025-08-01", status: "passed", duration: 7 }
    ]
  }
];
Task
Write a function analyzeTestCases(testCases) that returns an object with:

1. latestStatusById
An object mapping each test case ID to the status of its most recent execution (by date).

2. averagePassDuration
The average duration (in seconds) of all "passed" executions, rounded to two decimals.

3. rerunStats
An object mapping each test case ID to the number of times it was executed (length of executions array),
but only include test cases that were run more than once.

4. mostFailedDay
The date (YYYY-MM-DD) on which the most executions failed (across all test cases).
If multiple dates tie, return all of them in a sorted array.

Bonus:
Add a property passStreaks:
For each test case ID, find the longest consecutive streak of "passed" executions (by date order).

Expected Output Example
{
  latestStatusById: { TC01: "passed", TC02: "passed", TC03: "passed" },
  averagePassDuration: 8,
  rerunStats: { TC01: 2, TC02: 3 },
  mostFailedDay: ["2025-08-01"],
  passStreaks: { TC01: 1, TC02: 1, TC03: 1 }
}
Tip:
You will need to use .map(), .reduce(), .sort(), object manipulation, and possibly more advanced logic
