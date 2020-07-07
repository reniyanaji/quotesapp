
// function to random generate colors
function setBg(){

        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        document.querySelector("#reveal").style.backgroundColor = "#" + randomColor; 
}

// ajax call function
function sendTheAJAX() {
  
// 1. create a new XMLHttpRequest object -- an object like any other!
var myRequest = new XMLHttpRequest();
// 2. open the request and pass the HTTP method name and the resource as parameters
myRequest.open('GET', 'https://api.quotable.io/random');
// 3. write a function that runs anytime the state of the AJAX request changes
myRequest.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (myRequest.readyState === 4) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
        parData = JSON.parse(myRequest.responseText)
        console.log(parData);
        quote = parData.content;
        
        document.getElementById('ajax-content').innerHTML = quote;
    
    }
};

    myRequest.send();
    setBg();

}
       

 document.querySelector("#reveal").addEventListener('click',sendTheAJAX);


