class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    const isListValid = (list) => {
        const listNumbers = list.filter(item => !isNaN(Number(item)));

        return [...new Set(listNumbers)].length === listNumbers.length;

    }

    const isRowValid = (board) => {
        console.log("hi")

        return board.every((row) => {
            return isListValid(row)
        })
    }

    const transposeBoard = (board) => {
        return board.reduce((agg, curRow) => {
            curRow.forEach((val, index) => {
                agg[index].push(val);
            })

            return agg
        }, Array.from({ length: 9 }, () => []))
    }


    const isColumnValid = (board) => {
        const transposedBoard = transposeBoard(board); // do wykminienia zamiana wierszy z kolumnami


        return transposedBoard.every((list) => {
            return isListValid(list)
        })
    }

    const isSquareValid = (board) => {
        
        const squares = board.reduce((agg, curRow, rowIndex) => {
            console.log({agg, curRow, rowIndex})
            curRow.forEach((value, colIndex) => {
                const squareIndex = (Math.floor(rowIndex / 3) * 3) + Math.floor(colIndex / 3);

                console.log({squareIndex})

                
                agg[squareIndex].push(value)
            })

            return agg

        }, Array.from({ length: 9 }, () => []))



        return squares.every((square) => {
            return isListValid(square)
        })
    }

    if (!isRowValid(board)) {
        return false
    }

    if (!isColumnValid(board)) {
        return false
    }

    return isSquareValid(board)
};


    
}
