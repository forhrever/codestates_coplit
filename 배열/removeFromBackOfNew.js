// 배열을 입력받아 배열의 마지막 요소가 제외된 새로운 배열을 리턴해야 합니다.

function removeFromBackOfNew(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    result = arr.slice(0, arr.length -1);
    return result;
  }