        const person = {
            name: "Kris",
            age: 38,
            address: {
                street: '1',
                house: "7"
            }
        }

        //as you can see below, we can take a look using concatenate, using semicolon
        console.log("The user data: (using semicolon)\n",person)

        //now you can se that isn't work if we use plus signal e interpolation
        console.log("The user data: (using plus signal)\n"+person)
        console.log(`The user data: (using interpolation)\n${person}`)

        //we can work around this problem using "JSON.stringify"
        console.log("\n---------------Using JSON.stringify---------------")
        console.log("The user data: (using plus signal)\n"+JSON.stringify(person))
        console.log(`The user data: (using interpolation)\n${JSON.stringify(person)}`)

        //getting objects properties
        console.log(`\n----------------Getting objects properties----------------\n ${person.name} is ${person.age} and lives at street ${person.address.street}`)

        //set a new value to object property
        console.log("\n----------------Changing properties values----------------\nBefore:\n",person)
        person.name = "Ana"
        person.age = 35
        console.log("After (change name and age):\n", person)
        //adding property
        person.height = 1.8
        console.log("After ADD property height:\n", person)

        //Curiosity: even though it is a constant, the system allows changing its values and properties.
