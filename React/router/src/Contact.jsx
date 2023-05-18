import "./Contact.css";
const Contact = () => {
  return (
    <>
        {/*creating the main content area */}
        <main className="mainWrapper">
             {/*left div for showing the submitted response*/}
             <div className="mainLeft">
                <h2>User Output Board</h2>
                <form className="mainLeftDetails">
                    <input className="enterName" type="text" readonly placeholder="User Entered Name"/>
                    <input className="enterMail" type="email" readonly placeholder="User Entered Email"/>
                    <textarea className="enterMessage" readonly placeholder="User Entered Message"></textarea>
                    <button type="reset">Reset</button>
                </form>
             </div>
              {/*right div for accpeting the user input through the form*/}
            <div className="mainRight">
                <h2>User Input Board</h2>
                <form>
                    <input className="userName" type="text" placeholder="Enter Your Name" required/>
                    <input className="userEmail" type="email" placeholder="Enter Your Email" required/>
                    <textarea className="userMessage" placeholder="Message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
        
    </>
  )
}

export default Contact
