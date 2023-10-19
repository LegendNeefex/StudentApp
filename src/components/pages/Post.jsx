import { Navigate, useNavigate } from "react-router-dom"

function Post() {

    const nav = useNavigate();
    const status = 200

    if (status !== 200) {
        return <Navigate to="/notfound" />
    }

    const moveHandler = ()=>{
        nav("/notfound")
    }

  return (
    <>
        <div>Post Page</div>
        <button onClick={moveHandler} className="btn btn-secondary">Do redirect</button>
    </>

  )
}

export default Post
