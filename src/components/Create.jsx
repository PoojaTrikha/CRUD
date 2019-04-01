import React, { Component } from 'react';
import axios from 'axios';
class Create extends Component {

  constructor(props){
    super(props);
    this.state={
      id: '',
      name: '',
      duration:'',
      fee:''
    }
  
  this.onSubmit = this.onSubmit.bind(this);
  this.onChangeId = this.onChangeId.bind(this);
  this.onChangeName = this.onChangeName.bind(this);
  this.onChangeDuration = this.onChangeDuration.bind(this);
  this.onChangeFee = this.onChangeFee.bind(this);

  }

  onChangeId(e){
    this.setState({
      id:e.target.value,
    })
  }

  onChangeName(e){
    this.setState({
      name:e.target.value,
    })
  }

  onChangeDuration(e){
    this.setState({
      duration:e.target.value,
    })
  }

  onChangeFee(e){
    this.setState({
      fee:e.target.value,
    })
  }

  onSubmit(e){
    e.preventDefault();
    const body = {
      id: this.state.id,
      name: this.state.name,
      duration: this.state.duration,
      fee: this.state.fee
    };
    console.log(body);
    //Post the data to service
    axios.post('http://localhost:3000/course', body)
    .then(alert("Successfully Created the course")).catch(function(err){console.log(err)});
  }

  render() {
    return (
       <div className="container">
           <div className="row">
                <div className="col-md-12">
                    <h3 className="jumbotron text-center">Create List</h3>
                </div>
           </div>
           <div className="row">
                 <div className="col-md-6 col-md-offset-3 well">
                   <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                             <label>Id</label>
                             <input type="number" className="form-control"  value={this.state.id} onChange={this.onChangeId}/>
                        </div>

                        <div className="form-group">
                             <label>Name</label>
                             <input type="text" className="form-control"  value={this.state.name} onChange={this.onChangeName} />
                        </div>

                        <div className="form-group">
                             <label>Duration</label>
                             <input type="number" className="form-control"  value={this.state.duration} onChange={this.onChangeDuration} />
                        </div>
                        
                        <div className="form-group">
                             <label>Fee</label>
                             <input type="number" className="form-control"  value={this.state.fee} onChange={this.onChangeFee} />
                        </div>
                        
                        <div className="form-group">
                             <input type="submit" className="btn btn-info" value="Create New Course"/>
                        </div>
                   </form>
                 </div>
           </div>
      </div>
     
    )
    }     
}



export default Create;