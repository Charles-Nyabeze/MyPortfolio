import React from 'react'
import Typed from "react-typed"
import './Profile.css'

export default function profile() {
  return (
    <div className='profile-container'>
        <div className='profile'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.linkedin.com/in/charles-nyabeze/'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href='https://www.instagram.com/charles.beze/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://twitter.com/0xCharles1'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                </div>
                <div className='details-name'>
                    <span>
                        Hello, I'm <span className='profile-text'>Charles Nyabeze</span>
                    </span>
                </div>
                <div className='details-role'>
                    <span className='primary-text'>
                        <h1>
                        <Typed
                        strings={[
                                "I'm a full stack web developer💻",
                                "I enjoy Venture Capital🕋",
                                "I founded a VC backed startup🌱",
                                "I love writing✍🏿",
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                            />
                        </h1>
                        <span className='details-desc'>
                            Serial learner of things. I create, code, trade, invest, basically, I do dope sh*t.
                        </span>
                    </span>
                </div>
                    <div className='profile-options'>
                            <button className='btn primary-btn'>
                                Hire Me!
                            </button>
                            <a href='growth resume (1) (1).pdf' download='charles nyabeze resume.pdf'>
                                <button className='btn highlighted-btn'>
                                    Get My Resume
                                </button>
                            </a>
                    </div>
            </div>
            <div className='pfp'>
                <div className='pfp-bg'>

                </div>
            </div>
        </div>
    </div>
  )
}

