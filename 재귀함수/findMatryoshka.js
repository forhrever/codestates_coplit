// 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.

// 주의 사항
// 함수 findMatryoshka는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 객체는 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 객체를 입력받은 경우, false를 리턴해야 합니다.

function findMatryoshka(matryoshka, size) {
    // TODO: 여기에 코드를 작성합니다.
    if(matryoshka.size === size) {
      return true;
    } else if(matryoshka.matryoshka && matryoshka.size > size){ // matryoshka속 matryoshka, matryoshka.size가 입력받은 size보다 크면
      return findMatryoshka(matryoshka.matryoshka, size)        // 재귀함수 findMatryoshka
    }
    return false; 
  }
  