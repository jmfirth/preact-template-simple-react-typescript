import './style.css';
import * as React from 'react';

interface AppProperties {}

interface AppState {}

export default class App extends React.Component<AppProperties, AppState> {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}
