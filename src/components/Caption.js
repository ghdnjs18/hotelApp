import React from 'react'
import './Caption.css'

const Caption = ({id, destinationId, caption, setCaption, highlight}) => {
    return (
        // customAttribute = 리엑트에서 사용자가 만들어서 사용하는 속성을 설정할때 사용       
        <div className={`Caption-container ${highlight === id ? 'highlight':''}`}
            id={id} customattribute={destinationId} onClick={setCaption} 
            dangerouslySetInnerHTML={{ __html: caption }}>
            
        </div>
    )
}

export default Caption

Caption.defaultProps = {
    highlight: 0
}