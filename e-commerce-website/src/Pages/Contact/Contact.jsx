import React from 'react'

function Contact() {
  return (
    <div>
        <div>
            <div>
                <div>
                    <h2>#Contact Us</h2>
                    <form >

                        <div>
                            <div>
                                <h4>Name</h4>
                            </div>
                            <div>
                                <input type="text" placeholder='Name' value='' name='' />
                            </div>
                        </div>

                        <div>
                            <div>
                                <h4>E-mail</h4>
                            </div>
                            <div>
                                <input type="email" placeholder='Email' value='' name='' />
                            </div>
                        </div>

                        <div>
                            <div>
                                <h4>Subject</h4>
                            </div>
                            <div>
                                <input type="text" placeholder='Subject' value='' name='' />
                            </div>
                        </div>

                        <div>
                            <div>
                                <h4>Message</h4>
                            </div>
                            <div>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact