// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

// 주의 사항
// Math.sqrt 사용은 금지됩니다.

function computeSquareRoot(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 바빌로니아법으로 제곱근 구하기? 
    // 너무 어려운 문제 
  
    let result = 1;
    
    while(true) {
      if(result ** 2 === num) {
        return result;
      }
      if(result ** 2 > num) {
        result -= 1;
        break;
      }
      result++;
    } 
  
    let root = null;
    while (root !== result) {
      root = result;
      result = (result + num / result) / 2;
    }
    return +result.toFixed(2);
  }