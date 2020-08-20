export default
 class board {
    constructor() {
      this.cells = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      result=this.cells
        win = true
        i
    
    }
    condition(){
        if(this.cells[i][0]=='x' && this.cells[i][1] == 'x' && this.cells[i][2] == 'x'){
            result ="X Wins";
            win =true;
        }
        if(this.cells[0][i] == 'x' && this.cells[1][i] == 'x' && this.cells[2][i] == 'x'){
            result = "X Wins";
            win = true;
        }
    
    if ((this.cells[0][0] == 'x' && this.cells[1][1] == 'x' && this.cells[2][2] == 'x') || (this.cells[2][0] == 'x' && this.cells[1][1] == 'x' && this.cells[0][2] == 'x')) {
        result = "X Wins";
        win = true;
    }
    for(i = 0; i <3; i++) {
        if ((this.cells[i][0] == 'o' && this.cells[i][1] == 'o' && this.cells[i][2] == 'o' || this.cells[0][i] == 'o' && this.cells[1][i] == 'o' && this.cells[2][i] == 'o')) {
            result = "O Wins";
            win = true;
        }
        if ((this.cells[0][0] == 'o' && this.cells[1][1] == 'o' && this.cells[2][2] == 'o') || (this.cells[2][0] == 'o' && this.cells[1][1] == 'o' && this.cells[0][2] == 'o')) {
            result = "O Wins";
            win = true;
        }
        else {
            if (freeSpots == 0 || !win) {
                result = "Tie";
            }
        }
    }
    return result
    }
}