import AsciiTable from "ascii-table";

export default class TableGenerator {
  constructor(moves, winningRules) {
    this.table = this.generateTable(moves, winningRules);
  }

  generateTable(moves, winningRules) {
    const myTable = new AsciiTable("Winning Table");
    myTable.addRow("PC/User", ...moves);
    // Adding a separator row
    const separatorRow = new Array(moves.length + 1).fill("----");
    winningRules.forEach((row, idx) => {
      myTable.addRowMatrix([separatorRow]);
      myTable.addRow(
        moves[idx],
        ...row.map((val) => {
          if (val === 0) return "Draw";
          if (val === -1) return "Lose";
          if (val === 1) return "Win";
        })
      );
    });
    return myTable;
  }

  printTable() {
    console.log(this.table.toString());
  }
}
