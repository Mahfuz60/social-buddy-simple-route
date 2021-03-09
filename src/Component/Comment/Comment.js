import React from 'react';

const Comment = (props) => {
    const {name,email,body}=props.comment;
    return (
        <div style={{border: '2px solid tomato',margin:'20px'}}>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Body:{body}</p>
        </div>
    );
};

export default Comment;