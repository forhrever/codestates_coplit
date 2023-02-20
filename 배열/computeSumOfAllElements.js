// 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.

// 입력받은 배열이 빈 배열인 경우, 0을 리턴해야 합니다.

function computeSumOfAllElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = 0;
    for (let n = 0; n < arr.length; n++) {
      sum = sum + arr[n];
    }
    return sum;
  }