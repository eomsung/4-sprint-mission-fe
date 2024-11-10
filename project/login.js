


// 비밀번호 암호화 해제/설정 버튼
let icons = document.querySelectorAll('.icon_eyes');
icons.forEach(icon => {
    icon.addEventListener('click',function () { 
        const input = icon.previousElementSibling;
        let type = input.getAttribute('type');
        if(type === 'password'){
            type ='text';
            icon.setAttribute('src','img/btn_visibility_on.png')
        }
        else{
            type='password';
            icon.setAttribute('src','img/btn_visibility_off.png')
        }
        input.setAttribute('type',type);
    })
});


// 버튼 색깔 활성화
let button = document.querySelector('#section1_button');
let inputbox = document.querySelectorAll('#section1 input');


function checkinput(){
    let check =true;
    inputbox.forEach(input => {
        if(input.value === ''){
            check=false
        }
    });
    if(check === true){
        button.style.backgroundColor ='#3692FF';
    }
    else{
        button.style.backgroundColor ='#9CA3AF';
    }
}

inputbox.forEach(input=>{
    input.addEventListener('input',checkinput);
});
//
let email_check =/^[a-zA-Z0-9]+@[a-zA-Z]+\.+[a-zA-Z]/;
let pw_check=/^.{8,}/;
//로그인 버튼 checkout 됬을때
inputbox.forEach(input=>{
    input.addEventListener('focus',()=>{
        input.style.border =  '0.125rem solid #3692FF';
    });
    input.addEventListener('blur',function(){
        console.log(input.id);
        if(input.id === "section1_emailbox"){// 이메일인지 비밀번호인지 확인 -> 이메일이면
            if(input.value===''){ // 아무것도 입력 안하면
                if(!input.nextElementSibling){
                    input.style.border =  '0.125rem solid red';
                    let alret_msg = document.createElement('div');
                    alret_msg.textContent = '이메일을 입력해주세요.';
                    alret_msg.className = 'alert';
                    input.parentElement.append(alret_msg);
                }
                else{
                    input.style.border =  '0.125rem solid red';
                    input.nextElementSibling.textContent='이메일을 입력해주세요.';
                }
            }
            else if(!email_check.test(input.value)){
                if(!input.nextElementSibling) {
                    input.style.border =  '0.125rem solid red';
                    let alret_msg = document.createElement('div');
                    alret_msg.textContent = '잘못된 이메일 형식입니다.';
                    alret_msg.className = 'alert';
                    input.parentElement.append(alret_msg);
                }
                else{
                    input.style.border =  '0.125rem solid red';
                    input.nextElementSibling.textContent='잘못된 이메일 형식입니다.';
                }
            }
            else if(email_check.test(input.value)){
                if(input.nextElementSibling) {
                    input.nextElementSibling.remove();
                    input.style.border =  'none';
                }
            }
        }
        
        else if(input.id === "section1_pwbox"){// 이메일인지 비밀번호인지 확인 -> 비밀번호면
            if(input.value===''){ // 아무것도 입력 안하면
                console.log(input.nextElementSibling);
                if(!input.nextElementSibling){
                    input.style.border =  '0.125rem solid red';
                    let alret_msg = document.createElement('div');
                    alret_msg.textContent = '비밀번호를 입력해주세요.';
                    alret_msg.className = 'alert';
                    input.parentElement.append(alret_msg);
                }
                else{
                    input.style.border =  '0.125rem solid red';
                    input.nextElementSibling.textContent='비밀번호를 입력해주세요.';
                }
            }
            else if(!pw_check.test(input.value)){
                // if(!input.nextElementSibling) {
                    input.style.border =  '0.125rem solid red';
                    let alret_msg = document.createElement('div');
                    alret_msg.textContent = '비밀번호를 8자 이상 입력해주세요.';
                    alret_msg.className = 'alert';
                    console.log(input.parentElement.parentElement);
                    input.parentElement.parentElement.append(alret_msg);
                // }
                // else{
                //     input.style.border =  '0.125rem solid red';
                //     input.nextElementSibling.textContent='비밀번호를 8자 이상 입력해주세요.';
                // }
            }
            else if(pw_check.test(input.value)){
                if(input.nextElementSibling) {
                    input.nextElementSibling.remove();
                    input.style.border =  'none';
                }
            }
        }


    })
})
