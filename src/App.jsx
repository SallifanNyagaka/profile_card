import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//This project is about creating a profile card. It will be used later. It has dummy data and essential components


function App() {


  return (
    <>
      <h2>Profile card project</h2>
      <Parent />

    </>
  )
}

//The profile card components. Images mostly.
const Parent = ()=>{
  
  const profileImages =[
    {
      src:'/assets/icons/facebook.png',
      alt:'facebook icon',
      className:'icon',
      id:'facebook',
    },
    {
      src:'/assets/icons/instagram.png',
      alt:'instagram icon',
      className:'icon',
      id:'instagram',
    },
    {
      src:'/assets/icons/linkedin.png',
      alt:'linkedin icon',
      className:'icon',
      id:'facebook',
    },
    {
      src:'/assets/icons/.png',
      alt:'facebook icon',
      className:'icon',
      id:'facebook',
    },
    {
      src:'/assets/icons/facebook.png',
      alt:'facebook icon',
      className:'icon',
      id:'facebook',
    },
  ];

  <div className='parent'>

    <ProfileImages_Icons />
    <Button />
  </div>

}

const ProfileImages_Icons = (props)=>{
  return(
    <>
      <figure>
       <img src={props.profilePhoto} className={props.className} alt={props.ImgAlt} />
      </figure>
    </> //instead of using <React.Fragment></React.Fragment>
  );
}

const Button = (props)=>{
  return(
    <button type='button' onClick={}>{props.button}</button>
  );
}
export default App
