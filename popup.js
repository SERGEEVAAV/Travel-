"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        // let formData = new FormData(form);
        if (error === 0) {            
           
        } 
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }

            }else {
                if(input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
    }



    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //Функция теста email

    function emailTest(input) {
        return !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.value);
    }

    document.getElementById('form').addEventListener('submit', function(e) {
        // что бы не отправилась форма. 
        e.preventDefault(); 

        alert(`Данные пользователя: (${document.getElementById('email').innerHTML = document.getElementById('email').value},  ${document.getElementById('password').innerHTML = document.getElementById('password').value})`);
        
        document.getElementById('form').reset();
    })

    const popup2 = document.querySelector('.open_popup');
    const btn_facebook = document.querySelector('.btn');
    const btn_google = document.querySelector('.btn_google');
    const line = document.querySelector('.line');
    const text_1 = document.querySelector('.text_1');
    const text_2 = document.querySelector('.text_2');
    const popup__title =  document.querySelector('.popup__title');
    const btn_submit = document.querySelector('.btn_submit');

    popup2.addEventListener('click', (e) => {

        e.preventDefault(); 
        btn_facebook.style.display = 'none';
        btn_google.style.display = 'none';
        line.style.display = 'none';
        text_1.style.display = 'none';
        if (text_2.innerHTML = 'Already have an account? Log in') {
            text_2.innerHTML == 'Don’t have an account? Register';
        }
        
        if(popup__title.innerHTML = 'Create account') {
            popup__title.innerHTML == 'Log in to your account';
        }

        if (btn_submit.innerHTML = 'Sign Up') {
            btn_submit.innerHTML == 'Sign In';
        }
    })

    
});
