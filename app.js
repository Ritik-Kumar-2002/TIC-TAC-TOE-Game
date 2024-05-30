const boxes = document.querySelectorAll(".boxes");

let turn0 = true;   // turn0 is true for 0 player and false for player 1
let resetbtn = document.querySelector(".reset-btn");
let Winner  = document.getElementsByClassName('winner-head')[0];

console.log(Winner);

// boxes.forEach(box=>  console.log(box));
console.log(boxes[0]);

const WinnerList = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const checkWinner = () => {
    for(let i=0; i<WinnerList.length; i++){
        let a = WinnerList[i][0];
        let b = WinnerList[i][1];
        let c = WinnerList[i][2];

        let num1 = boxes[a].innerHTML;
        let num2 = boxes[b].innerHTML;
        let num3 = boxes[c].innerHTML;
        console.log( num1+""+ num2+""+ num3 );

        let comb = num1.toString() + num2.toString() + num3.toString();
        console.log("comb is ", comb);

        if( comb === 'XXX' ){
            
            Winner.innerHTML = "Player X is Winner";
            

        }else if(comb === '000'){
            
            Winner.innerHTML = "Player 0 is Winner";
            
        } 
        // else  Winner.innerHTML = "TIE UP";
    }
}

boxes.forEach(box => { box.innerHTML = " "});
boxes.forEach(box => {
    turn0 = true;
    box.addEventListener('click', () => {
        
        if(turn0){
            box.innerHTML = '0';
            // console.log('0 Put ');
            turn0 = false;
        }else{
            box.innerHTML = 'X';
            // console.log('X put ');
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});


resetbtn.addEventListener('click', () => {
    Winner.innerHTML='';
    boxes.forEach( box =>
        {
            //console.log("box value is ",box);
            box.innerHTML='';
            box.disabled = false;
});
});