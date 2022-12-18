import React from 'react';
import IntroImages from './IntroImages';
import IntroText from './IntroText';
import "./main_page_styles.css"

class MainPage extends React.Component{
    render(){
        return (
            <section className='mp row' id='main_page'>
                <div className='col-md-6'>
                    <IntroText></IntroText>
                </div>
                <div className='col-md-6' id='mp_carousel_container'>
                    <IntroImages></IntroImages>
                </div>
            </section>
        )
    }
}

export default MainPage;