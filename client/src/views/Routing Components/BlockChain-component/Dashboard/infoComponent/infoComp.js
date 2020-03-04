import React from 'react';
import './infocomp.css';
import src from './loc.svg'
import sorc from './call.svg'
import fbsrc from './facebook.svg'
import youtubesrc from './youtube.svg'


export default class InfoComponenet extends React.Component {
    render() {
        return <>

            <div className='footer-list1'>
                <div className="frstList1">
                    <p className='nav1'>Navigation</p>

                    <ul class="footer-list-simple1">
                        <li>Home</li>
                        <li><a className="link1" href="https://portal.piaic.org/signup" target="_blank"
                            style={{ color: "#fff", fontWeight: "200", textDecoration: "none" }}>
                            Apply
                            </a>
                        </li>
                        <li>How it works</li>
                        <li>Artificial Intelligence</li>
                        <li>Cloud Native and Mobile Web Computing</li>
                        <li>Internet of Things and AI</li>
                        <li>Quantum Computing</li>
                        <li>5G and Software Defined Networking</li>
                        <li>About The President</li>
                        <li>Management Committee</li>
                        <li>Women Inclusion in Technology (WIT)</li>
                    </ul>
                </div>


 

                <div className="mainDiv-2">
                <div className="loc1">
                    <div className="scndmaindiv1">
                    <div className="location1">
                        <p className="text-loc1">Location</p>
                    </div>
                    <div className="headquarter1">
                        PIAIC Headquarters
                </div>
                   <div className="locHistory1" style={{ marginTop: "12px" }}>
                        <div className="address1">
                            <img className="img-loc1" src={src} alt="" />
                            <a className="loc-img1" href="https://goo.gl/maps/UPXtpSiJ5NH2" target="_blank">
                                Plot 245/2 M,  Block 6 PECHS, Karachi, Sindh 75100, Pakistan
                        </a>
                        </div>
                        <div className="call1">
                            <img className="call-img1" src={sorc} alt="" />
                            <span className='phoneNumbeer1'>+92-308-2220203 (WhatsApp as well)</span>

                        </div>
                    </div>
                    <div className="helpLine1">
                        PIAIC Helpline
                    <div>
                            <img className="call-img1" src={sorc} alt="" />
                            <span id="helpnum1" className='phoneNumbeer1'>+92-308-2220203 (WhatsApp as well)</span>
                        </div>
                    </div>
                    <div className="contact1">
                        <div className="cont1">
                            Contact with US
                    </div>
                        <div className="contact-icons1">
                            <img className="iconscontct1" src={fbsrc} alt="" />
                            <img className="youtubicon1" src={youtubesrc} alt="" />
                        </div>
                        </div>
                    </div>
                </div>




                <div className="third-list1" style={{ marginBottom: "40px" }}>
                    <div className="another-adresses1">
                        Karachi Field Office
                    </div>
                    <div>
                        <img className="img-loc1" src={src} alt="" />
                        <a className="loc-img1" href="https://goo.gl/maps/r9yNA488tN52" target="_blank">
                            A-25, Bahadurabad Chowrangi, Karachi, Sindh 74800, Pakistan
                        </a>
                    </div>
                    <div>
                        <img className="call-img1" src={sorc} alt="" />
                        <span id="helpnum1" className='phoneNumbeer1'>+92-311-1729526</span>
                    </div>



                    <div className="another-adresses1">
                        RawalPindi Field Office
                    </div>
                    <div>
                        <img className="img-loc1" src={src} alt="" />
                        <a className="loc-img1"
                            href="https://maps.google.com/maps?q=33.6328413%2C73.0678255&amp;z=17&amp;hl=en"
                            target="_blank">
                            4th-B Rd, Satellite Town, Rawalpindi, Punjab 46300
                             </a>
                    </div>
                    <div>
                        <img className="call-img1" src={sorc} alt="" />
                        <span id="helpnum1" className='phoneNumbeer1'>051-4940669 / 0336-6660215</span>
                    </div>




                    <div className="another-adresses1">
                        Islamabad Field Office
                    </div>
                    <div>
                        <img className="img-loc1" src={src} alt="" />
                        <a className="loc-img1" href="https://goo.gl/maps/1MdVXe9L2j3teDSq9" target="_blank">
                            F-10 Markaz F 10/3 F-10, Islamabad, Islamabad Capital Territory
                        </a>
                    </div>
                    <div>
                        <img className="call-img1" src={sorc} alt="" />
                        <span id="helpnum1" className='phoneNumbeer1'>051-2223191 (WhatsApp as well)</span>
                    </div>




                    <div className="another-adresses1">
                        Faisalabad Field Office
                    </div>
                    <div>
                        <img className="img-loc1" src={src} alt="" />
                        <a className="loc-img1" href="https://maps.app.goo.gl/GkG79ncwNuhFjevG6" target="_blank">
                            Saylani House, 3rd Floor, Lal Mill Chowk, Factory Area, Faisalabad, Punjab
                        </a>
                    </div>
                    <div>
                        <img className="call-img1" src={sorc} alt="" />
                        <span id="helpnum1" className='phoneNumbeer1'>
                            (041) 2417281 / 0337 8659969 (WhatsApp as well)</span>
                    </div>


                </div>

                </div>


            </div>


        </>

    }
}










