import React from 'react'

const Notification = ({ username, userimage, useraction, postname, isread, groupname, message, postpicture }) => {
  return (
    <div className={`relative flex justify-start items-center gap-4 mt-2 ${!isread ? `bg-Lightgrayishblue1` : `bg-transparent`} p-4 rounded-xl w-full`}>
        <img src={userimage} alt="" className='min-w-[7rem] min-h-[7rem]' />
        <div id="notif">
            <p>
                <span id='username' className='font-bold cursor-pointer hover:text-Blue'>{username}</span>
                <span id='user-action' className='text-Darkgrayishblue'>{` ${useraction}`}</span>
                {useraction === 'reacted to your recent post' ? <span id='post-name' className='font-bold text-Darkgrayishblue cursor-pointer hover:text-Blue'>{` ${postname}`}</span> : <></>}
                {useraction === 'has joined your group' || useraction === 'left the group' ? <span id='group-name' className='text-Blue font-bold cursor-pointer'>{` ${groupname}`}</span> : <></>}
                {useraction === 'sent you a private message' ? <div className='ml-4 my-4 border-2 p-4 rounded-md text-Darkgrayishblue cursor-pointer hover:bg-Lightgrayishblue1'>{message}</div> : <></>}
                {useraction === 'commented on your picture' ? <img src={postpicture} className='absolute right-2 bottom-2 w-14 h-14 border-4 border-Grayishblue rounded-md cursor-pointer'></img> : <></>} 
                {!isread ? <span id='red-dot' className='inline-block w-2 h-2 rounded-full bg-Red ml-1'></span> : <></>}
                
            </p>
            <h1 id="time-past" className='text-Grayishblue'>1 m ago</h1>
        </div>
    </div>
  )
}

export default Notification