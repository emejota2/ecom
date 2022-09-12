import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'
import './LogginForm.css'
const LogginForm = () => {
  const {loggin, userlog, error} = useContext(Context)
  return (
    <div>
   
   <section className="vh-100 gradient-custom ">
  <div className="container py-5 h-100 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div className="bg-dark text-white bg-opacity-50" >
          <div className="card-body p-5 ">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase text-center">Login</h2>
              <p className="text-white-50 mb-5 text-center">Please enter your email and password!</p>
              {
                error ?
                    <div className='alert alert-danger' role='alert'>
                      {error}
                    </div>
                    : ''
              }

              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typeEmailX">Email</label>
                <input type="email" placeholder='USER' id="typeEmailX" onChange={userlog} name='email' className="form-control form-control-lg" required/>
              </div>

              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typePasswordX">Password</label>
                <input type="password" placeholder='PASSWORD' id="typePasswordX" onChange={userlog} name='password' className="form-control form-control-lg" required/>
              </div>

              <p className="small mb-5 pb-lg-2"><Link className="text-white-50" to="#!">Forgot password?</Link></p>

              <button className="btn btn-outline-light btn-lg logginBoton" onClick={loggin} type="submit">Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <Link to="#!" className="text-white me-4"><i className="bi bi-facebook"></i></Link>
                <Link to="#!" className="text-white me-4"><i className="bi bi-twitter"></i></Link>
                <Link to="#!" className="text-white"><i className="bi bi-google"></i></Link>
              </div>

            </div>

            <div>
              <p className="mb-0 text-center">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    
  )
}

export default LogginForm