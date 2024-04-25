
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  Axios from 'axios';
import Loading from '../component/Loading';
function Studentes() {

    const [student, setStudent]=useState([]);
    const [loading, setLoading] = useState(true);

    // if i want to only object data then using
   // const [student, setStudent]=useState({});

    useEffect(()=>{
        Axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response=>{
            console.log(response);
            setStudent(response.data)
            setLoading(false)
        }).catch(error=>{
            console.log('data can not found');
        })
    },[])

    // Loading animation //

    if(loading){
       return <Loading />
    }

    // No need map if user object data //

    var studentDetails = '';
    studentDetails = student.map( (item, index) =>{
        return(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td> <Link to={`/student/{$item.id}`} className='btn btn-primary btn-sm'>Edit</Link></td>
                <td> <Link className='btn btn-danger btn-sm'>Delete</Link></td>
            </tr>
        )

    })

    


    return (
        <>
          <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">
                            <h4>Student list
                                <Link  to='/create/student' className='btn btn-primary float-end'> Add student </Link>
                            </h4>                           
                        </div>
                        <div className='card-body'>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>User id</th>
                                        <th>Title</th>
                                        <th>Description</th>                                        
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {studentDetails}
                                   {/* if i want to using object
                                   <tr >
                                    <td>{student?.id}</td>
                                    <td>{student?.title}</td>
                                    <td>{student?.body}</td>
                                </tr> */}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}

export default Studentes;