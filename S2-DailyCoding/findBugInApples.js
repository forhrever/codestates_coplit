// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.

// 주의 사항
// arr, arr[i]의 길이는 다양하게 주어집니다.
// 항상 한 개의 문자열 'B'가 존재합니다.

function findBugInApples(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
  
    for (let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] === 'B') {
          result = [i,j]
        }
      }
    }
    return result;
  }