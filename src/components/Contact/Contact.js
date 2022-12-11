import React from 'react';
import contact from '../../assets/img/contact-img.svg'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jdeefre', 'template_qo8ne8p', form.current, '6Fi6hgTfPnzsulxjy')
            .then((result) => {
                console.log(result.text);
                toast.success('Email Sent Successfully')
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <p className='text-2xl text-center font-bold mb-4'>Contact Me</p>
                    <form ref={form} onSubmit={sendEmail} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mujahidul Amin</span>
                            </label>
                            <input type="text" 
                            name="user_name" 
                            placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered"
                            name="user_email"
                             />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name="message"  className="textarea textarea-primary" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                        <input className='btn btn-primary' type="submit" value="Send" />
                        </div>
                    </form>
                </div>

                <div className="text-center lg:text-left">
                    <img src={contact} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;