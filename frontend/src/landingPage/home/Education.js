import React from 'react';
function Education() {
    return ( 
        <>
        <section className='edu-sec'>
            <div className='container'>
            <div className='row align-items-center edu-row'>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src="media/assets/index-education.svg" alt="Education" className='img-fluid edu-image'></img>
                </div>
                <div className='col-lg-5'>
                   <div>
                     <h3 className='edu-title'>Free and open market education</h3>
                    <div className='edu-text'>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='edu-link' href="#">Varsity <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                   </div>
                   <div className='edu-text edu-block'>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className='mt-3 edu-link' href="#">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>

                   </div>
                </div>
            </div>
            </div>
        </section>
        </>
     );
}

export default Education;
