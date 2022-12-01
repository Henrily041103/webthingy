import React from "react";
import MediaButton from "./media_button";
import NaviButton from "./navi_button";
import FBButton from  "../assets/images/Navbar_Images/facebook.png";
import YTButton from  "../assets/images/Navbar_Images/youtube.png";
import TTButton from  "../assets/images/Navbar_Images/tiktok.png";

class NavPanel extends React.Component{

    render(){
        return (
            <div className="row" id = "navi_buttons_container">
                <div className="col-8" id = "navi_buttons_column">
                    <div className="row">
                        <div className="col">
                            <NaviButton name = "main_page_button" text = "Về IELTS Scholar" link = "main_page"></NaviButton>
                        </div>
                        <div className="col">
                            <NaviButton name = "opening_slots_button" text = "Lịch khai giảng" link = "opening_slots"></NaviButton>
                        </div>
                        <div className="col">
                            <NaviButton name = "teachers_button" text = "Giảng viên" link = "teachers"></NaviButton>
                        </div>
                        <div className="col">
                            <NaviButton name = "studentm_button" text = "Khoảng khắc học viên" link = "studentm"></NaviButton>
                        </div>
                        <div className="col">
                            <NaviButton name = "estudent_button" text = "Học viên ưu tú" link = "estudent"></NaviButton>
                        </div>
                        <div className="col">
                            <NaviButton name = "contacts_button" text = "Liên hệ" link = "contacts"></NaviButton>
                        </div>
                    </div>
                </div>
    
                <div className="col-3" id = "media_buttons_column">
                    <div className="row">
                        <span className="float-right">
                            <span className="col-4">
                                <MediaButton name = "facebook_button" img = {FBButton} link = "FB"></MediaButton>
                            </span>
                            <span className="col-4">
                                <MediaButton name = "youtube_button" img = {YTButton} link = "YT"></MediaButton>
                            </span>
                            <span className="col-4">
                                <MediaButton name = "tiktok_button" img = {TTButton} link = "TT"></MediaButton>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default NavPanel;