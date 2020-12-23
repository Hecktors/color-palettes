import React from 'react'
import '../styles/Page.css'

const Page = ({ children }) => {
  return (
    <section className="Page">
      {children}
    </section>
  )
};

export default Page;
