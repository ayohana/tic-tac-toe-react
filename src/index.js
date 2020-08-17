import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// The Square component renders a single <button>
class Square extends React.Component {
    render() {
        return (
            <button 
                className="square" 
                onClick={() => this.props.onClick()}
                
            >             
                {this.props.value}
            </button>
        );
    }
}

// The Board component renders 9 Squares
// The Square components are now called controlled components. The Board has full control over them.
class Board extends React.Component {
    // In JavaScript, the super keyword is used to access and call functions on an object's parent. All React component classes that have a constructor should start with a super(props) call as we are defining the constructor of a SUBCLASS.
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice(); // creates a copy of the squares array for immutability
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
        />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// The Game component renders a Board
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
  
// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
