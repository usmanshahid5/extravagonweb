import React from 'react';

class SignIn extends React.Component {
  render() {
    return (
      <div id="mdl-signin" className="mdl-wrap mdl-wrap--full-screen">
        <div id="signin" className="mdl mdl--full-screen hidden-ib active">
          <div className="mdl__fs-header">
            <div className="mdl__fs-header-title title-h-5">User authorization</div>
            <button className="mdl__cross js-mdl-close"></button>
          </div>
          <div className="mdl__fs-body">
            <div className="mdl__fs-content center col-12">
              <div className="mdl__signin">
                <div className="mdl__signin-left">
                  <h2 className="title-h-2 t-l t-s-l b-s b-s-s">Log in</h2>
                  <div id="login_error" className="banner banner--alert mt-l">
                    <svg className="icon icon--24 icon--banner">
                      {/*<use xlink:href="site/images/svg-sprite.svg#icon-alert"></use>*/ }
                    </svg>
                    <div>
                      <span><strong>Authorization Failed</strong></span>
                      <span>Invalid email or password</span>
                    </div>
                  </div>
                  <div className="form t-m t-s-m js-zindex-parent">
                    <div className="form-cell js-zindex">
                      <label htmlFor="" className="form-label">Email</label>
                      <div className="form-item-wrap">
                        <input id="login_email" name="login_email" type="email" className="form-item"
                               onChange={ (e) => console.log(e) }/>
                      </div>
                    </div>
                    <div className="form-cell js-zindex">
                      <label htmlFor="" className="form-label">Password</label>
                      <div className="form-item-wrap">
                        <input id="login_password" name="login_password" type="password"
                               className="form-item form-item--password" onChange={ (e) => console.log(e) }/>
                        <button className="form-item-wrap__btn-password hide"
                                data-password="login_password"></button>
                      </div>
                    </div>
                  </div>
                  <div className="title-h-5 fw-400 t-l t-s-l b-s b-s-s">
                    Forgot your
                    <button type="button" className="link-txt" data-open="password-recovery" data-close="signin">
                      password
                    </button>
                    ?
                  </div>
                  <div className="btn-group">
                    <div className="btn-group__item">
                      <button id="login_form_submit"
                              className="btn btn-primary btn-primary--medium btn-primary--s-default">
                        Log in
                      </button>
                    </div>
                    <div className="btn-group__item">
                      <a
                        className="btn btn-primary btn-primary--outline btn-primary--medium btn-primary--s-default"
                        href="sign-up/index.html" title="Sign Up"> Create account </a>
                    </div>
                  </div>
                </div>
                <div className="mdl__signin-right">
                  <h2 className="title-h-3 t-m b-s dn-m">Or continue with...</h2>
                  <div className="signup-social signup-social--signin t-l t-xs-0">
                    <a id="login_hagerty_oauth" href=""
                       className="signup-social__item signup-social__item--hagerty">Continue with Hagerty</a>
                    <a id="login_facebook_oauth" href=""
                       className="signup-social__item signup-social__item--facebook">Continue with Facebook</a>
                    <a id="login_google_oauth" href=""
                       className="signup-social__item signup-social__item--google">Continue with Google</a>
                    <a id="login_apple_oauth" href=""
                       className="signup-social__item signup-social__item--apple">Continue with Apple</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="password-recovery" className="mdl mdl--full-screen hidden-ib">
          <div className="mdl__fs-header">
            <div className="mdl__fs-header-title title-h-5">Password recovery</div>
            <button className="mdl__cross js-mdl-close" data-close="password-recovery"
                    data-open="password-settings"></button>
          </div>
          <div className="mdl__fs-body">
            <div className="mdl__fs-content center col-12">
              <div className="mdl__signin">
                <div className="offset-left-1 offset-left-m-0 col-r-4-12 col-m-fw">
                  <div id="reset-password" className="hidden-block active">
                    <h2 className="title-h-2 t-l t-s-0 b-s b-s-s ta-m-c">Reset your password</h2>
                    <div className="form t-m t-s-m js-zindex-parent">
                      <div className="form-cell js-zindex">
                        <label htmlFor="" className="form-label">Your email address</label>
                        <div className="form-item-wrap form-item-wrap--fw">
                          <input type="email" className="form-item" onChange={ (e) => console.log(e) }/>
                        </div>
                        <div
                          className="form-item-bg-sign form-item-bg-sign--absolute form-item-bg-sign--error"></div>
                      </div>
                    </div>
                    <div className="btn-group btn-group--m-center mt-s fw">
                      <div className="btn-group__item">
                        <button id="password-recovery-cancel" type="button"
                                className="btn btn-primary btn-primary--outline btn-primary--medium btn-primary--s-default"
                                data-close="password-recovery">
                          <svg className="icon dn-s">
                            {/*<use xlink:href="site/images/svg-sprite.svg#icon-arrow-left"></use>*/ }
                          </svg>
                          <span>Back</span>
                        </button>
                      </div>
                      <div className="btn-group__item">
                        <button id="btn_password_reset"
                                className="btn btn-primary btn-primary--medium btn-primary--s-default">
                          Reset password
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="reset-password-failed" className="ta-m-c hidden-block">
                    <svg className="icon icon--pass-recovery">
                      {/*<use xlink:href="site/images/svg-sprite.svg#icon-clear"></use>*/ }
                    </svg>
                    <h2 className="title-h-2 t-l t-s-l b-s b-s-s">
                      Reset password failed
                    </h2>
                    <div className="txt-1 t-m t-s-m b-s b-s-s">
                      Such user did not register
                    </div>
                    <div className="btn-group">
                      <div className="btn-group__item">
                        <button type="button" className="btn btn-primary btn-primary--medium"
                                data-open="reset-password"
                                data-close="reset-password-failed">
                          Try again
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="reset-password-success" className="ta-m-c hidden-block">
                    <svg className="icon icon--pass-recovery">
                      {/*<use xlink:href="site/images/svg-sprite.svg#icon-check-complete-outline"></use>*/ }
                    </svg>
                    <h2 className="title-h-2 t-l t-s-l b-s b-s-s">
                      Reset password email sent
                    </h2>
                    <div className="txt-1 t-m t-s-m b-s b-s-s">
                      To complete your password reset, please check the email we sent you.
                    </div>
                    <div className="btn-group">
                      <div className="btn-group__item">
                        <button id="password_return_to_login" type="button"
                                className="btn btn-primary btn-primary--medium" data-open="reset-password"
                                data-close="reset-password-success">
                          Return to previous page
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;