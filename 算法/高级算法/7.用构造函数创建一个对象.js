//创建一个对象，可获取、更改他的名字
var Person = function(firstAndlast){
    this.name = firstAndlast;

    this.getFirstName = function(){
        return this.name.split(' ')[0];
    }
    this.getLastName = function(){
        return this.name.split(' ')[1];
    }
    this.getFullName = function(){
        return this.name;
    }
    this.setFirstName = function(first){
        var name = this.name;
        var arr = name.split(' ');
        arr[0] = first;
        this.name = arr.join(' ');
    }
    this.setLastName = function(last){
        var name = this.name;
        var arr = name.split(' ');
        arr[1] = last;
        this.name = arr.join(' ');
    }
    this.setFullName = function(fullname){
        this.name = fullname;
    }
}

var bob = new Person('Bob Ross');

/*
测试案例:
    bob.getFirstName() 应该返回 "Bob".
    bob.getLastName() 应该返回 "Ross".
    bob.getFullName() 应该返回 "Bob Ross".
    bob.getFullName() 应该返回 "Haskell Ross" after bob.setFirstName("Haskell").
    bob.getFullName() 应该返回 "Haskell Curry" after bob.setLastName("Curry").
    bob.getFullName() 应该返回 "Haskell Curry" 在 bob.setFullName("Haskell Curry") 之后.
    bob.getFirstName() 应该返回 "Haskell" 在 bob.setFullName("Haskell Curry") 之后.
    bob.getLastName() 应该返回 "Curry" 在 bob.setFullName("Haskell Curry") 之后.

*/
