import React, { useState, useEffect } from 'react';

const Greetings = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    let greet;
    const time = new Date().getHours();
    greet = (time < 10) ? "Hello! Good morning" : (time < 20) ? "Hello. Good day" : "Good evening";
    // if (time < 10) {
    //   greet = "Hello! Good morning";
    // } else if (time < 20) {
    //   greet = "Hello. Good day";
    // } else {
    //   greet = "Good evening";
    // }
    setGreeting(greet);
  }, [])

  return (
    <div className="greeting">
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greetings;
