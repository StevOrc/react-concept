import React, {Component} from 'react';
import {TableHeader, TableBody, Like} from '../../';

class MovieTable extends Component {

    deleteButton =  movie => (<button
            onClick={ () => this.props.onDeleteMovie(movie)}
            className="btn btn-danger m-2">
            delete</button>)

    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        { key: 'like', label: 'like', content:  movie => <Like movie={movie} onLikeOrUnlike={this.props.onLikeOrUnlike} />},
        { key: 'delete', label: 'action', content: this.deleteButton}
    ];

    render() {
        const {movies, sortColumn, onSort} = this.props;

        return(
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <TableBody
                    data={movies}
                    columns={this.columns}
                />
            </table>
        )
    }
}

export default MovieTable;