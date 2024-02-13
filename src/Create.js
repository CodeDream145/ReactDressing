import { useState } from "react";
import {  useNavigate } from 'react-router-dom'

const Create = () => {
    
    const [title, setTiltle] = useState('');
    const [author, setAuthor] = useState('Harry');
    const [body, setBody] = useState('');
    const [lError, setLError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        if((title.length) > 0 && author && body.length > 0){
            const blog = {title, author, body}
            setIsLoading(true)
            setLError(null)

            fetch('http://localhost:8000/blogs', {
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(blog)
            })
                .then(response => {
                    if (!response.ok){
                        throw Error(response.statusText)
                    }
                    else{
                        setLError(null)
                        alert('Blog Added Successfully');
                        setTiltle('')
                        setBody('')
                        setAuthor('Harry')
                        setIsLoading(false)
                        navigate('/')
                    }
                })
                .catch((err)=>{
                    setLError(err.message)
                    setIsLoading(false)
                })

        }
        else{
            setLError('Invalid Inputs')
            setIsLoading(false)
        }
        
        
    }
    
    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Title :</label>
                <input 
                type="text" 
                placeholder="Title"
                value={title}
                onChange={(e)=> setTiltle(e.target.value)}
                ></input>

                <label>Body :</label>
                <textarea
                placeholder="Body"
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>

                <label>Author :</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Harry">Harry</option>
                    <option value="Potter">Potter</option>
                </select>
                {lError && <p style={{color: 'red'}}>{lError}</p>}
                {!isLoading && <button type="submit">Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>

        </div>
    );
}
 
export default Create;