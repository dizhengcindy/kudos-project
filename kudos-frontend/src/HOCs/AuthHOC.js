import React from "react";
import { fetches } from "../fetches/fetches";

const AuthHOC = WrappedComponent => {
  console.log(WrappedComponent)
  return class AuthHOC extends React.Component {

    state = {
      authorized: false
    };

    componentDidMount() {
        this.checkLogin()
    }

    checkLogin = () => {
      if (!localStorage.getItem("token")) {
        this.props.history.push("/login")
      } else {
        fetches.user.getUser().then((resp) => {
          if (resp.error) {
            this.props.history.push("/login")
          } else {
            this.setState({
              authorized: true
            });
          }
        });
      }
    };

    render() {
      return (
        <div>
          {this.state.authorized ? (
            <WrappedComponent {...this.props} />
          ) : (
            null
          )}
        </div>
      );
    }
  };
};

export default AuthHOC;