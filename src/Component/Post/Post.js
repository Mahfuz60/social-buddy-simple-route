import React from 'react';
import { useHistory } from 'react-router';
import Postdetails from '../Postdetails/Postdetails';

const Post = (props) => {
    const {id,title,body}=props.post;
    const history=useHistory();
    const handleButton=()=>{
        const url=`post/${id}`;
        history.push(url);
    }
    return (
        <div style={{border: '2px solid purple',padding:'10px',margin:'10px',textAlign:'center'}}>
            <h3>Id:{id}</h3>
            <h4>Title:{title}</h4>
            <h6>Body:{body}</h6>
            <button onClick={()=>handleButton()}>Show Comment</button>
            
            
        </div>
    );
};

export default Post;