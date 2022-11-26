import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {IntroImage} from "resource_getter";

class Intro_Images extends React.Component{
    renderAll() {
        var img_list = [];
        for (const i in IntroImage) {
            img_list.push(
                <Carousel.Item key={i}>
                    {renderPic(IntroImage[i])}
                </Carousel.Item>
            )
            
        }
        return img_list;
    }

    render() {
        return (
                <Carousel variant="dark" controls = {false} interval = {2500} id = "mp_carousel">
                    {this.renderAll()}
                </Carousel>
        )
    }
}

function renderPic(image) {
    return <img className='Main_Page_Carousel_Image' src = {image} ></img>
}

export default Intro_Images;