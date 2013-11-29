function showCustomer(str) {
    var xmlhtpp;
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        rturn;
    }
    if (window.XMLHttpRequest) {
        // Code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhtpp = new XMLHttpRequest();
    }
    else {
        // code for IE6/5
        xmlhtpp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhtpp.onreadystatechange = function () {
        if (xmlhtpp.readyState == 4 && xmlhtpp.status == 200) {
            document.getElementById("txtHint".innerHTML = xmlhtpp.responseText;
        }
    }
    xmlhtpp.open("GET", "getcustomer.asp?q=" + str, true);
    xmlhtpp.send();
}
