// 배열을 입력받아 모든 요소의 합을 리턴해야 합니다.

// 주의 사항
// 함수 arrSum은 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 입력으로 들어오는 arr의 모든 요소는 정수 값을 갖는다고 가정합니다.
// 빈 배열의 합은 0 입니다.

function arrSum(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr.length === 0) {          // 빈 배열을 입력 받았을 경우 0을 리턴
      return 0;                   
    } 
  
    const head = arr[0];            // arr 0번째 인덱스를 변수 head에 할당
    const tail = arr.slice(1);      // arr 0번째 인덱스를 제외한 나머지 부분을 tail에 할당 
  
    return head + arrSum(tail);     // basic case 
  }
  
  // arrSum([-1, -2, 1, 3])
  // head = -1
  // tail = -2, 1, 3
  // arrSum(tail) => -2 + 1 + 3 = 2 
  // head + arrSum(tail) => -1 + 2 = 1 
  // 정답 1  