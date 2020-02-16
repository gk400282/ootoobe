import React from "react";

class SearchBar extends React.Component {
    state = {
        term: ""
    };
    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSearchSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={event => this.onFormSubmit(event)}>
                    <div className="ui input action">
                        <input 
                        type="text" 
                        placeholder="Search videos..."
                        value={this.state.term} 
                        onChange={e => this.setState({term: e.target.value})}
                        />
                        <button className="ui inverted red button">Search</button>
                    </div>
                </form>
            </div>
            );
    }
}

export default SearchBar;