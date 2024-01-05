import React from 'react';
import styles from "./Contacts.module.css"

export default function Contacts(){

  return (
<section className={`flex flex-col p-5 items-center ${styles['contacts-page']}`}>
  <h3 className='mb-3 text-2xl font-bold'>Contact Me</h3>
  <div className='flex flex-row flex-wrap justify-center gap-8'>
    <div className="text-center">
      <h4 className="text-lg font-semibold">Email</h4>
      <a href="mailto:gosamatias@gmail.com" className="text-blue-600 hover:underline">
        gosamatias@gmail.com
      </a>
    </div>

    <div className="text-center">
      <h4 className="text-lg font-semibold">LinkedIn</h4>
      <a
        href="https://www.linkedin.com/in/gosamatias"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        https://www.linkedin.com/in/gosamatias
      </a>
    </div>

    <div className="text-center">
      <h4 className="text-lg font-semibold">Instagram</h4>
      <p className="text-gray-600">Insert Insta Link here</p>
    </div>
  </div>
</section>


  );
}
