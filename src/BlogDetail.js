import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    
    const { id } = useParams();
    const {data, isLoading, error} =  useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate()

    const handleClick = ()=>{
        fetch(`http://localhost:8000/blogs/${data.id}`, {
            method: "DELETE"
        })
        .then(res=>{
            if(!res.ok){
                throw Error(res.statusText)
            }
            else{
                navigate('/')
            }
        })
        .catch(error => {
            alert(error.message)
        })

    }

    return ( 
        <div className="blog-details">
                {data && (<article>
                            <h2>{data.title}</h2>
                            <p>Written by -{data.author}</p>
                            <div style={{textIndent: "4em"}}>{data.body}</div>
                            <button onClick={handleClick}>Delete</button>
                        </article>)
                }
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
        </div>
    );
} 
 
export default BlogDetail;