import { FormEvent, useEffect, useState } from 'react';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';

type CaptchaProps = {
    sub
}

export const useCaptcha = () => {
    const [captchaInput, setCaptchaInput] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
        loadCaptchaEnginge(6) //6-character captcha
    },[])

    const validate = () => {
        if(!validateCaptcha(captchaInput)){
            setError("Captcha is incorrect");
            return false;
        }
        setError('');
        return true;
    };

    return {
        captchaInput,
        setCaptchaInput,
        error,
        validate
    }  
}