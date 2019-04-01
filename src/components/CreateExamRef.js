import React, { Component } from 'react'
class CreateExamRef extends Component {

  constructor(props){
    super(props);
    this.state={
      id: '',
      name: '',
      duration:'',
      fee:''
    }
  
  this.onSubmit = this.onSubmit.bind(this);
  
  }

  
  onSubmit(e){
    e.preventDefault();
    const body ={};
    for(const x in this.refs){
            body[x] = this.refs[x].value;
        }
    console.log(body);
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
                             <input type="number" className="form-control" name="id" ref="id"  />
                        </div>

                        <div className="form-group">
                             <label>Name</label>
                             <input type="text" className="form-control" name="name" ref="name"  />
                        </div>

                        <div className="form-group">
                             <label>Duration</label>
                             <input type="number" className="form-control" name="duration" ref="duration"  />
                        </div>
                        
                        <div className="form-group">
                             <label>Fee</label>
                             <input type="number" className="form-control" name="fee" ref="fee"  />
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



export default CreateExamRef ;