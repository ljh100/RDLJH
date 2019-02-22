import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends React.Component{
    render(){
        return(
            
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>    
                    <TableCell>{this.props.name}</TableCell> 
                    <TableCell><img src={this.props.image} alt="profile" /></TableCell> 
                    <TableCell>{this.props.birthday} </TableCell> 
                    <TableCell>{this.props.address} </TableCell> 
                </TableRow>    
            
            /* <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image}/>
            <CusstomerInfo birthday={this.props.birthday} address={this.props.address} /> */
                  
     
        );
    }
}
class CustomerProfile extends React.Component{
    render(){
        return(

            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>

        );
    }
}
class CusstomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.address}</p>
            </div>
        )
    }
}
export default Customer;