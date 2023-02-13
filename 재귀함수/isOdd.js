// 문제 : 수를 입력받아 홀수인지 여부를 리턴해야 합니다.

// 주의 사항
// 함수 isOdd는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 짝수로 간주합니다.

function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    if(num === 0) {        // 짝수일때 false 리턴
      return false;
    } else if(num === 1){  // 홀수일때 true 리턴
      return true;
    } else if(num < 0) {   // 음수라면 ? 정수로 바꿔준다.
      num = num * -1;
    }
    return  isOdd(num - 2);
  }