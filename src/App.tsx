import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faViber, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDays, faMessage, faMobilePhone, faPhone, faTruck, faMagnifyingGlass, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'

function TopSide() {

  return (
    <>
      <div className="hero">
        <FontAwesomeIcon icon={faTruck} />
        <p>Доставка по г. Минску - бесплатно!
          (ПРИ ЗАКАЗЕ НА СУММУ БОЛЕЕ 50 BYN)<br />
          (ДОСТАВКА КРУПНОГАБАРИТНЫХ И ТЯЖЕЛЫХ ЗАКАЗОВ ОСУЩЕСТВЛЯЕТСЯ ТОЛЬКО ДО ПОДЪЕЗДА) <br />
          Отправка Почтой Наложенным Платежом При Заказе Стоимостью От 25 BYN <br />
          Время Работы: Пн-Пт С 9:00 До 19:00, Сб C 10:00 До 17:00, Вс ВЫХОДНОЙ.</p>
        <FontAwesomeIcon icon={faCalendarDays} />
        <p>Адрес магазина:
          Г. Минск, Ул. Стрелковая, 7<br />
          (Ст. Метро Пролетарская)</p>
        <FontAwesomeIcon icon={faMessage} /><br />
        <div className="numbers">
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:+37517272-90-15">8 (017) 272-90-15</a>
          <br />
          <FontAwesomeIcon icon={faMobilePhone} />
          <a href="tel:+37529603-25-33">8 (029) 603-25-33</a>
          <br />
          <FontAwesomeIcon icon={faTelegram} />
          <a href="tel:+37529609-25-33">8 (029) 609-25-33</a>
          <br />
          <FontAwesomeIcon icon={faViber} />
          <a href="tel:+37529609-25-33">8 (029) 609-25-33</a>
        </div>
      </div>
    </>
  )
}
function SearchBar() {
  const [items, updateItems] = useState(0);
  const [cost, updateCost] = useState("0.00");
  return (
    <>
      <div className="search">
        <a target="_self" href="self"><img src="https://www.roy.by/images/vt_logo_style1.png" alt="Roy.by logo" /></a>
        <input id="bar" type="text" placeholder='Введите текст для поиска по каталогу товаров' />
        <button id="search-button" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <div className="bin">
          <button type="button" onClick={() => window.open("roy.by/cart")} data-tooltip-id='bin' data-tooltip-content={"У Вас " + items + " товаров в корзине"}><FontAwesomeIcon icon={faShoppingBasket} /></button>
          <Tooltip id='bin' />
          <p>Корзина</p>
          <p>{items}Шт. -- {cost} Руб</p>
        </div>
      </div >
    </>
  )
}
function Hero() {
  return (
    <>
      <div className='main'>
        <TopSide />
        <SearchBar />
      </div>
    </>);

}

export default Hero
