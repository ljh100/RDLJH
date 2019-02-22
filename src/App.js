import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers=[
{
  'id':1,
  'image':'http://placeimg.com/64/64/1',
  'name':'이준희11s',
  'birthday':'19601015',
  'address':'11134d.. thornhill wood'
},
{
  'id':2,
  'image':'http://placeimg.com/64/64/2',
  'name':'이준희22s',
  'birthday':'19601015',
  'address':'22234d.. thornhill wood'
},
{
  'id':3,
  'image':'http://placeimg.com/64/64/3',
  'name':'이준희33s',
  'birthday':'19601015',
  'address':'33334d.. thornhill wood'
}
]

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        {/* <Customer 
        id={customer[0].id}
        image={customer[0].image}
        name={customer[0].name}
        birthday={customer[0].birthday}
        address={customer[0].address}/>
        <Customer 
        id={customer[1].id}
        image={customer[1].image}
        name={customer[1].name}
        birthday={customer[1].birthday}
        address={customer[1].address}/> 
        */}
        {
          customers.map(c => {
            return(
                <Customer
                id={c.id} image={c.image} name={c.name} birthday={c.birthday} address={c.address}
                />
            );
          }

          )
        }
      </div>  
      
    );
  }
}

export default App;
