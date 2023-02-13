// 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

// 주의 사항
// 함수 flattenArr는 재귀함수의 형태로 작성합니다.
// Array Method flat()과 flatMap() 사용은 금지됩니다.
// 반복문(for, while) 사용이 가능합니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function flattenArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    if(arr.length === 0) {   // 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
      return [];
    }
  
    const head = arr[0];
    const tail = arr.slice(1);
  
    if(Array.isArray(head)) {   // 0번째 인덱스가 숫자가 아니고 배열이라면 ? 
      return flattenArr([...head, ...tail]);  // 전개연산자를 활용하여 head와 tail을 모두 더한 새로운 배열을 만든다. 
    } else {
      return [head].concat(flattenArr(tail));  // .concat으로 배열 합치기 
    }
  }