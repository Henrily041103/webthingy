import React from 'react';
import Intro_Images from './Intro_Images';
import Intro_Text from './Intro_Text';
import "./main_page_styles.css"

class Main_Page extends React.Component{
    render(){
        return (
            <div className='row'>
                <div className='col-6'>
                    <Intro_Text></Intro_Text>
                </div>
                <div className='col-6' id='mp_carousel_container'>
                    <Intro_Images></Intro_Images>
                </div>
            </div>
        )
    }
}

export default Main_Page;