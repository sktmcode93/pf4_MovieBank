import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Loading from './Component/Loading';
import MovieBox from './Component/MovieBox';
import MovieDetail from './Component/MovieDetail';

class App extends Component {
  state = {
    page : 1,
    paragraph : 1
  }
  componentDidMount(){
    this.renderMovies();
  }
  renderMovies = async () => {
    const app = document.querySelector(".App");
    app.classList.add("while-loading");
    const movieList = await this.callApi('https://yts.mx/api/v2/list_movies.json?');
    this.setState({movieList : movieList.movies})
    this.setPage(movieList);
    app.classList.remove("while-loading");
    this.changeActive(1);
  }
  setPage = (datas) => {
    const count = datas.movie_count;
    const limit = datas.limit;
    const lastPage = Math.ceil(count/limit);
    this.setState({lastPage});
  }
  callApi = (url) => {
    this.setState({url});
    return fetch(url)
    .then(res => res.json())
    .then(json =>json.data);
  }
  selectMovie = async (e) => {
    const app = document.querySelector(".App");
    app.classList.add("while-loading");
    const id = e.target.nextSibling.innerText;
    const display = await this.callApi(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    this.setState({display : display.movie})
    document.querySelector(".movie-detail").style.display = "block";
    app.classList.remove("while-loading");
  }
  selectList = async (e) => {
    const app = document.querySelector(".App");
    app.classList.add("while-loading");
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
    app.classList.remove("while-loading");
  }
  selectPage = async (e) => {
    // 같은 페이지 클릭시 리턴
    const currentPage = this.state.page;
    const target = e.target.innerText;
    if(currentPage === Number(target)) return;
    await this.calculPage(currentPage, target);
    this.renderPage();
  }
  calculPage = async (currentPage, target) => {
    const currentPara = this.state.paragraph;
    const lastPara = Math.floor((this.state.lastPage-1)/10) + 1;
    if(target === "<"){
      if(currentPage >1) await this.setState({page : currentPage-1});
      if(Math.floor(((currentPage-1)/10)) !== (Math.floor((this.state.page-1)/10))) await this.setState({paragraph: this.state.paragraph-1});
    }else if(target === ">"){
      if(currentPage < this.state.lastPage) await this.setState({page : currentPage+1});
      if(Math.floor(((currentPage-1)/10)) !== (Math.floor((this.state.page-1)/10))) await this.setState({paragraph : this.state.paragraph+1});
    }else if(target === "<<"){
      if(currentPara > 1){
        const paragraph = currentPara -1;
        const page = (paragraph-1)*10 +1;
        await this.setState({paragraph, page});
      }
    }else if(target === ">>"){
      if(currentPara < lastPara){
        const paragraph = currentPara +1;
        const page = (paragraph-1)*10 +1;
        await this.setState({paragraph,page});
      }
    }else{
      await this.setState({page : Number(target)})
    }
    this.changeActive(this.state.page);
  }
  renderPage = async () => {
    const loadingPage = this.state.page;
    const app = document.querySelector(".App");
    app.classList.add("while-loading");
    const callList = await this.callApi(`https://yts.mx/api/v2/list_movies.json?sort_by=downlad_count`).movies;
    this.setState({movieList : callList});
    console.log(this.state.movieList)
    app.classList.remove("while-loading");
  }
  changeActive = (p) => {
    const ps = document.querySelectorAll(".pages li");
    ps.forEach(page =>{
      page.classList.remove("active");
      if(page.innerText == p) page.classList.add("active");
    });
  }
  render(){
    return(
      <div className="App">
        {this.state.movieList ?
        <MovieBox
          movieList={this.state.movieList}
          selectMovie={this.selectMovie}
          selectList={this.selectList}
          paragraph={this.state.paragraph}
          selectPage={this.selectPage}
        /> : <Loading/>}
        {this.state.display ? <MovieDetail display={this.state.display}/> : ""}
      </div>
    );
  }
}

export default App;
