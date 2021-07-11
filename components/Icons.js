import React from 'react'

function Icons({Icon,title}) {
    return (
        <div className="pt-6">
            <div className="flex items-center space-x-4  ">
            <Icon className="h-7  bg-gray-900 rounded-xl "/>
            <p className="">{title}</p>
            
            </div>
        </div>
    )
}

export default Icons
