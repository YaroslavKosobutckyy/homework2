import React from 'react';
import ReactDOM from 'react-dom';



export default class TelephoneData extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {
          loading: false,
           NameData:[]
         }
        this.fetchData = this.fetchData.bind(this);
    }
      fetchData() {
        this.setState({loading: true})
                     fetch('https://api.ifcityevent.com/phonelist/id')
                        .then(resp => resp.json())
                        .then(resp => { 
                            this.setState({
                              NameData: resp,
                              loading: false
                            });
                        });
                }
  
                componentDidMount(){
                  this.fetchData(); 
                  setInterval( () => this.fetchData(), 100000);
                }
      
  
  
          render() {
            console.log(this.state.NameData);
    

            return (
                <div>
                    <h1>{this.state.NameData.id} </h1>
                    <h1>{this.state.NameData.firstName} </h1>
                    <h1>{this.state.NameData.lastName} </h1>
                    <h1>{this.state.NameData.sex}</h1>
                    <h1>{this.state.NameData.phones.type}</h1>
                    <h1>{this.state.NameData.phones.number}</h1>
                </div>
              );
            }
    }