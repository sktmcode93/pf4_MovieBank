import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Loading from './Component/Loading';
import MovieBox from './Component/MovieBox';
import MovieDetail from './Component/MovieDetail';

class App extends Component {
  state = {
    page : 1
  }
  componentDidMount(){
    this.renderMovies();
  }
  renderMovies = async () => {
    const movieList = await this.callApi('https://yts.mx/api/v2/list_movies.json')
    this.setState({movieList : movieList.movies})
    this.setPage(movieList);
  }
  setPage = (datas) => {
    const count = datas.movie_count;
    const limit = datas.limit;
    const pages = Math.ceil(count/limit);
    this.setState({pages});
  }
  callApi = (url) => {
    return fetch(url)
    .then(res => res.json())
    .then(json =>json.data)
  }
  selectMovie = async (e) => {
    const id = e.target.nextSibling.innerText;
    const display = await this.callApi(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    this.setState({display : display.movie})
    document.querySelector(".movie-detail").style.display = "block";
  }
  selectList = async (e) => {
    const list = e.target.innerText;
    let movieList;
    if(list === "최신순"){
      movieList = await this.callApi(`https://yts.mx/api/v2/list_movies.json?sort_by=year`);
    }else if(list === "평점순"){
      movieList = await this.callApi(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`);
    }else{
      movieList = await this.callApi(`https://yts.mx/api/v2/list_movies.json?sort_by=downlad_count`);
    }
    this.setState({movieList : movieList.movies});

  }
  render(){
    return(
      <div className="App">
        {this.state.movieList ?
        <MovieBox
          movieList={this.state.movieList}
          selectMovie={this.selectMovie}
          selectList={this.selectList}
          page={this.state.page}
          pages={this.state.pages}
        /> : <Loading/>}
        {this.state.display ? <MovieDetail display={this.state.display}/> : ""}
      </div>
    );
  }
}

export default App;
