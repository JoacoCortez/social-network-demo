import React, { useState } from 'react';
import "./messages.css";



export default function Messages() {
  
  const [expanded, setExpanded] = useState(false)
  
  const handleExpand = () => {
    
    setExpanded((prevExpanded => !prevExpanded))
  
  }
  
  
  
  
  
  return (
    <div className={`messages-container ${expanded ? "expanded" : ""}`  } onClick={handleExpand}>
      
      <div className="messages-list">
        <p>holo</p>
      </div>

    </div>
  )
}
