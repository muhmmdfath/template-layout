import React, { Component } from "react";

// export default function List(props){
//   return(
//     <ul>
//       {
//         props.data.map(item => (
//           <React.Fragment>
//             <li>
//               Nama: {item.name}, Usia: {item.age}{" "}
//             </li>
//           </React.Fragment>
//         ))
//       }
//     </ul>
//   )
// }

export default class List extends Component {
  render(){
    const {data} = this.props;
    return(
      <ul>
        {
          data.map(item => (
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
}
