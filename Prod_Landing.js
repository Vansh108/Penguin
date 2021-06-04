
document.getElementById("small-img-1").addEventListener("click", function(){var slides = document.getElementsByClassName("big-img");for(i = 0; i < slides.length; i++){slides[i].style.display = "none";}document.getElementById("big-img-1").style.display = "block";});
document.getElementById("small-img-2").addEventListener("click", function(){var slides = document.getElementsByClassName("big-img");for(i = 0; i < slides.length; i++){slides[i].style.display = "none";}document.getElementById("big-img-2").style.display = "block";});
document.getElementById("small-img-3").addEventListener("click", function(){var slides = document.getElementsByClassName("big-img");for(i = 0; i < slides.length; i++){slides[i].style.display = "none";}document.getElementById("big-img-3").style.display = "block";});

document.getElementById("atc").addEventListener("click", function() {
    document.getElementById("atc").innerHTML = "Added To Cart";
  });
document.getElementById("atw").addEventListener("click", function() {
    document.getElementById("atw").innerHTML = "Added To Whishlist";
  });

