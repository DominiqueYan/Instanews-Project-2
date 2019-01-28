$(function () {
    console.log("Welcome to Instanews!");
});

// import { url } from "inspector";

//Problem: Retrieve content from the NYT Top Stories API and add it to our site.
//If we don't get a successful response, let the user know

//1. Listen for the selct menu to change (watching value)
    //1a. Show the loader and clear out old stories
    //1b. If select value is "" dp mptjomg amd return from the function imediately!
    //1c. Show a loader and clear out old stories
//2. Send a request to the NYT API for data based on the value of the select menu
//3. If successful, parse the data and decide what parts we want to append to our DOM
//4. Append that stuff to the DOM
//5. If unsuccessful, append and show a helpful to the user in the UI
//6. Hide the loader again

// the same as documemt ready()
$(function(){
    $('selection').on('change', function() {
    const section = $(this).val();
    //console.log(section);

    //if value is empty, return
    //show loader
    //clear stories
    //make out ajax request
    $.ajax({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json?',//sign up for api key in nyt and add
        datatype: 'json'
    }).done(function(data) {    //response is an object
        //do stuff here if it doesn't work out

    }).always(function(){
        //hide the loader
    })
});
});