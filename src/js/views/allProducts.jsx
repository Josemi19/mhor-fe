import React from 'react'
import { useParams } from 'react-router'

export const AllProducts = () => {
    const {categoria} = useParams()
        return (
        <>
            <div className="container text-center">
                <h2>{categoria}</h2>
            </div>
        </>
    )
}
