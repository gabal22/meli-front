import shippingIcon from '../assets/ic_shipping.png';
import { Breadcrumb } from '../components/Breadcrumb';
import { formatter } from '../utils';

export const Results = () => {
  return (
    <div className="container">
      <Breadcrumb />
      <ol className="results-container">
        <li className="results-container__item">
          <div className="results-container__item__img">
            <img src="https://placehold.co/160x160" alt="" />
          </div>
          <div className="results-container__item__content">
            <div className="results-container__item__price">
              {formatter.format(1980)}
              <img src={shippingIcon} alt="" />
            </div>
            <span className="results-container__item__location">mendoza</span>
            <h2 className="results-container__item__title">Apple touch 5g 16bg color negro nuevo</h2>
          </div>
        </li>  
        <li className="results-container__item">
          <div className="results-container__item__img">
            <img src="https://placehold.co/160x160" alt="" />
          </div>
          <div className="results-container__item__content">
            <div className="results-container__item__price">
              {formatter.format(1980)}
              <img src={shippingIcon} alt="" />
            </div>
            <span className="results-container__item__location">mendoza</span>
            <div className="results-container__item__title">Apple touch 5g 16bg color negro nuevo</div>
          </div>
        </li>  
      </ol>
    </div>
  )
}
