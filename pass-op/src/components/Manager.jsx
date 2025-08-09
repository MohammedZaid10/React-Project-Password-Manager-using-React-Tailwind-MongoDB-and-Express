import React from 'react'
import { useState, useRef, useEffect } from 'react';

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site: '', username: '', password: '' })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyecross.png"
        }
    }

    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


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
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website-URL' className="rounded-full border border-blue-500 w-full text-black p-4 py-1" type="text" name='site' id='input1' />
                    <div className='flex w-full justify-between gap-8'>
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className="rounded-full border border-blue-500 w-full text-black p-4 py-1" type="text" name='username' id='input2' />
                        <div className="relative">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className="rounded-full border border-blue-500 w-full text-black p-4 py-1" type="text" name='password' id='input3' />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-blue-300 hover:bg-blue-400 rounded-full gap-2 px-4 py-1 w-fit text-blue-900 font-bold border-2 border-blue-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/mfdeeuho.json"
                            trigger="hover"
                            stroke="bold"
                            state="hover-swirl"
                            colors="primary:#c7166f,secondary:#1b1091">
                        </lord-icon>
                        Add password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show </div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-xl overflow-hidden">
                        <thead className='bg-blue-400'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Passwords</th>
                            </tr>
                        </thead>
                        <tbody className='bg-blue-200'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center w-32'><a href={item.site} target='_blank'>{item.site}</a> </td>
                                    <td className='py-2 border border-white text-center w-32'>{item.username}</td>
                                    <td className='py-2 border border-white text-center w-32'>{item.password}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager