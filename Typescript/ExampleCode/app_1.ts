import { IMember } from './IMember'
import { Member } from './Member'


enum LanguageKnown { French, German, Spanish }

let member: IMember = {
  Name: "Harikumar",
  Age: 20,
  Phone: 1234,
  Language: LanguageKnown[LanguageKnown.French]
}

let members: Array<IMember> = [
  { Name: "mabc", Age: 20, Phone: 1234, Language: LanguageKnown[LanguageKnown.French] },
  { Name: "mdef", Age: 21, Phone: 1345, Language: LanguageKnown[LanguageKnown.French] },
  { Name: "mghi", Age: 22, Phone: 1346, Language: LanguageKnown[LanguageKnown.French] }
]

members.forEach(element => {
  console.log("Member " + element.Name + " with age " + element.Age + " phone number " + element.Phone)
})

let m = new Member("Prakasam", "M")
console.log(m.GetMemberName())

