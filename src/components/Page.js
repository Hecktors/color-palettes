import React from 'react'
import '../styles/Page.css'

const Page = ({ children }) => {
  console.log("Rendering page");
  return (
    <section className="Page">
      {children}
    </section>
  )
};

export default Page;
