import React, { useContext } from 'react'
import { Context } from '../../Store/Store'
import './CheckForm.css'

const CheckForm = () => {
    const {cartCheck, email, tel,city, province, firstName, lastName, address, country, checkout} = useContext(Context)
  return (
    <section className=" formbody">
      <div className="container ">
        <div className="ro d-flex justify-content-center align-items-center">
          <div className="col-12">
            <div className=" card-registration card-registration-2 card2">
              <div className="card-body ">
                <div className="row g-0">
                  <div className="">
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
                              value={firstName}
                              id="form3Examplev2"
                              className="form-control form-control-lg"
                              required
                              name="first_name"
                              onChange={cartCheck}
                                     />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 ">
                          <div className="form-outline">
                            <label className="form-label" for="form3Examplev3">
                              Last name
                            </label>
                            <input
                              type="text"
                              value={lastName}
                              id="form3Examplev3"
                              className="form-control form-control-lg"
                              name="last_name"
                              onChange={cartCheck}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      </div>
                        
                      </div>

                    </div>
                  </div>
                  <div className=" text-white">
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
                            value={address}
                            onChange={cartCheck}
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
                            value={country}
                            onChange={cartCheck}
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
                            value={province}
                            className="form-control form-control-lg"
                            name="province"
                            onChange={cartCheck}
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
                              value={city}
                              onChange={cartCheck}
                              required
                            />
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
                              onChange={cartCheck}
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
                              value={tel}
                              onChange={cartCheck}
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
                            value={email}
                            onChange={cartCheck}
                            required
                          />
                        </div>
                      </div>
                    <button onClick={checkout}>checkout</button>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckForm