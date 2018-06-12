import React, { Component } from 'react';
import './itemBoard.css'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasBeenClicked: false,
            image: this.props.image
        }
        this.clickHandler = this.props.onClick;
        this.click = this.click.bind(this);
    }
    render() {
        return (
            <div className='item'>
            <img src={this.state.image} onClick = {this.click} alt="Click Me"/>
            </div>
        );
    }
    click(e) {
        this.clickHandler(this.props.id);
    }
}

class ItemBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsClicked: [],
            score: 0
        }
        this.itemClicked = this.itemClicked.bind(this);
        this.items = [];
        for(let i = 1; i <= this.props.numChildren; i++) {
            this.items.push(
                i
            )
        }
    }
    itemClicked(id) {
        if(this.state.itemsClicked.indexOf(id)!==-1) {
            this.setState({
                itemsClicked: [],
                score: 0
            })
        }else{
            console.log(this.items)
            this.shuffle()
            this.setState(
                {itemsClicked: this.state.itemsClicked.concat(id), score: this.state.score + 1}
            );
            console.log(this.state.score)
        }
    }
    render() {
        return (
            <div>
                <h1>
                    Score: {this.state.score}
                </h1>
                {this.items.map(i => <Item image={'/images/' + i + '.jpg'} id={i} key={i} onClick={this.itemClicked}/>)}
            </div>
        );
    }
    shuffle() {
        for(let i = this.items.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = this.items[j];
            this.items[j] = this.items[i];
            this.items[i] = temp;
        }
        this.forceUpdate();
    }
}

export default ItemBoard;