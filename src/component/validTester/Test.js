
// 핸드폰번호 유효성 검사
export function checkPhonenumber(str) {
    // '-' 입력 시
    var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
    // 숫자만 입력시
    var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
    // 형식에 맞는 경우 true 리턴
    return regExp.test(str)
}

//비밀번호 유효성 검사
export function  checkPassword(str) {
    if(str.length < 4){
        return false;
    } else if(str.search(/\s/) != -1) {
        return false;
    }else{
        return true;
    }

    // //  8 ~ 10자 영문, 숫자 조합
    // var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,15}$/
    // // 형식에 맞는 경우 true 리턴
    // return regExp.test(str)
}

export function  checkPasswordSame(str1,str2) {
    if(str1 == null || str1 == ""){
        return false;
    }else if(!checkPassword(str1)){
        return false;
    }
    else if(str1 != str2 || str1.length < str2.length || str1.length > str2.length) {
        return false;
    }else if(str1 == str2){
        return true;
    }else{
        return false;
    }
}

// 이메일 유효성 검사
export function  checkEmail(str) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    // 형식에 맞는 경우 true 리턴
    return regExp.test(str)
}

