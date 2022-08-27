import { useState } from "react"
import emailjs from '@emailjs/browser';

const serviceId = process.env.REACT_APP_SERVICE_ID
const templateId = process.env.REACT_APP_TEMPLATE_ID
const publicKey = process.env.REACT_APP_PUBLIC_KEY

const Form = () => {
  const [userInfo, setUserInfo] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send(serviceId, templateId,{
      user_name: userInfo.user_name,
      user_lastName: userInfo.user_lastName,
      user_mail: userInfo.user_mail,
      select: userInfo.select,
      }, publicKey)
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  const handleChange = (evt) => {
    const { target } = evt
    const { name, value} = target

    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  return (
    <form className="App-form">
      <h2>Craft</h2>
      <h3>Free Teams Trials for 30 days</h3>
      <p>Required information *</p>
      <div className="App-form-name">
      <div className="App-form-name-input">
        <label for="name">First Name:</label>
        <input type="name" id="name" name="user_name" onChange={handleChange}/>
      </div>
      <div className="App-form-name-input">
        <label for="lastName">Last Name:</label>
        <input type="name" id="lastName" name="user_lastName" onChange={handleChange}/>
      </div>
      </div>
      <div className="App-form-input">
        <label for="email">Work Email*:</label>
        <input type="email" id="email" name="user_mail" onChange={handleChange}/>
      </div>
      <div className="App-form-input">
      <label for="name">Industry:</label>
        <select name="select" onChange={handleChange}>
          <option value="Industry1">Industry 1</option>
          <option value="Industry2">Industry 2</option>
          <option value="Industry3">Industry 3</option>
        </select>
      </div>
      <button className="App-form-button" type="submit" onClick={handleSubmit}>Get started</button>
    </form>
  )
}

export default Form