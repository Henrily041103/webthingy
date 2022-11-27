import React from 'react';
import logo from "../../assets/images/Footer_Images/footer_logo.png"
import bar from "../../assets/images/Footer_Images/footer_bar.png"
import fb from "../../assets/images/Footer_Images/footer_fb.png"
import yt from "../../assets/images/Footer_Images/footer_yt.png"
import seperator from "../../assets/images/Footer_Images/seperator.png"
import email from "../../assets/images/Footer_Images/email.svg"
import phone from "../../assets/images/Footer_Images/phone.svg"
import location from "../../assets/images/Footer_Images/location.svg"
import "./contacts_styles.css"

class Contacts extends React.Component {
    render() {
        return (
            <footer id = "footer_container">
                <div className='row' >
                    <div className='col-5' id = "links">
                        <div >
                            <img src={logo} alt="" id='footer_logo'></img>
                        </div>
                        <div id="footer_title">
                            Trung Tâm Anh Ngữ<br />
                            <span id='footer_name'>IELTS SCHOLAR</span>
                        </div>
                        <div id="footer_links">
                            <a href ="" ><img src={fb} alt="" className='footer_link_icon'></img></a>
                            <a href ="" ><img src={yt} alt="" className='footer_link_icon'></img></a>
                        </div>
                    </div>
                    <div className='col-7' id='contacts'>
                        <div id ="contacts_title">THÔNG TIN LIÊN HỆ</div>
                        <div className='footer_contact'>
                            <img src={email} className="footer_icon"></img>
                            ieltsscholar.center@gmail.com
                        </div>
                        <div className='footer_contact'>
                            <img src={phone} className="footer_icon"></img>
                            0966 13 15 14
                        </div>
                        <div className='footer_contact'>
                            <img src={location} className="footer_icon"></img>
                            201/11 Lê Văn Viêt, phường Hiệp Phú, Thành phố Thủ Đức
                        </div>
                        <div id = "return">
                            <a href = "#header">Về đầu trang</a>
                        </div>
                    </div>
                </div>
                <img src = {seperator} alt =""></img>
                <div id = "copyright">(C) Coryright 2022 IELTS SCHOLAR. All rights reserved</div>
            </footer>
        )
    }
}

export default Contacts;