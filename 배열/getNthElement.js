// 배열과 수를 입력받아 수가 인덱스로 가리키는 배열의 요소를 리턴해야 합니다.

// 빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.
// 배열의 길이를 벗어나는 수를 입력받은 경우, 'out of index range'를 리턴해야 합니다.

function getNthElement(arr, index) {
    // TODO: 여기에 코드를 작성합니다.
     if ( arr.length === 0 ) {
      return undefined;
    } else if (arr.length -1 < index){
      return 'out of index range';
    } else {
      return arr[index];
    }
  }