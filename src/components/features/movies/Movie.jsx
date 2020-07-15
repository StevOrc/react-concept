import React, { Component } from 'react';
import {getMovies, deleteMovie} from '../../../services/fakeMovieService';

export default class Movie extends Component {
    state = { 
        movies: getMovies()
    }
    render() {
        const {length: count} = this.state.movies;
        if(count === 0) return <p className="m-4">No movie in Databse</p>;

        return (
        <React.Fragment>
            <p className="m-4">There is {count} movie(s) in database</p>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rates</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.displayMovieList()}
                </tbody>
            </table>
        </React.Fragment>
        )
    }

    handleDeleteMovie = (movie) => {
        deleteMovie(movie._id);
        this.setState({movies: getMovies()});
    }

    displayMovieList = () => {
        const reslut = this.state.movies.map( movie => {
            return (<tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={ () => this.handleDeleteMovie(movie)} className="btn btn-danger m-2">delete</button></td>
                </tr>)
        });

        return reslut;
    }

    displayTest(){
        return (
            <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
            </tr>
        )
    }
}
