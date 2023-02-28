import "./App.css"
import React, {useState} from 'react'
import data from "./movie-data.json"

function App() {

  const [movies, setMovies] = useState(data);

  const [addFormData, setAddMovieData] = useState({
    title:"",
    actors:"",
    plot:"",
    imdbRating:"",
    director:"",
    year:"",
    dateAdded:""
    

  })


  const handleAddFormChange = (event)=>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue

    setAddMovieData(newFormData)
  }

  const handleAddFormSubmit = (event)=> {
    event.preventDefault();

    const newMovie = {
      title:addFormData.title,
      actors: addFormData.actors,
      plot: addFormData.plot,
      imdbRating: addFormData.imdbRating,
      director: addFormData.director,
      year: addFormData.year,
      dateAdded: new Date().toString()
      
    }

    const newMovies = [...movies, newMovie]
    setMovies(newMovies)

    event.target.reset()


  }


  return (
    <div className="app-container">
      
      <table>
        <thead>
          <th>Title</th>
          <th>Actors</th>
          <th>Plot</th>
          <th>imdbRating</th>
          <th>Director</th>
          <th>Year</th>
          <th>Date Added</th>
        </thead>
       
        <tbody>
          {movies.map((movie,index)=>(
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.actors}</td>
              <td>{movie.plot}</td>
              <td>{movie.imdbRating}</td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
              <td>{movie.dateAdded}</td>
          </tr>
          ))}
        </tbody>
      </table>
      
      <button onClick={()=>{setMovies([])}}>Delete All</button>

      <h1>Add a Movie</h1>
      
      <form onSubmit = {handleAddFormSubmit}>
        <input 
          type = "text"
          name = "title"
          required = "required"
          placeholder = "enter a title..."
          autoComplete="off"
          onChange = {handleAddFormChange}
        />
        <input 
          type = "text"
          name = "actors"
          required = "required"
          placeholder = "enter an actor..."
          autoComplete="off"
          onChange = {handleAddFormChange}
        />
        <input 
          type = "text"
          name = "plot"
          required = "required"
          placeholder = "enter a plot..."
          autoComplete="off"
          onChange = {handleAddFormChange}
        />
        <input 
          type = "text"
          name = "imdbRating"
          required = "required"
          placeholder = "enter a rating..."
          autoComplete="off"
          onChange = {handleAddFormChange}
        />
        <input 
          type = "text"
          name = "director"
          required = "required"
          placeholder = "enter a director..."
          autoComplete="off"
          onChange = {handleAddFormChange}
        />
        <input 
          type = "text"
          name = "year"
          required = "required"
          placeholder = "enter a year..."
          autoComplete="off"
          onChange = {handleAddFormChange}
        />
        <button type = "submit">ADD</button>
      </form>
      
    </div>
  );
}

export default App;
