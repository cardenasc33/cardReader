import React, {Component} from 'react'

export default class CehckInUIN extends Component {
    constructor() {
      super();
      this.state = {       
        uin: ''
      };
      this.onSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      var self = this;
      // On submit of the form, send a POST request with the data to the server.
      fetch('/getNodeDups', { 
          method: 'POST',
          data: {
            uin: self.refs.uin
          }
        })
        .then(function(response) {
          return response.json()
        }).then(function(body) {
          console.log(body);
        });
    }
    // handle change when values is changed
    handlechange = ({target: {value}}) => this.setState(state => value.length <= 9 && !isNaN(Number(value)) && {value} || state)
    render() {
      return (
        <form onSubmit={this.onSubmit}>
          {/* <input type="text" placeholder="enter UIN" ref="uin" value={this.state.value} onChange={this.handlechange}/> */}
          <input placeholder="enter UIN" value={this.state.value} onChange={this.handlechange}/>
          <input type="submit" />
        </form>
      );
    }
  }