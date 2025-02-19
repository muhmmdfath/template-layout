import React from "react";

export default function List(props){
  return(
    <ul>
      {
        props.data.map(item => (
          <React.Fragment>
            <li>
              Nama: {item.name}, Usia: {item.age}{" "}
            </li>
          </React.Fragment>
        ))
      }
    </ul>
  )
}
