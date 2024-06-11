import React from 'react'
import buyer from '../../../Assets/totalbuyerkpi.svg'
import seller from '../../../Assets/totalsellerkpi.svg'
import user from '../../../Assets/totaluserkpi.svg'
import agent from '../../../Assets/totalagentkpi.svg'
import './userkpi.css'
export const UserKpi = () => {
    const data = [
        {
            asset: "Total Users",
            rate: '45,000',
            image: user
        },
        {
            asset: "Total Buyers",
            rate: '45,000',
            image: buyer
        },
        {
            asset: "Total Sellers",
            rate: '45,000',
            image: seller
        },
        {
            asset: "Agents",
            rate: "45,000",
            image: agent
        },
    ]
    return (
        <div className='kpi-container'>
            {
                data.map((data: any,i : any) => {
                    return (
                        <>
                            <div className='kpi-section' style={{ borderLeft :  i != 0 ?  '1px solid rgba(240, 240, 240, 1)' : ''}}>
                                <img src={data.image} alt="" className='kpi-image' />
                                <div className="kpi-detail-section">
                                    <div className="kpi-heading">{data.asset}</div>
                                    <div className="kpi-rate">{data.rate}</div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}
