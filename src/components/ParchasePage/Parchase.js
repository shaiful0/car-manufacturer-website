import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UseServices from '../hooks/UseServices';


const Parchase = () => {
  const { register, handleSubmit } = useForm();
  const { itemId } = useParams();
  const [service, setService] = useState({});
  const [services, setServices] = UseServices();
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");




  useEffect(() => {
    const url = `https://afternoon-hamlet-58806.herokuapp.com/items/${itemId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, []);

  const submitFrom = (data) => {
    // console.log(data);
    const orders = {
      orderId:service._id,
      orderName:service.name,
      orderPic:service.img,
      userName:user.displayName,
      userEmail:user.email,
    }
    fetch('https://afternoon-hamlet-58806.herokuapp.com/orders',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(orders)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.success){
        toast('order confirm')
      }
    })

  }

  return (
    <div>
      <h1 className='text-3xl text-center font-bold text-teal-800'>Parchase Page</h1>
      <div className='flex justify-between'>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p><span className='text-xl font-bold'>Discription: </span>{service.description}</p>
              <p><span className='text-xl font-bold'>Price: </span>{service.price}</p>
              <p><span className='text-xl font-bold'>Available Quatity: </span>{service.quantity} <span>(minimum order 500 pice)</span></p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-52">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Parchase Form</h2>
            <form className=' w-48' onSubmit={handleSubmit(submitFrom)}>
              <h1>Name</h1>
              <input className='border-2 mb-2' value={user?.displayName}  placeholder='Name' {...register("name", { required: true,maxLength: 20 })} />
              <h1>Email</h1>
              <input className='border-2 mb-2' value={user?.email} placeholder='Email' {...register("email")} />
              <h1>Product Name</h1>
              <input className='border-2 mb-2' value={service?.name} placeholder='product Name' {...register("product Name")} />
              <h1>Quantity</h1>
              <input className='border-2 mb-2' name='quantity' defaultValue={500} min='500' max='1000' placeholder='Quantity' type="number" {...register("quantity")} />
              <h1>Phone Number</h1>
              <input className='border-2 mb-2' name='phone'  placeholder='Phone Number' type="number" {...register("number")} />
              <h1>Photo URL</h1>
              <input className='border-2 mb-2' value={service?.img} placeholder='Photo URL' type="img" {...register("img")} />

              <input className='btn btn-primary mb-3 mx-3' type="Submit" value="Order Place" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parchase;