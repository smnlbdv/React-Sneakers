import style from  './green-button.module.scss'

const GreenBtn = () => {
    return ( 
        <button className={style.green__button}>
            Оформить заказ
            <img className={style.img__green__button} src="/icon/line.svg" alt="line-btn" />
        </button>
     );
}
 
export default GreenBtn;