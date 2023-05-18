import "./About.css";
const About = () => {
  return (
    <>
        {/*creating the FAQ section*/}
        <div className="accordian-wrapper">
            <div className="accordian">
                <h3>Experience (Employee)</h3>
                <p>I had worked for Microsoft and Google for around five years. So I have a good exposure of top MNC and work culture.</p>
            </div>
            <div className="accordian">
                <h3>Experience (Freelancer)</h3>
                <p>After resigning from the Google, I became a full time Freelancer. I am doing this full time work from more than 5 Years.</p>
            </div>
            <div className="accordian">
                <h3>Achievement</h3>
                <p>I have been awarded with best influencer of 2021. I am also one of the top contributor of the open source projects over the Github, which can be seen in my Github profile.</p>
            </div>
            <div className="accordian">
                <h3>Hobbies</h3>
                <p>Some of my popular hobbies are travelling and exploring the new technologies from all over the world.</p>
            </div>
        </div>
    </>
  )
}

export default About
