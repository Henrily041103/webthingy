import React from 'react';
import {Carousel} from 'bootstrap';

class Intro_Text extends React.Component{
    render() {
        return (
            <div id='intro_text'>
                <div id='big-intro-text'>IELTS SCHOLAR</div>
                <br />
                <div id='medium-intro-text'>TẤT CẢ VÌ HỌC VIÊN</div>
                <br />
                <div>
                    <ul id='intro_list'>
                        <li className = 'list_item'><span className='small-intro-text' onClick={() => changeCarousel(0)}>alkdlaskjdlkasj</span></li>
                        <li className = 'list_item'><span className='small-intro-text' onClick={() => changeCarousel(1)}>alkdlaskjdlkasj</span></li>
                        <li className = 'list_item'><span className='small-intro-text' onClick={() => changeCarousel(2)}>alkdlaskjdlkasj</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

function changeCarousel(index) {
    var indicators = document.getElementsByClassName("carousel-indicators")[0]
    for (var indicator of indicators.children) {
        if (indicator.ariaLabel === ("Slide " + (index+1).toString())) {
            indicator.click();
        }
    }
}

export default Intro_Text;