import React from 'react';
import "./StudentM_styles.css"
import Carousel from "react-bootstrap/Carousel";
import {StudentMImage} from "../../resource_getter"

class StudentM extends React.Component {
    render() {
        return (
            <section id = "studentm">
                <p>KHOẢNH KHẮC HỌC VIÊN</p>
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
    return <img className="StudentM_Carousel_Image" src={image} alt="khoảng khắc của học viên"></img>;
}

function renderAll() {
    var img_list = [];
    for (const i in StudentMImage) {
      img_list.push(
        <Carousel.Item key={i}>{renderPic(StudentMImage[i])}</Carousel.Item>
      );
    }
    return img_list;
  }

export default StudentM;