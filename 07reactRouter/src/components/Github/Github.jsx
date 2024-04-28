import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState([])

  // using below in a method with router loader
  // useEffect(() => {
  //   fetch("https://api.github.com/users/himanshugupta0158")
  //   .then((res)=>res.json())
  //   .then((res)=>{
  //     console.log(res)
  //     setData(res)
  //   })
  // }, []);

  return (
    <div className='text-center bg-gray-600 text-white 
    font-extrabold m-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="github_profile_pic"  width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/himanshugupta0158")
  return response.json()
  
}