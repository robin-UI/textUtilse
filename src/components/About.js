import React from 'react'

export default function About(props) {


    // const [myStyle, setMyStyle] = useState({  
    //     color : 'black',
    //     backgroundColor: 'white'
    // })

    // let myStyle = {
    //     color: props.mode === 'light' ? 'dark' : 'light',
    //     backgroundColor: props.mode === 'dark' ? 'light' : 'dark'
    // }


    let myStyle;

    let toggleStyle = (modes) => {
        if (modes === 'light') {
            myStyle = {
                color: 'black',
                backgroundColor: 'white'
            }
        } else {
            myStyle = {
                color: 'white',
                backgroundColor: '#0A1931'
            }
        }
    }

    toggleStyle(props.mode)

    return (
        <div className='container p-4 rounded-3' style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={myStyle}
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown
                            by default, until the collapse plugin adds the appropriate classes
                            that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You
                            can modify any of this with custom CSS or overriding our default
                            variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does
                            limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={myStyle}
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control the
                            overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or overriding
                            our default variables. It's also worth noting that just about any HTML
                            can go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={myStyle}
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden
                            by default, until the collapse plugin adds the appropriate classes
                            that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You
                            can modify any of this with custom CSS or overriding our default
                            variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does
                            limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <h1 className='text-center'>Thank's</h1>
                <p className='text-center'>This website is made posible by CodeWithHarry react tutorial and it is a good corse to learn react tuorial</p>
                <h3 className='text-center'>React Js Tutorials in Hindi</h3>
                <div className="d-flex justify-content-center flex-column mt-2">
                    <a className='d-flex justify-content-center' href="https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" target="_blank" rel="noopener noreferrer"><img src="./hqdefault.jpg" alt="" /></a>
                    <a className='text-center ' href="https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" target="_blank" rel="noopener noreferrer">Click hear</a>
                </div>
                <p className='text-center mt-2'>Complete React Course by CodeWithHarry - Learn ReactJs from scratch in 2022 for FREE.
                    React is a free and open-source JavaScript library used to build user interfaces and single-page web applications. React is developed and managed by Facebook.
                    In this course of React Js, we will cover every topic of React so that we can build engaging single-page web applications. This React course is entirely free, and you don't have to pay a single penny to me.
                    React Js is such a magnificent library that directly competes with a framework such as Angular and Vue.
                    This React Js course is in the Hindi language so that you can understand each concept clearly.
                    So, save this playlist and stay tuned for upcoming videos.</p>
            </div>
        </div>
    )
}
