import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { formatter } from "../utils";
import { Breadcrumb } from "../components/Breadcrumb";

export const Detail = () => {
    const { id } = useParams();
    const [ detailData, setDetailData ] = useState([])
    const [ categories, setCategories ] = useState([])

    const handleDetail = async () =>{
        const request = await fetch(`http://localhost:5000/api/items/${id}`);
        const data = await request.json();
        setDetailData(data.item)
        setCategories(data.item.categories)
    }

    useEffect(()=>{
      handleDetail(id)
    },[id])
  return (
    <div className="container">
      <Breadcrumb categories={categories} />
      {detailData &&
        <div className="detail-container">
          <div className="detail-top">
            <div className="detail-top__img">
              <small className="display-m">{detailData.condition === 'new' ? 'Nuevo' : 'Usado'}  |  +{detailData.sold_quantity} vendidos</small>
              <img src={detailData.picture} alt={detailData.title} />
            </div>
            <div className="detail-top__content">
              <small className="display-d">{detailData.condition === 'new' ? 'Nuevo' : 'Usado'}  |  +{detailData.sold_quantity} vendidos</small>
              <h1>{detailData.title}</h1>
              {detailData.price && <h2>{formatter.format(detailData.price.amount)}</h2>}
              <button type="button" className="btn btn--primary">Comprar</button>
            </div>
          </div>
          <div className="detail-bottom">
              <div className="detail-bottom__description">
                <h3>Descripción</h3>
                <p>{detailData.description}</p>
              </div>
          </div>
        </div>
      }
    </div>
  )
}
