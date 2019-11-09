/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
//describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

 //it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
 // });

 // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
  //  var even = function(num){
   //   return num/2 === 0;
   // }
  //  return even(10) === true;
 // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
 // it('Throws an error when expected behavior does not match actual behavior', function() {
  //  var even = function(num){
  //    return num/2 === 0;
 //  }

  //  if(even(10) !== true) {
  //   throw new Error('10 should be even!');
  //  }
// });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it(FILL_ME_IN, function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it(FILL_ME_IN, function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  //var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
    var expect = chai.expect;
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6512345678901234567')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6512345678901234')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function(){
    expect(detectNetwork('6441234567890123')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function(){
    expect(detectNetwork('6441234567890123456')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function(){
    expect(detectNetwork('6451234567890123')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function(){
    expect(detectNetwork('6451234567890123456')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function(){
    expect(detectNetwork('6461234567890123')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function(){
    expect(detectNetwork('6461234567890123456')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function(){
    expect(detectNetwork('6471234567890123')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function(){
    expect(detectNetwork('6471234567890123456')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function(){
    expect(detectNetwork('6481234567890123')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function(){
    expect(detectNetwork('6481234567890123456')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function(){
    expect(detectNetwork('6491234567890123')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function(){
    expect(detectNetwork('6491234567890123456')).to.equal('Discover');
  });
});
   //for (var prefix3 = 644; prefix3 <= 649; prefix3++) {
   // (function(prefix3) {
   // it('has a prefix of ' + prefix3 + ' and a length of 16', function() {
    //  expect(detectNetwork(prefix3.toString() + '1234567890123')).to.equal('Discover');
   // });
   // it('has a prefix of ' + prefix3 + ' and a length of 19', function() {
   //   expect(detectNetwork(prefix3.toString() + '1234567890123456')).to.equal('Discover');
   // });
 // }) 
 // }
//});
//var expect = chai.expect;
describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501812345678')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018123456789')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50183456789012')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501834567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function(){
    expect(detectNetwork('5018234567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function(){
    expect(detectNetwork('50182345678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function(){
    expect(detectNetwork('501823456789012345')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function(){
    expect(detectNetwork('5018234567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502012345678')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020123456789')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50203456789012')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502034567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function(){
    expect(detectNetwork('5020234567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function(){
    expect(detectNetwork('50202345678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function(){
    expect(detectNetwork('502023456789012345')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function(){
    expect(detectNetwork('5020234567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503812345678')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038123456789')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50383456789012')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503834567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function(){
    expect(detectNetwork('5038234567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function(){
    expect(detectNetwork('50382345678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function(){
    expect(detectNetwork('503823456789012345')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function(){
    expect(detectNetwork('5038234567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630412345678')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304123456789')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63043456789012')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630434567890123')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function(){
    expect(detectNetwork('6304234567890123')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function(){
    expect(detectNetwork('63042345678901234')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function(){
    expect(detectNetwork('630423456789012345')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function(){
    expect(detectNetwork('6304234567890123456')).to.equal('Maestro');
  });
});

// var prefix = ['5018', '5020', '5038', '6304'];
//   for (var i = 0; i < prefix.length; i++) {
//    var testPre = prefix[i];
//     (function(testPre) {
//       it('has a prefix of ' + testPre + ' and a length of 12', function () {
//         expect(detectNetwork(testPre + '12345678')).to.equal('Maestro');
//       });
//       it('has a prefix of ' + testPre + ' and a length of 13', function () {
//         expect(detectNetwork(testPre + '123456789')).to.equal('Maestro');
//       });
//       it('has a prefix of ' + testPre + ' and a length of 14', function () {
//         expect(detectNetwork(testPre + '1234567890')).to.equal('Maestro');
//       });
//       it('has a prefix of ' + testPre + ' and a length of 15', function () {
//         expect(detectNetwork(testPre + '12345678901')).to.equal('Maestro');
//       });
//       it('has a prefix of ' + testPre + ' and a length of 16', function () {
//         expect(detectNetwork(testPre + '123456789012')).to.equal('Maestro');
//       });
//       it('has a prefix of ' + testPre + ' and a length of 17', function () {
//         expect(detectNetwork(testPre + '1234567890123')).to.equal('Maestro');
//       });
//       it('has a prefix of ' + testPre + ' and a length of 18', function () {
//         expect(detectNetwork(testPre + '12345678901234')).to.equal('Maestro');
//       });
//       it('has a prefix of ' + testPre + ' and a length of 19', function () {
//         expect(detectNetwork(testPre + '123456789012345')).to.equal('Maestro');
//       });
//     }) (testPre)
//   }
// });

   var expect = chai.expect;

describe('China UnionPay', function() {
   
  for (var prefix = 622126; prefix <= 622925; prefix++) {
 
    (function(prefix) {
   
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       expect(detectNetwork(prefix.toString() + '1234567891')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
       expect(detectNetwork(prefix.toString() + '12345678912')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
       expect(detectNetwork(prefix.toString() + '123456789123')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
       expect(detectNetwork(prefix.toString() + '1234567891234')).to.equal('China UnionPay');
      });
   
    })(prefix)
  }

  for (var prefix = 624; prefix <= 626; prefix++) {
 
    (function(prefix) {
   
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       expect(detectNetwork(prefix.toString() + '1234567891234')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
       expect(detectNetwork(prefix.toString() + '12345678912345')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
       expect(detectNetwork(prefix.toString() + '123456789123456')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
       expect(detectNetwork(prefix.toString() + '1234567891234567')).to.equal('China UnionPay');
      });
   
    })(prefix)
  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
   
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       expect(detectNetwork(prefix.toString() + '123456789123')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
       expect(detectNetwork(prefix.toString() + '1234567891234')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
       expect(detectNetwork(prefix.toString() + '12345678912345')).to.equal('China UnionPay');
      });
      
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
       expect(detectNetwork(prefix.toString() + '123456789123456')).to.equal('China UnionPay');
      });
    })(prefix)
  }
});

describe('Switch', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903123456789012')).to.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 18', function() {
    expect(detectNetwork('490312345678901234')).to.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 19', function() {
    expect(detectNetwork('4903345678901234567')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905123456789012')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 18', function() {
    expect(detectNetwork('490512345678901234')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 19', function() {
    expect(detectNetwork('4905345678901234567')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911123456789012')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 18', function() {
    expect(detectNetwork('491112345678901234')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911345678901234567')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936123456789012')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 18', function() {
    expect(detectNetwork('493612345678901234')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 19', function() {
    expect(detectNetwork('4936345678901234567')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641823456789012')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182345678901234')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641825678901234567')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331103456789012')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 18', function() {
    expect(detectNetwork('633110345678901234')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331105678901234567')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333123456789012')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 18', function() {
    expect(detectNetwork('633312345678901234')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 19', function() {
    expect(detectNetwork('6333345678901234567')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759123456789012')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function() {
    expect(detectNetwork('675912345678901234')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 19', function() {
    expect(detectNetwork('6759345678901234567')).to.equal('Switch');
  });
});

