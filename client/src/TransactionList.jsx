import React from "react";
import axios from "axios";

export default class TransactinList extends React.PureComponent {
  state = {};
  componentDidMount = () => {
    axios
      .get("/api/history")
      .then(res => this.setState({ historyList: res.data }));
  };
  renderList() {
    const { historyList } = this.state;
    if (!historyList) return <li>list is empty.</li>;
    return historyList.map(({ title, id }) => <li key={id}>{title}</li>);
  }
  render() {
    return <ul>{this.renderList()}</ul>;
  }
}
