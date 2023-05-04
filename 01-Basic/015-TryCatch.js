//often used when interacting with an external service
statusCode = 0 //1 to OK and 0 to not ok | to change statusCode to 1 comment the throw inside the try
errorCode = 1032

try {
    //message to simulate a DB connection
    console.log("Connecting to DB...")

    //to simulate connection fail let's use throw | To simulate everything work fine, comment the throw below
    throw `Erro code: ${errorCode}`

    statusCode = 1
} catch (error) {
    //it is a good practice never let catch empty
    
    document.getElementById("message").innerHTML = "<h1>ERROR:</h1><br> <h2>System cannot connect to DataBase server, please contact the Support</h2>"

    console.error(error) //is it possible use a personalized message. When we use error the code get the message from throw
} finally {
    //to change statusCode to 1 comment the throw inside the try
    console.log(statusCode ? "everything worked fine" : "something went wrong")

}
