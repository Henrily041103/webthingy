import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import items from "./teachers.json"
import {TeacherImage} from "resource_getter";
import "./teachers_styles.css"
import bar from "../../assets/images/Teacher_Images/bar.png"
var loadData = () => JSON.parse(JSON.stringify(items)).items;

function Teachers() {
        
        var img_list = [];
        var text_list = [];
        var k = 0;

        for (const p in TeacherImage) {
            img_list.push(
                <Carousel.Item key={k}>
                    {renderPic(TeacherImage[p])}
                </Carousel.Item>
            )
            k++;
        }

        for (const i of loadData()) {
            text_list.push(renderText(i["comments"]))
        }

        const [index, setIndex] = useState(0);
        const [text, setText] = useState(text_list[0]);
        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
            setText(text_list[selectedIndex])
        };

        return (
            <div className='row gx-0' >
                <div className='col-4' id = "teacher_carousel_container">
                    <Carousel variant="dark" controls = {false} interval = {2500} activeIndex={index} onSelect = {handleSelect}>
                        {img_list}
                    </Carousel>
                </div>
                <div className='col-8'>
                    {text}
                </div>
            </div>
        );
    }


function renderPic(image) {
    return <img src = {image} alt ="" className='teacher_images'></img>
}
function renderText(comment) {
    var index = 0;
    var list = [];
    for (const c of comment) {
        list.push(<li key={index} className="teacher_items">{c["text"]}</li>)
        index++;
    }
    return (
        <div id ="teacher_text_container">
            <div id ="teacher_title">GIẢNG VIÊN CHẤT LƯỢNG</div>
            <img id ="teacher_seperator" src={bar}></img>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default Teachers;