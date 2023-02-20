// 배열을 입력받아 배열의 첫번째 요소를 제외한 배열을 리턴해야 합니다.

// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function getAllElementsButFirst(arr) {
    // TODO: 여기에 코드를 작성합니다.
    arr.shift();
    return arr;
  }