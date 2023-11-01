/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from  './green-button.module.scss'

const GreenBtn = ({title, styles = false}) => {
    return ( 
        <button className={[style.green__button, style.revers].join(' ')} style={{ flexDirection: styles ? 'row-reverse' : null }}>
            {title}
            <img className={style.img__green__button} src="/icon/line.svg" alt="line-btn" style={{ transform: styles ? 'rotate(180deg)' : null }}/>
        </button>
     );
}
 
export default GreenBtn;