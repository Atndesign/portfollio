var images = document.querySelectorAll(".skillsImg");
images.forEach(element => {
    element.addEventListener("mouseover",function(e){
        e.target.classList.add('animated', 'rubberBand');
        setTimeout(() => {
            e.target.classList.remove('animated', 'rubberBand');
        }, 1000);
    })
});