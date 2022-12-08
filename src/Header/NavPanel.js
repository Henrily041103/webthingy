import React from "react";
import NaviButton from "./navi_button";
import FBButton from  "../assets/images/Navbar_Images/facebook.png";
import YTButton from  "../assets/images/Navbar_Images/youtube.png";
import TTButton from  "../assets/images/Navbar_Images/tiktok.png";

class NavPanel extends React.Component{

    render(){
        return (
            <div className="row" id = "navi_buttons_container">
                <div className="col-10" id = "navi_buttons_column">
                    <div className="row">
                        <div className="col-auto">
                            <NaviButton name = "main_page_button" text = "Về IELTS Scholar" link = "main_page"></NaviButton>
                        </div>
                        <div className="col-auto">
                            <NaviButton name = "opening_slots_button" text = "Lịch khai giảng" link = "opening_slots"></NaviButton>
                        </div>
                        <div className="col-auto">
                            <NaviButton name = "teachers_button" text = "Giảng viên" link = "teachers"></NaviButton>
                        </div>
                        {/* <div className="col-auto">
                            <NaviButton name = "studentm_button" text = "Khoảnh khắc học viên" link = "studentm"></NaviButton>
                        </div>
                        <div className="col-auto">
                            <NaviButton name = "estudent_button" text = "Học viên ưu tú" link = "estudent"></NaviButton>
                        </div> */}
                        <div className="col-auto">
                            <NaviButton name = "event_button" text = "Sự kiện" link = "events"></NaviButton>
                        </div>
                        <div className="col-auto">
                            <NaviButton name = "contacts_button" text = "Liên hệ" link = "contacts"></NaviButton>
                        </div>
                    </div>
                </div>
    
                <div className="col-2" id = "media_buttons_column">
                    <div className="row">
                            <a className="col-4" href="https://www.facebook.com/ieltsscholar.center"><img src={FBButton} alt ="facebook_button"></img></a>
                            <a className="col-4" href="https://www.youtube.com/@ieltsscholar7948"><img src={YTButton} alt ="youtube_button"></img></a>
                            <a className="col-4" href="https://www.tiktok.com/@ielts_scholar?_t=8Y0KIYQgTGT&_r=1"><img src={TTButton} alt ="tiktok_button"></img></a>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default NavPanel;