// 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

// 주의 사항
// 함수 unpackGiftbox는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용이 가능합니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴해야 합니다.

function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    if(giftBox.length === 0 || wish === '') {
      return false;
    }
  
    for(let i = 0; i < giftBox.length; i++){
      if(giftBox[i] === wish) {    // wish와 겹치는게 있을경우 
        return true;  
      } else if(Array.isArray(giftBox[i])){        // giftBox[i]가 배열인지 확인 ? 배열안에 배열 확인 
        let result = unpackGiftbox(giftBox[i], wish);  // 재귀함수 
        if (result) {
          return true;
        }
      }
    }
    return false;
  }