
const quan = "Day la quan";
const ao = "Day la ao";
const dep = "Day la dep";
function changeContainer() {
    url = window.location.href;
    type = url.split("#")[1].split("=")[1];
    if(type === "quan") document.getElementById("container").innerHTML = quan;
    if(type === "ao") document.getElementById("container").innerHTML = ao;
    if(type === "dep") document.getElementById("container").innerHTML = dep;

}
