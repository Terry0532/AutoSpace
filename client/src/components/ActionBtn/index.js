import React from 'react';
import "./style.css";


class ActionBtn extends React.Component {

  state = {

  }


  render() {
    return (
      <Link to={this.props.url}>
        <button className="actionBtn level-item" onClick={this.props.handleClick}>{this.props.children}</button>
      </Link>
    );
  }
}

export default ActionBtn;