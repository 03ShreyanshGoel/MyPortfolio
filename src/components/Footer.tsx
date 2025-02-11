import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="relative flex h-9 items-center justify-center border border-gray-200 bg-gray-300">
            <p className="text-sm text-gray-500">
                made with love 🤍 {year} ~
                <a
                    href="https://github.com/ShreyanshGoel/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    project repo
                </a>
            </p>
            <div
                title="back to top"
                className="absolute right-5 bottom-10 animate-bounce cursor-pointer text-2xl font-thin text-gray-900 md:right-20 md:text-4xl"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <BsArrowUpCircle />
            </div>
        </footer>
    );
};

export default Footer;
