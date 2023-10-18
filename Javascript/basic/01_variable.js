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

// 4. 변수의 데이타 타입 - 자료형

// 문자형 String

{
    const name1 = 'Alice'
    const name2 = 'Alice'

    console.log(name1,name2)
    const firstName = 'jonh'
    const lastName ='snow'
    const fullName = firstName + ' ' + lastName
    console.log(fullName)
    console.log('$')
}

// 숫자형 number
{
    const num = 10
    const PI = 3.14

    
    console.log('값은 ${num}이고, 타입은 ${typeof num}입니다.}')

    console.log(a)
}

// 불(불린,불린언) Boolean 

// null - 존재하기 않는 값
// underfined - 값이 할당되지 않음