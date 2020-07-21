import React, { Component } from 'react';
import {getMovies, deleteMovie, toogleLikeMovie, getNumberOfLike} from '../../../services/fakeMovieService';
import {getGenres} from '../../../services/fakeGenreService';
import {Like, Pagination, ListGroup} from '../../';
import {paginate} from '../../../utils/paginate';
import _ from 'lodash';

export default class Movie extends Component {
    state = { 
        movies: [],
        pageSize: 4,
        currentPage: 1,
        numberOfLike: getNumberOfLike(),
        genres: [],
        selectedGenre: {}
    }

    componentDidMount(){
        this.setState({
            movies: getMovies(),
            genres: getGenres()
        })
    }

    render() {
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies, numberOfLike, genres: allGenre, selectedGenre} = this.state;
        if(count === 0) return <p className="m-4">No movie in Databse</p>;

        const filteredItems = !_.isEmpty(selectedGenre)
                                ? allMovies.filter( m => m.genre._id === selectedGenre._id )
                                : allMovies;

        const movies = paginate(filteredItems, currentPage, pageSize);

        return (
            <div className="container">
                <div className="row d-flex flex-column mb-4 mt-4">
                    <p className="m-1">There is {filteredItems.length} movie(s) in database</p>
                    <p className="m-1">There is {numberOfLike} liked </p>

                </div>
                <div className="row">
                    <div className="col-2">
                        <ListGroup
                            items={allGenre}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreselect}
                        />
                    </div>
                    <div className="col">
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
                            itemsCount={filteredItems.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
    }

    toogleLike = (movie) => {
        toogleLikeMovie(movie._id);
        this.setState({movies: getMovies(), numberOfLike: getNumberOfLike()});
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handleDeleteMovie = (movie) => {
        deleteMovie(movie._id);
        this.setState({movies: getMovies()});
    }

    handleGenreselect = (genre) => {
        this.setState({ selectedGenre: genre });
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
