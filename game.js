let rocks=document.querySelector("#rock");
let papers=document.querySelector("#paper")
let scissors=document.querySelector("#scissor")
let userScore=document.querySelector("#userScore");
let pcScore=document.querySelector("#pcScore");
let pc=document.querySelector("#computer");


let userChoice;
let pcChoice;
let userWin ;
let userN=0;let pcN=0;

console.log(userChoice);


let PCSelect=()=>{
let pcOptions=["rock","paper","scissor"];
let randindx=Math.floor(Math.random()*3); 
pcChoice=pcOptions[randindx];
pc.innerText=pcChoice;

console.log(pcChoice);

}

let winner=()=>{
if(userChoice!="" && pcChoice!="" && userChoice===pcChoice){
    userWin=null;
    console.log("draw");
}
else{
if(userChoice==="rock"){
  pcChoice==="scissor"? userWin=true:userWin=false ;
      
}
 else if(userChoice=="paper"){
    pcChoice==="scissor"? userWin=false:userWin=true; 
        
  }
  else if(userChoice=="scissor"){
    pcChoice==="rock"? userWin=false:userWin=true ;

  }
  else{}
}

}

//score tracking

let score=()=>{


if(userWin==true){
    userN++;
    
    userScore.textContent=userN;
}
else if(userWin==false){
    pcN++;
    pcScore.textContent=pcN;
}

}







//code for rocks
let GetAttrRock=()=>{
     userChoice=  rocks.getAttribute("id");
    console.log(userChoice);
    PCSelect();
    winner();
    score();
 
}
rocks.addEventListener("click",GetAttrRock);
 
//code for papers
 let GetAttrPaper=()=>{
    userChoice=  papers.getAttribute("id");
    console.log(userChoice);
    PCSelect();
    winner();
    score();

}
papers.addEventListener("click",GetAttrPaper);

//code for scissor
let GetAttrScissor=()=>{
    userChoice=  scissors.getAttribute("id");
   console.log(userChoice);
   PCSelect();
   winner();
   score();

}
scissors.addEventListener("click",GetAttrScissor);


let resetBtn=document.querySelector("#reset");
resetBtn.addEventListener("click",()=>{
    userN=0;pcN=0;
    userScore.textContent=userN;
    pcScore.textContent=pcN;
    pc.innerText="";



})
