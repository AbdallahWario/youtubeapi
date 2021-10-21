import React, { Component } from 'react'

export class SearchBar extends Component {

state={term:""}

onFormSubmit=(e)=>{
e.preventDefault();

//mounting props from parent component

this.props.onFormSubmit(this.state.term);

};


    render() {
        return (
            <div>
                <form  className='ui input' onSubmit={this.onFormSubmit} >

                    <label> Search </label>
                    <input  type='text'
                     value={this.state.term}
                     onChange={e=>this.setState({term:e.target.value} ) } 
                     
                     />
                   
                </form>
            
            </div>
        )
    }
}

export default SearchBar
