import React, { Component, Fragment } from 'react';
import {getMovies, deleteMovie, toogleLikeMovie} from '../../../services/fakeMovieService';
import {Like, Pagination} from '../../';
import {paginate} from '../../../utils/paginate';

export default class Movie extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    }
    render() {
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies} = this.state;
        if(count === 0) return <p className="m-4">No movie in Databse</p>;

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
        <Fragment>
            <p className="m-4">There is {count} movie(s) in database</p>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rates</th>
                    <th scope="col">favorite</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.displayMovieList(movies)}
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
            />
        </Fragment>
        )
    }

    toogleLike = (movie) => {
        toogleLikeMovie(movie._id);
        this.setState({movies: getMovies()});
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handleDeleteMovie = (movie) => {
        deleteMovie(movie._id);
        this.setState({movies: getMovies()});
    }

    displayMovieList = (movies) => {
        const reslut = movies.map( movie => {
            return (<tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <Like
                            movie={movie}
                            onLikeOrUnlike={this.toogleLike}
                        />
                    </td>
                    <td>
                        <button
                            onClick={ () => this.handleDeleteMovie(movie)}
                            className="btn btn-danger m-2">
                                delete
                        </button>
                    </td>
                </tr>)
        });

        return reslut;
    }
}
