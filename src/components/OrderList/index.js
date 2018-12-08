import React, { Component } from "react";
import OrderItem from "../OrderItem";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("/mock/orders.json").then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data: data
          });
        });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.data.map(item => {
          return (
            <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit} />
          );
        })}
      </div>
    );
  }

  handleSubmit = (id, comment, starts) => {
    const newData = this.state.data.map(item => {
      return item.id === id
        ? {
            ...item,
            comment,
            starts,
            ifCommented: true
          }
        : item;
    });

    this.setState({
      data: newData
    });
  };
}

export default OrderList;
