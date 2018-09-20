describe("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator();
    });
 /* global calc*/
         /* global Calculator*/
         
    describe("Add method", function() {
        it("should take two arguments and return the sum of those two arguments", function() {
            calc.add(2);
            calc.add(2);
            /*global expect*/
            expect(calc.value).toBe(4);
        });

        it("should not return 4 if the arguments given don't produce a sum of 4", function() {
            calc.add(7);
            calc.add(19)
            expect(calc.value).toBe(26);
        });

        it("should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            /*global spyOn*/
            calc.add("Hello");
            expect(window.alert).toHaveBeenCalledWith("Both arguments must be numbers");
        });
    });
});