import React from "react";
import query from "../queries/CurrentUser";
import { graphql } from "react-apollo";

class Header extends React.Component {
  render() {
    console.log(this.props.data);

    return <div>Header</div>;
  }
}

export default graphql(query)(Header);
