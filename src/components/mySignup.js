
import React       from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth  from '../GoogleAuth';
class MySignIn extends  React.Component{
  render() {
    return (
      <div>
        <section>
          <div className="container py-4 h-100" >
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-9 col-md-9 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong" style={{borderRadius: "1rem",
                  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                  <div className="card-body p-5 text-center">

                    <h3 className="mb-3">Sign Up</h3>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="name" style={{float:"left", width:"80%"}}>Full Name</label>
                      <input type="name" id="name" className="form-control form-control-lg"
                             style={{height:"38px", fontSize:"0.6 rem"}}/>

                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typeEmailX-2" style={{float:"left"}}>Email</label>
                      <input style={{height:"38px", fontSize:"1rem"}} type="email" id="typeEmailX-2" className="form-control form-control-lg"/>

                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typePasswordX-2" style={{float:"left"}}>Password</label>
                      <input style={{height:"38px", fontSize:"1rem"}} type="password" id="typePasswordX-2" className="form-control form-control-lg"/>

                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typePasswordX-2" style={{float:"left"}}>Confirm Password</label>
                      <input style={{height:"38px", fontSize:"1rem"}} type="password" id="typePasswordX-2" className="form-control form-control-lg"/>

                    </div>

                    <button className="btn btn-primary btn-lg btn-block" type="submit" style={{borderRadius:"10px",justifyContent:"center", borderStyle:"none", backgroundColor: "#2196F3"}}>SignUp</button>

                    <hr className="my-3"/>

                    <button className="btn btn-lg btn-block btn-primary" style={ { backgroundColor: "#dd4b39",borderRadius:"10px",justifyContent:"center", borderStyle:"none", minHeight:"40px" } }
                            type="submit"><i className="fab fa-google me-2"></i> <GoogleAuth/>
                    </button>
                    <button className="btn btn-lg btn-block btn-primary mb-2" style={ { backgroundColor: "#3b5998", borderRadius:"10px",justifyContent:"center", borderStyle:"none" } }
                            type="submit"><i className="fab fa-facebook-f me-2"></i>Sign up with facebook
                    </button>
                    <hr className="my-2"/>
                    <NavLink
                      className="mh-nav__item"
                      to={ { pathname: '/SignIn' } }
                      exact
                    >
                      <button className="btn btn-block btn-primary mb-2" style={ {backgroundColor:"rgb(59, 89, 152)", borderRadius:"10px" ,justifyContent:"center", minHeight:"40px", borderStyle:"none"} }
                              type="submit"><i className="fab fa-facebook-f me-2"></i>Already a member?
                      </button>
                    </NavLink>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }}
export default MySignIn;