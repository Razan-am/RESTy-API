//Function Component
import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import Loading from '../loading/loading';

function Results (props){
  return(
    <>
     <section>
      {props.data ? <JSONPretty data-testid='result' data={props.data}></JSONPretty> : <Loading/>}
      </section>
    </>
  )
}

export default Results;


//-----------------------------------------------------------

//Class Component
// import React from 'react';

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;
