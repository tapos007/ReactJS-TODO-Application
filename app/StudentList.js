import React from 'react';

const StudentList = React.createClass({

  render() {
     var  genereateList = function(astudent,index){
          return <tr>
              <td>{index}</td>
              <td>{astudent.name}</td>
              <td>{astudent.email}</td>
              <td><a href=""> Delete</a></td>
          </tr>
      };
    return (
      <div>
          <table className="table table-bordered">
              <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
              </tr>
              </thead>
              <tbody>
              {this.props.items.map(genereateList)}
              </tbody>
          </table>
      </div>
    );
  }
});

export default StudentList;

