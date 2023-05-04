        /*
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        https://www.w3schools.com/jsref/jsref_obj_date.asp

        ##Main methods
        - getDay() and setDay - Return/set the week day (0-6)
        - getDate() and setDate - Return/set the month day (0-31)
        - getMonth() and setMonth() - Return/set the month (0-11)
        - getFullYear() and setFullYear() - Return/set the 
        - getHours() and setHours() - Return/set the Hours (0-23)
        - getSeconds() and setSeconds() - Return/set the Seconds (0-59)
        - getMinutes() and setMinutes() - Return/set the Minutes (0-59)
        - parse() - method takes a date string (such as " 2011-10-10T14:48:00 ") and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
        - toString() - the opposite of the "parse" 
        - toISOString() - return a date as String in ISO standart
        - toTimeString() - return only the hour

        -format: new Date(year, month, day, hour, minute, second, millisecond)

        ##Recommended libraries
        moment.js and date-fns
        */

        const bornDate = new Date(1987, 6, 26, 6, 16, 10)

        console.log(`${bornDate} \n${bornDate.toTimeString()} \n${bornDate.getFullYear()}`)

        //computing current age
        const today = new Date()
        console.log(`Age: ${today.getFullYear() - bornDate.getFullYear()}`)