import React, { Component } from 'react'; // React and Frameworks
import './styles/sass/main.scss'  // Stylesheet (Import only Static Stylesheets here)
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home';
import DashBoard from './Components/DashBoard.js'

// Apollo Setup
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Apollo Setup ( GraphQL Client )
const client = new ApolloClient({
    uri: 'http://localhost:5050/graphql'
});

// import './Styles/materialize.min.scss'  // Stylesheet (Import only Static Stylesheets here)

class App extends Component {
    render(){
        return(
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <div>
                        <Route exact path = '/' component = { Home }/>
                        <Route path = '/dash' component = { DashBoard }/>
                        {/* <Route path = '/course/:course_name' component = { Course }/> */}
                    </div>
                </BrowserRouter>
            </ApolloProvider>
        )
    }
}

export default App;