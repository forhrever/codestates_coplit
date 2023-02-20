// 수(num)를 입력받아 num번째까지 총 num + 1개의 피보나치 수열을 리턴해야 합니다.

// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// 반복문(for)문을 사용해야 합니다.
// 피보나치 수열은 0번부터 시작합니다.

function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    
    for ( let i = 0; i <= num; i++) {
  
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
    return result;
  }