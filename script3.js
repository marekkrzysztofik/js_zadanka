// zad1.
const ticktacktoe = [
  ['x', 'o', 'x'],
  ['x', 'x', 'o'],
  ['o', '**', 'o'],
]

//console.log(ticktacktoe[2][1])

//zad2.

function multiplyBy2(arr) {
  let result = arr.map((el) => {
    return el * 2
  })
  console.log(result)
}
//multiplyBy2([1, 5, 8, 21])

//zad3

const values = [
  [],
  {},
  -10,
  1,
  0,
  '',
  'full string',
  ' ',
  undefined,
  NaN,
  null,
  '0️⃣',
  '💩',
]

values.forEach((element) => {
  if (element) {
    //console.log(element +' is truthy')
  } else {
    //console.log(element + ' is falsy')
  }
})

//zad4

function check(arr) {
  switch (arr.length) {
    case 1:
      console.log('#green')
      break
    case 2:
      console.log('#red')
      break
    case 3:
      console.log('#blue')
      break
    default:
      console.log('#black')
      break
  }
}

//check([1,2])

//zad5
function stringLength(strArr) {
  strArr.forEach((el) => {
    console.log(el.length)
  })
}

//stringLength(["hello", "world", "dog", "sophisticated"]);

///////////////////////////

const people = [
  {
    id: 1,
    first_name: 'Kaylil',
    last_name: 'Hovey',
    email: 'khovey0@gizmodo.com',
    gender: 'Female',
    ip_address: '128.158.239.223',
    title: 'Rev',
    job_title: 'Recruiting Manager',
    race: 'Vietnamese',
    company: 'Browseblab',
    age: 33,
  },
  {
    id: 2,
    first_name: 'Cesare',
    last_name: 'Caroline',
    email: 'ccaroline1@tmall.com',
    gender: 'Male',
    ip_address: '7.78.224.248',
    title: 'Rev',
    job_title: 'Computer Systems Analyst II',
    race: 'Black or African American',
    company: 'Wordtune',
    age: 50,
  },
  {
    id: 3,
    first_name: 'Xaviera',
    last_name: 'Danilchenko',
    email: 'xdanilchenko2@so-net.ne.jp',
    gender: 'Female',
    ip_address: '161.223.97.94',
    title: 'Mr',
    job_title: 'Statistician IV',
    race: 'Asian',
    company: 'Rhynyx',
    age: 55,
  },
  {
    id: 4,
    first_name: 'Shandy',
    last_name: 'Sanford',
    email: 'ssanford3@uiuc.edu',
    gender: 'Female',
    ip_address: '40.218.230.208',
    title: 'Honorable',
    job_title: 'Data Coordiator',
    race: 'Eskimo',
    company: 'Topdrive',
    age: 76,
  },
  {
    id: 5,
    first_name: 'Muire',
    last_name: 'Pothecary',
    email: 'mpothecary4@mit.edu',
    gender: 'Female',
    ip_address: '82.151.63.26',
    title: 'Honorable',
    job_title: 'Executive Secretary',
    race: 'Chickasaw',
    company: 'Realbridge',
    age: 15,
  },
  {
    id: 6,
    first_name: 'Mano',
    last_name: 'Gwatkins',
    email: 'mgwatkins5@auda.org.au',
    gender: 'Male',
    ip_address: '134.244.218.162',
    title: 'Ms',
    race: undefined,
    job_title: 'Automation Special',
    age: 23,
  },
  {
    id: 7,
    first_name: 'Frederica',
    last_name: 'Shackleton',
    email: 'fshackleton6@examiner.com',
    gender: 'Female',
    ip_address: '191.141.61.25',
    title: 'Honorable',
    job_title: 'Help Desk Operator',
    race: 'Yuman',
    company: 'Yoveo',
    age: 89,
  },
  {
    id: 8,
    first_name: 'Garvey',
    last_name: 'Islep',
    email: 'gislep7@nps.gov',
    gender: 'Male',
    ip_address: '101.45.75.228',
    title: 'Mr',
    job_title: 'Internal Auditor',
    race: 'Cambodian',
    company: 'Livefish',
    age: 76,
  },
  {
    id: 9,
    first_name: 'Aristotle',
    last_name: 'Gozard',
    email: 'agozard8@exblog.jp',
    gender: 'Male',
    ip_address: '87.43.196.133',
    title: 'Rev',
    job_title: 'Software Test Engineer IV',
    race: 'Chippewa',
    company: 'Feedspan',
    age: 34,
  },
  {
    id: 10,
    first_name: 'Bryon',
    last_name: 'Boulder',
    email: 'bboulder9@parallels.com',
    gender: 'Male',
    ip_address: '251.50.80.89',
    title: 'Honorable',
    job_title: 'Senior Editor',
    race: 'Black or African American',
    company: 'Kazu',
    age: 25,
  },
]
/////////////////////////////

//zad6

people.sort(function(a,b) {
  if(a.last_name < b.last_name) {
    return -1;
  }
  if(a.last_name > b.last_name) {
    return 1;
  }
})
//console.log(people);

//zad7
const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
]

