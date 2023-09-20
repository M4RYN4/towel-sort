
// You should implement your task here.
//from [[1, 2],[3, 4],] -> [ 1, 2, 4, 3 ]

module.exports = function towelSort (matrix) {
    let arr = [];
    if(Array.isArray(matrix)){//1. check if array is not undefined
        for(let i = 0; i < matrix.length; i++){
            if(i === 0 || i % 2 === 0){//if idx = 0 || even ->
                arr.push(...matrix[i]);
            }else{
                arr.push(...matrix[i].sort((a, b) => b - a));//odd -> reverse order
            }
        }
    }

    return arr;
}
