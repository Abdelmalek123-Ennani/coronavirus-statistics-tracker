import React from 'react'

function MoreInfo() {
    return (
        <section className="moreInfo">
            <h5>What is the COVID-19?</h5>
            <p>
                <span>&lt;</span> Coronaviruses are a family of viruses that can cause illnesses such as the common cold, severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS).<br/> In 2019, a new coronavirus was identified as the cause of a disease outbreak that originated in China
                The virus is now known as the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).<br/> The disease it causes is called coronavirus disease 2019 (COVID-19). In March 2020, the World Health Organization (WHO) declared the COVID-19 outbreak a pandemic.<br/>
                Public health groups, including the U.S. Centers for Disease Control and Prevention (CDC) and WHO, are monitoring the pandemic and posting updates on their websites. These groups have also issued recommendations for preventing and treating the illness  <span>/&gt;</span>
            </p>
            <h5>Symptoms ?</h5>
            <ul>
                 <li>Fever</li>
                 <li>Cough</li>
                 <li>Shortness of breath</li>
            </ul>
            <h5>How COVID-19 spreads ?</h5>
                <ul>
                    <li><h4>COVID-19 spreads very easily from person to person</h4></li>
                    <p>The virus that causes COVID-19 appears to spread more efficiently than influenza but not as efficiently as measles, which is among the most contagious viruses known to affect people.</p>
                    <li><h4>COVID-19 most commonly spreads during close contact</h4></li>
                    <ul>
                        <li>When people with COVID-19 cough, sneeze, sing, talk, or breathe they produce respiratory droplets</li>
                        <li>nfections occur mainly through exposure to respiratory droplets when a person is in close contact with someone who has COVID-19</li>
                        <li>With passing time, the amount of infectious virus in respiratory droplets also decreases.</li>
                        <li>As the respiratory droplets travel further from the person with COVID-19, the concentration of these droplets decreases</li>
                    </ul>
                <li><h4>COVID-19 spreads less commonly through contact with contaminated surfaces</h4></li>
                     <ul>
                         <li>Spread from touching surfaces is not thought to be a common way that COVID-19 spreads</li>
                         <li> It is possible that a person could get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or eyes.</li>
                     </ul>
                </ul>

               <p className="aHolder"><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">Read More</a></p>
        </section>
    )
}

export default MoreInfo
