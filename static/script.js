
function showNavbar() {
    let x = document.getElementById('navbar');
    console.log(x);

    if (x.style.display === 'block') {
        x.style.display = 'none';
        console.log("Ok");
    } else {
        x.style.display = 'block';
        console.log("Failed");
    }
}