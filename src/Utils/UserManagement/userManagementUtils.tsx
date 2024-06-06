import { Tooltip } from 'antd'
import React from 'react'

export const userManagementTable = (data: any) => {
    let columns: any = []
    for (let key in data[0]) {
        let header = {
            title: key.toUpperCase(),
            dataIndex: key,
            key: key,
            render: customizer(key)
        }


        columns.push(header)
    }
    return columns
}
const addressShorter =(address : string)=>{
const shortAdd = address.slice(0,10)
return shortAdd
}
const customizer = (key: String) => {
    switch (key) {
        case 'status':
            return (_: any, record: any) => {
                const style: any = {
                    padding: '10px 20px',
                    color: record.status == 'Active' ? 'rgba(0, 182, 155, 0.5)' : 'rgba(239, 56, 38, 1)',
                    width: '93px',
                    textAlign: 'center',
                    borderRadius: '10px',
                    background: record.status == 'Active' ? 'rgba(204, 240, 235, 0.5)' : 'rgba(252, 215, 212, 1)'
                }
                return (
                    <>
                        <div style={style}> {record.status}</div>
                    </>
                )
            }
        case 'address':
            return (_: any, record: any) => {
                
                return (
                    <>
                       <Tooltip title={record.address+"kjhdkjshkajshdakj"}>
                            <div>{addressShorter(record.address+"kjhdkjshkajshdakj")}...</div>
                        </Tooltip>
                    </>
                )
            }
        case 'role':
            return (_: any, record: any) => {

                function textColor(role: any) {
                    switch (role) {
                        case 'Buyer':
                            return 'rgba(207, 72, 255, 1)'
                        case 'Seller':
                            return 'rgba(207, 72, 255, 1)'
                        case 'Agent':
                            return 'rgba(82, 43, 166, 1)'
                        default:
                            break;
                    }
                }
                return (

                    <>
                        <div style={{ color: 'rgba(82, 43, 166, 1)' }}> {record.role}</div>

                    </>
                )
            }
            return
        default:
            return null
            break;
    }
}

