import gql from "graphql-tag";
import { Query } from "react-apollo";
import React, { PureComponent } from 'react';

const GETEMPLOYEES = gql`
query {
    empList @client{
 
      employees @client{
          id
          employee_name
      }
      }
    
      
     
   }
`

const GETEMPLOYEES1 = gql`
query {
    empList(name:"AK") @client{
 
      employees {
          id
          employee_name
      }
      }
    
      
     
   }
`
const compCode = <div><Query query={GETEMPLOYEES1}>

    {({ data: { empList: { employees } } }) => {
        console.log("here data::" + JSON.stringify(employees))


    }
    }
</Query>
</div>
const EMPLOADING = gql`{ loading @client}`

const ClientWithoutResolver = (props) =>
    (
        //    props.query({ query: gql`{ loading }` }).then(result => console.log("loading status"+JSON.stringify(result.loading)))

        <Query query={GETEMPLOYEES1}>

            {({ data: { ...data } }) => {
                {
                    const isLoaded = props.cache.readQuery({ query: EMPLOADING }).loading;
                    console.log("loading from  consumer .........." + isLoaded)

                    if (isLoaded === true) {
                        return (
                            //style={{ backgroundColor: "#EA80FC" }}
                            <div >
                                <Query query={GETEMPLOYEES1}>

                                    {({ data: { empList: { employees } } }) => {
                                        console.log(" data from innermost query comp::" + JSON.stringify(employees))
                                        //  return JSON.stringify(employees)

                                        return (


                                            <table>
                                                {employees.slice(0, 4).map(employee => (

                                                    <tr>
                                                        <td> {employee.id} </td>
                                                        <td>{employee.employee_name} </td>
                                                    </tr>
                                                ))}

                                            </table>
                                            /* </div> */
                                        );

                                    }
                                    }
                                </Query>
                            </div>


                        );
                    }
                    else {
                        console.log("no data is called")
                        return ("Loading data from cache ...");
                    }
                }

            }}
        </Query>
    );

export default ClientWithoutResolver
