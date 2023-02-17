// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

// 주의 사항
// 두 칸을 초과하는 공백은 존재하지 않는다고 가정합니다.

function convertDoubleSpaceToSingle(str) {
    // TODO: 여기에 코드를 작성합니다.
    return str.split('  ').join(' ');
    // split을 이용해 공백을 쪼개주고 join을 이용해 다시 공백 하나만 있는 문자열 출력
  }
  