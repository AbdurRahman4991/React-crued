import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../component/Loading';
function AddStudent() {

    const [inputErrorList, setInputErrorList]= useState({})
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const[student, setStudent] = useState({       
        title:'',
        body:''
    })



    const inputHendel=(e)=>{
        e.persist();
        setStudent({...student, [e.target.name]: e.target.value}); 
               
    }

    const saveStudent = (e)=>{        
        e.preventDefault();
       
        const data = {
            title:student.title,
            body:student.body
        }

       

        axios.post(`https://jsonplaceholder.typicode.com/posts`, data)

        .then(response=>{

            console.log(response.data);
            navigate('/student')
           
        }).catch(error=>{
            setLoading(true)
            if(error.response.status === 404){
                console.log('page not found');
                setLoading(false)
            }

            if(error.response.status===422){
                setInputErrorList(error.response.data.errors)
               
            }
            if(error.response.status === 500){
                setLoading(false);
            }
            
        })
       
    }

    if(loading){
        return <Loading />
    }


    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <h4 className="card-header">Add student
                                <Link to='/' className='btn btn-primary btn-sm float-end'>Back</Link>
                            </h4>
                            <div className="card-body">
                               <form onSubmit={saveStudent}>

                                    <div className="mb-3">
                                        <label htmlFor=""> Title</label>
                                        <input type="text"   name='title' placeholder='type your name'  onChange={inputHendel} className='form-control' />
                                        <span className='text-danger'>{inputErrorList.title}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""> Body</label>
                                        <input type="text" name='body' placeholder='type your body'  onChange={inputHendel} className='form-control' />
                                        <span className='text-danger'>{inputErrorList.body}</span>
                                    </div>
                                    <div className="mb-3">
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                    </div> 
                               </form>                                                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default AddStudent;