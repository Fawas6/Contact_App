import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

export default function HomePage() {
  return (
    <div>
      <section>
        <header className='header'>
        Contact App<FontAwesomeIcon icon={faAddressBook} />
        </header>
        <div className='body'>
          <form action='' method='POST'>
          <div className="row">
          <div className="form-floating col">
          <input type="text" className="form-control form-control-lg" id="txtfirstname" name="FirstName" placeholder="Name" required></input>
          <label htmlFor="txtfirstname" className="form-label">First Name</label>
          </div>
          <div className="form-floating col">
          <input type="text" className="form-control form-control-lg" id="txtlastname" name="LastName" placeholder="Name" required></input>
          <label htmlFor="txtlastname" className="form-label">Last Name</label>
          </div>
          </div>
          <div className="row">
          <div className="form-floating col">
          <input type="text" className="form-control form-control-lg" id="txtothername" name="OtherName" placeholder="Name"></input>
          <label htmlFor="txtothername" className="form-label">Other Name</label>
          </div>
          <div className="form-floating col">
          <input type="tel" className="form-control form-control-lg" id="tel" name="Phone Number" placeholder="Phone Number" required></input>
          <label htmlFor="txtothername" className="form-label">Phone Number</label>
          </div>
          </div>
          <div className="row">
          <div className="form-floating col">
          <input type="email" className="form-control form-control-lg" id="email" name="Email" placeholder="Email"></input>
          <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating col">
          <textarea className="form-control" name="What's your address?" placeholder="What's your address?" id="txtarea"></textarea>
          <label htmlFor="txtarea">What's your address?</label>
          </div>
          </div>
          <div className="row">
          <div className="form-floating col">
          <input type="text" className="form-control form-control-lg" id="txtacctname" name="AcctName" placeholder="Name" required></input>
          <label htmlFor="txtacctname" className="form-label">Account Name</label>
          </div>
          <div className="form-floating col">
          <input type="number" className="form-control form-control-lg" id="acctnumber" name="Acctnumber" placeholder="Name" required></input>
          <label htmlFor="acctnumber" className="form-label">Account Number</label>
          </div>
          </div>
          <div>
          <select className="selbank" required>
          <option selected disabled>Choose your bank</option>
          <option value="1">GtBank</option>
          <option value="2">Zenith Bank</option>
          <option value="3">UBA</option>
          <option value="4">Wema Bank</option>
          <option value="5">Stanbic IBTC</option>
          <option value="6">Polaris Bank</option>
          <option value="7">Union Bank</option>
          <option value="8">Access Bank</option>
          <option value="9">Fidelity Bank</option>
          <option value="10">FCMB</option>
          </select>
          </div>
          <div className="text-center">
          <input className="btn btn-danger btn-lg" type="reset" value="Restart"></input>
          <button className="btn btn-success btn-lg" type="submit">Add Contact</button>
          </div>
          </form> 
        </div>
      </section>
    </div>
  )
}
