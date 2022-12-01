import React from 'react';
import items from "./slots.json"
import Info_Table from './Info_Table';
import "./opening_slot_styles.css"

var loadData = () => JSON.parse(JSON.stringify(items)).items;

class Opening_Slots extends React.Component {
    renderAll() {
        var item_list = [];
        for (var element of loadData()) {
            item_list.push(renderInfo(element));
        }
        return item_list;
    }

    render() {
        return (
            <section id="opening_slots">
                <div className='row' id="slots_titlebar_container">
                    <div className='col-8' id = "slots_title_container">
                        <span id="slots_normal_text">Đăng ký khoá học tại </span>
                        <span id="slots_big_text">IELTS SCHOLAR</span>
                    </div>
                    <span className='col-4' id='support_button_container'>
                        <button onClick={null} id="support_button" className="btn btn-danger btn-lg">
                            <span id="button_text"> Đặt Lịch Test Thử</span>
                        </button>
                    </span>
                </div>

                <div className='row gx-10' id = "table_container">
                    {this.renderAll()}
                </div>
            </section>
        )
    }
}

function renderInfo(element) {
    return (
        <Info_Table
            name={element["coursename"]}
            date={element["date"]}
            time={element["time"]}
            place={element["place"]}
            link={element["link"]}
            key={element["coursename"]}
            status={element["status"]}>
        </Info_Table>
    )
}

export default Opening_Slots;