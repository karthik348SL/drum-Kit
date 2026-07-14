for(i = 0; i < document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
  
      function handleClick(){
        var soundsInnerHTML = this.innerHTML;
        switch (soundsInnerHTML) {

          case "w":
            document.querySelector(".w").style.color = "white";
            var audio1 = new Audio("./sounds/tom-1.mp3");
            audio1.play();
            break;
          
          case "a":
            document.querySelector(".a").style.color = "white";
            var audio2 = new Audio("./sounds/tom-2.mp3");
            audio2.play();
            break;

          case "s":
            document.querySelector(".s").style.color = "white";
            var audio3 = new Audio("./sounds/tom-3.mp3");
            audio3.play();
            break;

          case "d":
            document.querySelector(".d").style.color = "white";
            var audio4 = new Audio("./sounds/tom-4.mp3");
            audio4.play();
            break;

          case "j":
            document.querySelector(".j").style.color = "white";
            var audio5 = new Audio("./sounds/snare.mp3");
            audio5.play();
            break;

          case "k": 
          document.querySelector(".k").style.color = "white";
            var audio6 = new Audio("./sounds/kick-bass.mp3");
            audio6.play(); 
            break;

          case "l":
            document.querySelector(".l").style.color = "white";
            var audio7 = new Audio("./sounds/crash.mp3");
            audio7.play();
            break;

          default:
            break;
        }
  }
}


