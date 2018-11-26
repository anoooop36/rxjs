import {Observable, from, Observer} from 'rxjs';

let numbers = [1,5,10];
let source = Observable.create(observer => {
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        setTimeout(observer.next(element), index*2000);
    }
    observer.complete();
});

source.subscribe(
    value => console.log(`value: ${value}`),
    e=> console.log(`error: ${e}`),
    () => console.log("complete")
);
