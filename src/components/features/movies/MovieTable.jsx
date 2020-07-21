import React, {Component} from 'react';
import {Like} from '../../';

class MovieTable extends Component {

    raisedSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path) sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else{
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }

    render() {
        const {movies, onDeleteMovie, onLikeOrUnlike} = this.props;

        return(
            <table className="table">
                <thead>
                    <tr>
                    <th onClick={ () => this.raisedSort('title')} scope="col">Title</th>
                    <th onClick={ () => this.raisedSort('genre.name')} scope="col">Genre</th>
                    <th onClick={ () => this.raisedSort('numberInStock')} scope="col">Stock</th>
                    <th onClick={ () => this.raisedSort('dayliRentalRate')} scope="col">Rates</th>
                    <th scope="col">favorite</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
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