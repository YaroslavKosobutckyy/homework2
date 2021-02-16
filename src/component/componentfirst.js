import React from 'react';
import ReactDOM from 'react-dom';



export  class TelephoneDirectory extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {
          loading: false,
           NameContact:[]
         }
        this.fetchName = this.fetchName.bind(this);
    }
      fetchName() {
        this.setState({loading: true})
                     fetch('https://api.ifcityevent.com/phonelist')
                        .then(resp => resp.json())
                        .then(resp => { 
                            this.setState({
                              NameContact: resp,
                              loading: false
                            });
                        });
                }
  
                componentDidMount(){
                  this.fetchName(); 
                  setInterval( () => this.fetchName(), 100000);
                }
      
  
  
          render() {
            console.log(this.state.NameContact);
            
    

            return (
                <div>
                    <h1>{this.props.NameContact.id} </h1>
                    <h1>{this.props.NameContact.firstName} </h1>
                    <h1>{this.props.NameContact.last.Name} </h1>

                    {/* <h1>{this.state.NameContact.id} </h1>
                    <h1>{this.state.NameContact.firstName} </h1>
                    <h1>{this.state.NameContact.last.Name} </h1> */}
                </div>
              );
            }
    }

