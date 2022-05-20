window.onload = function() {

    document.getElementById("status").innerHTML="Put your mouse over the S to start the game."

    document.getElementById("start").onmouseover = function() {start_game()}

    function start_game() {

        document.getElementById("status").innerHTML="To finish the game pass between the walls to reach the E "
   
        const bounds=document.getElementsByClassName("boundary")

            for (var x = 0 ; x < bounds.length ; x++){
                bounds[x].addEventListener("mouseover", you_lost) 
            }

    
        function you_lost() {
            for (var x = 0 ; x < bounds.length ; x++){
                bounds[x].style.backgroundColor = "red";
                document.getElementById("status").innerHTML="Try again"
            }
   
        }
            
    }


}