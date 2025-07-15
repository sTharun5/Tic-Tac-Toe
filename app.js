let buttons = document.querySelectorAll(".box");
let Player1 = "X";
let Player2 = "O";
let chance = 1;
let visited = [0,0,0,0,0,0,0,0,0];


console.log(buttons);
let func;


 

for(let i=0;i<9;i++){
buttons[i].addEventListener("click",func = ()=>{
    if(visited[i] === 0){
visited[i] = 1;
        if(chance == 1){
        buttons[i].innerHTML = "X";
        chance =0;
        f(buttons[i].innerHTML);
        }
        else{
            buttons[i].innerHTML = "O";
            chance=1;
             f(buttons[i].innerHTML);
        }
        
    }
    
});
}
let  head = document.createElement("h1");
// wining combinations => 123,456,789,741,852,963,753,951 8 possible winning combinations
let win = "";
let f = (parameter)=>{
    
     if(buttons[0].innerHTML == 'X' && buttons[1].innerHTML == 'X' && buttons[2].innerHTML == 'X'){
        win = parameter;
        
    }
    else if(buttons[3].innerHTML == 'X' && buttons[4].innerHTML == 'X' && buttons[5].innerHTML == 'X'){
        win = parameter;
    }
    else if(buttons[6].innerHTML == 'X' && buttons[7].innerHTML == 'X' && buttons[8].innerHTML == 'X'){
         win = parameter;
    }
      else if(buttons[6].innerHTML == 'X' && buttons[3].innerHTML == 'X' && buttons[0].innerHTML == 'X'){
        win = parameter;
    }
     else if(buttons[7].innerHTML == 'X' && buttons[4].innerHTML == 'X' && buttons[1].innerHTML == 'X'){
        win = parameter;
    }
     else if(buttons[8].innerHTML == 'X' && buttons[5].innerHTML == 'X' && buttons[2].innerHTML == 'X'){
     win = parameter;
    }
    else  if(buttons[6].innerHTML == 'X' && buttons[4].innerHTML == 'X' && buttons[2].innerHTML == 'X'){
        win = parameter;
    }
    else  if(buttons[8].innerHTML == 'X' && buttons[4].innerHTML == 'X' && buttons[0].innerHTML == 'X'){
         win = parameter;
    }
    else if(buttons[0].innerHTML == 'O' && buttons[1].innerHTML == 'O' && buttons[2].innerHTML == 'O'){
       win = parameter;
    }
    else if(buttons[3].innerHTML == 'O' && buttons[4].innerHTML == 'O' && buttons[5].innerHTML == 'O'){
        win = parameter;
    }
    else if(buttons[6].innerHTML == 'O' && buttons[7].innerHTML == 'O' && buttons[8].innerHTML == 'O'){
    win = parameter;
    }
      else if(buttons[6].innerHTML == 'O' && buttons[3].innerHTML == 'O' && buttons[0].innerHTML == 'O'){
         win = parameter;
    }
     else if(buttons[7].innerHTML == 'O' && buttons[4].innerHTML == 'O' && buttons[1].innerHTML == 'O'){
         win = parameter;
    }
     else if(buttons[8].innerHTML == 'O' && buttons[5].innerHTML == 'O' && buttons[2].innerHTML == 'O'){
        win = parameter;
    }
    else  if(buttons[6].innerHTML == 'O' && buttons[4].innerHTML == 'O' && buttons[2].innerHTML == 'O'){
      win = parameter;
    }
    else  if(buttons[8].innerHTML == 'O' && buttons[4].innerHTML == 'O' && buttons[0].innerHTML == 'O'){
       win = parameter;
    }
    if(win.length != 0){
         
        head.innerHTML = win + " wins";
        let game = document.querySelector(".game");
        game.append(head);
        
        for(let i=0;i<9;i++){
            visited[i] = 1;
        }
    }
    else{
        let flag=1;
        for(let i=0;i<9;i++){
            if(visited[i] == 0){
                flag=0;
                break;
            }
          
        }
        if(flag==1){
             head.innerHTML = "Match tied Reset to play again";
                let game = document.querySelector(".game");
                game.append(head);
              
        }

          console.log(visited);
    }
}

let reset = document.querySelector("#Reset");

reset.addEventListener("click",()=>{
    for(let i = 0;i<9;i++){
        visited[i] = 0;
        buttons[i].innerHTML = "";
        chance = 1;
        win="";
    }
    
head.innerHTML = "";
   
})




console.log(func);






