import React from "react";
import query from "../queries/CurrentUser";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import mutation from "../mutations/Logout";

class Header extends React.Component {
  onLogoutClick() {
    this.props.mutate({ refetchQueries: [{ query }] });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div></div>;
    }
    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.data);

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
