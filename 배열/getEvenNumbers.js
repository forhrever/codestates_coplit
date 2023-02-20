// 수를 요소로 갖는 배열을 입력받아 짝수만을 요소로 갖는 배열을 리턴해야 합니다.

// 짝수가 없는 경우, 빈 배열을 리턴해야 합니다.

function getEvenNumbers(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if ( arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  