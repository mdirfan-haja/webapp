//var submitB = document.getElementById('contactSubmit')
//var firstName = document.getElementById('fname')
//var lastName = document.getElementById('lname')
//var subject = document.getElementById('subject1')

//var errorMsg = 'Please fill the form correctly'
//var pageLoad = true


function validateForm() {
    var name1 = document.forms["contactSubmit"]['fname', 'lname', 'subject1'].value
    var namelen = Number(name1.length)
    var errorP = document.getElementById('error1')
    var errorName1 = document.getElementById('fNameErr')



    if (namelen == 0) {
        errorP.innerHTML = 'Please fill the form correctly'
        errorName1.innerHTML = 'Please fill Your first Name'
        errorP.style.color = 'red'
        errorName1.style.color = 'red'

    } else {

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
    document.getElementById("contactSubmit").action = "page.php";
}*/