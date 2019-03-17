define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Member {
        constructor(fName, lName) {
            this.fName = fName;
            this.lName = lName;
        }
        GetMemberName() {
            return this.fName + "..." + this.lName;
        }
    }
    exports.Member = Member;
});
