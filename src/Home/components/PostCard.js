import React from "react";


//Specific Card appearing in HomePage displaying data
const PostCard= props => {
    return (
        <a className='group'>
        <div className='2-full bg-gray-200 rounded-3xl overflow-hidden'>
            <div  className='relative group-hover:opacity-75 h-72 flex justify-center items-center'
                    style={{fontSize: '3rem'}}>
                {props.id}
            </div>
            </div>

        <h3 className='mt-4 text-lg font-medium text-gray-900'>
            {props.title}
        </h3>
        <h3>
            {props.body}
        </h3>
        </a>
    )
}

export default PostCard;