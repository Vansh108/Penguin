var Index = 0;
            show_blkfri_anims();
            
            function show_blkfri_anims() {
              var anims = document.getElementsByClassName("blk-fri");
            //   var dots = document.getElementsByClassName("dot");
              for (var i = 0; i < anims.length; i++) {
                anims[i].style.display = "none"; 
              }
              
              if (Index >= anims.length) {
                  Index = 0;
                  }
                  anims[Index].style.display = "block";
                  Index++;
            //   for (i = 0; i < dots.length; i++) {
            //     dots[i].className = dots[i].className.replace(" active", "");
            //   }
                
            //   dots[slideIndex-1].className += " active";
              setTimeout(show_blkfri_anims, 1000); // Change image every 2 seconds
            }