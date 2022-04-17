function validation(){
    var username=document.getElementById('exampleInputName').value;
    var email=document.getElementById('exampleInputEmail1').value;
    var number=document.getElementById('exampleInputNumber').value;
    var product=document.getElementById('exampleInputproduct').value;
    var quantity=document.getElementById('exampleInputQuantity').value;
    var address=document.getElementById('exampleInputAddress').value;

    var usercheck=/^[A-Za-z ]{3,50}$/;
    var emailcheck=/^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck=/^[6789][0-9]{9}$/;
    var productcheck=/^[A-Za-Z0-9]{1,}$/;
    var quantitycheck=/^[0-9]{1,}$/;
    var addresscheck=/^[A-za-z0-9,. ]{3,}$/;

    if(usercheck.test(username)){
        document.getElementById('errorname').innerHTML="";
    }
    else{
        document.getElementById('errorname').innerHTML="Please use only alphabets";
        return false;
    }
    
    if(emailcheck.test(email)){
        document.getElementById('erroremail1').innerHTML="";
    }
    else{
        document.getElementById('erroremail1').innerHTML="Invalid Input";
        return false;
    }
    
    if(numbercheck.test(number)){
        document.getElementById('errornumber').innerHTML="";
    }
    else{
        document.getElementById('errornumber').innerHTML="Invalid Number";
        return false;
    }
    
    if(productcheck.test(product)){
        document.getElementById('errorproduct').innerHTML="";
    }
    else{
        document.getElementById('errorproduct').innerHTML="Please mention the product ID properly";
        return false;
    }
    
    if(quantitycheck.match(quantity)){
        document.getElementById('errorquantity').innerHTML="";
    }
    else{
        document.getElementById('errorquantity').innerHTML="Invalid Input";
        return false;
    }

    if(addresscheck.match(address)){
        document.getElementById('erroraddress').innerHTML="";
    }
    else{
        document.getElementById('erroraddress').innerHTML="Invalid Input";
        return false;
    }
}

function validation1(){
    var username=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('number').value;
    var address=document.getElementById('address').value;

    var usercheck=/^[A-Za-z ]{3,50}$/;
    var emailcheck=/^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck=/^[6789][0-9]{9}$/;
    var addresscheck=/^[A-za-z0-9,. ]{3,}$/;

    if(usercheck.test(username)){
        document.getElementById('errorname').innerHTML="";
    }
    else{
        document.getElementById('errorname').innerHTML="Please use only alphabets";
        return false;
    }
    
    if(emailcheck.test(email)){
        document.getElementById('erroremail').innerHTML="";
    }
    else{
        document.getElementById('erroremail').innerHTML="Invalid Input";
        return false;
    }
    
    if(numbercheck.test(number)){
        document.getElementById('errornumber').innerHTML="";
    }
    else{
        document.getElementById('errornumber').innerHTML="Invalid Number";
        return false;
    }

    if(addresscheck.match(address)){
        document.getElementById('erroraddress').innerHTML="";
    }
    else{
        document.getElementById('erroraddress').innerHTML="Invalid Input";
        return false;
    }
}