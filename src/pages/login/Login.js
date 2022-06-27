import React from 'react';
import "./login.scss";

const Login = () => {
    return (
        <div className="container">
            
                <div className=" d-flex justify-content-center align-items-center">
                <div >
                    {/* Pills navs */}
                    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">ورود</a>
                        </li>
                        <li className="nav-item" role="presentation">
                        <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">ثبت نام</a>
                        </li>
                    </ul>
                    {/* Pills navs */}
                    {/* Pills content */}
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form>
                            <div className="text-center mb-3">
                            <p>ورود با :</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i class="ri-facebook-circle-fill"></i>
                            </button>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i class="ri-google-fill"></i>
                            </button>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i class="ri-twitter-fill"></i>
                            </button>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i class="ri-github-fill"></i>
                            </button>
                            </div>
                            <p className="text-center">یا :</p>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" />
                            <label className="form-label" htmlFor="loginName">ایمیل یا نام کاربری</label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" htmlFor="loginPassword">رمز ورود</label>
                            </div>
                            {/* 2 column grid layout */}
                            <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                {/* Checkbox */}
                                <div className="form-check mb-3 mb-md-0">
                                <input className="form-check-input" type="checkbox" defaultValue id="loginCheck" defaultChecked />
                                <label className="form-check-label" htmlFor="loginCheck"> مرا به خاطر بسپار </label>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                                {/* Simple link */}
                                <a href="#!">رمز عبور را فراموش کره اید?</a>
                            </div>
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary btn-block mb-4">فرستادن</button>
                            {/* Register buttons */}
                            <div className="text-center">
                            <p>عضو نیستید؟ <a href="#!">ثبت نام</a></p>
                            </div>
                        </form>
                        </div>
                        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <form>
                            <div className="text-center mb-3">
                            <p>ورود با:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i class="ri-facebook-circle-fill"></i>                            </button>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i class="ri-google-fill"></i>                            </button>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i class="ri-twitter-fill"></i>                            </button>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i class="ri-github-fill"></i>                            </button>
                            </div>
                            <p className="text-center">یا:</p>
                            {/* Name input */}
                            <div className="form-outline mb-4">
                            <input type="text" id="registerName" className="form-control" />
                            <label className="form-label" htmlFor="registerName">نام</label>
                            </div>
                            {/* Username input */}
                            <div className="form-outline mb-4">
                            <input type="text" id="registerUsername" className="form-control" />
                            <label className="form-label" htmlFor="registerUsername">نام کاربری</label>
                            </div>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                            <input type="email" id="registerEmail" className="form-control" />
                            <label className="form-label" htmlFor="registerEmail">ایمیل</label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                            <input type="password" id="registerPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerPassword">رمز عبور</label>
                            </div>
                            {/* Repeat Password input */}
                            <div className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerRepeatPassword">تکرار رمز عبور</label>
                            </div>
                            {/* Checkbox */}
                            <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" defaultValue id="registerCheck" defaultChecked aria-describedby="registerCheckHelpText" />
                            <label className="form-check-label" htmlFor="registerCheck">
                                با قوانین موافقم
                            </label>
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary btn-block mb-3">ورود</button>
                        </form>
                        </div>
                    </div>
                    {/* Pills content */}
                    </div>
                </div>
            </div>

    
    );
};

export default Login;