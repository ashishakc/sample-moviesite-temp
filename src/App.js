import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";
import Header from "./Header";
import  movies from './moviesdata.json';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
      {
        movies.map((element)=>{
          return(
            <Movie
            title={element.Title}
            year={element.Year}
            poster={element.Poster}
             />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
