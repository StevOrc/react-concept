import React, {Component} from 'react';
import {Like, TableHeader} from '../../';

class MovieTable extends Component {

    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        { key: 'like' },
        { key: 'delete' }
    ];
    
    render() {
        const {movies, onDeleteMovie, onLikeOrUnlike, sortColumn, onSort} = this.props;

        return(
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumns={sortColumn}
                    onSort={onSort}
                />
                <tbody>
                    
                    {movies.map( movie =>

                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like
                                movie={movie}
                                onLikeOrUnlike={onLikeOrUnlike}
                            />
                        </td>
                        <td>
                            <button
                                onClick={ () => onDeleteMovie(movie)}
                                className="btn btn-danger m-2">
                                    delete
                            </button>
                        </td>
                    </tr>)}

                </tbody>
            </table>
        )
    }
}

export default MovieTable;