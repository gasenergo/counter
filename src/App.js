import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    teamA: {id:1, name:'Team A', score: 0},
    teamB: {id:2, name: 'Team B', score: 0}
  }
  addPointToTeamA=(team)=>{
    this.setState(...this.state, {teamA: {...this.state.teamA, score: this.state.teamA.score + 1}} )
  }
  addPointToTeamB=(team)=>{
    this.setState(...this.state, {teamB: {...this.state.teamB, score: this.state.teamB.score + 1}} )
  }
  onTeamAChange=(e)=>{
    this.setState(...this.state, {teamA: {...this.state.teamA, name: e.target.value}})
  }
  onTeamBChange=(e)=>{
    this.setState(...this.state, {teamB: {...this.state.teamB, name: e.target.value}})
  }
  onReset=()=>{
    this.setState({teamA: {id:1, name:'Team A', score: 0},teamB: {id:2, name: 'Team B', score: 0}})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Counter</h1>
        </header>
        <div style={{display:'flex', width: '100%', justifyContent:'center'}}>
          <input name="teamA" value={this.state.teamA.name} onChange={this.onTeamAChange} style={{fontSize: '5rem', border:'none', textAlign:'right'}}/> 
          <p style={{fontSize: '5rem', margin:'2rem'}}>vs</p>
          <input name="teamB" value={this.state.teamB.name} onChange={this.onTeamBChange} style={{fontSize: '5rem', border:'none', textAlign:'left'}}/> 
        </div>
        <p style={{fontSize: '10rem', marginBottom:'3rem', marginTop:'0'}}>{this.state.teamA.score}:{this.state.teamB.score}</p>
        <div>
          <button style={{fontSize: '3rem', margin:'1rem', padding:'1rem'}} onClick={this.addPointToTeamA} >Add point</button>
          <button style={{fontSize: '3rem', margin:'1rem', padding:'1rem'}} onClick={this.addPointToTeamB}>Add point</button>
        </div>
        <button style={{fontSize: '2rem', margin:'1rem', padding:'1rem'}}onClick={this.onReset}>reset</button>
      </div>
    );
  }
}

export default App;
