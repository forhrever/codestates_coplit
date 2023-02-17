// 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

function computeWhenDouble(interestRate) {
    // TODO: 여기에 코드를 작성합니다.
  
  let money = 1;
  let year;
  
   for(year = 0; money < 2; year++) {
      money = money * (1 + interestRate/100);
  }
  return year;
  }