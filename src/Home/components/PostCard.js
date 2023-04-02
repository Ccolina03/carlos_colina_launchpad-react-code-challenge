import React from "react";


//Specific Card appearing in HomePage displaying data
const PostCard= props => {
    return (
        <div>
        <a className='group'>
        <div className='2-full bg-gray-200 rounded-3xl overflow-hidden'>
        <div className="flex justify-center">
        <div class="inline-flex  rounded-md shadow-sm">
        <a aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Add
        </a>
        <a class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Edit
        </a>
        <a class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Delete
        </a>
        </div>
        </div>
            <div  className='relative group-hover:opacity-75 h-72 flex justify-center items-center'
                    style={{fontSize: '3rem'}}>
                {props.id}
            </div>
            </div>

        <h3 className='mt-4 text-lg font-medium text-gray-900'>
            {props.title}
        </h3>
        <h3> Author: {props.userId} </h3>
        <h3>
            {props.body}
        </h3>

        <button>buton</button>
        </a>
        
   
</div>
        
    )
}

export default PostCard;