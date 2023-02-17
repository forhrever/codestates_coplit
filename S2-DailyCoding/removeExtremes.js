// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

// 주의 사항
// 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    // 레퍼런스 코드 보고 이해하기 
  
    let shortestLen = 20;   // 가장 짧은 문자열
    let longestLen = 0;     // 가장 긴 문자열
    let shortestIdx = 0;    // 가장 짧은 문자열 인덱스 저장
    let longestIdx = 0;     // 가장 긴 문자열 인덱스 저장
    for (let i = 0; i < arr.length; i++) {   
      if (arr[i].length >= longestLen) {  // 가장 긴 문자열 찾기
        longestLen = arr[i].length;
        longestIdx = i;
      }
  
      if (arr[i].length <= shortestLen) {  // 가장 짧은 문자열 찾기
        shortestLen = arr[i].length;   
        shortestIdx = i;
      }
    }
  
    let result = [];   // 새로운 배열 추가
    for (let i = 0; i < arr.length; i++) {
      if (i !== shortestIdx && i !== longestIdx) {  // 인덱스값 제외하고 배열에 입력
        result.push(arr[i]);
      }
    }
  
    return result;
  }