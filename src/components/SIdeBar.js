import React from 'react'
import { UserIcon ,ShoppingCartIcon,LogoutIcon,LoginIcon,XIcon} from '@heroicons/react/solid'
import Icons from './Icons'
import {useState} from "react"
import {useSession, signIn,signOut} from "next-auth/client"
import image from 'next/image'
function SIdeBar() {
    const [codition, setCondition]=useState();
    const [session]=useSession();
    
    return (
        <div className="bg-black h-[100vh] w-48 absolute top-10 left-0" >
            <div>
                {session&&
                <div className="">
                        <p className="absolute top-6">My Count</p>
                <img src={session?.user.image} className="h-8 mt-14 mb-2 rounded-lg" alt="" />
                <p className="absolute top-14 right-9">{session.user.name}</p>
                </div>
                }
                {!session &&
             <Icons  Icon={UserIcon} title="My count"/>
                }
                <p onClick={()=>setCondition(!codition)} className="underline">Categories</p>
                {codition&&
                 <div className="border-b-2 text-[13px] leading-[18px] underline">
                     < li className>Electornics</ li >
                     <li className>Men clothes</li>
                     <li className>Women clothes</li>
                     <li>Feeds</li>
                 </div>
                }
        <div className="flex mt-2 relative">

                <ShoppingCartIcon className="h-7"/>
                <span className="absolute top-0 text-yellow-300 text-sm left-5">0</span>

            <p className="ml-2">My cart</p>
        </div>
        <div className="-mt-2 " onClick={signIn}>
         <Icons Icon={LoginIcon}  title="Login"/>
         
        </div>
        <div onClick={signOut} >

             <Icons Icon={LogoutIcon}  title="Logout"/>
        </div>


            </div>
        </div>
    )
}

export default SIdeBar
