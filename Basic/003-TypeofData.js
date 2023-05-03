
        var sometext = "Krishna";
        var someNumbWthQuotationMarks = "1"
        var someNumbWithoutQuotationMark = 1
        var numbWithFloatDot = 1.3
        var booleanValue = true
        var infinityValue = 1/0
        var notIsAnumber = "A" / 3
        var valuneNotDefined;
        var variableNull = null;
        var varObject = {
            name: "Kris", 
            age: 38
        };
        var dois = [1,2,3,4,5.1,6,7,8,"9",{name: "Kris", idade:38}]
        var currentDateLocalMachine1 = Date()
        var currentDateLocalMachine2 = new Date()
        var DateUserDefinedWithoutHours = new Date(2023, 4, 1)
        var DateUserDefinedWithHours = new Date(2023, 5, 1, 9, 22, 10)

        console.log(`The variable someText has value ${sometext}\nand is a type of ${typeof(sometext)}\n-------------------------------------------------`)

        console.log(`The variable someNumbWthQuotationMarks has value ${someNumbWthQuotationMarks} (with ")\nand is a type of ${typeof(someNumbWthQuotationMarks)}\n-------------------------------------------------`)

        console.log(`The variable someNumbWithoutQuotationMark has value ${someNumbWithoutQuotationMark} (without ")\nand is a type of ${typeof(someNumbWithoutQuotationMark)}\n-------------------------------------------------`)

        console.log(`The variable numbWithFloatDot has value ${numbWithFloatDot} (with .)\nand is a type of ${typeof(numbWithFloatDot)}\n-------------------------------------------------`)

        console.log(`The variable booleanValue has value ${booleanValue} \nand is a type of ${typeof(booleanValue)}\n-------------------------------------------------`)

        console.log(`The variable infinityValue has value ${infinityValue} (1/0) \nand is a type of ${typeof(infinityValue)}\n-------------------------------------------------`)

        console.log(`The variable notIsAnumber has value ${notIsAnumber} ("A/3) \nand is a type of ${typeof(notIsAnumber)}\n-------------------------------------------------`)

        console.log(`The variable valuneNotDefined was created without assigning a value to it \nand is a type of ${typeof(valuneNotDefined)}\n-------------------------------------------------`)

        console.log(`The variable variableNull has value ${variableNull} (null) \nand is a type of ${typeof(variableNull)}\n-------------------------------------------------`)
        
        console.log(`The variable varObject has value ${varObject} (${JSON.stringify(varObject)}) \nand is a type of ${typeof(varObject)}\n-------------------------------------------------`)

        console.log("The variable dois has value ", dois, "\nand is a type of ", typeof(dois), "\n*as you can see array is a type of object\n-------------------------------------------------")

        console.log("the variable currentDateLocalMachine1 has value Date() \nthat return: ", currentDateLocalMachine1, "\nand is a type of",typeof(currentDateLocalMachine1), `\n-------------------------------------------------`)

        console.log("the variable currentDateLocalMachine2 has value new Date() \nthat return: ", currentDateLocalMachine2, "\nand is a type of",typeof(currentDateLocalMachine2), `\n-------------------------------------------------`)
        
        console.log("the variable DateUserDefinedWithoutHours has value ew Date(2023, 4, 1) \nthat return: ", DateUserDefinedWithoutHours, "\nand is a type of",typeof(DateUserDefinedWithoutHours), `\n-------------------------------------------------`)
       
        
        console.log("the variable DateUserDefinedWithHours has value new Date(2023, 5, 1, 9, 22, 10) \nthat return: ", DateUserDefinedWithHours, "\nand is a type of",typeof(DateUserDefinedWithHours), `\n-------------------------------------------------`)