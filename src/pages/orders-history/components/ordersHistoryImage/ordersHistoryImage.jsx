/* eslint-disable react/prop-types */
import React from 'react';

const OrdersHistoryImage = ({src}) => {
  return (
    <picture>
          <img
            src={src}
            alt="pizza"
          />
        </picture>
  );
}

export default OrdersHistoryImage;
