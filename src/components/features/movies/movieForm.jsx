import React, {Component} from 'react';

class MovieForm extends Component{

    handleOnSave = () => {
        const {history} = this.props;
        console.log("aaa", history);
        history.push("/movies");        
    }

    render(){
        const {match} = this.props;
        return (
            <div>
                <div> Movie ID : {match.params.id} </div>
                <button onClick={ () => this.handleOnSave()} className="btn btn-primary">Save</button>
            </div>
        );
    }
}
 
export default MovieForm;