// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 
// (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.

// 주의 사항
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
// 숫자(digit)는 연속해서 등장하지 않습니다.

function numberSearch(str) {
    // TODO: 여기에 코드를 작성합니다.
    if(str.length === 0){
      return 0;
    }
  
    const digits = '0123456789';
    let sum = 0;
    let pureStr = '';
    for (let i = 0; i < str.length; i += 1) {
      if (digits.includes(str[i])) { // ? 이게 뭘까 .. 
        // 숫자인 경우
        sum = sum + Number(str[i]);
      } else if (str[i] !== ' ') {
        // 숫자도 공백도 아닌 경우
        pureStr = pureStr + str[i];
      }
    }
  
    // 결과를 반올림 한다.
    return Math.round(sum / pureStr.length);
  }