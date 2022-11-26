import React from "react";

class MediaButton extends React.Component { 
    render() {
        return (
            <button
            className="Media_Button"
            id={this.props.name}
            onClick = {() => {
                console.log(this.props.link);
            }}>
                <img src = {this.props.img} alt = {"media image - " + this.props.name} id = {this.props.name + "_image"}></img>
            </button>
        )
    }
}

export default MediaButton;