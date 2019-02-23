import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles=theme=>(
  {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit *3,
      overflowX: "auto"
    },
    table: {
      minWidth: 1080
    },
    progress:{
      margin: theme.spacing.unit*2
    }
  }
)

// const customers=[
// {
//   'id':1,
//   'image':'http://placeimg.com/64/64/1',
//   'name':'이준희11s',
//   'birthday':'19601015',
//   'address':'11134d.. thornhill wood'
// },
// {
//   'id':2,
//   'image':'http://placeimg.com/64/64/2',
//   'name':'이준희22s',
//   'birthday':'19601015',
//   'address':'22234d.. thornhill wood'
// },
// {
//   'id':3,
//   'image':'http://placeimg.com/64/64/3',
//   'name':'이준희33s',
//   'birthday':'19601015',
//   'address':'77774d.. thornhill wood'
// }
// ]
/*
component life cycle
1)constuctor
2)componentWillMount
3)render
4)componentDidMount
5)state or props changed , shouldcomponentUpdate -> call render

*/

class App extends Component {
  state = {
    customers:"",
    completed: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress,20);//0.02초 마다 타이머 동작 하는데
    //0,02초 마다 위의 progress() 함수를 반복

    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  progress =() =>{
    const {completed} = this.state;
    this.setState({completed: completed>=100 ? 0 : completed+1});
  }
  render() {
    const {classes} = this.props;
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

          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>사진</TableCell>
                  <TableCell>생일</TableCell>                 
                  <TableCell>주소</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  // customers.map(c => {
                  //   return (
                  //      <Customer
                  //         key={c.id}
                  //         id={c.id}
                  //         name={c.name} 
                  //         image={c.image}
                  //         birthday={c.birthday}
                  //         address={c.address}
                  //      /> 
                  //   );
                  // })
                  this.state.customers ? this.state.customers.map(c => {
                    return (
                       <Customer
                          key={c.id}
                          id={c.id}
                          name={c.name} 
                          image={c.image}
                          birthday={c.birthday}
                          address={c.address}
                       /> 
                    );
                  }) : 
                  <TableRow>
                    <TableCell colSpan="6" align="center">
                      <CircularProgress className={classes.progress} variant="determinate"
                      value={this.state.completed} />
                    </TableCell>
                  </TableRow> 
                }
              
              </TableBody>
            </Table>
            </Paper>
          
      </div>  
      
    );
  }
}

export default withStyles(styles)(App);
