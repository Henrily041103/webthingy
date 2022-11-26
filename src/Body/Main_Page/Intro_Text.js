import React from 'react';

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
                        <li className = 'list_item'><span className='small-intro-text'>alkdlaskjdlkasj</span></li>
                        <li className = 'list_item'><span className='small-intro-text'>alkdlaskjdlkasj</span></li>
                        <li className = 'list_item'><span className='small-intro-text'>alkdlaskjdlkasj</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Intro_Text;