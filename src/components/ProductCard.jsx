import { useNavigate } from 'react-router-dom';
import { formatter } from '../utils';
import shippingIcon from '../assets/ic_shipping.png';

export const ProductCard = (props) => {
    const { id, picture, price, free_shipping, title, location} = props

    const navigateTo = useNavigate();
    const handleDetail = (id) => {
        navigateTo(`/items/${id}`);
    }

  return (
    <li className="results-container__item" key={id} onClick={() => handleDetail(id)}>
        <div className="results-container__item__img">
        <img src={picture} alt={title} />
        </div>
        <div className="results-container__item__content">
        <div className="results-container__item__price">
            {formatter.format(price.amount)}
            {free_shipping &&  <img src={shippingIcon} alt="shipping icon" />}
        </div>
        <span className="results-container__item__location">{location}</span>
        <h2 className="results-container__item__title">{title}</h2>
        </div>
    </li>  
  )
}
