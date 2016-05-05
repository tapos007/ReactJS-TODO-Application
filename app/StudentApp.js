import React from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const StudentApp = React.createClass({
    getInitialState() {
      return {
        students:[
            {name:'tapos',email:'tapos.aa@gmail.com'},
            {name:'sanjib',email:'loton1984@gmail.com'}
        ]
      };
    },
    addInList(aStudent){
        this.setState({
            students:this.state.students.concat(aStudent)
        });
    },

  render() {
    return (
        <div className="row">
            <h1 className="text-center well">Student Entry directory</h1>
            <div className="col-md-6">
               <StudentForm addStudent={this.addInList}/>
            </div>
            <div className="col-md-6">
                <StudentList items={this.state.students}/>
            </div>
        </div>
    );
  }
});

export default StudentApp;
