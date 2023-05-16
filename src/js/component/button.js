import React, { useState } from 'react';

const Button = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  return (
    <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        
      </div>
    </div>
  );
};

export default Button;




/* 
table.onmouseover = function(event) {
  let target = event.target;
  target.style.background = 'pink';
};

table.onmouseout = function(event) {
  let target = event.target;
  target.style.background = '';
};

*/