function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btn = document.getElementById("MyBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}

       