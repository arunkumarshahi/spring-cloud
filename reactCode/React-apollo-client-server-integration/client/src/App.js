import React from 'react';

 import QueryEmpComp from './components/QueryEmpComp';
 
 import ClientWithoutResolver from './components/ClientWithoutReolver';

 
 
// const App = (props) => (
  class App extends React.Component {
    state={
      
  }

  constructor(props) {
      super(props); 
  }

  
    render () {
      // console.log("cient ==="+JSON.stringify(this.props.client))
    return(
  <div>

<b>Data from apollo express server</b><br/>
<QueryEmpComp {...this.props.client}/>
<b>Data from apollo link cache</b><br/>
 <ClientWithoutResolver {...this.props.client}/>
{/* <ClientWithResolver/> */}
  </div>
)
}
}
export default App;
