import gql from "graphql-tag";
import { Query } from "react-apollo";

import { compose, graphql } from 'react-apollo';
import React, { PureComponent } from 'react';
const GET_EMPLOYEES = gql`
query {
    empList @client{
      
      employees{
       id
       employee_name
      }
      }
    
      
     
   }
`

const GET_EMPLOYEES1 = gql`
query {
    empList(name:"AK") {
      
      employees{
       id
       employee_name
       employee_salary
      }
      }
    
      
     
   }
`
const style = {
    color: 'white',
    height: '300px'
  };

const EMPLOADING =  gql`{ loading @client}`
class QueryEmpComp extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        // const QueryEmpComp = (props) => (
            //pollInterval={5*1000}
        return <Query query={GET_EMPLOYEES1} >
            {({ loading, error, data }) => {
                if (loading) return (<div >Loading from Apollo express...</div>);
                if (error) return `Error! ${error.message}`;
                console.log("dta .........." + JSON.stringify(data))
               // this.props.cache.writeQuery({ query: EMPLOADING, data })
               this.props.cache.writeQuery( {query:EMPLOADING,data:{"loading":true}})
               //this.props.cache.writeQuery({ query:EMPLOADING},{"loading":true})
               console.log("loading after update .........." + JSON.stringify(this.props.cache.readQuery({ query:EMPLOADING }).loading))
            //    .then(result => console.log("loading in query comp status"+JSON.stringify(result.loading)))     
                return (

                    <div style={style}>
                        {/* {data.empList.employees.map(employee => (
                            <div key={employee.id}>
                                {employee.id} ::::: {employee.employee_name}::::{employee.employee_salary}
                            </div>
                        ))} */}
<table>
<thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Salary</th>
    </tr>
  </thead>
                                                {data.empList.employees.map(employee => (

                                                    <tr>
                                                        <td> {employee.id} </td>
                                                        <td>{employee.employee_name} </td>
                                                        <td>{employee.employee_salary} </td>
                                                    </tr>
                                                ))}

                                            </table>
                        <button onClick={(e) => this.handleClick(e, data)}>
                            Call API
            </button>
                    </div>
                );
            }}
        </Query>
        // );
    }

    handleClick(e, data) {
        // console.log("cache record ::"+JSON.stringify(this.props.cache))
        //add code for api with response.
        this.props.cache.writeQuery({ query: GET_EMPLOYEES, data })
        alert("read cache record :: :::" + JSON.stringify(this.props.cache.readQuery({ query: GET_EMPLOYEES })))
        // console.log("stringy record ::"+JSON.stringify(this.props.cache.readQuery({query:GET_EMPLOYEES})))
        //    this.props.addTODOActivity1({ variables: {  responseData:data  }})

    }
}

export default QueryEmpComp;
// export default compose(graphql(ADDQUOTERESPONSE, { name: 'addTODOActivity1' }))(QueryEmpComp);