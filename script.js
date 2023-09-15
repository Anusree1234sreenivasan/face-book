$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            firstname:{
                required:true,
                minlength:4
            }

        }
        
    })
})