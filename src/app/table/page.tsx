import React from 'react'

function Table() {
    return (
        <div className='p-10'>Table
            <table className="border-collapse border border-gray-400 ...">
                <thead>
                    <tr>
                        <th className="border border-gray-300 ...">State</th>
                        <th className="border border-gray-300 ...">City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 ...">Indiana</td>
                        <td className="border border-gray-300 ...">Indianapolis</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 ...">Ohio</td>
                        <td className="border border-gray-300 ...">Columbus</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 ...">Michigan</td>
                        <td className="border border-gray-300 ...">Detroit</td>
                    </tr>
                </tbody>
            </table>


            <div className="mt-10">
                <table className="border-separate border border-gray-400 border-spacing-2 ...">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 ...">State</th>
                            <th className="border border-gray-300 ...">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 ...">Indiana</td>
                            <td className="border border-gray-300 ...">Indianapolis</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Ohio</td>
                            <td className="border border-gray-300 ...">Columbus</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 ...">Michigan</td>
                            <td className="border border-gray-300 ...">Detroit</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="mt-10"><table className="table-auto">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-gray-300 ...'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className='border border-gray-300 ...'>Malcolm Lockyer</td>
                        <td className='border border-gray-300 ...'>1961</td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 ...'>Witchy Woman</td>
                        <td className='border border-gray-300 ...'>The Eagles</td>
                        <td className='border border-gray-300 ...'>1972</td>
                    </tr>
                    <tr>
                        <td className='border border-gray-300 ...'>Shining Star</td>
                        <td className='border border-gray-300 ...'>Earth, Wind, and Fire</td>
                        <td className='border border-gray-300 ...'>1975</td>
                    </tr>
                </tbody>
            </table></div>

            <div className='mt-10'>
                <table className="table-fixed w-100 border-collapse border border-gray-400 ...">
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-gray-300 ...'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className='border border-gray-300 ...'>Malcolm Lockyer</td>
                            <td className='border border-gray-300 ...'>1961</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 ...'>Witchy Woman</td>
                            <td className='border border-gray-300 ...'>The Eagles</td>
                            <td className='border border-gray-300 ...'>1972</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 ...'>Shining Star</td>
                            <td className='border border-gray-300 ...'>Earth, Wind, and Fire</td>
                            <td className='border border-gray-300 ...'>1975</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='mt-10'>
                <table>
                    <caption className="caption-top">
                        Table 3.1: Professional wrestlers and their signature moves.
                    </caption>
                    <thead>
                        <tr>
                            <th>Wrestler</th>
                            <th>Signature Move(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-gray-300 ...'>"Stone Cold" Steve Austin</td>
                            <td className='border border-gray-300 ...'>Stone Cold Stunner, Lou Thesz Press</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 ...'>Bret "The Hitman" Hart</td>
                            <td className='border border-gray-300 ...'>The Sharpshooter</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 ...'>Razor Ramon</td>
                            <td className='border border-gray-300 ...'>Razor's Edge, Fallaway Slam</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='mt-10'>
                <table>
                    <caption className="caption-bottom">
                        Table 3.1: Professional wrestlers and their signature moves.
                    </caption>
                    <thead>
                        <tr>
                            <th>Wrestler</th>
                            <th>Signature Move(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-gray-300 ...'>"Stone Cold" Steve Austin</td>
                            <td className='border border-gray-300 ...'>Stone Cold Stunner, Lou Thesz Press</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 ...'>Bret "The Hitman" Hart</td>
                            <td className='border border-gray-300 ...'>The Sharpshooter</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 ...'>Razor Ramon</td>
                            <td className='border border-gray-300 ...'>Razor's Edge, Fallaway Slam</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table