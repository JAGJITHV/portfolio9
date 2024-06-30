/*function sentmail(){

    var params ={
        to_name : document.getElementById("to_name").value ,
        
        from_name :document.getElementById("from_name").value ,
        message :document.getElementById("message").value ,
        
    };


     const serviceID = "service_v3z08qd";
     const templateID = "template_hsbxco9";

    emailjs.send("serviceID","templateID",params )
    .then((res) => {
     document.getElementById("to-name").value = "";
     document.getElementById("from-name").value = "";
     document.getElementById("message").value = "";
     console.log(res);
     alert("your message sent successfully")
})
.catch((err) => console.log(err));
}*/
function sentMail(){

    var params ={
        to_name : document.getElementById("to_name").value ,
        
        from_name :document.getElementById("from_name").value ,
        message :document.getElementById("message").value ,
        
    }
    emailjs.send("service_6mzkhm5","template_ool1u5j",params ).then(function(res){
    alert("sent successfully")
})

} 