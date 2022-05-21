window.onload = function() {

	var score = 0;
    document.getElementById("status").innerHTML="Put your mouse over the S to start the game.";
    document.getElementById("score").innerHTML="Your Score: " + score;

    document.getElementById("start").onclick = function() {start_game()}



    function start_game() {
		
        document.getElementById("status").innerHTML="To finish the game pass between the walls to reach the E ";
   
        const bounds=document.getElementsByClassName("boundary");

		for (var x = 0 ; x < bounds.length ; x++){
			bounds[x].addEventListener("mouseover", you_lost);
			bounds[x].classList.remove("youlose");                
		}
		
        document.getElementById("end").addEventListener("mouseover", you_won);
		
        function you_won() {
			if(document.getElementById("status").innerHTML!=="You Win" && document.getElementById("status").innerHTML!=="Try again"){
				document.getElementById("status").innerHTML="You Win";
				score = score + 5;
				document.getElementById("score").innerHTML="Your Score: " + score;
			}
        }
    
        function you_lost() {
			if(document.getElementById("status").innerHTML!=="You Win" && document.getElementById("status").innerHTML!=="Try again"){
				for (var x = 0 ; x < bounds.length ; x++){
					//bounds[x].style.backgroundColor = "red";
					bounds[x].classList.add("youlose");
					document.getElementById("status").innerHTML="Try again"; 
				};
				score = score - 10;
				document.getElementById("score").innerHTML="Your Score: " + score;
			}
        }
        
    }
        
}