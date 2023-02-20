// 배열과 인덱스를 입력받아 주어진 인덱스 이후의 요소들을 갖는 새로운 배열을 리턴해야 합니다.

// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 배열의 길이 이상의 인덱스를 입력받은 경우, 빈 배열을 리턴해야 합니다.

function getElementsAfter(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.slice(n + 1);
  }

  // 입출력 예시
  // let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
  // console.log(output); // --> ['d', 'e']