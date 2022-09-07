import React, { useContext } from "react";
import { Context } from "../../Store/Store";

import "./RegisterForm.css";

const RegisterForm = () => {
  const {handleChange, crearDatos} = useContext(Context)
  return (
    <section className="pt-5 formbody">
      <div className="container py-5">
        <div className="ro d-flex justify-content-center align-items-center">
          <div className="col-12">
            <div className=" card-registration card-registration-2 card2">
              <div className="card-body bg-dark">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5 card3">
                        General Infomation
                      </h3>
                    <div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label" for="form3Examplev2">
                              First name
                            </label>
                            <input
                              type="text"
                              id="form3Examplev2"
                              className="form-control form-control-lg"
                              required
                              name="first_name"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label" for="form3Examplev3">
                              Last name
                            </label>
                            <input
                              type="text"
                              id="form3Examplev3"
                              className="form-control form-control-lg"
                              name="last_name"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label className="form-label" for="form3Examplev3">
                              Gender
                              </label>
                              <select class="form-select p-3" id="inputGroupSelect02" name="gender"
                              onChange={handleChange}>
                                <option selected>Choose...</option>
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                                <option value="3">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label" for="form3Examplev3">
                              Birth date
                            </label>
                            <input
                              type="date"
                              id="form3Examplev3"
                              min="1920-01-01"
                              className="form-control form-control-lg"
                              name="birthdate"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>


                      <div className="mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" for="form3Examplev4">
                            User name
                          </label>
                          <input
                            type="text"
                            id="form3Examplev4"
                            className="form-control form-control-lg"
                            name='username'
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                          <div className="form-outline">
                            <label className="form-label" for="form3Examplev5">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Examplev5"
                              className="form-control form-control-lg"
                              name='password'
                              
                            onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 bg-indigo text-white">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea2">
                            Address
                          </label>
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                            name="address"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea6">
                            Country
                          </label>
                          <input
                            type="text"
                            id="form3Examplea6"
                            className="form-control form-control-lg"
                            name="country"
                              onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea3">
                            Province
                          </label>
                          <input
                            type="text"
                            id="form3Examplea3"
                            className="form-control form-control-lg"
                            name="province"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-7 mb-4">
                          <div className="form-outline form-white">
                            <label className="form-label" for="form3Examplea5">
                              City
                            </label>
                            <input
                              type="text"
                              id="form3Examplea5"
                              className="form-control form-control-lg"
                              name="city"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-5 mb-4">
                          <div className="form-outline form-white">
                            <label className="form-label" for="form3Examplea4">
                              Zip Code
                            </label>
                            <input
                              type="text"
                              id="form3Examplea4"
                              className="form-control form-control-lg"
                              name="zip"
                              onChange={handleChange}
                              required
                              />
                          </div>
                        </div>
                              </div>


                      <div className="row">
                        <div className="col-md-5 mb-2">
                          <div className="form-outline form-white">
                            <label className="form-label" for="form3Examplea7">
                              Code +
                            </label>
                            <input
                              type="number"
                              id="form3Examplea7"
                              className="form-control form-control-lg"
                              name="phone_code"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-7 mb-2">
                          <div className="form-outline form-white">
                            <label className="form-label" for="form3Examplea8">
                              Phone Number
                            </label>
                            <input
                              type="number"
                              id="form3Examplea8"
                              className="form-control form-control-lg"
                              name="telephone"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea9">
                            Your Email
                          </label>
                          <input
                            type="text"
                            id="form3Examplea9"
                            className="form-control form-control-lg"
                            placeholder="name@example.com"
                            name="email"
                              onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value={true}
                          id="form2Example3c"
                          name="tc"
                              onChange={handleChange}
                         required
                        />
                        <label
                          class="form-check-label text-white ms-3"
                          for="form2Example3"
                        >
                          I do accept the{" "}
                          <a href="#!" className="text-white">
                            <u>Terms and Conditions</u>
                          </a>{" "}
                          of your site.
                        </label>
                      </div>

                      <button
                        type="button"
                        className="btn btn-light btn-lg"
                        data-mdb-ripple-color="dark"
                        onClick={crearDatos}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default RegisterForm;
