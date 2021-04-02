import * as React from 'react';

import {Table} from './component/Table'

export default {
    title: "Component|Table"
}

const dataDummy = {
    header:  [
        {
            key : "name",
            name : "Name"
        },
        {
            key : "address",
            name : "Address"
        },
        {
            key : "date",
            name : "Date"
        },
        {
            key : "price",
            name : "Price"
        }
    ],
    body: [
        {
            name: "Muhajir",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            phone: "(406) 555-0120",
            date: "8/16/13",
            price: "$946.55"
        },
        {
            name: "Muhajir",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            phone: "(406) 555-0120",
            date: "8/16/13",
            price: "$946.55"
        },
        {
            name: "Muhajir",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            phone: "(406) 555-0120",
            date: "8/16/13",
            price: "$946.55"
        }
    ]
}


export const Regular = ()=>{
   
    return(
        <Table data={dataDummy}>
        </Table>
    );
}

export const RegularHorizontalLine = ()=>{
   
    return(
        <Table data={dataDummy} horizontalLine>
        </Table>
    );
}

export const RegularStripe = ()=>{
   
    return(
        <Table data={dataDummy} stripe>
        </Table>
    );
}


export const Condensed = ()=>{
   
    return(
        <Table data={dataDummy} condensed >
        </Table>
    );
}

export const CondensedHorizontalLine = ()=>{
   
    return(
        <Table data={dataDummy} condensed horizontalLine>
        </Table>
    );
}

export const CondensedStripe = ()=>{
   
    return(
        <Table data={dataDummy} condensed stripe>
        </Table>
    );
}


export const Relaxed = ()=>{
   
    return(
        <Table data={dataDummy} relaxed >
        </Table>
    );
}

export const RelaxedHorizontalLine = ()=>{
   
    return(
        <Table data={dataDummy} relaxed horizontalLine>
        </Table>
    );
}

export const RelaxedStripe = ()=>{
   
    return(
        <Table data={dataDummy} relaxed stripe >
        </Table>
    );
}