import './App.css';
import { client } from "./configs/graphql/client";
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './page/Home';


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App" >
        <BrowserRouter>
              <Routes>
                <Route path="/*" element={ <Home/>} />
              </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
 
  );
}

export default App;
