var counter = 1;
    setInterval(function(){
        document.getElementById('r' + counter ) .checked = true ;
        counter++;
        if(counter > 3){
            counter = 1;
        }
    }, 5000);

    window.addEventListener("scroll", function(){
        var div = document.querySelector("div");
       div.classList.toggle("sticky", window.scrollY > 0);
    })