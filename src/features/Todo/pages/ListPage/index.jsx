import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import { useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import TodoForm from '../../components/TodoForm';

function ListPage(props) {
    const todolist=[
        {
            id:1,
            name: 'luan',
            status: 'new'
        },
        {
            id:2,
            name: 'ngoc',
            status: 'complete'
        }
    ]

    const history= useHistory();
    const match= useRouteMatch();

    const [itemlist,setitemlist]= useState(todolist)
    const [filter,setfilter]=useState(()=>{
        const params= queryString.parse(window.location.search)
        return params.status || 'all';
    })

    const handle = (item,index)=>{
        const NewList=[...itemlist];
        NewList[index]={
            ...itemlist[index],
            status: NewList[index].status === 'new'? 'complete': 'new'
        }
        setitemlist(NewList)
    }

    useEffect(()=>{
        const params= queryString.parse(window.location.search)
        setfilter(params.status || 'all')
    },[window.location.search])

    const allHandle =()=>{
        // setfilter('all')
        const  queryParams ={ status: 'all'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const completeHandle=()=>{
        // setfilter('complete')
        const  queryParams ={ status: 'complete'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const newHandle=()=>{
        // setfilter('new')
        const  queryParams ={ status: 'new'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const filterData = useMemo(()=>{
       return  itemlist.filter(item=> filter ==='all' || filter===item.status);
    },[itemlist,filter]) 

    const handleTodoFormSubmit = (values)=>{

    }

    return (
        <div>
            <h3> Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>

           <h3>Danh sach</h3> 
           <TodoList todolist={filterData} ItemOnclick={handle}/>
           <br />
           <button onClick={allHandle}>ALL</button>
           <button onClick={completeHandle}>COMPLETE</button>
           <button onClick={newHandle}>NEW</button>
        </div>
    );
}

export default ListPage;