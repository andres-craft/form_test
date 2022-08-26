import { useState } from "react"

const Form = () => {
  const [userInfo, setUserInfo] = useState({})

  const sendEmail = (e) => {
    e.preventDefault()
    alert(`
      name: ${userInfo.user_name}
      last name: ${userInfo.user_lastName}
      email: ${userInfo.user_mail}
      Industry: ${userInfo.select}
    `)
  }

  const handleChange = (evt) => {
    const { target } = evt
    const { name, value} = target

    console.log(evt)
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
      <button className="App-form-button" type="submit" onClick={sendEmail}>Get started</button>
    </form>
  )
}

export default Form