const maxwidth="20%"

/* Set the width of the side navigation to 10% */
function openNav() {
    document.getElementById("sidemenu").style.width = maxwidth;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidemenu").style.width = "0";
}

function loadpage(pagen) {
    console.log(`page${pagen}`);
    var e = document.getElementsByClassName("page");
    for (let item of e) {
        item.style.width = "0";
    }
    var selected = `page${pagen}`;
    document.getElementById(selected).style.width = "100%";
}

function togglesection(sectionn) {
    console.log(sectionn);
    var state = document.getElementById(`section${sectionn}`).nextElementSibling.style.display;

    var e = document.getElementsByClassName("panel");
    for (let item of e) {
        item.style.display = "none";
    }
    if (state === "none") {
        var state = "block";
    } else {
        var state = "none";
    }
    var panel = document.getElementById(`section${sectionn}`)
    .nextElementSibling.style.display = state;
}