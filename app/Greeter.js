//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.scss';
class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}{config.cc}
      </div>
    );
  }
}
export default Greeter