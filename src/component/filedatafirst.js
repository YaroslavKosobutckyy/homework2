import React from 'react';
import ReactDOM from 'react-dom';
import {TelephoneDirectory} from './component/componentfirst';


export default class Directory extends React.Component {
  
  
  render() {
    console.log('props',this.props);
    return (
      <div>
          <IData id={this.props.id} 
                 firstName={this.props.firstName}
                 lastName={this.props.firstName}/>
      </div>
    );
  }
} 

const IData = props => {
    console.log('111',props);
  return (
     <div>
       <h1>{props.id}</h1>
       <h2>{props.firstName}</h2>
       <h2>{props.lastName}</h2>
     </div>
   )
 } 