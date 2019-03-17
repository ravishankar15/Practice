var StudentCalc;
(function (StudentCalc) {
    function AnnualFeeCalc(feeamount, term) {
        return feeamount * term;
    }
    StudentCalc.AnnualFeeCalc = AnnualFeeCalc;
})(StudentCalc || (StudentCalc = {}));
