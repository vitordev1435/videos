import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''}
    

    onChangeValue = (e) => {
        this.setState({term: e.target.value });
        
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
        
    }
    
    render(){

        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div>
                        <label>Video Search</label>
                        <input type="text" className="field" value={this.state.term}  onChange={this.onChangeValue}/>
                    </div>
                </form>
            </div>
        )
    }

}


export default SearchBar;
