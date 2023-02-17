// 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

// 주의 사항
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
// 대소문자는 구별하지 않습니다.

function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = {};
    str = str.toLowerCase();
    
    if(str.length === 0) {
      return true;
    }
  
    for(let i = 0; i < str.length; i++) {
      if(result[str[i]]) {
        return false;
      }
      result[str[i]] = true; // ? 왜 들어가는 것인가
    }
    return true;
  }