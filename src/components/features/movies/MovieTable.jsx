import React, {Component} from 'react';
import {Like, Table} from '../../';
import { Link } from 'react-router-dom';

class MovieTable extends Component {

    deleteButton =  movie => (<button
            onClick={ () => this.props.onDeleteMovie(movie)}
            className="btn btn-danger m-2">
            delete</button>)

    columns = [
    {path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        { key: 'like', label: 'like', content:  movie => <Like movie={movie} onLikeOrUnlike={this.props.onLikeOrUnlike} />},
        { key: 'delete', label: 'action', content: this.deleteButton}
    ];

    render() {
        const {movies, sortColumn, onSort} = this.props;

        return(
            <Table
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort}
                data={movies}
            />
        )
    }
}

export default MovieTable;