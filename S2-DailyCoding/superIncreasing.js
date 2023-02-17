// 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = arr[0];
  
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] <= result) {
        return false;
      }
      else {
        result = result + arr[i]
      }
    }
    return true;
  }