


import './contact.css'
import { CustomTitles } from '../../components/custom-titles/CustomTitles';
import {DropdownButton} from '../../components/buttons/DropDownButton';
import { Header } from '../../components/header/Header';
const Contact = () => {
    return ( 
        <>
        <Header />
        <CustomTitles>CONTACTO</CustomTitles>

        {/* <div className="contact-image">
            <img src="#" alt="img" />
        </div> */}

         <div className="info-1">  <DropdownButton options='candelafsg@gmail.com'>EMAIL</DropdownButton></div>
         
                <section className='peoject-info'>

        <div className="info-2"><DropdownButton options=''>INSTAGRAM</DropdownButton></div>
       <div className="info-3"><DropdownButton options=''>WHATSAPP</DropdownButton></div>
        </section>
        </>
     );
}
 
export default Contact;