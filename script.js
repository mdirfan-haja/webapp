//var submitB = document.getElementById('contactSubmit')
//var firstName = document.getElementById('fname')
//var lastName = document.getElementById('lname')
//var subject = document.getElementById('subject1')

//var errorMsg = 'Please fill the form correctly'
//var pageLoad = true



function validateForm() {
    var name1 = document.forms["contactSubmit"]['fname'].value
    var lastName1 = document.forms["contactSubmit"]['lname'].value
    var subject1 = document.forms["contactSubmit"]['subject1'].value
        //var namelen = Number(name1.length)
        //var fname1 = document.getElementById('fname')
    var errorP = document.getElementById('error1')
    var errorName1 = document.getElementById('fNameErr')
    var errorNameLast1 = document.getElementById('NameErr')
    var subErr = document.getElementById('subErr')
    console.log(name1)
    if (name1.length == 0) {
        errorName1.innerHTML = 'First Name'
        errorName1.style.color = 'red'
        errorP.innerHTML = 'Please fill the form correctly'
        errorP.style.color = 'red'


    } else if (name1.length > 0) {
        errorName1.innerHTML = 'First name'
        errorName1.style.color = 'Green'
    } else {

        document.querySelector("contactSubmit").action = "page.php";
    }

    if (lastName1.length == 0) {
        errorNameLast1.innerHTML = 'ssadadasd'
        errorNameLast1.style.color = 'red'
        errorP.innerHTML = 'Please fill the form correctly'
        errorP.style.color = 'red'


    } else if (lastName1.length > 0) {
        errorNameLast1.innerHTML = 'Last Name'
        errorNameLast1.style.color = 'Green'
    } else {

        document.querySelector("contactSubmit").action = "page.php";
    }
    if (subject1.length == 0) {
        subErr.innerHTML = 'ssadadasd'
        subErr.style.color = 'red'
        errorP.innerHTML = 'Please fill the form correctly'
        errorP.style.color = 'red'

    } else if (subject1.length > 0) {
        subErr.innerHTML = 'Subject'
        subErr.style.color = 'green'
    } else {
        document.querySelector("submit").action = "page.php";

    }
    return false
}


/*
submitB.addEventListener('click', function() {
    if (pageLoad) {
        firstName
        lastName
        subject

    }
})
*/
/*
function submitContact() {
    document.getElementById("contactSubmit").action = "page.php";*/