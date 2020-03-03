import React from 'react'
import Result from './Result.js'


function Results(props) {
  return (
    <div>
        <div className="results">
            {
                props.movies.map((movie) => {
                    return (
                        <Result
                            key={movie.id}
                            movie={movie}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Results;
