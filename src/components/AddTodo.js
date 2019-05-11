import React, { Component } from 'react'

export class AddTodo extends Component {
  render() {
    return (
     <form style={{display:'flex',padding:'5px'}}>
         <input 
         type="text" 
         ame="title" 
         style={{flex:'10'}}
         placeholder="Add Todo ..." 

         />
         <input 
         type="submit" 
         value="submit"
         className="btn"
         style={{flex: '1'}} />
     </form>
    )
  }
}

export default AddTodo
