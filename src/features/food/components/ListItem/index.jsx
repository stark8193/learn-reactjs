import React from 'react';
import './styles.css'


function ListItem({item}) {
    return (
       <div className="item">
        <div className="item__poto">
            <img src={item.poto} alt="" />
        </div>
        <p className="item__name">{item.name}</p>
       </div>
    );
}

export default ListItem;