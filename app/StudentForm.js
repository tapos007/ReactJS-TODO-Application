import React from 'react';

const StudentForm = React.createClass({
    getInitialState() {
      return {
        name:'',
          email:''
      };
    },
    ChangeName(e){
        this.setState({
          name:e.target.value
        });

    },
    ChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    },
    submitFormData(e){
        e.preventDefault();
        this.props.addStudent({name:this.state.name,email:this.state.email});
        this.setState({
            email:'',
            name:''
        });
    },


    render() {
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.submitFormData}>
                    <div className="form-group">
                        <label for="name" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={this.ChangeName} value={this.state.name} className="form-control" placeholder="Enter Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={this.ChangeEmail} value={this.state.email} className="form-control" placeholder="Enter Email"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">Add Student</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

export default StudentForm;
