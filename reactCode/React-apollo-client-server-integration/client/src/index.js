import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-dom';
import App from './App';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import registerServiceWorker from './registerServiceWorker';
import gql from 'graphql-tag'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// import localStateLink from './localStateLink'

const GET_EMPLOYEES = gql`
query {
    empList(name:"AK") {
      
      employees{
       id
       employee_name
      }
      }
    
      
     
   }
`
const cacheObj=new InMemoryCache()

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })
const stateLink = withClientState({
  cache:cacheObj,
  // defaults :data
 // resolvers:resolvers
});
// cacheObj.writeQuery({query:GET_EMPLOYEES,data:data })
// cacheObj.writeQuery({ query: EMPLOADING, data })
const EMPLOADING =  gql`{ loading @client}`
const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    httpLink
  ]),
    cache: cacheObj,
  })
 
  // client.writeData({ data:{"loading":false}})
  client.writeQuery( {query:EMPLOADING,data:{"loading":false}})
  client.query({ query: gql`{ loading }` }).then(result => console.log("loading status"+JSON.stringify(result.loading)));
console.log("loading cient ==="+JSON.stringify(cacheObj))
ReactDOM.render(

    
  <ApolloProvider client={client}>
    <App client={client} />
    
  </ApolloProvider>
  , document.getElementById('root')
)

registerServiceWorker();
