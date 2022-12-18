import React from 'react';
import items from "./MainText.json";
var loadData = JSON.parse(JSON.stringify(items)).items;

class IntroText extends React.Component{
    render() {
        return (
            <div id='intro_text'>
                <div id = "intro_title">
                    <div id='big-intro-text'>"EVERY STUDENT MATTERS"-</div>
                    <br />
                    <div id='medium-intro-text'>"TẤT CẢ VÌ HỌC VIÊN"</div>
                    <br />
                </div>
                <div>
                    <ul id='intro_list'>
                        {loadAll()}
                    </ul>
                </div>
            </div>
        )
    }
}

function renderSmallText(data) {
    return <li className = 'list_item small-intro-text' key={data["id"]}>{data["text"]}</li>
}

function loadAll() {
    var small_intros = [];
    for (var data of loadData) {
        small_intros.push(renderSmallText(data));
    }
    return small_intros;
}

// function changeCarousel(index) {
//     var indicators = document.getElementsByClassName("carousel-indicators")[0]
//     for (var indicator of indicators.children) {
//         if (indicator.ariaLabel === ("Slide " + (index+1).toString())) {
//             indicator.click();
//         }
//     }
// }

export default IntroText;