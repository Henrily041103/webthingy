import React from 'react';
import items from "./slots.json"
import InfoTable from './InfoTable';
import "./opening_slot_styles.css"

var loadData = () => JSON.parse(JSON.stringify(items)).items;

class OpeningSlots extends React.Component {
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
                    <div className='col-md-8 col-sm-6' id = "slots_title_container">
                        <span id="slots_normal_text">Đăng ký khoá học tại </span>
                        <span id="slots_big_text">IELTS SCHOLAR</span>
                    </div>
                    <span className='col-md-4 col-sm-6' id='support_button_container'>
                        <a id = "support_button" className="btn btn-danger btn-lg" href="https://forms.gle/fJea7Qk72wgKwLA97">
                            <span id="bold"> Đặt Lịch Test Thử</span>
                        </a>
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
        <InfoTable
            name={element["coursename"]}
            link={element["link"]}
            key={element["coursename"]}
            introduction={element["introduction"]}
            target={element["target"]}>
        </InfoTable>
    )
}

export default OpeningSlots;