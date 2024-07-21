import React from 'react';

const ContactBar = () => {
    const contactList = [
        { href: 'https://github.com/scohen-trinity', class: 'fa fa-github' },
        { href: 'https://www.linkedin.com/in/samuel-cohen-a82434251', class: 'fa-brands fa-linkedin' },
        { href: 'mailto:scohencs@gmail.com', class: 'fa-solid fa-envelope' },
    ];

    return (
        <ul className='contact-bar'>
            { contactList.map(contact => (
            <li>
                <a href={contact.href}>
                <i className={contact.class}></i>
                </a>
            </li>
            ))}
        </ul>
    );
};

export default ContactBar;
