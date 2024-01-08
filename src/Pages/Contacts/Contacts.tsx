import styles from "./Contacts.module.css"

export default function Contacts(){

  return (
<section className={`flex flex-col p-5 items-center ${styles['contacts-page']}`}>
  <h3 className='my-5 text-4xl font-bold text-charcoal-black'>Get in touch!</h3>
    <div className="flex flex-row items-center justify-center">
      <a href="mailto:gosamatias@gmail.com">
        <img src="/images/mail-contact-icon.png"/>
      </a>
      <a href="https://github.com/Gosamat">
        <img src="/images/github-contact-icon.png"/>
      </a>
      <a  href="https://www.linkedin.com/in/gosamatias"
        target="_blank"
        rel="noopener noreferrer">
        <img src="/images/linkedin-contact-icon.png"/>
      </a>
    </div>
    <hr />
    <h3 className='mt-5 text-xl text-charcoal-black'>© 2024 Gonçalo Matias</h3>

</section>


  );
}
