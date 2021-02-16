import React from 'react';
import ReactDOM from 'react-dom';
import TelephoneData from './component/componentsecond';


export default class Data extends React.Component {
  render() {
    return (
      <div>
          <IData id={this.props.id} 
                 firstName={this.props.firstName}
                 lastName={this.props.firstName}
                 sex={this.props.sex}/>
          <Phones type={this.props.type}
                  number={this.props.number}
                  type={this.props.type}
                  number={this.props.number}/>
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
 const Phones = props => {
    console.log('222',props);
  return (
     <div>
       <h1>{props.type}</h1>
       <h2>{props.number}</h2>
       <h1>{props.type}</h1>
       <h2>{props.number}</h2>
     </div>
   )
 } 