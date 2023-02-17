import './Movie.css';

const Movie = (props) => {
  return (
    <div className='movie'>
    <img src={props.poster} alt='Error'/>
    <p>{props.title}</p>
    <p>Year: {props.year}</p>
    </div>
  )
}

export default Movie