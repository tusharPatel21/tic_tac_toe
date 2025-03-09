'use strict'

console.log('Welcome');


let music=new Audio('music.mp3');
let audioTurn=new Audio('ting.mp3');
let gameover=new Audio('gameover.mp3');
let turn='X';
let isGameover=false;

// Function to change  the turn
function changeTurn(){
    return turn==='X'?'O':'X';
};

// Function to check for a Win
function checkWin(){
    let boxText=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2,1,5,0],
        [3,4,5,1,15,0],
        [6,7,8,1,25,0],
        [0,3,6,-9,15,90],
        [1,4,7,1,15,90],
        [2,5,8,11.1,15,90],
        [0,4,8,1,14.7,45],
        [2,4,6,0.8,15,135],
    ];
    wins.forEach((e)=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')){
            isGameover=true
            document.querySelector('.info').innerText= boxText[e[0]].innerText +' Won'
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='200px';
            gameover.play()
            // Implimenting Cross line
            document.querySelector('.line').style.width='28vw';
            document.querySelector('.line').style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
};

// Game Logic
let boxes=document.getElementsByClassName('box');
Array.from( boxes).forEach(element=>{
    let boxText=element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(isGameover===false){
                document.querySelector('.info').innerText='Turn for '+turn
            }
            
        }
    })
})

// Add onclick to reset button
reset.addEventListener('click',()=>{
    let boxText=document.getElementsByClassName('boxText');
    Array.from(boxText).forEach(element=>{
        element.innerText='';
    })
    turn='X'
    isGameover=false
    document.querySelector('.info').innerText='Turn for '+turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width=0;
    document.querySelector('.line').style.width='0vw';
})