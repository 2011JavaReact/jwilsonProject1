import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css';
import './css/styles.css';
import { LoginComponent } from "./loginComponent";
import { WelcomeComponent } from "./welcomeComponent";
import { Footer } from "./footer";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLogin: false
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({isLogin: true});
  }

  render () {
    if (this.state.isLogin){
      return <LoginComponent />;
    } else {
    return <WelcomeComponent onClick={this.login}/>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Footer />, document.getElementById('footer'));
