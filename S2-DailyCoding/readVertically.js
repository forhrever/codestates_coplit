// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

// 주의 사항
// 각 문자열의 길이는 다양합니다.
// 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.

function readVertically(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
   const max = Math.max(...arr.map(el => el.length));
  
   for(let i = 0; i < max; i++){
     for(let j = 0; j < arr.length; j++){
       if(arr[j][i] === undefined) continue; 
       else result += arr[j][i];
     }
   }
  
   return result; 
  }