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

const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
]

//zad 7
console.log(numbers.reduce((a, b) => a + b))

const negativeSum = numbers.reduce((a, b) => {
  if (b < 0) {
    return a + b
  } else {
    return a
  }
}, 0)
console.log(negativeSum)

const evenSum = numbers.reduce((a, b, i) => {
  if (i % 2 == 0) {
    return a + b
  } else {
    return a
  }
}, 0)
console.log(evenSum)

//zad 8

function longestString(arr) {
  const longest = arr.reduce((a, b) => {
    if (a.length < b.length) {
      return b
    }
    return a
  }, '')

  console.log(longest)
}

longestString(['earth', 'vegetable', 'cat'])

//zad 10
function deleteComment(arr, id) {
  let result = arr.reduce((a, b, i) => {
    if (i !== id) {
      a.push(b)
    }
    return a
  }, [])
  console.log(result)
}

const comments = ['siema', 'elo', 'witam', 'czesc', 'hejka']
deleteComment(comments, 2)

//zad 13

const reducedPeople = people.map((person) => {
  const full_name = `${person.first_name} ${person.last_name}`
  const { id, first_name, last_name, ...rest } = person
  return { id, first_name, last_name, full_name }
})

console.log(reducedPeople)

//zad 20

function countWordOccurrences(str) {
  const counter = {}
  const strings = str.toLowerCase().split(' ')
  for (const string of strings) {
    if (string in counter) {
      counter[string]++
    } else {
      counter[string] = 1
    }
  }
  console.log(counter)
}

countWordOccurrences(
  'JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript'
)
//zad 21

function toCamelCase(str) {
  let firstWord = []
  let camel = []

  if (str.includes('_')) {
    firstWord = str.split('_').slice(0, 1)
    camel = str.split('_').slice(1)
  }
  if (str.includes('-')) {
    firstWord = str.split('-').slice(0, 1)
    camel = str.split('-').slice(1)
  }
  let camel1 = camel.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
  })

  console.log(firstWord.concat(camel1).join(''))
}

toCamelCase('asp_Net_Core_siema')

//zad 23

const idUsers = {
  243: {
    firstName: 'Yorker',
    lastName: 'Surgey',
    email: 'ysurgey0@census.gov',
    jobTitle: 'VP Accounting',
  },
  753: {
    firstName: 'Mateusz',
    lastName: 'Wicki',
    email: 'test@mail.com',
    jobTitle: 'Programer',
  },
}

function correctData(idUsers) {
  let users = []
  for (let id in idUsers) {
    let user = idUsers[id]
    user.id = parseInt(id)
    users.push(user)
  }
  console.log(users)
}

correctData(idUsers)
