import React, { Component } from "react";
import { graphql } from "react-apollo";
import currentUserQuery from "../queries/CurrentUser";
import { hashHistory } from "react-router";

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.user && !nextProps.data.user) {
        hashHistory.push("/Login");
      } else {
        hashHistory.push("/Dashboard");
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(currentUserQuery)(RequireAuth);
};
