import React, { Component } from 'react'
import './Field.css'
import Figures from './Figures/Figures'

class Field extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldNumber: props.fieldNumber,
            free: props.free,
            player: props.player,
            figure: props.figure,
        }
    }

    
    Figure() {
        return String(this.props.figure)
    }


    fieldColor() {
        // it looks ugly, but will work
        if (Math.floor(this.props.fieldNumber / 8) % 2 === 1) {
            if (this.props.fieldNumber % 2 === 0) {
                return "brown"
            }
            else {
                return "yellow"

            }
        }
        else {
            if (this.props.fieldNumber % 2 === 0) {
                return "yellow"
            }
            else {
                return "brown"

            }
        }
    }


    fieldBlock() {
        return "field-block"
    }


    createField() {
        let classes = []
        classes.push(this.fieldBlock(), this.fieldColor(), this.Figure())
        return <div class={classes.map(c => c).join([" "])}><Figures figure={this.props.figure} /></div>
    }


    render() {
        return (
            this.createField()
        )
    }
}


export default Field

