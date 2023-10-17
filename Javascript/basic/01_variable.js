// variable 변수
// var, let, const 

// 변수명 규칙
// -변수는 문자와 숫자, $ 와 _ 만 사용
// -첫글자는 숫자불가
// -예약어는 사용 불가 (var, let, const)

// 변수의 타입
// 원시데이타 : string 문자열, number, boolean 0 과 1 참과 거짓, null , undefined, 
// object : (싱글) 원시데이타를 묶어 놓은 테이타
// function : 일급객체


// var username = 'Alice'
// var userage = 25
// var useremail = 'alice@gmail.com'

// 1.var
// 블럭을 무시한다.
// 읽기, 쓰기 가능.
// 안이나 밖 다 가능

{
    var myname = 'tom'
    myname = 'jane'
    console.log(myname)
}
console.log(myname)

// 2.let
// 읽기, 쓰기 가능

{
    let title = 'html'
    console.log(title)

    title='css'
    console.log(title)
}

// console.log(title)

// 3.const
// 상수 읽기만 가능, 변하지 않는다

{
    const subject = 'html'
    // subject = 'css'
    console.log(subject)
}
