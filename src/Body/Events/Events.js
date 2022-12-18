import React from "react";
import "./Event_styles.css";
import Carousel from "react-bootstrap/Carousel";
import { EventImage } from "../../resource_getter";
import items from "./Events_data.json";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
var loadData = JSON.parse(JSON.stringify(items)).items;

class Events extends React.Component {
  render() {

    return (
      <section id="events">
        <p>SỰ KIỆN</p>
        <Tabs 
        defaultActiveKey={loadData[0]["internal_name"]}
        id="event_tabs">
            {loadData.map(renderArticle)}
        </Tabs>
      </section>
    );
  }
}

function renderPic(image, event) {
  return (
    <img
      className={"Event_Carousel_Image " + event}
      src={image}
      alt="sự kiện của trung tâm"
    ></img>
  );
}

function checkImage(event, imageO) {
    return (imageO["name"] === event["internal_name"]);
}

function renderArticle(event) {
  var image = EventImage.filter(img=>checkImage(event, img))[0]["img"];
  var img_list = [];
  var i = 0;
  for (var img in image) {
    img_list.push(
        <Carousel.Item key={i}>
          {renderPic(image[img], event["event"])}
        </Carousel.Item>
      );
      i++;
  }
  return (
    <Tab eventKey={event["internal_name"]} title = {event["event"]} key = {event["internal_name"]}>
        <article>
            <Carousel variant="dark" controls = {false} interval = {2500}>{img_list} </Carousel>
        </article>
    </Tab>
  );
}

export default Events;
