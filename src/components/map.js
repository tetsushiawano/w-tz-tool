import React from 'react'
import * as d3 from "d3";

export default class Map extends React.Component {

    constructor(props) {
      super(props);
      // hoge();
      this.hoge();
      window.test = d3;
      this.hoge = this.hoge.bind(this);
    }

    componentDidMount() {
      this.hoge();
    }

    componentDidUpdate() {
      this.hoge();
    }

    hoge() {
        d3.select("svg")
          .append("p")
          .text("ddd");
    }

    render () {
        return (
          <div>
            Hello, world!<br/>
            <svg width="500" height="500" />
          </div>
        );
    }
}
