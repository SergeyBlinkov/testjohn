import React from 'react';
import styles from './Date_Mark.module.css';

type TDate = {
    date:string,
    about:string
    pink?:boolean
}
const DateMark = ({date, about,pink}: TDate) => {
    const bg = pink ? {backgroundColor:'#FF7C7C'} : {}
    return (
        <div className={styles.Date_mark}>
            <span className={styles.Date_mark__date} style={bg}>{date}</span>
            <span className={styles.Date_mark__about}>{about}</span>
        </div>
    );
};

export default DateMark;