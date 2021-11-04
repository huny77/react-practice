import React, { useState, useEffect } from 'react'

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date())
  }

  // componentDidMount() 동작, 대신 빈 배열을 줘야 함
  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    
    // componentWillUnmount() 동작
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <h1>Hello, world! It's Functional</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}
