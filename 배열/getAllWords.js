// 문자열을 입력받아 문자열을 구성하는 각 단어를 요소로 갖는 배열을 리턴해야 합니다.

// 반복문(for, while) 사용은 금지됩니다.
// 단어는 공백 한 칸으로 구분합니다.
// 연속된 공백은 없다고 가정합니다.

function getAllWords(str) {
    // TODO: 여기에 코드를 작성합니다.
    if (str === '') {
      return [];
    } 
    return str.split(' ');
  }