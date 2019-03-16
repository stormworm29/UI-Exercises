/**
 * 
 * Method: selectDept()
 * Description: Choose the department for Enrolling
 */

var details = {
    "ECE" : {
        "hod" : "ABC",
        "courses" : 5
    },
    "CSE" : {
        "hod" : "EFG",
        "courses" : 7
    },
    "IT" : {
        "hod" : "HIJ",
        "courses" : 9
    }
}
function selectDept (name) {
    $("#btn-group").hide();
    $("#enroll-page").show();
    $("#department").html(name);
    $("#hod").html(details[name].hod);
    $("#courses").html(details[name].courses);
    if(name != 'ECE') {
        $("#lab").hide();
    }
}
/**
 * Medthod: enroll()
 * Description: Get the Name, CGPA and Lab values corresponding to the departments 
 * and greet the user with the input loaded
 */
function enroll() {
    var username = $("#username").val();
    var cgpa = $("#cgpa").val(); 
    var dept = $("#department").text();
    var lab = $("#lab-data").val();
    console.log(username + " " + cgpa + " " + dept + " " + lab);
    var cgpaValid = ((cgpa >= 0) && (cgpa <= 10));
    var cgpaEmpty = (cgpa == "");
    var nameEmpty = (username == "");
    var labEmpty = (lab == "");
    if(cgpaValid && !cgpaEmpty && !nameEmpty) {
        $("#enroll-page").hide();
        $("#invalid").hide();
        $("#thankyou").show();
        $("#thank-name").html(username);
        $("#thank-dept-name").html(dept);
        $("#thank-cgpa").html(cgpa);
        if(dept != 'ECE') {
            $("#thank-lab").hide();
        }
        else {      
                $("#lab-value").html(lab);
        }
    }
    else {
        if(dept != 'ECE'){
            if ((!cgpaValid || cgpaEmpty) && nameEmpty){
                $("#error-log").html("CGPA & Name : ");
            }
            else if (cgpaValid && cgpaEmpty){
                $("#error-log").html("CGPA : ");
            }
            else {
                $("#error-log").html("Name : ");
            }
        }
        else {
            if ((!cgpaValid || cgpaEmpty) && nameEmpty && labEmpty){
                $("#error-log").html("CGPA & Name & Lab : ");
            }
            else if ((!cgpaValid || cgpaEmpty) && nameEmpty){
                $("#error-log").html("CGPA & Name : ");
            }
            else if (!cgpaValid || cgpaEmpty){
                $("#error-log").html("CGPA : ");
            }
            else if (nameEmpty){
                $("#error-log").html("Name : ");
            }
            else if ((!cgpaValid || cgpaEmpty) && labEmpty) {
                $("#error-log").html("CGPA & Lab : ");
            }
            else {
                $("#error-log").html("Lab : ");
            }
        }
        $("#invalid").show();

    }
}
/* -------------------------------- Display Style Initialization Begins -------------------------------- */
$(".view").hide();
$("#btn-group").show();
/* -------------------------------- Display Style Initialization Ends -------------------------------- */