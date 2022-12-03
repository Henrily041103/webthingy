import React from 'react';
import Main_Page from './Main_Page/main_page';
import Opening_Slots from './Opening_Slots/Opening_Slots';
import Teachers from './Teachers/Teachers';
import EStudent from "./ExceptionalStudents/EStudent"
import StudentM from './StudentMoments/StudentM';
import Contacts from './Contacts/Contacts';
import "./body.css"
import fb from "../assets/images/fb_button.png"
import zalo from "../assets/images/zalo_button.png"
import call from "../assets/images/call_button.png"

class Page_Body extends React.Component{
    render(){
        return (
            <main>
                <Main_Page></Main_Page>
                <Opening_Slots></Opening_Slots>
                <Teachers></Teachers>
                <StudentM></StudentM>
                <EStudent></EStudent>
                <Contacts></Contacts>
                <p id = 'button_box'>
                    <a className='SocMed' href='#'><img src = {fb} alt ="Contact Facebook"></img></a>
                    <a className='SocMed' href='#'><img src = {zalo} alt ="Contact Zalo"></img></a>
                    <button className='SocMed' onClick={openOptions}><img src = {call} alt ="Call Us"></img></button>
                    <span id='callOptionsBox'>
                        <a className='callOptions' href="tel:+84966 13 15 14">Gọi điện thoại cho trung tâm </a>
                        <a className='callOptions' href='mailto:ieltsscholar.center@gmail.com?subject=Yêu cầu gọi lại'>Gửi mail yêu cầu gọi lại</a>
                    </span>
                </p>
            </main>
        )
    }
}

function openOptions() {
    var box = document.getElementById('callOptionsBox');
    if (box.style.display === "block") {
        box.style.display = "none";
    }
    else box.style.display = "block";
}

export default Page_Body;