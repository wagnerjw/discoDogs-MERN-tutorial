import React from "react";
import { Link } from "@reach/router";

const Dog = (props) => {

  const {name, breed, age} = props.dog;

    return(
      <div className="col-sm-4 mb-3">
        <div className="card">
          <div className="card-header bg-dark text-white">
            { props.dog.name }
          </div>
        
          <div className="card-body">
          <p>Breed: { props.dog.breed } </p>
          <p>Age: { props.dog.age } </p>
          </div>

          <ul className="list-group-flush">
            <li className="list-group-item active">Moves: </li>
            {
              props.dog.moves.map((m,i) => <li className="list-group-item" key={i}>{m.move}</li>)
            }
          </ul>

          <div className="card-footer">
          <button className="btn btn-link" onClick={e => props.edit(props.dog._id)}>Edit Info</button>
          </div>

        </div>
      </div>
    );

}

export default Dog;