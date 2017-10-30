var a;

var Foo = function( a ) {
  this.a = a;
  this.bar() {   
    return a;  //7 
  }
  this.baz = function() {   
    return a; //7 
  };
};
 
Foo.prototype = { // this do not have access to the other function
  biz: function() {    
    return this.a; 
  }
};
 
var f = new Foo( 7 );
f.bar(); // 7  - error
f.baz(); // 7
f.biz(); // undefined  - error

Change the code above (lines 1-16) so that f.bar() and f.biz() both return 7 instead of an error

//Given 
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

//Result
[
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
]; 

http://i.imgur.com/UIeB3n4.png 

var result = endorsements.map(function(skill) {
     // skill = { skill: 'css', user: 'Bill' }
     
    if(skill.skill) {
       if (skill.user.isArray([])) {
        var count += 1; 
        result.push(skill.user)
        return result;
       } 
    } 

    return skill;
});

var results = [
    { skill: 'css', user: ['Bill, 'Sue'], count: 2},
     { skill: 'javascript', user: ['Chad', 'Bill'], count: 2 },

]


