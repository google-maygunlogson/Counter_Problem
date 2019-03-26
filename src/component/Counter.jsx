import React, { Component } from 'react';

import {connect} from 'react-redux';
import changeNumberAction from '../action/changeNumberAction';

class Counter extends Component {
    constructor(props)
    {
        super(props);
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }
    inc() 
    {
        console.log('action about to be dispatched');
        this.props.inc('+');
    }
    dec()
    {
        this.props.dec('-');
    }
  render() 
  {
    console.log(window.store);
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.props.num}</div>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => 
{
    return (
        {
            num:state.num
        }
    );
}
const mapActionsToProps =
{
    inc:changeNumberAction,
    dec:changeNumberAction
};

export default connect(mapStateToProps,mapActionsToProps)(Counter);