numbers.forEach((el) => {
  if (el >= 20) {
    //console.log(el)
  }
})

//console.log(numbers.reduce((a,b) => a+b))

let negativeNum = 0
numbers.forEach((el) => {
  if (el < 0) {
    negativeNum += el
  }
})

let sum = 0
numbers.forEach((el, i) => {
  if (i % 2 === 0) {
    sum += el
  }
})
//console.log(negativeNum);
//console.log(sum);



//zad8

function longestString(arr) {
  let longest = ''
  arr.forEach((el) => {
    if (el.length > longest.length) {
      longest = el
    }
  })
  //console.log(longest)
}
longestString(['earth', 'vegetable', 'cat'])

//zad9

function flatArray(arr) {
  //console.log(arr.flat())
}
flatArray([
  ['red', 'blue'],
  ['green', 'red', 'yellow'],
  ['black', 'blue'],
  ['pink', 'black', 'white'],
])

//zad10

function deleteComment(arr, id) {
  let result = []
  arr.forEach((el, i) => {
    if (i != id) {
      result.push(el)
    }
  })
  // console.log(result)
}

const comments = ['siema', 'elo', 'witam', 'czesc', 'hejka']
deleteComment(comments, 3)

//zad11

function showOnlyUsersWithRace(race) {
  people.forEach((person) => {
    if (race == person.race) console.log(person)
  })
}

//showOnlyUsersWithRace("Black or African American");

//zad12

people.forEach((person) => {
  //console.log(`${person.title} ${person.first_name} ${person.last_name} work as ${person.job_title} in ${person.company}`)
})

//zad13

const newPeople = people.map((person) => {
  const fullName = `${person.first_name} ${person.last_name}`
  return {
    id: person.id,
    first_name: person.first_name,
    last_name: person.last_name,
    full_name: fullName,
  }
})
//console.log(newPeople)

//zad 14

let thirtyYearOlds = []
function getThirtyYearOlds(arr) {
  arr.forEach((person) => {
    if (person.age >= 30 && person.gender == 'Female') {
      thirtyYearOlds.push(person.age)
      console.log(`${person.first_name} is ${person.age} years old`)
    }
  })
  console.log(
    `Together they have ${thirtyYearOlds.reduce((a, b) => a + b)} years`
  )
}
//getThirtyYearOlds(people)

//zad15
let goodBmi = []

people.forEach((person) => {
  person.height = person.age + 100
  person.weight = person.age + 10
  person.bmi = (person.weight / (person.height / 100)) ^ 2
  if (person.bmi >= 18.5 && person.bmi <= 24.99) {
    // console.log(person.first_name)
  }
})

//zad17
function dayOfTheWeekYouWereBorn(date) {
  let birthday = new Date(date).toString()
  let dayOfTheWeek = birthday.slice(0, 3)
  switch (dayOfTheWeek) {
    case 'Mon':
      console.log('Monday')
      break
    case 'Tue':
      console.log('Tuesday')
      break
    case 'Wed':
      console.log('Wednesday')
      break
    case 'Thu':
      console.log('Thursday')
      break
    case 'Fri':
      console.log('Friday')
      break
    case 'Sat':
      console.log('Saturday')
      break
    case 'Sun':
      console.log('Sunday')
      break
    default:
      break
  }
}

//dayOfTheWeekYouWereBorn("November 30 1993")

//zad 18

function daysUntilChristmas() {
  let today = new Date()
  let christmas = new Date(today.getFullYear(), 11, 25)
  let day = 3600000 * 24
  console.log(
    `${Math.round(
      (christmas.getTime() - today.getTime()) / day
    )} days left until Christmas!`
  )
}

//daysUntilChristmas()

//zad19
const students = [
  { name: 'Mariusz', tasksDone: 150, hoursSpent: 160 },
  { name: 'Ewelina', tasksDone: 1, hoursSpent: 1 },
  { name: 'Alicja', tasksDone: 100, hoursSpent: 80 },
  { name: 'Marek', tasksDone: 200, hoursSpent: 40 },
  { name: 'Dagmara', tasksDone: 50, hoursSpent: 100 },
]

const requirements = {
  minHoursSpent: 80,
  minTasksDone: 100,
}
function checkJuniorReq(arr, req) {
  const best = []
  const weaker = []
  arr.forEach((student) => {
    if (
      student.tasksDone >= req.minTasksDone &&
      student.hoursSpent >= req.minHoursSpent
    ) {
      best.push(student.name)
    } else {
      weaker.push(student.name)
    }
  })
  console.log(best.join(', ') + ' - gratulacje!')
  console.log(weaker.join(', ') + ' - DO ROBOTY LENIE!')
}

//checkJuniorReq(students,requirements)

//zad20

function countWordOccurrences(str) {
  let strings = []
  let counter = []
  strings = str.toLowerCase().split(' ')
  strings.forEach((el) => {
    if (!strings.includes(el)) {
    } else {
    }
  })
  //console.log(strings,counter)
}

countWordOccurrences(
  'JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript'
)

//zad 21

function toCamelCase(str) {
  let array = []
  array = str.split('_')
  console.log(array)
}

//toCamelCase("java_script")

//zad 23
