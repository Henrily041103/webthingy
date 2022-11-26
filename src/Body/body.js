import React from 'react';
import Main_Page from './Main_Page/main_page';
import Opening_Slots from './Opening_Slots/Opening_Slots';
import Teachers from './Teachers/Teachers';
import Contacts from './Contacts/Contacts';

class Page_Body extends React.Component{
    render(){
        return (
            <div>
                <section id='main_page'><Main_Page></Main_Page></section>
                <section id='opening_slots'><Opening_Slots></Opening_Slots></section>
                <section id='teachers'><Teachers></Teachers></section>
                {/* <section id='classes'>Classes</section>
                <section id='resources'>Resources</section> */}
                <section id='contacts'><Contacts></Contacts></section>
            </div>
        )
    }
}

export default Page_Body;