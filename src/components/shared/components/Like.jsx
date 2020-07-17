import React, { Component } from 'react';

class Like extends Component {

    // <Like onLike={this.handleLike} onUnLike={this.handleUnlike} isLiked={this.state.isLiked}/>

    render() { 
        return (
            <React.Fragment>
                <span>
                    {this.renderIsLikeOrUnlike()}
                </span>
            </React.Fragment>
        );
    }

    renderIsLikeOrUnlike = () => {
        const {onLikeOrUnlike, movie} = this.props;
        let likeClassName = 'fa fa-heart';
        if(!movie.isLiked) likeClassName += '-o' 
        return <i onClick={ () => onLikeOrUnlike(movie)} className={likeClassName} style={{cursor: 'pointer'}} aria-hidden="true"></i>
    }
}
 
export default Like;