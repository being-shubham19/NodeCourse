function cutTheSticks(arr) {
    // var cutArr = [];
    // while(arr.length > 0){
    //     cutArr.push(arr.length);
    //     var cutLength = Math.min(...arr);
    //     for (i in arr) {
    //         if (arr[i] == cutLength) {
    //             arr.splice(i,1);
    //         } else {
    //             arr[i] = arr[i] - cutLength;
    //         }
    //     }
    // }
    // console.log(cutArr);


    var cutArr = [];
    var cutLength;
    size = arr.length;
    var num;
    while (size > 0) {
        num = 0;
        cutArr.push(arr.length);
        cutLength = Math.min(...arr);
        for (i in arr) {
            arr[i] = arr[i] - cutLength;
        }
        console.log("ARR ", arr);
        for (j in arr) {
            if (arr[j] != 0) {
                num += 1;
            }
            else {
                arr.splice(j,1);
                for (k in arr) {
                    
                }
            }
        }
        size = num;
        console.log(size);
    }
    console.log(cutArr);
}

var arr = [5,4,4,2,2,8];
cutTheSticks(arr);