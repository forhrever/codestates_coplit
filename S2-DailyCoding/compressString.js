// 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

// 주의 사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 3개 이상 연속되는 문자만 압축합니다.

function compressString(str) {
    // TODO: 여기에 코드를 작성합니다.
  
    let result = '';
    let before = str[0];
    let count = 1;
    str = str + ' ';
  
    for(let i = 1; i < str.length; i++){ // 왜 0이아닌 1로 설정해야하는가
      if(before === str[i]) {
        count++;
      } else {
        if(count >= 3) {
          result = result + `${count}${before}`;
        } else {
          result = result + before.repeat(count); // .repeat는 무엇인가
        }
        before = str[i];
        count = 1;
      }
    }
    return result;
  }