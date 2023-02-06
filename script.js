//zad 1
const students = [
  {
    id: 1,
    name: 'Jacek',
    grades: [5, 3, 4, 2, 5, 5],
  },
  {
    id: 2,
    name: 'Ewa',
    grades: [2, 3, 3, 3, 2, 5],
  },
  {
    id: 3,
    name: 'Zygmunt',
    grades: [2, 2, 4, 4, 3, 3],
  },
]


function getStudentTopGrades(student) {
  const marks = []
  const best = []
  for (let i = 0; i < student.length; i++) {
    marks.push(student[i].grades)
  }
  marks.forEach((grade) => {
    best.push(Math.max(...grade))
  })
  console.log(marks, best)
}
//getStudentTopGrades(students)
 
//zad2

function getGroupsWithStudents(groupArr, studentsArr) {
  const result = []
  groupArr.forEach((group) => {
    const students = []
    group.studentIds.forEach((id) => {
      studentsArr.forEach((student) => {
        if (student.id == id) {
          students.push(student)
        }
      })
    })
    result.push({ ...group, students })
  })

 // console.log(result)
}

getGroupsWithStudents(
  [
    {
      id: 1,
      name: 'G1',
      studentIds: [2, 3, 1],
    },
    {
      id: 2,
      name: 'G2',
      studentIds: [1, 2],
    },
  ],
  [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Steve',
    },
    {
      id: 3,
      name: 'John',
    },
  ]
)
//zad3

function usePredicate(arr, callback) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i])
    }
  }
  console.log(result)
}
//usePredicate([1, 2, 3, 4, 5], (element) => element > 2)

//zad4
const obj = [
  1,
  [2, 3, undefined, 4, 2],
  [1, 'Dominik', null, 5],
  3,
  ['Dominik', 6],
]

function flat(array) {
  let arr = []
  let wynik = []
  array.forEach((el) => {
    if (el.length > 0) {
      arr.push(...el)
    } else {
      arr.push(el)
    }
  })
  arr.forEach((el) => {
    if (!wynik.includes(el) && el != null) {
      wynik.push(el)
    }
  })
  console.log(wynik)
}
flat(obj)

//zad5
const course = [
  {
    id: 1,
    name: '[HTML] Narzędzia i podstawy składni',
    length: '03:00:00',
  },
  {
    id: 2,
    name: '[HTML] Semantyka i dostępność',
    length: '01:02:33',
  },
  {
    id: 3,
    name: '[CSS] Kaskada i precyzyjność selektorów',
    length: '02:30:00',
  },
  {
    id: 4,
    name: '[CSS] Box model i position',
    length: '01:00:12',
  },
  {
    id: 5,
    name: '[CSS] Flexbox',
    length: '01:11:33',
  },
  {
    id: 6,
    name: '[JS] Zmienne, stałe, funkcje, scope',
    length: '01:09:43',
  },
  {
    id: 7,
    name: '[JS] Wyrażenia i instrukcje warunkowe',
    length: '02:37:20',
  },
  {
    id: 8,
    name: '[JS] Funkcje wyższego rzędu i domknięcia',
    length: '01:30:42',
  },
  {
    id: 9,
    name: '[JS] Fetch API',
    length: '01:14:48',
  },
]

function getModulesDuration(courses) {
  let totalLength = 0
  let htmlLength = 0
  let cssLength = 0
  let jsLength = 0

  courses.forEach((course) => {
    let [hours, minutes, seconds] = course.length
      .split(':')
      .map((time) => parseInt(time))
    totalLength += hours * 3600 + minutes * 60 + seconds

    switch (course.name.substring(0, course.name.indexOf(']') + 1)) {
      case '[HTML]':
        htmlLength += hours * 3600 + minutes * 60 + seconds
        break
      case '[CSS]':
        cssLength += hours * 3600 + minutes * 60 + seconds
        break
      case '[JS]':
        jsLength += hours * 3600 + minutes * 60 + seconds
        break
    }
  })

  let totalHours = Math.floor(totalLength / 3600)
  let totalMinutes = Math.floor((totalLength % 3600) / 60)
  let totalSeconds = totalLength % 60

  let htmlHours = Math.floor(htmlLength / 3600)
  let htmlMinutes = Math.floor((htmlLength % 3600) / 60)

  let cssHours = Math.floor(cssLength / 3600)
  let cssMinutes = Math.floor((cssLength % 3600) / 60)

  let jsHours = Math.floor(jsLength / 3600)
  let jsMinutes = Math.floor((jsLength % 3600) / 60)

  console.log(`Kurs Frontend trwa ${totalHours} godzin, ${totalMinutes} minut i ${totalSeconds} sekund.
Moduł HTML: ${htmlHours} godzin ${htmlMinutes} minut
Moduł CSS: ${cssHours} godzin ${cssMinutes} minut
Moduł JavaScript: ${jsHours} godzin ${jsMinutes} minut`)
}

//getModulesDuration(course)

//zad 6

function addArrays(arr1, arr2) {
  const array = [...arr1, ...arr2]
  const sum = array.reduce((a, b) => a + b)
   console.log(sum);
}
//addArrays([1, 5], [1, 2])

// zad7

function organizeMovieReviews(obj, id) {
  const reviews = {
    mine: [],
    others: [],
  }
  obj.forEach((review) => {
    if (id.includes(review.id)) {
      reviews.mine.push(review)
    } else {
      reviews.others.push(review)
    }
  })
  //console.log(reviews) ;
}

organizeMovieReviews(
  [
    {
      id: 1,
      title: 'Avatar',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
    {
      id: 2,
      title: 'Batman',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
    {
      id: 3,
      title: 'Uncharted',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
    {
      id: 4,
      title: 'The Godfather',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
    {
      id: 5,
      title: 'Aquaman',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
  ],
  [1, 3, 4]
)

//zad 8

function getVillainName(date) {
  let villainName = ''
  let [, month] = date.toString().split(' ')
  let [, , day] = date.toString().split(' ')
  day = day.slice(-1)
  // console.log(month, day)
  switch (month) {
    case 'January':
      villainName += 'The Evil'
      break
    case 'February':
      villainName += 'The Vile'
      break
    case 'March':
      villainName += 'The Cruel'
      break
    case 'April':
      villainName += 'The Trashy'
      break
    case 'May':
      villainName += 'The Despicable'
      break
    case 'June':
      villainName += 'The Embarrassing'
      break
    case 'July':
      villainName += 'The Disreputable'
      break
    case 'August':
      villainName += 'The Atrocious'
      break
    case 'September':
      villainName += 'The Twirling'
      break
    case 'October':
      villainName += 'The Orange'
      break
    case 'November':
      villainName += 'The Terrifying'
      break
    case 'December':
      villainName += 'The Awkward'
      break
  }
  switch (day) {
    case '0':
      villainName += ' Mustache'
      break
    case '1':
      villainName += ' Pickle'
      break
    case '2':
      villainName += ' Hood Ornament'
      break
    case '3':
      villainName += ' Raisin'
      break
    case '4':
      villainName += ' Recycling Bin'
      break
    case '5':
      villainName += ' Potato'
      break
    case '6':
      villainName += ' Tomato'
      break
    case '7':
      villainName += ' House Cat'
      break
    case '8':
      villainName += ' Teaspoon'
      break
    case '9':
      villainName += ' Laundry Basket'
      break
  }
   console.log(villainName)
}

//getVillainName(new Date('May 3'))
