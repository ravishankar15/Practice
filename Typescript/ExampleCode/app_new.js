/// <reference path="./StudentCalc.ts" />
define(["require", "exports", "./Member"], function (require, exports, Member_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LanguageKnown;
    (function (LanguageKnown) {
        LanguageKnown[LanguageKnown["French"] = 0] = "French";
        LanguageKnown[LanguageKnown["German"] = 1] = "German";
        LanguageKnown[LanguageKnown["Spanish"] = 2] = "Spanish";
    })(LanguageKnown || (LanguageKnown = {}));
    let member = {
        Name: "Harikumar",
        Age: 20,
        Phone: 1234,
        Language: LanguageKnown[LanguageKnown.French]
    };
    let members = [
        { Name: "mabc", Age: 20, Phone: 1234, Language: LanguageKnown[LanguageKnown.French] },
        { Name: "mdef", Age: 21, Phone: 1345, Language: LanguageKnown[LanguageKnown.French] },
        { Name: "mghi", Age: 22, Phone: 1346, Language: LanguageKnown[LanguageKnown.French] }
    ];
    members.forEach(element => {
        console.log("Member " + element.Name + " with age " + element.Age + " phone number " + element.Phone);
    });
    let m = new Member_1.Member("Prakasam", "M");
    console.log(m.GetMemberName());
    let fee = StudentCalc.AnnualFeeCalc(1000, 4);
    console.log(fee);
});
