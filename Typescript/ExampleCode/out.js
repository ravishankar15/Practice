var StudentCalc;
(function (StudentCalc) {
    function AnnualFeeCalc(feeamount, term) {
        return feeamount * term;
    }
    StudentCalc.AnnualFeeCalc = AnnualFeeCalc;
})(StudentCalc || (StudentCalc = {}));
/// <reference path="./StudentCalc.ts" />
let fee = StudentCalc.AnnualFeeCalc(1000, 4);
console.log(fee);
