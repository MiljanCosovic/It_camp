function largestPairSum (numbers) {
    var niz=[]
    numbers.sort(function(a, b){return b - a});
    niz.push(numbers[0],numbers[1])
    console.log(niz[0]+niz[1])
  }
  largestPairSum([10,14,2,23,19])
  largestPairSum([-100,-29,-24,-19,19])
  largestPairSum([1,2,3,4,6,-1,2])
  largestPairSum([-10, -8, -16, -18, -19])
