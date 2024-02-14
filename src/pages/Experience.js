import React, { useState } from 'react'
import toast from 'react-hot-toast';
import "bootstrap/dist/css/bootstrap.min.css";
import { experienceCreatePost } from '../services/operations/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Experience = () => {


    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate()
    const dispatch = useDispatch()
   const [data,setData]=useState([{},{},{}]);

   const handleAdd=()=>{
    setData([...data,{company:"",role:"",firstDate:"",lastDate:""}]);

   };

   const handleRemove=()=>{
    
    if(data.length===1){
        toast.success("One is necessary,thank you")
        return;
    }
    toast.success("remove")
    const newData=data.slice(0,data.length-1);
    setData([...newData]);

   };

   const handleChange=(e,i)=>{
         const tempData=data;
         tempData[i][e.target.name]=e.target.value;
         setData(tempData);
   }

   const handleOnSubmit=(e)=>{
    e.preventDefault()
    console.log(data);

    data.map((obj)=>{

            const userid=user._id;
            const company=obj.company;
            const role=obj.role;
            const firstDate=obj.firstDate;
            const lastDate=obj.lastDate;
             
          dispatch(experienceCreatePost(userid,company,role,firstDate,lastDate,navigate)); 
    })

    toast.success("sumit done");

   }



  return (
    <div>

    <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className='container my-5 bg-white'>
            <table className='table table-bordered border-4 border-l-black'>

                <thead>
                    <tr>
                        <th>Sl.No.</th>
                        <th>Company Name</th>
                        <th>Role</th>
                        <th>Date of joining</th>
                        <th>Last Date</th>
                    </tr>

                </thead>

                <tbody>
                   
                   {

                    data.map((item,index)=>{

                        return(

                        <tr>
                            <td>{index+1}</td>
                            <td>
                                <input 
                                  className='form-control'
                                  defaultValue={item.company}
                                  onChange={(e)=>{handleChange(e,index)}}
                                  name='company'
                                  required
                                />
                            </td>

                            <td>
                              <input 
                                  className='form-control'
                                  defaultValue={item.role}
                                  onChange={(e)=>{handleChange(e,index)}}
                                  name='role'
                                  required
                              
                              />
                            </td>

                            <td>
                               <input 
                                 className='form-control'
                                 defaultValue={item.firstDate}
                                 onChange={(e)=>{handleChange(e,index)}}
                                 name='firstDate'
                                 type='date'
                                 required
                                 
                               
                               />
                            </td>
                            <td>
                                <input 
                                   className='form-control'
                                   defaultValue={item.lastDate}
                                   onChange={(e)=>{handleChange(e,index)}}
                                   name='lastDate'
                                   type='date'
                                   required
                                 
                                 />
                            </td>

                        </tr>

                        )

                    })

                   }

                </tbody>

      
                    <div>
                        <button className='btn btn-success' onClick={handleAdd}>Add</button>
                    </div>
                    <div>
                        <button className='btn btn-success' onClick={handleRemove}>Remove</button>
                    </div>

                    <div className='m-auto'>
                        <button className='btn btn-primary m-auto' type='sumit'>Save</button>
                    </div> 
                  


            </table>

        </div>
    </form>





    </div>
  )
}
