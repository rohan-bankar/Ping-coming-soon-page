const emailId = document.querySelector('.email');

function verify(email){
    const isMatch =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(email.value === '' || !email.value.match(isMatch)){
        document.querySelector('.error').style.display = 'block';
        emailId.style.borderColor = ' hsl(354, 100%, 66%)';
    }else{
        alert("Correct emailId");
    }
}

document.querySelector('button').onclick = function(){
    verify(emailId);
} 

    