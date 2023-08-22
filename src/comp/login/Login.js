import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { gsap } from "gsap";
import '../css/loginpage.css';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [successmsg, setsuccessmsg] = useState("");
    const [errormsg, seterrormsg] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();

    const errorMsgRef = useRef(null);
    const successMsgRef = useRef(null);
    const buttonRef = useRef(null);

    const primaryColor = "#56B280"; // Set primary color here

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
            animateError();
            return;
        }

        if (!isPasswordValid(password)) {
            seterrormsg("Password must be at least 8 characters");
            animateError();
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setsuccessmsg("Logged in successfully");
                animateSuccess();
                setemail("");
                setpassword("");
                setTimeout(() => {
                    setsuccessmsg("");
                    navigate("/");
                }, 1000);
            })
            .catch((error) => {
                seterrormsg("Login failed. Please check your credentials.");
                animateError();
            });
    };

    const animateError = () => {
        gsap.to(errorMsgRef.current, { opacity: 1, duration: 0.3, y: -10, ease: "power2.out" });
        setTimeout(() => {
            gsap.to(errorMsgRef.current, { opacity: 0, duration: 0.3, y: 0, ease: "power2.in" });
        }, 2000);
    };

    const animateSuccess = () => {
        gsap.to(successMsgRef.current, { opacity: 1, duration: 0.3, y: -10, ease: "power2.out" });
        setTimeout(() => {
            gsap.to(successMsgRef.current, { opacity: 0, duration: 0.3, y: 0, ease: "power2.in" });
        }, 2000);
    };

    const animateButton = () => {
        gsap.fromTo(buttonRef.current, { scale: 1 }, { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" });
    };

    return (
        <div className="d-flex min-vh-100 justify-content-center align-items-center">
            <div className="card p-4" style={{ borderColor: primaryColor }}>
                <div className="card-body text-center">
                    <h2 className="card-title mb-4" style={{ color: primaryColor }}>Welcome back!</h2>
                    <div ref={successMsgRef} className="alert alert-success mb-3" style={{ opacity: 0 }}>
                        {successmsg}
                    </div>
                    <div ref={errorMsgRef} className="alert alert-danger mb-3" style={{ opacity: 0 }}>
                        {errormsg}
                    </div>
                    <form onSubmit={hendalsubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                onFocus={animateButton}
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
                                onFocus={animateButton}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            ref={buttonRef}
                            style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-3">
                        Don't have an account?{" "}
                        <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
