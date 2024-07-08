//sacar a y b de los parametros
//importar esta funcion desde board
//solucionar problema de la variable type

//hacer que cell muestre la x o la o de matrix (para luego mostrar la foto)





//PSEUDO CODIGO
const calculateWinner = (matrix,numOfFixed,numOfNecesary) => {
  console.log('calculate winner');

let playerX='X';
let playerO='O';

let vertical='[a+1][b-0]';
let horizontal='[a+0][b+1]';
let diagonalArrow='[a+1][b+1]';
let diagonalBack='[a+1][b-1]';

//hacer que todo corra una vez para el 'X'y luego para el 'O'
for(let a=0 ;a < matrix.length; a++){
    for(let b=0; b<matrix.length; b++){      
function genericCheck(a,b,matrix,numOfFixed,player,numOfNecesary,type){
      if(matrix `${type}` ===player){numOfFixed++}
      if (numOfFixed===numOfNecesary)return 'the winner is' + player;
      if(matrix[a][b]===null)return 'the game is end';
      else{
        chackVertical(a,b,matrix,numOfFixed,player,numOfNecesary,type)}
    }
}}

genericCheck(a,b,matrix,3,playerX,3,vertical);