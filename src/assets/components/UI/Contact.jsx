import React from 'react'
import emailsjs from 'emailjs-com';
import { useRef } from "react";
import maps from '../../images/maps.jpg'


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailsjs.sendForm('service_de6yhir', 'template_8u7vab4', form.current, 'lsezoTTwZcd7bEFnW' )
            .then((result)=>{
                alert('Details Submitted Successfully Thanks!')
            }, (error) =>{
                console.log(error.text);
            });
        
    };
    return (
        <section id='contact' className='pb-16'>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full md:w-1/2 h-300px sm:h-[450px]'>
                        <img title='google-maps' src={maps}
                            className='border-0 w-full h-full' allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></img>
                    </div>

                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <form className='w-full' ref={form} onSubmit={sendEmail}>
                            <div className='mb-5'>
                                <input type='text' name='user_name' placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                            </div>
                            <div className='mb-5'>
                                <input type='text' name='user_email' placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                            </div>
                            <div className='mb-5'>
                                <textarea type='text' name='message' rows={3} placeholder='Write Your Message' className='w-full p-3 focus:outline-none rounded-[5px]'></textarea>
                            </div>

                            <button type='submit' className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white  text-center ease-linear duration-150 hover:bg-black'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact
