import { React, useState, useEffect } from 'react'
import { Notification, userList } from './components/index'

const App = () => {

 const [unreadMesseges, setunreadMesseges] = useState(0)
 const [userInfo, setUserInfo] = useState(userList)

 useEffect(() => {
    var count = 0
    userInfo.map((user) => {
      if(!user.isRead) {
        count = count + 1
      }
      setunreadMesseges(count)
    })
  },[userInfo])



  const allNotifications = userInfo.map((user, index) => {
    return <Notification
    key={index}
    username={user.userName}
    useraction={user.userAction}
    isread={user.isRead}
    postname={user.postName}
    userimage={user.userImg}
    groupname={user.groupName}
    message={user.message}
    postpicture={user.postPicture}
  />})

  const markAsRead = () => {
   const newUserInfo = userInfo.map((user) => {
      if(!user.isRead) {
        return {...user, isRead: true}
      } else {
        return {...user}
      }
    })
    setUserInfo(newUserInfo)
  }


  return (
    <div id='notif-container' className='flex flex-col justify-center items-start p-8 shadow-2xl w-[500px] mx-auto rounded-xl md:max-w-[900px] md:w-auto'>

      <div id='header-container' className='flex justify-between items-end w-full'>
        <div className='flex justify-center items-center gap-2'>
          <p className='font-extrabold text-3xl'>notification</p>
          {unreadMesseges !== 0 ? <h1 className='w-8 h-8 bg-Blue text-white rounded-md flex justify-center items-center font-bold text-lg'>{unreadMesseges}</h1> : <></>}
        </div>
        <button onClick={markAsRead} className='text-Grayishblue cursor-pointer hover:text-Darkgrayishblue'>mark all as read</button>
      </div>

      {allNotifications}
    </div>
  )
}

export default App