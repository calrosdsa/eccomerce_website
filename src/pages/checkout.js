import {useSession} from "next-auth/client"
import image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import {loadStripe} from "@stripe/stripe-js"
import axios from "axios";
const stripePromise=loadStripe(process.env.stripe_public_key)
function Checkout() {
   const items=useSelector(selectItems)
   const [session ] =useSession();
   const total=useSelector(selectTotal);

   const createCheckoutSession=async()=>{
    const stripe=await stripePromise;
    //call the backend for the create checkoutsession
    const checkoutSession=await axios.post('/api/create-checkout-session',
    {
       items:items,
       email:session.user.email
    });
    const result=await stripe.redirectToCheckout({
       sessionId:checkoutSession.data.id
    })
    if (result.error){
       alert(result.error.message)
    }
   }
    return (
        <div>
     <Header/>
     <main className="md:grid lg:grid-cols-6  max-w-screen-2xl mx-auto ">
          <img src="https://links.papareact.com/ikj" className="h-28 px-1 lg:col-span-4 xl:ml-20 sm:px-6 w-[1000px] py-2 sm:h-[160px] " alt="" />
       <div className="ml-2 lg:ml-16  m-5 lg:col-span-2 col-start-5 lg:mr-16 sm:mx-10 ">
           {items.length>0&&(
              <div className="bg-gray-200  sm:p-1 rounded-lg  ">
              <h2 className="border-b-4 text-sm sm:text-base md:text-base my-5 md:ml-1 lg:ml-7  border-gray-300">Subtotal({items.length}items:)
              <span className="font-bold ml-1">${total}</span>
              </h2>
              <button 
              role="link"
              onClick={createCheckoutSession}
              disabled={!session}
              className={`bg-gray-400 h-6 lg:ml-10 text-black text-sm font-semibold ml-2 rounded-md ${!session&& "bg-gray-300 "}`}>{!session? 'Sign in to Checkout':'Proced to checkout'}</button>
              </div>
           )}
       </div>
       
        <div className="lg:col-start-1 lg:col-span-4 ">
             <div className="space-y-6 p-2  mx-">
                <h1 className="text-sm sm:text-base md:text-lg border-b-4 border-gray-300 font-bold italic text-gray-700 tracking-wider">
                  {items.length===0 ?`Your Basket is empty`:`Shopping Basket`}</h1>
                  {items.map((item,i)=>(
                     <CheckoutProduct
                     key={i}
                     id={item.id}
                     image={item.image}
                     title={item.title}
                     price={item.price}
                     description={item.description}
                     category={item.category}
                     />
                  ))}
             </div>
        </div>

     </main>
        </div>
    )
}

export default Checkout
