// 배열을 입력받아 배열의 첫번째 요소를 리턴해야 합니다.

// 빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.

function getFirstElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if ( arr.length === 0 ) {
      return undefined;
    } else {
      return arr[0];
    }
   }