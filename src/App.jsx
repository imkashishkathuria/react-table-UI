import React, { useEffect, useState } from 'react'


const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, [])

  return (
    <div className='flex flex-col gap-5 items-center justify-center py-10'>
      <h1 className='text-[40px] text-blue-800 font-bold'>User Access Info</h1>
      <table>
        <thead>
          <tr className='border-2 border-black text-[17px]'>
            <th className='px-7 py-3 border-r-2 border-black'>Human User</th>
            <th className='px-7 py-3 border-r-2 border-black'>Create Date</th>
            <th className='px-7 py-3 border-r-2 border-black'>Password Changed Date</th>
            <th className='px-7 py-3 border-r-2 border-black'>Days since last password Changed</th>
            <th className='px-7 py-3 border-r-2 border-black'>Last Access Date</th>
            <th className='px-7 py-3 border-r-2 border-black'>Days Since Last Access</th>
            <th className='px-7 py-3 border-r-2 border-black'>MFA Enabled</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='border-2 border-gray-700 text-[19px]'>
              <td className='text-center border-r-2 border-gray-700 py-3'>{item.human_user}</td>
              <td className='text-center border-r-2 border-gray-700'>{item.create_date}</td>
              <td className='text-center border-r-2 border-gray-700'>{item.password_changed_date}</td>
              <td className='text-center border-r-2 border-gray-700'>{item.days_since_last_password_changed}</td>
              <td className='text-center border-r-2 border-gray-700'>{item.last_access_date}</td>
              <td className='text-center border-r-2 border-gray-700'>{item.days_since_last_access}</td>
              <td className='text-center border-r-2 border-gray-700 capitalize'>{item.mfa_enabled}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default App
