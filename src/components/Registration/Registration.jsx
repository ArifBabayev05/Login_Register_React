import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from '../Login/Login';


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // Form Submit
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("UserEmail", JSON.stringify(email));
            localStorage.setItem("UserPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");
            setLogin(!login)

        }

    }

    // Go to the login page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info
    function infoClick() {
        setInfo(!info)
    }



    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container" onClick={infoClick}>
                    <h4 className="btn btn-dark btn-lg btn-block">Company Info</h4>
                </div>
            </nav>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Phone Number.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact number" onChange={(event) => setPhone(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Professions</label>
                    <Form.Control as="select" onChange={(event) => setProfession(event.target.value)} >
                        <option>Choose Your Professions</option>
                        <option>Custom Developer</option>
                        <option>Designer</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                    </Form.Control>
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >Log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        I think you are in hurry! But every section is important! :)
                </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                    <p><strong>Company:</strong> Code Academy</p>
                    <p><strong>Address:</strong> Nizami küçəsi 203B, AF Business House, 2-ci mərtəbə, Baku 1000</p>
                    <p><strong>Phone:</strong> (012) 310 01 13</p>
                    <p><strong>Email:</strong> info@code.edu.az</p>
                </div>}
        </>
    )
}

export default Registration
