import rp from 'request-promise';
//var rp = require('request-promise');
const fetch = require('node-fetch');
const baseURL = 'http://dummy.restapiexample.com/api/v1/employees'
const mockEmpResponse={employees:[{"id":"1","employee_name":"Hello world","employee_salary":"0","employee_age":"0","profile_image":""},
{"id":"12","employee_name":"Test K","employee_salary":"10","employee_age":"0","profile_image":""},
{"id":"13","employee_name":"Adward","employee_salary":"20","employee_age":"0","profile_image":""},
{"id":"14","employee_name":"XV","employee_salary":"90","employee_age":"0","profile_image":""},
{"id":"15","employee_name":"SM","employee_salary":"50","employee_age":"0","profile_image":""},
{"id":"6","employee_name":"TP","employee_salary":"60","employee_age":"0","profile_image":""},
{"id":"7","employee_name":"Good","employee_salary":"70","employee_age":"0","profile_image":""},
{"id":"8","employee_name":"LX","employee_salary":"50","employee_age":"0","profile_image":""},
{"id":"9","employee_name":"ZO","employee_salary":"40","employee_age":"0","profile_image":""},
{"id":"10","employee_name":"PK","employee_salary":"340","employee_age":"0","profile_image":""}]}
let counter=0;
const resolvers = {
  Query: {
    author(root, args) {
      return { id: 1, firstName: 'Hello '+ args.firstName, lastName: args.lastName };
    },
    allAuthors() {
      return [{ id: 1, firstName: 'Hello', lastName: 'World' }];
    },
    allEmployees(root, args) {
      console.log("AllEmployees  ==== "+args)
     // fetch(`http://dummy.restapiexample.com/api/v1/employees`).then(res => res.json())
	 
	 
     let eResponse={"employees":mockEmpResponse}
      console.log("AllEmployees response ==== "+JSON.stringify(eResponse))
        return eResponse;
     
       },
	 empList(root, args) {
	 counter=counter+1
      console.log("empList api is invoked "+counter)
      sleep(4*1000)
	  
	// let employees=[]
  //   return fetch(`http://dummy.restapiexample.com/api/v1/employees`).then(res => {res.json()})
  console.log("end of method")
 return mockEmpResponse;
    },
    employees1(root, args) {
      console.log("employees1 ==== "+args.name)
        return fetch(`http://dummy.restapiexample.com/api/v1/employees`).then(res => res.json())
     
       },


	
  },
  
// // The new resolvers are under the Channel type
  EmployeeResponse: {
    employeeFeed: (employeeResponse, { cursor }) => {
      // The cursor passed in by the client will be an
      // integer timestamp. If no cursor is passed in,
      // set the cursor equal to the time at which the
      // last message in the channel was created.
         console.log("resolvin employee response ::: "+JSON.stringify(employeeResponse.employees))
      if (!cursor) {
        cursor =
          employeeResponse.employees[employeeResponse.employees.length - 1].id;
      }
      console.log("cursor was found here ::: "+cursor)
      cursor = parseInt(cursor);
      // limit is the number of messages we will return.
      // We could pass it in as an argument but in this
      // case let's use a static value.
      const limit = 2;  
      
      const newestMessageIndex = employeeResponse.employees.findIndex(
        message => parseInt(message.id) === cursor
      ); // find index of message created at time held in cursor
      // We need to return a new cursor to the client so that it
      // can find the next page. Let's set newCursor to the
      // createdAt time of the last message in this messageFeed:
      console.log("index diff :::"+newestMessageIndex +":::"+ limit);
      const newCursor =
      employeeResponse.employees[newestMessageIndex - limit].id;
      
      const employeeFeed = {
        employees: employeeResponse.employees.slice(
          newestMessageIndex - limit,
          newestMessageIndex
        ),
        cursor: newCursor,
      };
      
      return employeeFeed;
    },
  },

  Mutation: {
  createMessage(root , args){
  let status=false;
  if(args.id>100)
  status=true;
   return { status: status };
  },
  createMessage1(root , args){
  return { id: 100, content: 'Hello '+ args.input.content, author: "Hello k" };
  }
  },
  Author: {
    posts(author) {
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2 },
        { id: 2, title: 'Another post', text: 'Some other text', views: 200 }
      ];
    }
  },
  Post: {
    author(post) {
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    }
  }
};
function DelayPromise(delay) {  
  //return a function that accepts a single variable
  return function(data) {
    //this function returns a promise.
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        //a promise that is resolved after "delay" milliseconds with the data provided
        resolve(data);
      }, delay);
    });
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
export default resolvers;
