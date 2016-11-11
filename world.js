// JavaScript File
$(document).ready(function()
{
    var searchButton = $("#lookup");
    var url = "https://info2180-lab7-simonerscott.c9users.io/world.php?country=";
    
    
    searchButton.on('click', queryJamaica);
    
    
    function queryJamaica(event)
    {
        event.preventDefault();
        
        var termEntered = $("#country").val();
        
        $.ajax({
          url: url + termEntered,
        })
        .done(function(data) 
        {
           $("#result").html("");
           alert(data); // Displaying previous result in alert
           $("#result").append(data);
        }).fail(function()// In the event request is not able to find request page
        {
            alert("ERROR");
        });
        
    }
    
    
});