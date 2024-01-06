import React from 'react';
import styles from "./Contacts.module.css"

export default function Contacts(){

  return (
<section className={`flex flex-col p-5 items-center ${styles['contacts-page']}`}>
  <h3 className='mb-3 text-4xl font-bold text-noisy-blue'>Get in touch!</h3>
  <div className='flex flex-col flex-wrap justify-center gap-8'>
    <div className="text-center">
      <h4 className="text-lg font-bold">Email</h4>
      <a href="mailto:gosamatias@gmail.com" className="text-blue-600 hover:underline">
        gosamatias@gmail.com
      </a>
    </div>

    <div className="text-center">
      <h4 className="text-lg font-bold">LinkedIn</h4>
      <a
        href="https://www.linkedin.com/in/gosamatias"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        https://www.linkedin.com/in/gosamatias
      </a>
    </div>
  </div>
</section>


  );
}
