console.log("Hello World");

let a: Number = 10
let b: String = "Test"
let c: Boolean = false

console.log("The number value of a is " + a);
console.log("The number value of b is " + b);
console.log("The number value of c is " + c);

enum LanguageKnown { English, Hindi, Tamil }
console.log(LanguageKnown[0] + " is a proffessional language")
console.log(LanguageKnown[2] + " is my mother tongue")


let PInfo = {
  Name: "Ravi",
  Age: 23,
  Phone: 3463142,
  Address: "Chennai",
  Language: LanguageKnown[LanguageKnown.Hindi] //Mandotory for pushing to array why ?
}
let PInfos = [
  { Name: "abc", Age: 12, Phone: 12345, Language: LanguageKnown[LanguageKnown.English] },
  { Name: "def", Age: 23, Phone: 54321, Language: LanguageKnown[LanguageKnown.Tamil] },
  { Name: "ghi", Age: 33, Phone: 67890, Language: LanguageKnown[LanguageKnown.Hindi] }
]
console.log(PInfos)
PInfos.push(PInfo)

for (var i = 0; i < PInfos.length; ++i) {
  var element = PInfos[i]
  console.log("Person " + element.Name + " with age " + element.Age + " phone number " + element.Phone )
}


console.log("Using the functions...")

function GetPeopleInfo(PInfos: any[]) {
  PInfos.forEach(element => {
    console.log("Person " + element.Name + " with age " + element.Age + " phone number " + element.Phone ) 
  })
}
GetPeopleInfo(PInfos)


//Rest parameters can accept values of single type
function GetNumbers(...nums: number[]) {
  nums.forEach(element => {
    console.log("Number " + element)
  })
}
GetNumbers(1,2,3,4)


function GetInfo(info: string = "Happy") {
  console.log("Always be " + info)
}
GetInfo()
GetInfo("Sad")

//#######Function Advanced

//Ananomous function
let studentName = function (fName: String, lName: String) {
  return fName + "..." + lName
}
console.log(studentName("Ravishankar", "G"))

//Arrow function
let studentNameArrow = (fName: String, lName: String) => { return fName + "..." + lName }
console.log(studentNameArrow("Harikumar", "G"))

//Interfaces
interface StudentInfo {
  Name: string,
  Age: Number,
  Phone: Number,
  Language: string
}


let student: StudentInfo = {
  Name: "Hari",
  Age: 23,
  Phone: 3463142,
  Language: LanguageKnown[LanguageKnown.Hindi] //Mandotory for pushing to array why ?
}
let students: StudentInfo[] = [
  { Name: "sabc", Age: 12, Phone: 12345, Language: LanguageKnown[LanguageKnown.English] },
  { Name: "sdef", Age: 23, Phone: 54321, Language: LanguageKnown[LanguageKnown.Tamil] },
  { Name: "sghi", Age: 33, Phone: 67890, Language: LanguageKnown[LanguageKnown.Hindi] }
]
console.log(students)
students.push(student)

students.forEach(element => {
  console.log("Student " + element.Name + " with age " + element.Age + " phone number " + element.Phone)
})


/**************** Classes ************* */
class Student {

  private _lName: string;
  private _fName: string;

  constructor(lName: string, fName: string) {
    this._lName = lName;
    this._fName = fName
  }

  GetFullName(): string {
    return this._fName + "....." + this._lName
  }
}

let s = new Student("Ravishankar", "MGP")
console.log("The full name is " + s.GetFullName())
console.log("The full name function is  " + s.GetFullName)


//Short handed approach
class StudentShort {

  constructor(private fName: string, private lName: string) {
  }

  GetFullName(): string {
    return this.fName + "....." + this.lName
  }
}

let s1 = new StudentShort("Ravishankar", "MGP")
console.log("The full name is " + s1.GetFullName())
console.log("The full name function is  " + s1.GetFullName)


// Generics
let studentsG: Array<StudentInfo> = [
  { Name: "gabc", Age: 12, Phone: 12345, Language: LanguageKnown[LanguageKnown.English] },
  { Name: "gdef", Age: 23, Phone: 54321, Language: LanguageKnown[LanguageKnown.Tamil] },
  { Name: "gghi", Age: 33, Phone: 67890, Language: LanguageKnown[LanguageKnown.Hindi] }
]
studentsG.forEach(element => {
  console.log("Student " + element.Name + " with age " + element.Age + " phone number " + element.Phone)
})