import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div>
        <h3>Задания</h3>
        <AddGoal />
        <div>Добавить задание</div>
        <div>Список заданий</div>
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Выйти
        </button>
      </div>
    )

  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
