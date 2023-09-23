import React, { Component } from 'react';

class Reactclass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            example: 0,
        };
    }
    //without constenetssss
    incrementCounter = () => {
        this.setState({ example: this.state.example + 20 });
    };
    stopworking = () => {
        this.setState({ example: null });
    };
    render() {
        const { title, description } = this.props;

        return (
            <>
                <h1>{this.state.example} - hahah Try to stop me:</h1>
                <button onClick={this.incrementCounter}>Increase:</button>
                <br />
                <button onClick={this.stopworking}>Stop</button>

                <br />
                <h1> Question is That is gonna work</h1> <h2 style={{ color: 'red' }}>{title}</h2>
                <div>
                    <form>
                        <label htmlFor='yes' >Yes It is </label>
                        <input id='yes' type='radio' name='ashu' />
                        <br />

                        <label htmlFor='no' > It's not </label>
                        <input id='no' type='radio' name='ashu' />
                    </form>
                </div>
            </>

        )
    }
}



export default Reactclass;