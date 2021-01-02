import React from 'react';
import One from "../svgs/One.svg";
import Two from "../svgs/Two.svg";
import Three from "../svgs/Three.svg";
import four from "../svgs/four.svg";

function Measures() {
    return (
        <section>
           <div>
               <div><img src={One} alt="mesure1" /> </div>
               <div className="paragraph">
                   <p><q>When You Can't Keep A Safe Distance from Others,<br/>
                      Cover Your mouth and nose with a mask
                   </q></p>
               </div>
           </div>
           <div>
               <div className="paragraph">
                   <p><q>If You Have The Septoms Of CoronaVirus , <br/>
                         Make Sure To Go To Nearest Hospital To Make A Covid19 Test
                   </q></p>
               </div>
               <div><img src={Two} alt="mesure1" /> </div>
           </div>
           <div>
               <div><img src={Three} alt="mesure1" /> </div>
               <div className="paragraph">
                   <p><q>Listen and follow instructions of your gonverement, <br/>
                        Doctors , official media and Protect yourself and your family
                   </q></p>
               </div>
           </div>
           <div>
               <div className="paragraph">
                   <p><q>Clean Hands Often and disinfect frequently touched <br/>
                       Surfaces at home
                   </q></p>
               </div>
               <div><img src={four} alt="mesure1" /> </div>
           </div>
        </section>
    )
}

export default Measures
