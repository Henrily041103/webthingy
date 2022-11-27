import React from 'react';
import Main_Page from './Main_Page/main_page';
import Opening_Slots from './Opening_Slots/Opening_Slots';
import Teachers from './Teachers/Teachers';
import Contacts from './Contacts/Contacts';
import "./body.css"
import fb from "../assets/images/fb_button.png"
import zalo from "../assets/images/zalo_button.png"
import call from "../assets/images/call_button.png"

class Page_Body extends React.Component{
    render(){
        return (
            <main>
                <section id='main_page'><Main_Page></Main_Page></section>
                <section id='opening_slots'><Opening_Slots></Opening_Slots></section>
                <section id='teachers'><Teachers></Teachers></section>
                <section id='contacts'><Contacts></Contacts></section>
                <p id = 'button_box'>
                    <button className="rounded-circle"><img src = {fb} alt ="Contact Facebook"></img></button>
                    <button className="rounded-circle"><img src = {zalo} alt ="Contact Zalo"></img></button>
                    <button className="rounded-circle"><img src = {call} alt ="Call Hotline"></img></button>
                </p>
            </main>
        )
    }
}

export default Page_Body;