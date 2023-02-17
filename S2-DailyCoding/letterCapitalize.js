// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

// 주의 사항
// 단어는 공백으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function letterCapitalize(str) {
    // TODO: 여기에 코드를 작성합니다.
    a = str.split(' ');
    let result = a.map(function(el) {
        if (el === '') {
          return '';
        }
        return el[0].toUpperCase() + el.substr(1);
    }).join(' ');
    return result;
  }