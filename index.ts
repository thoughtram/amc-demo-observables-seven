import {Observable} from 'rxjs';
import {merge} from 'rxjs/operators';

let myObservable = Observable.create(observer => {
  setTimeout(() => observer.next(1), 10);  
  setTimeout(() => observer.next(2), 20);
  setTimeout(() => observer.next(3), 30);
});

let otherObservable = Observable.create(observer => {
  setTimeout(() => observer.next(10), 10);
  setTimeout(() => observer.next(20), 20);
  setTimeout(() => observer.next(30), 30);
});

myObservable
  .pipe(
    merge(otherObservable)
  )
  .subscribe(
    val   => console.log(val),
    error    => console.error(error),
    () => console.log('completed')
  );