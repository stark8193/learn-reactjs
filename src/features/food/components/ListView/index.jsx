import React from 'react';
import ListItem from '../ListItem';
import './styles.css';
import classNames from 'classnames';

function ListView({foodList, onListClick}) {
    const handleClick= (item,index)=>{
        if(!item){ return}
        onListClick(item,index);
    }
    return (
        
        <ul className='food-list'>
            {foodList.map((item,index) =>(
                <li key={item.id} className={classNames({
                    'item-list': true,
                    complete: item.status ==='complete'
                })}
                onClick={()=> handleClick(item,index)}
                > <ListItem item={item}/> </li>
            )
            )}
        </ul>
    );
}

export default ListView;