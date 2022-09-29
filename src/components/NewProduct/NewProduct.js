import React, { useContext } from 'react'
import { Context } from '../../Store/Store'
import './NewProduct.css'

const NewProduct = () => {
    const {productoinfocap}= useContext(Context)
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
                        New Product
                      </h3>
                    <div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label" for="form3Examplev2">
                              Brand
                            </label>
                            <input
                              type="text"
                              onChange={productoinfocap}
                              id="form3Examplev2"
                              className="form-control form-control-lg"
                              required
                              name="brand"
                                     />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 ">
                          <div className="form-outline">
                            <label className="form-label" for="form3Examplev3">
                              Model
                            </label>
                            <input
                              type="text"
                              
                              id="form3Examplev3"
                              className="form-control form-control-lg"
                              name="model"
                              onChange={productoinfocap}
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
                      <h3 className="fw-normal mb-5">Product Details</h3>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea2">
                            Description
                          </label>
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                            name="description"
                            onChange={productoinfocap}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea6">
                            information
                          </label>
                          <input
                            type="text"
                            id="form3Examplea6"
                            className="form-control form-control-lg"
                            name="information"
                            onChange={productoinfocap}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea3">
                            Price
                          </label>
                          <input
                            type="text"
                            id="form3Examplea3"
                         
                            className="form-control form-control-lg"
                            name="price"
                            onChange={productoinfocap}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline form-white">
                            <label className="form-label" for="form3Examplea5">
                              Stock
                            </label>
                            <input
                              type="text"
                              id="form3Examplea5"
                              className="form-control form-control-lg"
                              name="stock"
                              
                              onChange={productoinfocap}
                              required
                            />
                          </div>
                        </div>
                      
                        <div className="col-md-3 mb-2">
                          <div className="form-outline form-white">
                            <label className="form-label" for="type">
                             Type
                            </label>
                            <select className='fw-normal' id='type' name='type' onChange={productoinfocap}>
                                <option className='fw-normal' value='vape'>vape</option>
                                <option className='fw-normal' value='resistencia'>resistencia</option>
                                <option className='fw-normal' value='tank'>tanque</option>
                                <option className='fw-normal' value='e-Liquid'>e-liquid</option>
                            </select>
                            
                          </div>
                        </div>
                        <div className="col-md-7 mb-2">
                          <div className="form-outline form-white">
                            <label className="form-label" for="form3Examplea8">
                              Image
                            </label>
                            <input
                              type="file"
                              id="form3Examplea8"
                              className="form-control form-control-lg"
                              name="image"
                              
                              onChange={productoinfocap}
                              required
                            />
                          </div>
                        </div>
                     

                    <button onClick={'checkout'}>checkout</button>
                    
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

export default NewProduct