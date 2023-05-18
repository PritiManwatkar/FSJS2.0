import avatar from "./images/task4img.png"
const Home = () => {
  return (
    <>
        {/*Hero Section*/}
        <section className="hero-section">
            {/*Left Div for Details*/}
            <div className="hero-left-section">
                <h1>Hello, I am a <span>Web Developer</span></h1>
                <p>I am an aspiring <span>Full Stack JavaScript Developer</span>,<br />
                who is currently working as <span>a Freelancer</span> for <br />
                <span>National and International Client</span>.
                </p>
            </div>
            {/*Right Div for Image and Button*/}
            <div className="hero-right-section">
                <img src={avatar} alt="Avatar"/>
                {/*div for putting the button*/}
                <div className="hero-right-section-btns">
                    <button>Chat With Me</button>
                </div>
             </div>
        </section>
    </>
  )
}

export default Home
