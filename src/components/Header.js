import React,{useState} from 'react'
import {SearchIcon} from '@heroicons/react/outline'
import {XIcon ,ShoppingCartIcon,UserIcon, MenuIcon, UserAddIcon} from '@heroicons/react/solid'
import {signIn,signOut,useSession} from 'next-auth/client'
import SIdeBar from './SIdeBar';
import {useRouter} from 'next/router'
import Banner from './Banner';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header({placeholder,products})  {
    const [session]=useSession();
    const items=useSelector(selectItems);
    const [searchProduct,setSearchProduct]=useState([]);
    const [wordEnter, setWordEnter]=useState('');
    const [condition,setCondition]=useState(false);
    const router=useRouter();
    const handleFilter=(event)=>{
    const searchWord= event.target.value
    setWordEnter(searchWord)

    const newFilter= products.filter((value)=>{
        return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord==""){
        setSearchProduct([])
    }else{
        setSearchProduct(newFilter)        
    }
    }
    const cleanInput=()=>{
        setSearchProduct([])
        setWordEnter("")
    }
    return (
        <div className=" bg-black grid grid-rows-2  md:grid-cols-6 md:grid-rows-2  items-center  ">
            <div className="text-base text-white m-1 font-extrabold italic row-start-1 flex ">
                <div className="flex  lg:h-9 ">

                <MenuIcon className="h-7" onClick={()=>setCondition(!condition)}/>
                <p className="text-base xl:text-xl lg:text-xl" onClick={()=>router.push("/")}>HomeLand</p>
                 {condition &&
                 <div className="">
                 <SIdeBar className=""/>
                 <XIcon className="h-7 bg-gray-600 text-gray-100 rounded-xl absolute top-16 left-40 " onClick={()=>setCondition(!condition)}/>

                 </div>
                 }


                      
                </div>
                </div>

                <div className="flex  space-x-2 absolute top-1 right-0 sm:right-3 lg:top-1 sm:space-x-5 mr-[12px] ">
                    <div className=" text-white underline lg:block  " onClick={!session? signIn:signOut}>
                        <p className="hidden lg:block text-sm font-bold mt-1">{session? `Hello ${session.user.name}`:`Sign in`}</p>
                    </div>

              
                <UserIcon className="h-7 md:h-8  text-white" onClick={signIn}/>
              <div className="relative" onClick={()=>router.push('/checkout')}>

                <ShoppingCartIcon className="h-7 md:h-8 text-white" />
                   <span className="absolute top-0 text-yellow-400 font-bold text-sm  -right-2">{items.length}</span>
              </div>
            </div>
                
             <div className="bg-gray-300 md:ml-3  relative md:col-span-4  lg:col-span-3 xl:col-span-4 xl:-ml-10   xl:mr-10 md:col-start-2 lg:h-8 flex flex-grow min-w-full h-[28px] ">
                {searchProduct ==0? <SearchIcon className="h-[28px] p-1 lg:w-8  "/>:<XIcon className="h-[28px] p-1 lg:w-8" onClick={cleanInput}/>}
                 <input className="flex-grow w-10 h-[28px]  focus:outline-none " value={wordEnter} onChange={handleFilter} type="text" placeholder={placeholder}
                 
                 />
                
                  {searchProduct.length !=0 &&(

                      <div className="absolute top-8 bg-white">
                   {searchProduct.slice(1,10).map(value=>(
                       <h1 key={value.id} className="font-semibold line-clamp-1 bg-white text-[12px] mt-1">{value.title}</h1>
                       ))}
                     </div>
                       ) }
                 </div>    
                 <div className='flex items-center   md:row-start-2 md:col-span-6 sm:text-sm  p-1
                  overflow-y-scroll space-x-4  pl-2 text-white text-sm '>
             <p className='whitespace-nowrap'>Amazon-Prime</p>
             <p className='whitespace-nowrap    '>Category</p>
             <p className='whitespace-nowrap    '>Amazon Bussines</p>
             <p className='whitespace-nowrap    '>Today is Deal</p>
             <p className='whitespace-nowrap     '>Electronics</p>
             <p className='whitespace-nowrap     '>Food & Grocery</p>
             <p className='whitespace-nowrap     '>Prime</p>
             <p className='whitespace-nowrap     '>Buy Again</p>
             <p className='whitespace-nowrap     '>Shopping Toolkit</p>
             <p className='whitespace-nowrap     '>Health & Personal Care</p>


           </div>
        </div>
    )
}

export default Header
