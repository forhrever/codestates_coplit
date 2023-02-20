// 문자열을 입력받아 문자열을 구성하는 각 문자를 요소로 갖는 배열을 리턴해야 합니다.

// str.split 사용은 금지됩니다.
// 빈 문자열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function getAllLetters(str) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = [];
  for(let n = 0; n < str.length; n++){
    arr.push(str[n]);
  }
  return arr;
}