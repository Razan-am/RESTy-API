//Function Component
import React,{ useState } from 'react';
import './form.scss';

function Form(props){
  
  let [postRequest , setPostRequest] = useState(false);
  let [request , setRequest] = useState('GET');
  let [api , setApi]= useState('');
  let [textArea , settextArea]= useState('');

  function handleSubmit (e){
    e.preventDefault();
    e.target.reset();
    const formData = {
      method: request,
      url: api,
    };
    props.handleApiCall(formData,textArea);
  }
  
  function handlePost(e){
    setRequest(e.target.id);
    setPostRequest(true)
  }

  function handleRequest(e){
    setRequest(e.target.id);
    setPostRequest(false)
  }

  function handleApi(e){
    setApi(e.target.value);
  }

  function handletextArea(e){
    settextArea(e.target.value);
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
          <label >
            <span className='url'>URL: </span>
            <input name='url' type='text' className='sreach' onChange={handleApi}/>
            <button type="submit" className='button' data-testid='submitButton'>GO!</button>
          </label>
          <label className="methods">
            <span id="get" className='span' onClick={handleRequest}>GET</span>
            <span id="post" onClick={handlePost}>POST</span>
            <span id="put" onClick={handlePost}>PUT</span>
            <span id="delete" onClick={handleRequest}>DELETE</span>
          </label>
          {postRequest && <textArea name='body' col='15' rows='20' className='textArea' onChange={handletextArea} />}
        </form>
    </>
  )
}

export default Form;


//-----------------------------------------------------------

//Class Component
// import React from 'react';

// import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;