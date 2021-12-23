nameofthestudentarray= [];
function sumbit() {
    var name1= document.getElementById("student1").value;
    var name2= document.getElementById("student2").value;
    var name3= document.getElementById("student3").value;
    var name4= document.getElementById("student4").value;

    nameofthestudentarray.push(name1);
    nameofthestudentarray.push(name2);
    nameofthestudentarray.push(name3);
    nameofthestudentarray.push(name4);

    console.log(nameofthestudentarray);
    document.getElementById("displayname").innerHTML = nameofthestudentarray;
    document.getElementById("sumbitbtn").style.display= "none";
    document.getElementById("sortbtn").style.display= "inline-block";
}

function sort() {
    nameofthestudentarray.sort();
    console.log(nameofthestudentarray);
    document.getElementById("displayname").innerHTML = nameofthestudentarray;
}