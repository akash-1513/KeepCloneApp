import React from 'react'
export default function Footer() {
    const date = new Date();
    return (
        <footer>
            <p className="footer">Made with &#128525; by Akash Kumar &copy; {date.getFullYear()} </p>
        </footer>
    )
}
