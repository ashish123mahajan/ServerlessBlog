function readTextFile(file) {
    var output = document.getElementById("output");
    var rawFile = new XMLHttpRequest(); // XMLHttpRequest (often abbreviated as XHR) is a browser object accessible in JavaScript that provides data in XML, JSON, but also HTML format, or even a simple text using HTTP requests.
    rawFile.open("GET", file, false); // open with method GET the file with the link file ,  false (synchronous)
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4) // readyState = 4: request finished and response is ready
        {
            if(rawFile.status === 200) // status 200: "OK"
            {
                var allText = rawFile.responseText; //  Returns the response data as a string
                console.log(allText); // display text on the console
               // output.textContent=allText;
               $('#output').append(allText);
            }
        }
    }
    rawFile.send(null); //Sends the request to the server Used for GET requests with param null
}