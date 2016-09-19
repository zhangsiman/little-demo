import React, { PropTypes } from 'react';
import {searchGit} from "./utils/helpers";

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      inputValue:'usrname'
    }
  }
  componentDidMount(){
    // searchGit()
    // .then((recData) => {
    //   console.log(recData);
    //   this.setState({
    //       data:recData.getData,
    //       wait:false
    //    })
    //     console.log(this.state.data);
    // })
  }
  handleInput(e){
    let value = e.target.value;
    this.setState({inputValue:value})
  }
  handleClick(){
    let name = this.state.inputValue;
    searchGit(name)
     .then( (recData) => {
        this.setState({
          data:recData.getData,
          wait:false
        })
        // console.log(this.state.data);
      });
  }
  render () {
    let gitInfo = (
      <div>
        <h3>{this.state.data.name}</h3>
        <img src={this.state.data.avatar_url} />
      </div>
    )
    return(
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleInput.bind(this)} /><button onClick={this.handleClick.bind(this)}>搜索</button><br />
        { this.state.wait ? '请稍等' : gitInfo }
      </div>
    )
  }
}

export default About;
