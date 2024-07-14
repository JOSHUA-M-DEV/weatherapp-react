import React from 'react'
import './Form.css';
import { Link ,Outlet} from 'react-router-dom'

const Front = () => {
  const state={
        curDt:new Date().toLocaleString(),
        curDay:new Date().toLocaleString('en-US',{weekday:'long'}),
};
  return (
    <>

    <div>
    <img className="front-3" src="https://t4.ftcdn.net/jpg/05/52/47/31/360_F_552473151_gaBefjYdGK1SNYkQtIfo3HYiXTtj900W.jpg"></img>
    </div>
    <div className='front'>
    <form className='front-1'>
    <h3 className='fronth1'>{state.curDay} <br></br>{state.curDt}</h3><br></br>
   
    <lable>Name: </lable>
    <input type='text' placeholder='Enter Your Name..' ></input><br></br>
   <br></br> <lable>Country: </lable>
   
   <input type='text' placeholder='Enter Your Country..' ></input>
   
   <button type='submit' className='front-2' ><Link to='/abc'>Explore</Link></button>
    
   </form>
 
    </div>
    <div>
    <img className="front-4 " src="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs="></img>
    </div>
    </>
  )
}

export default Front