import React, { FormEvent } from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const AdminPageForm = () => {
    const {symptom_id} = useParams()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [description_url, setDescription_url] = useState("")
    const [showErrors, setShowErrors] = useState(false)
    const navigate=useNavigate()

    const edit = async(e:FormEvent) => {
        e.preventDefault()
        if (!title || !description || !description_url){
            setShowErrors(true)
            return 
        }
        
    
        if(symptom_id !== "new"){
            await axios.patch(`http://127.0.0.1:5000/symptoms/${symptom_id}`, {title: title, description: description,description_url:description_url})

        }else {
            await axios.post(`http://127.0.0.1:5000/symptoms`, {title: title, description: description,description_url:description_url})
        
        }
        
        navigate('/admin')
    
        }
        useEffect(() => {
            if(!symptom_id || symptom_id === "new"){
                return
            }
            const url = `http://127.0.0.1:5000/symptoms/${symptom_id}`           
            axios.get(url).then((response) => {  
               setTitle(response.data.title) 
               setDescription(response.data.description)   
               setDescription_url(response.data.description_url)  
            })
            },[symptom_id]);
    
  return (
   <> 
   <h1>{symptom_id==="new" ?"add new symptom":"edit symptom"}</h1>
   <form className='labels' onSubmit={edit}>
    <label htmlFor="">title<input value= {title}type="text" onChange={(e)=>setTitle(e.target.value)} />
    {!title && showErrors && (<p>Title is required</p>)}
    </label>
    <label htmlFor="">description<input value= {description}type="text" onChange={(e)=>setDescription(e.target.value)}/>
    {!description && showErrors && (<p>Description is required</p>)}
    </label>
    <label htmlFor="">description_url<input value={description_url}type="text" onChange={(e)=>setDescription_url(e.target.value)}/>
    {!description_url && showErrors && (<p>URL is required</p>)}
    </label>
    <button type="submit">Submit</button>
   </form>
   
   </>
    
    
  )
}

export default AdminPageForm