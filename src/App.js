import React,{Component} from 'react';
import './App.css';
import {history} from './history';
import storeInstance from "./mainStore";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/HomePage/Home';

const storeContext = React.createContext(null);


class App extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
        <storeContext.Provider value={storeInstance}>
      <Router history={history}>
        <ToastContainer hideProgressBar pauseOnHover={false} pauseOnFocusLoss={false} autoClose={3000}/>
        <RouteObject exact ='/' component={Home} redirectTo='/' accessible/>
      </Router>
        </storeContext.Provider>

    );
  }
}
class RouteObject extends Component{
  constructor(props) {
    super(props);

    let props_copy = {};
    Object.keys(props).forEach(function (key) {
      props_copy[key] = props[key];
    });

    props_copy.accessible = undefined;
    props_copy.path = undefined;
    props_copy.redirectTo = undefined;
    props_copy.component = undefined;
    props_copy.exact = undefined;

    this.exact = 'exact' in this.props;

    this.props_copy = props_copy;
  }

  render() {
    let props = this.props;
    if (this.props.accessible) {
      let props_copy = this.props_copy;

      return (
          <Route path={props.path} exact={this.exact} render={(args) => {
            return (
                React.createElement(props.component, Object.assign(props_copy, args))
            );
          }}/>
      );
    } else {
      return (
          <Route path={props.path} exact={this.exact} render={() => {
            return (
                <Redirect to={props.redirectTo}/>
            );
          }}/>
      );
    }
  }
}

export default App;
