//register button function

function register() {
    // fname = "fname.value" + " lname.value"
    uname = uName.value
    acno = acNum.value
    opt1 = opt_1.value
    opt2 = opt_2.value
    mobile = mob.value
    password = pass.value

    // create object to store in local storage
    accDetails = {
        // fname,
        acno,
        opt1,
        opt2,
        uname,
        mobile,
        password
    }

    // cheack the user allredy prasent or not

    if (acno in localStorage) {
        alert("alredy registred please log in")
        window.location.href = "bank.html"
    }
    else {
        //store data in localstorage
        localStorage.setItem(uname, JSON.stringify(accDetails))
        alert("register successfully")
        window.location.href = "bank.html"
    }
}


function loginpage() {
    acno=uname1.value
    pass=pswd.value

    if(acno in localStorage){
        acdetails=JSON.parse(localStorage.getItem(acno))
        console.log(acdetails);
       if(pass==acdetails.password){
        alert('log in sucessfully')
        window.location.href="https://www.google.com"
       }
       else{
        alert('username or password wrong')
       }
        

    }
    else{
        alert('user does not exist')
    }
    
}


