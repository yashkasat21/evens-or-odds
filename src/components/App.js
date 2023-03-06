import React, { Component } from 'react';
import { connect} from 'react-redux';
import { startGame } from '../actions/settings';
import { cancelGame } from '../actions/settings';
import Instructions from './Instructions';

class App extends Component {

    render() {
        console.log('this', this);
        return (
            <div>
                <h2>💜♤ Evens or odds ♣️ ♦️</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3> The game is on!</h3>
                            <br />
                            <button onClick={this.props.cancelGame}>Cancel game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits</h3>
                            <br />
                            <button onClick={this.props.startGame}>Start Game</button>
                            <hr />
                            <Instructions />
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);

    return { gameStarted: state.gameStarted};
} 

const mapDispatchToProps = dispatch => {
    return {
        startGame:()=> dispatch(startGame()),
        cancelGame:()=> dispatch(cancelGame())
    }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);
