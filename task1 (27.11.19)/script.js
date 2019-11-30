function * generateFibo(){
    let next = 1, prev = 0;
    side = yield 0;
    while(1){
        if(side == 'next'){
            let temp = next;
            next = prev + next;
            prev = temp;
            side  = yield prev; 

        } else if(side == 'prev') {
            let temp = prev;
            prev = next - prev;
            next = temp;
            side = yield prev;
        } else {
            side = yield 'Erorr';
        }
    }
}