import React from 'react'
import { Link } from 'react-router-dom'
import './LogginForm.css'
const LogginForm = () => {
  return (
    <div>
   
   <section class="vh-100 gradient-custom ">
  <div class="container py-5 h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div class="bg-dark text-white bg-opacity-50" >
          <div class="card-body p-5 ">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase text-center">Login</h2>
              <p class="text-white-50 mb-5 text-center">Please enter your user and password!</p>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typeEmailX">User</label>
                <input type="text" placeholder='USER' id="typeEmailX" class="form-control form-control-lg" required/>
              </div>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typePasswordX">Password</label>
                <input type="password" placeholder='PASSWORD' id="typePasswordX" class="form-control form-control-lg" required/>
              </div>

              <p class="small mb-5 pb-lg-2"><Link class="text-white-50" to="#!">Forgot password?</Link></p>

              <button class="btn btn-outline-light btn-lg logginBoton" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <Link to="#!" class="text-white me-4"><i class="bi bi-facebook"></i></Link>
                <Link to="#!" class="text-white me-4"><i class="bi bi-twitter"></i></Link>
                <Link to="#!" class="text-white"><i class="bi bi-google"></i></Link>
              </div>

            </div>

            <div>
              <p class="mb-0 text-center">Don't have an account? <Link to="/signup" class="text-white-50 fw-bold">Sign Up</Link>
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