import React from 'react';
import { connect} from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
    const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

    if( instructionsExpanded) {
        return (
            <div>
                <h3>Instructions</h3>
                <p>Welcome to evens or odds. The game goes like this</p>
                <p>The deck is shuffled.Then choose: will the next card be even or odd?</p>
                <p>Make a choice on every draw, see how many you get right!</p>
                <p>(Face cards don't count)</p>
                <br />
                <button onClick={collapseInstructions}>Show less</button>
            </div>
        );
    }

    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome to evens or odds. The game goes like this...</p>
            <button onClick={expandInstructions}>Read More</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { instructionsExpanded: state.instructionsExpanded};
}

const mapDispatchToProps = dispatch => {
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions())
    }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector( Instructions);