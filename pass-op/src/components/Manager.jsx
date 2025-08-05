import React from 'react'

const Manager = () => {
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-blue-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className="container mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-blue-700'>&lt;</span>
                    Pass
                    <span className='text-blue-700'>OP/&gt;</span>
                </h1>
                <p className='text-lg text-blue-900 text-center'>Your own Password Manager</p>

                <div className='text-black flex flex-col p-4 gap-8 items-center'>
                    <input placeholder='Enter Website-URL' className="rounded-full border border-blue-500 w-full text-black p-4 py-1" type="text" name='' id='input1' />
                    <div className='flex w-full justify-between gap-8'>
                        <input placeholder='Enter Username' className="rounded-full border border-blue-500 w-full text-black p-4 py-1" type="text" name='input2' id='' />
                        <input placeholder='Enter Password' className="rounded-full border border-blue-500 w-full text-black p-4 py-1" type="text" name='input3' id='' />
                    </div>
                    <button className='flex justify-center items-center bg-blue-300 hover:bg-blue-400 rounded-full gap-2 px-4 py-1 w-fit text-blue-900 font-bold border-2 border-blue-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/mfdeeuho.json"
                            trigger="hover"
                            stroke="bold"
                            state="hover-swirl"
                            colors="primary:#c7166f,secondary:#1b1091">
                        </lord-icon>
                        Add password</button>
                </div>
            </div>
        </>
    )
}

export default Manager
