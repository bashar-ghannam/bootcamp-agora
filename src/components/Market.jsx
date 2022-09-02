import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import Item from './Item';

function Market({ agora }) {
  const [newItem, setnewItem] = useState('');

  const handleChange = function (e) {
    setnewItem(e.target.value);
  };

  const handleClick = function (e) {
    if (e.key === 'Enter') {
      agora.addItem(newItem);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={handleChange}
        onKeyDown={handleClick}
      />
      <ul>
        All Inventory :
        {agora.items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default inject('agora')(observer(Market));
