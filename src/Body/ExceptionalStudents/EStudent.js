import React from 'react';
import "./EStudent_styles.css"
import Carousel from "react-bootstrap/Carousel"; 
import {EStudentImage} from "../../resource_getter"

class EStudent extends React.Component {
    render() {
        return (
            <section id = "estudent">
                <p>HỌC VIÊN ƯU TÚ</p>
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
    return <img className="EStudent_Carousel_Image" src={image}></img>;
}

function renderAll() {
    var img_list = [];
    for (const i in EStudentImage) {
      img_list.push(
        <Carousel.Item key={i}>{renderPic(EStudentImage[i])}</Carousel.Item>
      );
    }
    return img_list;
  }

export default EStudent;