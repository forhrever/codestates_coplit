// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

// 주의 사항
// 반복문(while)문을 사용해야 합니다.
// 2의 0승은 1입니다.
// Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.

function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    if(num === 1) {
      return true;
    } else if(num % 2 === 1) {
       return false;
    }
  
    let powerNum = 2;
  
    while(powerNum < num){
      powerNum *= 2;
    }
  
    return powerNum === num;
  
  }