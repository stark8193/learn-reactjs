import React from 'react';
import classNames from 'classnames';
import './styles.css'
function TodoList({todolist,ItemOnclick}) {
    const handleF=(item,index)=>{
           if(!item) {return};
           ItemOnclick(item,index); 
    }
    return (
       
        <div>
            <ul className='items'>
                {todolist.map((item ,index)=>(
                    <li key={item.id} className={classNames ({
                        complete: item.status ==='complete'
                    })}
                    onClick={()=>handleF(item,index)}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;