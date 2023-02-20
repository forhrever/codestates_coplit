// 배열과 요소를 입력받아 맨앞에 새로운 요소가 추가된 새로운 배열을 리턴해야 합니다.

function addToFrontOfNew(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    let result = arr.slice();
    result.unshift(el);
    return result;
  }