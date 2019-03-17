console.log("Hello World");
var a = 10;
var b = "Test";
var c = false;
console.log("The number value of a is " + a);
console.log("The number value of b is " + b);
console.log("The number value of c is " + c);
var LanguageKnown;
(function (LanguageKnown) {
    LanguageKnown[LanguageKnown["English"] = 0] = "English";
    LanguageKnown[LanguageKnown["Hindi"] = 1] = "Hindi";
    LanguageKnown[LanguageKnown["Tamil"] = 2] = "Tamil";
})(LanguageKnown || (LanguageKnown = {}));
console.log(LanguageKnown[0] + " is a proffessional language");
console.log(LanguageKnown[2] + " is my mother tongue");
var PInfo = {
    Name: "Ravi",
    Age: 23,
    Phone: 3463142,
    Address: "Chennai",
    Language: LanguageKnown[LanguageKnown.Hindi] //Mandotory for pushing to array why ?
};
var PInfos = [
    { Name: "abc", Age: 12, Phone: 12345, Language: LanguageKnown[LanguageKnown.English] },
    { Name: "def", Age: 23, Phone: 54321, Language: LanguageKnown[LanguageKnown.Tamil] },
    { Name: "ghi", Age: 33, Phone: 67890, Language: LanguageKnown[LanguageKnown.Hindi] }
];
console.log(PInfos);
PInfos.push(PInfo);
for (var i = 0; i < PInfos.length; ++i) {
    var element = PInfos[i];
    console.log("Person " + element.Name + " with age " + element.Age + " phone number " + element.Phone);
}
console.log("Using the functions...");
function GetPeopleInfo(PInfos) {
    PInfos.forEach(function (element) {
        console.log("Person " + element.Name + " with age " + element.Age + " phone number " + element.Phone);
    });
}
GetPeopleInfo(PInfos);
//Rest parameters can accept values of single type
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Number " + element);
    });
}
GetNumbers(1, 2, 3, 4);
function GetInfo(info) {
    if (info === void 0) { info = "Happy"; }
    console.log("Always be " + info);
}
GetInfo();
GetInfo("Sad");
//#######Function Advanced
//Ananomous function
var studentName = function (fName, lName) {
    return fName + "..." + lName;
};
console.log(studentName("Ravishankar", "G"));
//Arrow function
var studentNameArrow = function (fName, lName) { return fName + "..." + lName; };
console.log(studentNameArrow("Harikumar", "G"));
