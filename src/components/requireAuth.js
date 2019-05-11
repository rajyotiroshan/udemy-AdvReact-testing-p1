import React, { Component } from "react";
import {connect} from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    //Compoenent just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    //sees a new set of props
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent); //scaffold
};
