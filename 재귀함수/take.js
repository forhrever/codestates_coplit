// 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.

// 주의 사항
// 함수 take는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).

function take(num, arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(num === 0 || arr.length === 0) {
      return [];
    }
  
    const head = arr[0];
    const tail = arr.slice(1); 
  
    return [head].concat(take(num - 1, tail)); 
  } 
  
  // [head] = 0번째 인덱스 
  // .concat은 배열 합치기 
  
  // 예시 take(2, [1, -2, 1, 3]);
  // [head] = 1 
  // [head].concat 
  // 2 [1, -2] 
  