// 수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.

// 주의 사항
// 함수 drop은 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// num과 arr.length 중 최소값만큼 제거합니다.

function drop(num, arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(num === 0 || arr.length === 0) {  // (0 [1, 2]) => [1, 2]  || (1 []) => []
      return arr; 
    }
  
    const tail = arr.slice(1);
    return drop(num - 1, tail); // ? -1 씩 증가하면서 ? 0번째 인덱스를 제외한 배열 ? 뭐지 이거  
  }
  
  // drop(2, [1, -2, 1, 3]) 
  // 최솟값 -2, 1 (num = 2 , 2개 삭제)
  // 정답은 1, 3 