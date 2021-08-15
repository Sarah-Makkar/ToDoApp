/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class list extends Component {
    
    render() {
        var storage= JSON.parse(localStorage.getItem('items'));    
        console.log(storage);  
    const {handleDelete, handleComplete} = this.props
    const isStrike = (id) => {
        const filterdItem = storage.filter(item => 
            item.id === id);
        console.log(filterdItem.strike); 
        
        if(filterdItem[0].strike === true) {

            return true;
        } else {
           
            return false
        }
    }
        return (
                storage.map(item => {
                    return (
                    <div>
                        <ul class="collection">
                             <li class="collection-item avatar">
                                 <span className="title" style={{
  textDecoration: isStrike(item.id) ? 'line-through' : 'none'
}} >{item.title}</span>
                                 <p style={{
  textDecoration: isStrike(item.id) ? 'line-through' : 'none'
}}>{item.description}</p>
                                 <div className="secondary-content">
                                     <a href="" style={{marginRight: '25px', color: 'green', display: isStrike(item.id) ? 'none' : ''}} onClick={() => handleComplete(item.id)}><i class="material-icons">done</i></a>
                                     <a href="" style={{color: 'red'}} onClick={() => handleDelete(item.id)} ><i class="material-icons">delete</i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            })
         )}
         
}
