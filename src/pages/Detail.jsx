import { useParams } from "react-router-dom";
import { formatter } from "../utils";
import { Breadcrumb } from "../components/Breadcrumb";

export const Detail = () => {
    const { id } = useParams();
    console.log(id)
  return (
    <div className="container">
      <Breadcrumb />
      <div className="detail-container">
        <div className="detail-top">
          <div className="detail-top__img">
            <small className="display-m">Nuevo  |  +100 vendidos</small>
            <img src="https://placehold.co/680x680" alt="" />
          </div>
          <div className="detail-top__content">
            <small className="display-d">Nuevo  |  +100 vendidos</small>
            <h1>Funda Almohada Satin Tipo Seda Set 3 Unidades 50x76cm Color Coral</h1>
            <h2>{formatter.format(1980)}</h2>
            <button type="button" className="btn btn--primary">Comprar</button>
          </div>
        </div>
        <div className="detail-bottom">
            <div className="detail-bottom__description">
              <h3>Descripción</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, commodi alias excepturi est tempora
                laudantium explicabo modi eveniet optio sapiente vitae voluptatum tenetur unde, quia deserunt odit a 
                ratione quam.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
