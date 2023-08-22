import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Fierbas/fierbasconfig";
import { collection, addDoc } from "firebase/firestore";

const Register = () => {
    const navigate = useNavigate();

    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [successmsg, setsuccessmsg] = useState("");
    const [errormsg, seterrormsg] = useState("");

    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isPasswordValid = (password) => {
        return password.length >= 8;
    };

    const hendalsubmit = (e) => {
        e.preventDefault();

        if (!isEmailValid(email)) {
            seterrormsg("Invalid email format");
            return;
        }

        if (!isPasswordValid(password)) {
            seterrormsg("Password must be at least 8 characters");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                addDoc(collection(db, "user"), {
                    username: username,
                    email: email,
                    password: password,
                    uid: user.uid
                }).then(() => {
                    setsuccessmsg("Registration successful");
                    setusername("");
                    setemail("");
                    setpassword("");
                    setTimeout(() => {
                        setsuccessmsg("");
                        navigate("/");
                    }, 1000);
                }).catch((error) => {
                    if (error.message === "Firebase: Error (auth/invalid-email).") {
                        seterrormsg("Please fill all required fields");
                    }
                    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                        seterrormsg("User already exists");
                    }
                });
            });
    };

    const primaryColor = "#56B280";

    return (
        <div className="d-flex min-vh-100 justify-content-center align-items-center">
            <div className="card p-4" style={{ borderColor: primaryColor }}>
                <div className="card-body text-center">
                    <h2 className="card-title mb-4" style={{ color: primaryColor }}>Welcome</h2>
                    <div className="alert alert-success mb-3" style={{ opacity: successmsg ? 1 : 0 }}>
                        {successmsg}
                    </div>
                    <div className="alert alert-danger mb-3" style={{ opacity: errormsg ? 1 : 0 }}>
                        {errormsg}
                    </div>
                    <form onSubmit={hendalsubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="Username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="Password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-3">
                        Already have an account? {" "}
                        <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
