import React from 'react';
import { observer, inject } from 'mobx-react';

function Item({ item, agora }) {
  return (
    <li onDoubleClick={() => agora.changePrice(item.name, 5)}>
      {item.quantity} {item.name} available at ${item.price} per item
      <button
        onClick={() => {
          agora.buyItem(item.name);
        }}
      >
        Buy
      </button>
    </li>
  );
}

export default inject('agora')(observer(Item));
