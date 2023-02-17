// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

// 주의 사항
// 0은 짝수로 간주합니다.

function insertDash(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
  
    for ( let i = 0; i < str.length; i ++ ) {
      result = result + str[i];
      if ( str[i] % 2 === 1 && str[i + 1] % 2 === 1) {
        result = result + '-';
      }
    }
    return result;
  }