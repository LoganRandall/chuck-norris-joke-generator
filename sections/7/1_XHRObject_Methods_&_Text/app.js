document.getElementById('button').addEventListener('click', loadData);

function loadData(){

    // create XHR Object which has properties we use
    const xhr = new XMLHttpRequest();

    // open()- specify the type of request we are making and the URL we wanna make it to, and whrether its to be async(true)
    xhr.open('GET', 'asyncdata.txt', true);

    // console.log('READYSTATE', xhr.readyState);
    
    // Optional- Used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    
    
    // MODERN WAY TO LOAD------------------------
    xhr.onload = function(){
        
        // console.log('READYSTATE', xhr.readyState);

        // here is where we instruct the data to do what we need ot to do
        // 1. Check that the status is = 200(everything is ok)
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }

    }
    // ------------------------------------------

    // OLD WAY OF LOADING BY CHECKING READY STATE

    // xhr.onreadystatechange = function(){
    //         console.log('READYSTATE', xhr.readyState);

    //     if(this.status === 200 && this.readyState === 4){
    //         // instructions to do what you want with data
    //         console.log(this.responseText);
    //     }
    // }

    // this will only run in the event of an error
    xhr.onerror = function(){
        console.log('request error...')
    }

    // finalize the request
    xhr.send();

    // READY STATE VALUES
        // 0: request not initialized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready

    // HTTP STATUSES
        // 200: OK
        // 403: forbidden
        // 404: not found
}