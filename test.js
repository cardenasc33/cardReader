
$.getJSON( "test1.json" , function( json) {
    console.log("JSON Data recieved, name is " + json.firstName);
    console.log("UIN is: " + json.uin);
});