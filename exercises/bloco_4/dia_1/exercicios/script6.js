let piece = "King";

switch(piece.toLowerCase()) {
  case "king":
    console.log(piece + ": Horizontal, Vertical e Diagonal. 1 casa.");
    break;
  case "queen":
    console.log(piece + ": Horizontal, Vertical e Diagonal. 1+ casas.");
    break;
  case "bishop":
    console.log(piece + ": Diagonal. 1+ casas.");
    break;
  case "horse":
    console.log(piece + ": Em L. 2 casas na Horizontal e 1 casa na Vertical e vice-versa.");
    break;
  case "pawn":
    console.log(piece + ": 1 casa para frente.");
    break;
  case "tower":
    console.log(piece + ": Horizontal e Vertical. 1+ casas.");
    break;
  default:
    console.log("Esta peça não existe no xadrez.")
}