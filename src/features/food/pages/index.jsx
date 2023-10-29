import React, { useState } from 'react';
import ListView from '../components/ListView';
import queryString from 'query-string';

FoodFeature.propTypes = {
    
};
function FoodFeature(props) {
    const InnitfoodList=[
        {
            id: 1,
            name: 'burger',
            poto: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            status: 'new'
        },
        {
            id: 2,
            name: 'pizza',
            poto: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600',
            status: 'complete'
        },
        {
            id: 3,
            name: 'sandwich',
            poto: 'https://images.pexels.com/photos/13995291/pexels-photo-13995291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            status: 'new'
        },
    ];

    const [foodList,setfoodList]= useState(InnitfoodList);
    const [filterStatus,setfilterStatus]= useState(()=>{
        const param= queryString.parse(window.location.search)
        return param.status || 'all';
    });

    const handleClick =(item,index)=>{
        const newfoodList = [...foodList];
        console.log(item,index);

        //update object moi
        newfoodList[index]={
            ...newfoodList[index],
            status: newfoodList[index].status === 'new'? 'complete' : 'new'
        }

        setfoodList(newfoodList);
    };
    
    const handleClickAll =()=>{
        setfilterStatus('all');
    };
    const handleClickComplete =()=>{
        setfilterStatus('complete');
    }
    const handleClickNew =()=>{
        setfilterStatus('new');
    }

    const renderFilter = foodList.filter(item => filterStatus ==='all' || filterStatus===item.status )

    return (
        <div>
            <h3> Danh sach</h3>
            <ListView foodList={renderFilter} onListClick={handleClick}/>
            <br />
            <button onClick={handleClickAll}>Show All</button>
            <button onClick={handleClickComplete}>Show Complete</button>
            <button onClick={handleClickNew}>Show New</button>
        </div>
    );
}

export default FoodFeature;