import React, { Component } from 'react';
import {getMovies, deleteMovie, toogleLikeMovie, getNumberOfLike} from '../../../services/fakeMovieService';
import {getGenres} from '../../../services/fakeGenreService';
import {Pagination, ListGroup} from '../../';
import {paginate} from '../../../utils/paginate';
import MovieTable from './MovieTable';
import _ from 'lodash';

export default class Movie extends Component {
    state = { 
        movies: [],
        pageSize: 4,
        currentPage: 1,
        numberOfLike: getNumberOfLike(),
        genres: [],
        selectedGenre: {},
        sortColumn: {path: 'title', order: 'asc'}
    }

    componentDidMount(){
        const genres = [{name: 'All genres', _id: "allGenres"},...getGenres()]
        this.setState({
            movies: getMovies(),
            genres
        })
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
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }

    handleSort = sortColumn => {

        this.setState({
            sortColumn
        })
    }

    render() {
        const {length: count} = this.state.movies;
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            numberOfLike,
            genres: allGenre,
            selectedGenre,
            sortColumn} = this.state;

        if(count === 0) return <p className="m-4">No movie in Databse</p>;

        const filteredItems = !_.isEmpty(selectedGenre) && selectedGenre._id
                                ? allMovies.filter( m => m.genre._id === selectedGenre._id )
                                : allMovies;

        const sorted =_.orderBy(filteredItems, [sortColumn.path], sortColumn.order);
        const movies = paginate(sorted, currentPage, pageSize);

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
                        <MovieTable
                            movies={movies}
                            onDeleteMovie={this.handleDeleteMovie}
                            onLikeOrUnlike={this.toogleLike}
                            onSort={this.handleSort}
                            sortColumn={this.state.sortColumn}
                        />
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
}
