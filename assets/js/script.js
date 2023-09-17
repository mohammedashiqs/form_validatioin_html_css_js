let fullName_flag = false;
let emailId_flag = false;
let mobNum_flag = false;
let city_flag = false;
let gender_flag = false;

let fullName;
let emailId;
let mobNum;
let city;
let male;
let female;
let languages = []


function validateName() {



    fullName = document.getElementById("fullName").value;

    let fullName_regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/

    if (fullName.length === 0) {
        document.getElementById("fullNameError").innerText = "Name field cannot be empty"
        document.getElementById("fullNameError").style.color = "red"
    } else {
        if (fullName.length > 15) {
            document.getElementById("fullNameError").innerText = "Exceed the limit"
            document.getElementById("fullNameError").style.color = "orangered"

        } else if (fullName_regex.test(fullName) === false) {
            document.getElementById("fullNameError").innerText = "Invalid Full Name"
            document.getElementById("fullNameError").style.color = "orangered"
        } else {
            document.getElementById("fullNameError").innerText = "Valid"
            document.getElementById("fullNameError").style.color = "green"

            fullName_flag = true

        }
    }
}


function validateEmail() {

    /* let emailId_flag = false */

    emailId = document.getElementById("emailId").value;


    let email_regex = /^\S+@\S+\.\S+$/; //Example: admin@gmail.com
    if (emailId.length === 0) {
        document.getElementById("emailIdError").innerText = "Email field cannot be empty"
        document.getElementById("emailIdError").style.color = "red"
        console.log("h")
    } else {
        if (email_regex.test(emailId) === false) {
            document.getElementById("emailIdError").innerText = "Invalid email"
            document.getElementById("emailIdError").style.color = "orangered"
        } else {
            document.getElementById("emailIdError").innerText = "Valid"
            document.getElementById("emailIdError").style.color = "green"

            emailId_flag = true
        }
    }


}





function validateMobNum() {

    mobNum = document.getElementById("mobNum").value;


    let mobNum_regex = /^[6-9]\d{9}$/; //ex
    if (mobNum.length === 0) {
        document.getElementById("mobNumError").innerText = "Number field cannot be empty"
        document.getElementById("mobNumError").style.color = "red"
    } else {
        if (mobNum_regex.test(mobNum) === false) {
            document.getElementById("mobNumError").innerText = "Invalid Mobile Number"
            document.getElementById("mobNumError").style.color = "orangered"
        } else {
            document.getElementById("mobNumError").innerText = "Valid"
            document.getElementById("mobNumError").style.color = "green"
            mobNum_flag = true;
        }
    }


}


function validateCity() {
    city = document.getElementById("city").value;


    if (city == "") {
        document.getElementById("cityError").innerHTML = "Please select the city name"
        document.getElementById("cityError").style.color = "red"

    } else {
        document.getElementById("cityError").innerText = "Selected"
        document.getElementById("cityError").style.color = "green"
        city_flag = true
    }
}



function validateGender() {
    male = document.getElementById("male").value;
    female = document.getElementById("female").value;

    console.log(male, female)
    console.log("hi")

    if (male != "" && female != "") {
        document.getElementById("genderError").innerHTML = "selected"
        document.getElementById("genderError").style.color = "green"
        gender_flag = true
    }
}




let pc_output = document.getElementById("user_data_pc")
let tab_and_mob_view = document.getElementById("tab_and_mob_view")



function submitFrom(e) {
    e.preventDefault();

    document.getElementById('language1').checked ? languages.push(document.getElementById('language1').value) : ""
    document.getElementById('language2').checked ? languages.push(document.getElementById('language2').value) : ""
    document.getElementById('language3').checked ? languages.push(document.getElementById('language3').value) : ""
    document.getElementById('language4').checked ? languages.push(document.getElementById('language4').value) : ""
    document.getElementById('language5').checked ? languages.push(document.getElementById('language5').value) : ""







    if (!fullName_flag || !emailId_flag || !mobNum_flag || !city_flag || !gender_flag) {
        document.getElementById("submitError").innerHTML = "please enter all the required information";
        document.getElementById("submitError").style.color = "red"
    } else {




        document.getElementById("contact-form")/* .submit() */;
        // document.getElementById("contact-form").reset();
        alert("You have successfully submitted")

        pc_output.innerHTML += `<tr >
        <td>${fullName}</td>
        <td>${emailId}</td>
        <td>${mobNum}</td>
        <td>${city}</td>
        <td>${male || female}</td>
        <td>${languages}</td>
        </tr>`

        tab_and_mob_view.innerHTML += `<tr>
        <td>Full Name</td>
        <td>${fullName}</td>
    </tr>
    <tr>
        <td>Email Id</td>
        <td>${emailId}</td>
    </tr>
    <tr>
        <td>Mobile Number</td>
        <td>${mobNum}</td>
    </tr>
    <tr>
        <td>City</td>
        <td>${city}</td>
    </tr>
    <tr>
        <td>Gender</td>
        <td>${male}</td>
    </tr>
    <tr>
        <td>Languages</td>
        <td>${languages}</td>
    </tr>`

    }


}











