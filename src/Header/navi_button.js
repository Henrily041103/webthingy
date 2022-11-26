import React from "react";

class NaviButton extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
            className="Navi_Button"
            id={this.props.name}
            onClick = {() => {
                document.getElementById(this.props.link).scrollIntoView({behavior: 'smooth'});
                console.log(this.props.name);
            }}>
                {this.props.text}
            </button>
        )
    }
}

export default NaviButton;