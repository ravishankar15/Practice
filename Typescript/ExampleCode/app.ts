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

