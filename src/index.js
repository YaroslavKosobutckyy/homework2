import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import Directory from './component/filedatafirst';
import Data from './component/filedatasecond';

// Завдання 1
  class DollUsd extends React.Component { 
  constructor(props) {
      super(props);
       this.state = {
         loading: false,
         currencyList:[]
       }
      this.fetchCurrency = this.fetchCurrency.bind(this);
  }
    fetchCurrency() {
      this.setState({loading: true})

                fetch('https://api.ifcityevent.com/currency')
                      .then(resp => resp.json())
                      .then(resp => { 
                          this.setState({
                            currencyList: resp,
                            loading: false
                          });
                      });
     }

              componentDidMount(){
                this.fetchCurrency();
                console.log(this.state);
                setInterval( () => this.fetchCurrency(), 50000);
              }
    


        render() {
          return (
            <div>
                <p>{this.state.currencyList.name} "Купівля" - {this.state.currencyList.rateBuy} "Продажа"- {this.state.currencyList.rateSell}</p> 
                <button onClick={this.fetchCurrency}>Отримати</button>
            </div>
          );
        }
}

 
ReactDOM.render(
  <DollUsd/>,
document.getElementById('root')
);
 */



//  Завдання 2

// Поки не запускається і треба доробити до кінця, над ним працюю... Скинув, щоб було видно...))) 



// class EndComponent extends React.Component{
//   render() {
//         console.log(this.props);
//     return (
//           <div>

//           </div>
//     );

//   }
// }
 
// ReactDOM.render(
//   <EndComponent/>,
// document.getElementById('root')
// );
 







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()