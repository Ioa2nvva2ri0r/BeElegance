/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { clothesDataAPI } from '../../../redux/slices/getDataClothesSlice';
// Check Types
import PropTypes from 'prop-types';
// Components
import Skeleton from '../Skeleton';
import Price from '../Price';
import Show from '../Show';
import IconBasket from '../Icon/IconBasket';
// Styles
import card from './card.module.scss';

const ProductCard = ({ id, name, category, src, price }) => {
  // .env
  const env = process.env;
  // Redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.clothesAPI.loading);
  const localStorage = useSelector(
    (state) => state.clothesStorage.data.filter((obj) => obj.id === id)[0]
  );

  return (
    <article className={card.main}>
      <Show name={name} src={src} className={card} />
      <div className={card.title__box}>
        {loading ? (
          <Skeleton
            option={{
              width: 350,
              height: 76,
            }}
            content={
              <>
                <rect x="153" y="0" rx="5" ry="5" width="43" height="12" />
                <rect x="97" y="16" rx="5" ry="5" width="156" height="20" />
                <rect x="158" y="51" rx="5" ry="5" width="34" height="15" />
              </>
            }
          />
        ) : (
          <>
            <h3 className={card.title}>
              <Link
                to={`${env.REACT_APP__PATH_SEARCH}product${
                  env.REACT_APP__PATH_PRODUCT
                }${encodeURI(id)}`}
                className={card.link}
                onClick={() => dispatch(clothesDataAPI())}
              >
                <span className={card.link__category}>{category}</span>
                <span className={card.link__name}>
                  {name}
                  {localStorage && <IconBasket />}
                </span>
              </Link>
            </h3>
            <Price
              prop={{ current: price.current, discount: price.new }}
              cssModule={card}
            />
          </>
        )}
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  src: PropTypes.object,
  price: PropTypes.object,
};

export default ProductCard;
