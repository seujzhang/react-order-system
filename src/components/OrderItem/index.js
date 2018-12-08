import React, { Component } from "react";
import "./style.css";

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      starts: props.data.starts || 0,
      comment: props.data.comment || ""
    };
  }

  render() {
    const { shop, product, price, picture, ifCommented } = this.props.data;
    return (
      <div className="orderItem">
        <div className="orderItem__picContainer">
          <img className="orderItem__pic" src={picture} />
        </div>
        <div className="orderItem__content">
          <div className="orderItem__product">{product}</div>
          <div className="orderItem__shop">{shop}</div>
          <div className="orderItem__detail">
            <div className="orderItem__price">{price}</div>
            <div>
              {ifCommented ? (
                <button className="orderItem__btn orderItem__btn--grey">
                  已评价
                </button>
              ) : (
                <button
                  className="orderItem__btn orderItem__red"
                  onClick={this.handleOpenEditArea}
                >
                  评价
                </button>
              )}
            </div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
        <div />
      </div>
    );
  }

  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          onChange={this.handleCommentChange}
          value={this.state.comment}
          className="orderItem__comment"
        />
        {this.renderStarts()}
        <button
          className="orderItem__btn orderItem__red"
          onClick={this.handleSubmitComment}
        >
          提交
        </button>
        <button
          className="orderItem__btn orderItem__grey"
          onClick={this.handleCancelComment}
        >
          取消
        </button>
      </div>
    );
  }

  renderStarts() {
    const { starts } = this.state;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, index) => {
          const lightClass = starts >= item ? "orderItem__start--light" : "";
          return (
            <span
              className={"orderItem__start" + lightClass}
              key={index}
              onClick={this.handleClickStarts.bind(this, item)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  }

  handleOpenEditArea = () => {
    this.setState({
      editing: true
    });
  };

  handleCommentChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleClickStarts = starts => {
    this.setState({
      starts: starts
    });
  };

  handleCancelComment = () => {
    this.setState({
      editing: false,
      starts: this.props.data.starts || 0,
      comment: this.props.data.comment || ""
    });
  };

  handleSubmitComment = () => {
    const { id } = this.props.data;
    const { comment, starts } = this.state;

    //评价信息提交到服务器
    this.props.onSubmit(id, comment, starts);

    this.setState({
      editing: false
    });
  };
}

export default OrderItem;
