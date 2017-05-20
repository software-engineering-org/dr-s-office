/**
 * Created by Mohammed Alaa Elkomy on 5/20/2017.
 */

$("button").click(function(){
    $.post("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});