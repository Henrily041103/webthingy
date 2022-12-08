import React from 'react';
import "./Event_styles.css"
import Carousel from "react-bootstrap/Carousel"; 
import {EventImage} from "../../resource_getter"
import items from "./Events_data.json";
var loadData = JSON.parse(JSON.stringify(items)).items;

class Events extends React.Component {
    render() {
        return (
            <section id = "events">
                <p>SỰ KIỆN</p>
                <article>
                    <Carousel variant="dark">
                        {renderAll()}
                    </Carousel>
                </article>
            </section>
        )
    }
}

function renderPic(image) {
    return <img className="Event_Carousel_Image" src={image} alt="sự kiện của trung tâm"></img>;
}


function renderAll() {
    var img_list = [];
    for (var i = 0; i < loadData.length; i++) {
      img_list.push(
        <Carousel.Item key={i}>
            {renderPic(EventImage[loadData[i]["img"]])}
            <Carousel.Caption>{loadData[i]["comment"]}</Carousel.Caption>
        </Carousel.Item>
      );
    }
    return img_list;
}

export default Events;