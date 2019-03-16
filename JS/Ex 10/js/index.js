/**
 * 
 * Method: selectDept()
 * Description: Choose the department for Enrolling
 */


function selectDept (name) {
    document.getElementById("btn-group").style.display = "none";
    document.getElementById("thankyou").style.display = "none";
    document.getElementById("enroll-page").style.display = "block";
    document.getElementById("invalid").style.display = "none";
    document.getElementById("department").innerHTML = name;
    if(name != 'ECE') {
        document.getElementById("lab").style.display = "none";
    }
}
/**
 * Medthod: enroll()
 * Description: Get the Name, CGPA and Lab values corresponding to the departments 
 * and greet the user with the input loaded
 */
function enroll() {
    var username = document.getElementById("username").value;
    var cgpa = document.getElementById("cgpa").value; 
    var dept = document.getElementById("department").innerHTML;
    var lab = document.getElementById("lab-data").value;
    var cgpaValid = ((cgpa >= 0) && (cgpa <= 10));
    var cgpaEmpty = (cgpa == "");
    var nameEmpty = (username == "");
    var labEmpty = (lab == "");

    if(cgpaValid && !cgpaEmpty && !nameEmpty) {
        document.getElementById("enroll-page").style.display = "none";
        document.getElementById("invalid").style.display = "none";
        document.getElementById("thankyou").style.display = "block";
        document.getElementById("thank-name").innerHTML = username;
        document.getElementById("thank-dept-name").innerHTML = dept;
        document.getElementById("thank-cgpa").innerHTML = cgpa;
        if(dept != 'ECE') {
            document.getElementById("thank-lab").style.display = "none";
        }
        else {      
                document.getElementById("lab-value").innerHTML = lab;
        }
    }
    else {
        if(dept != 'ECE'){
            if ((!cgpaValid || cgpaEmpty) && nameEmpty){
                document.getElementById("error-log").innerHTML = "CGPA & Name : ";
            }
            else if (cgpaValid && cgpaEmpty){
                document.getElementById("error-log").innerHTML = "CGPA : ";
            }
            else {
                document.getElementById("error-log").innerHTML = "Name : ";
            }
        }
        else {
            if ((!cgpaValid || cgpaEmpty) && nameEmpty && labEmpty){
                document.getElementById("error-log").innerHTML = "CGPA & Name & Lab : ";
            }
            else if ((!cgpaValid || cgpaEmpty) && nameEmpty){
                document.getElementById("error-log").innerHTML = "CGPA & Name : ";
            }
            else if (!cgpaValid || cgpaEmpty){
                document.getElementById("error-log").innerHTML = "CGPA : ";
            }
            else if (nameEmpty){
                document.getElementById("error-log").innerHTML = "Name : ";
            }
            else if ((!cgpaValid || cgpaEmpty) && labEmpty) {
                document.getElementById("error-log").innerHTML = "CGPA & Lab : ";
            }
            else {
                document.getElementById("error-log").innerHTML = "Lab : ";
            }
        }
        document.getElementById("invalid").style.display = "block";

    }
}
/* -------------------------------- Display Style Initialization Begins -------------------------------- */
document.getElementById("thankyou").style.display = "none";
document.getElementById("enroll-page").style.display = "none";
document.getElementById("invalid").style.display = "none";
/* -------------------------------- Display Style Initialization Ends -------------------------------- */