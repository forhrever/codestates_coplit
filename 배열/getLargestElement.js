// 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.

function getLargestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = 0;
    for ( let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i+1]) {
        result = arr[i+1];
      }
    }
    return result;
  }