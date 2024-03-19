import React, {ChangeEvent, useEffect, useRef} from 'react';
import styles from './CustomInput.module.css';



interface TCustomInput extends Partial<Pick<HTMLInputElement,"name" | "onchange" | "value"  | "required" | "type">> {
    label:string,
    sx?:"250px" | "300px" | "350px" | "100%",
    onChange?:(e:ChangeEvent<HTMLInputElement>) => void
    // onChange: (e:ChangeEvent<HTMLInputElement>) => void,
}

const CustomInput = ({label,sx,onChange,...props}:TCustomInput) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const animRef = useRef<HTMLSpanElement | null>(null);
    const animRefDiv = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if(!inputRef.current || !animRef.current || !animRefDiv.current) {
            return
        }
        const inputLength = inputRef.current.value.length
        const anim_span_style = animRef.current.style
        const anim_div_style = animRefDiv.current.style
        const condition = anim_span_style.top === "-9px"

        if(inputLength > 0) {
            anim_span_style.top = "-9px"
            anim_span_style.left = "20px"
            anim_div_style.width = "100%"
            anim_div_style.height = "120px"
            anim_div_style.left = "0"
            anim_div_style.top = "-60px"
            anim_div_style.rotate = "0deg"
            anim_div_style.animation = 'none'
        }
        else if(condition && inputLength === 0){
            anim_span_style.top = ""
            anim_span_style.left = ""
            anim_div_style.width = ""
            anim_div_style.height = ""
            anim_div_style.left = ""
            anim_div_style.top = ""
            anim_div_style.rotate = ""
            anim_div_style.animation = ""

        }

    },[inputRef.current?.value.length])



    return (
        <div className={styles.CustomInput} style={{width:sx}}>
            <span className={styles.CustomInput__label} ref={animRef}>{label}</span>
            <input className={styles.CustomInput__input} onChange={onChange} {...props} ref={inputRef} />
            <div className={styles.CustomInput_wrapper}>
            <div className={styles.CustomInput_animation} ref={animRefDiv}></div>
            </div>
        </div>
    );
};

export default CustomInput;