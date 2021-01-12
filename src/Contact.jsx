import React, { useState } from 'react';


function Contact() {
  const [data, setData] = useState({
    FullName: '',
    Phone: '',
    email: '',
    msg: ''
  })

  const EventInput = (e) => {
    const { name, value } = e.target;
    setData((predata => {
      return {
        ...predata,
        [name]: value
      }
    }))
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`I am ${data.FullName}. Contact me on  ${data.Phone} or email me at ${data.email}.${data.msg}`)

  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center font-weight-bold'>Reach Us</h1>
      </div>
      <div className='container Contact_div'>

        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>

            <form w-100 onSubmit={formSubmit}>
              <div className="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1"
                  name="FullName"
                  value={data.FullName}
                  onChange={EventInput}
                  placeholder="Enter Your Name" />
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input type="number" className="form-control"
                  id="exampleFormControlInput1"
                  name="Phone"
                  value={data.Phone}
                  onChange={EventInput}
                  placeholder="Enter Your Number" />
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={EventInput}
                  placeholder="Enter Email Id" />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={EventInput}></textarea>

              </div>
              <button className="btn btn-outline-primary my-3" type="submit">Submit form</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
