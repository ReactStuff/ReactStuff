import React from 'react';

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    src={props.author.imgUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date.toDateString()}
            </div>
        </div>
    );
}

export default Comment;