// import React from 'react';
// import './infocomp.css';
// import src from './loc.svg'
// import sorc from './call.svg'
// import fbsrc from './facebook.svg'
// import youtubesrc from './youtube.svg'


// export default class InfoComponenet extends React.Component {
//     render() {
//         return <>

//             <div className='footer-list'>
//                 <div className="frstList">
//                     <p className='nav'>Navigation</p>

//                     <ul class="footer-list-simple">
//                         <li>Home</li>
//                         <li><a className="link" href="https://portal.piaic.org/signup" target="_blank"
//                             style={{ color: "#fff", fontWeight: "200", textDecoration: "none" }}>
//                             Apply
//                             </a>
//                         </li>
//                         <li>How it works</li>
//                         <li>Artificial Intelligence</li>
//                         <li>Cloud Native and Mobile Web Computing</li>
//                         <li>Internet of Things and AI</li>
//                         <li>Quantum Computing</li>
//                         <li>5G and Software Defined Networking</li>
//                         <li>About The President</li>
//                         <li>Management Committee</li>
//                         <li>Women Inclusion in Technology (WIT)</li>
//                     </ul>
//                 </div>


//                 <div className="scnd-main-div">

              

//                 <div className="loc">
//                     <div className="location">
//                         <p className="text-loc">Location</p>
//                     </div>
//                     <div className="headquarter">
//                         PIAIC Headquarters
//                 </div>
//                     <div className="locHistory" style={{ marginTop: "12px" }}>
//                         <div className="address">
//                             <img className="img-loc" src={src} alt="" />
//                             <a className="loc-img" href="https://goo.gl/maps/UPXtpSiJ5NH2" target="_blank">
//                                 Plot 245/2 M,  Block 6 PECHS, Karachi, Sindh 75100, Pakistan
//                         </a>
//                         </div>
//                         <div className="call">
//                             <img className="call-img" src={sorc} alt="" />
//                             <span className='phoneNumbeer'>+92-308-2220203 (WhatsApp as well)</span>

//                         </div>
//                     </div>
//                     <div className="helpLine">
//                         PIAIC Helpline
//                     <div>
//                             <img className="call-img" src={sorc} alt="" />
//                             <span id="helpnum" className='phoneNumbeer'>+92-308-2220203 (WhatsApp as well)</span>
//                         </div>
//                     </div>
//                     <div className="contact">
//                         <div className="cont">
//                             Contact with US
//                     </div>
//                         <div className="contact-icons">
//                             <img className="iconscontct" src={fbsrc} alt="" />
//                             <img className="youtubicon" src={youtubesrc} alt="" />
//                         </div>

//                     </div>
//                 </div>




//                 <div className="third-list" style={{marginBottom:"40px"}}>
//                     <div className="another-adresses">
//                         Karachi Field Office
//                     </div>
//                     <div>
//                     <img className="img-loc" src={src} alt="" />
//                         <a className="loc-img" href="https://goo.gl/maps/r9yNA488tN52" target="_blank">
//                             A-25, Bahadurabad Chowrangi, Karachi, Sindh 74800, Pakistan
//                         </a>
//                         </div>
//                         <div>
//                             <img className="call-img" src={sorc} alt="" />
//                             <span id="helpnum" className='phoneNumbeer'>+92-311-1729526</span>
//                         </div>



//                         <div className="another-adresses">
//                         RawalPindi Field Office
//                     </div>
//                     <div>
//                     <img className="img-loc" src={src} alt="" />
//                         <a className="loc-img" href="https://maps.google.com/maps?q=33.6328413%2C73.0678255&amp;z=17&amp;hl=en"
//                          target="_blank">
//                              4th-B Rd, Satellite Town, Rawalpindi, Punjab 46300
//                              </a>
//                         </div>
//                         <div>
//                             <img className="call-img" src={sorc} alt="" />
//                             <span id="helpnum" className='phoneNumbeer'>051-4940669 / 0336-6660215</span>
//                         </div>



                        
//                         <div className="another-adresses">
//                         Islamabad Field Office
//                     </div>
//                     <div>
//                     <img className="img-loc" src={src} alt="" />
//                     <a className="loc-img" href="https://goo.gl/maps/1MdVXe9L2j3teDSq9" target="_blank">
//                         F-10 Markaz F 10/3 F-10, Islamabad, Islamabad Capital Territory
//                         </a>
//                         </div>
//                         <div>
//                             <img className="call-img" src={sorc} alt="" />
//                             <span id="helpnum" className='phoneNumbeer'>051-2223191 (WhatsApp as well)</span>
//                         </div>



                        
//                         <div className="another-adresses">
//                         Faisalabad Field Office
//                     </div>
//                     <div>
//                     <img className="img-loc" src={src} alt="" />
//                     <a className="loc-img" href="https://maps.app.goo.gl/GkG79ncwNuhFjevG6" target="_blank">
//                         Saylani House, 3rd Floor, Lal Mill Chowk, Factory Area, Faisalabad, Punjab
//                         </a>
//                         </div>
//                         <div>
//                             <img className="call-img" src={sorc} alt="" />
//                             <span id="helpnum" className='phoneNumbeer'>(041) 2417281 / 0337 8659969 (WhatsApp as well)</span>
//                         </div>

                        
//                 </div>

//                 </div>


//             </div>


//         </>

//     }
// }