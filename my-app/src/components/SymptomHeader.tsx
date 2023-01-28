import React from 'react'

type symptomHeaderProps = {
    title: string
    symptom_id: number
    description: string
}

export const symptomHeader = (props:symptomHeaderProps ) => {

    return (
    <div>
        <h3>Click on the condition below that most describes your concern to get started</h3> 
    <div>{}</div>   
    </div>
    )
}

export default symptomHeader
