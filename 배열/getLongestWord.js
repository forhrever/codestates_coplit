// 문자열을 입력받아 문자열에서 가장 긴 단어를 리턴해야 합니다.

// 단어는 공백 한 칸으로 구분합니다.
// 가장 긴 단어가 2개 이상이면 첫번째로 등장하는 단어를 리턴해야 합니다.

function getLongestWord(str) {
    // TODO: 여기에 코드를 작성합니다.
    let word = str.split(' ');
    let result = word[0];
  
    for (let i = 0; i < word.length; i++) {
      if (word[i].length > result.length) {
        result = word[i];
      }
    }
    return result;
    }