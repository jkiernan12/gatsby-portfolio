import * as React from 'react'
import {Link} from 'gatsby'
import {
    header,
    nav,
    navList,
    navListItem,
    main,
    navListButton
} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <header className={header}>
                <p className="logo"></p>
                <nav className={nav}>
                <ul className={navList}>
                    <li className={navListItem}><Link className={navListButton} to="#aboutMe">About Me</Link></li>
                    <li className={navListItem}><Link className={navListButton} to="#projects">Projects</Link></li>
                    <li className={navListItem}><Link className={navListButton} to="#projects">Contact</Link></li>
                </ul>
                </nav>
            </header>
            <main className={main}>
                {children}
            </main>
        </div>
    )
}

export default Layout