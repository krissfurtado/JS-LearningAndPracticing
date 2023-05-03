        const persons = ["Pedro", "Ana", "João", "Maria"]
        console.log("---------------Show array ---------------")
        console.log(persons)

        //show second position
        console.log("---------------Show second ---------------\n",persons[1])

        //using for do show elements
        console.log("---------------using foreach ---------------")
        persons.forEach(element => {
            console.log(element)
        });
         

        //get the number of elements inside the array
        console.log("---------------Using .length ---------------\n",persons.length)

        //overwrite an element
        console.log("------------------------ Overwrite an element ------------------------\nArray before overwrite:",persons)
        persons[1] = "Lucas"
        console.log("Array after replacing Ana:",persons)

        //adding index 9 (not a good practice)
        console.log("------------------------ Add index 9 ------------------------")
        persons[9] = "João"
        console.log(persons)
