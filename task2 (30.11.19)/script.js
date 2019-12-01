arr = [12, 11, 3, 4, 5, 15];// до цифры 15
mySort(arr);

function compare(a,b){
    for(let i = 3; i >= 0 ; i--){
        if(a[i] > b[i]){
            return 1;
        }else if(a[i] < b[i]){
            return -1;
        }
    }
    return 0;
}

function toBinary(a){
    a = '000' + a.toString(2);
        
    if(a.length > 4){
        a = a.slice((a.length - 4));
    }
    return a;
}

function mySort (arr){

    arr.sort(function (a,b){
        return compare(toBinary(a), toBinary(b))
    });

    arr.forEach((item) => console.log(item + ' : ' + toBinary(item)));
}