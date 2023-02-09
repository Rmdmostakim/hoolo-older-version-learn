import React from 'react';
import Classes from './mobilemenu.module.css';
import {Link,NavLink, useLocation} from 'react-router-dom';
function Mobilenav() {
    const {pathname:url} = useLocation();
    return (
        <div className={Classes.menuContainer}>
            <div className={Classes.menuBox}>
                <div className={Classes.menuItem}>
                    <NavLink to="/">
                        <div className={url === '/'  ? Classes.menuIcon+' '+Classes.menuIcon_active :Classes.menuIcon}>
                        <iconify-icon icon="carbon:home"></iconify-icon>
                        </div>
                        <div className={url === '/'  ? Classes.menuText+' '+Classes.menuText_active : Classes.menuText}>
                            <small>Home</small>
                        </div>
                    </NavLink>
                </div>
                <div className={Classes.menuItem}>
                    <NavLink to="/discover">
                        <div className={url === '/discover'|| url.includes('/collection')  ? Classes.menuIcon+' '+Classes.menuIcon_active :Classes.menuIcon}>
                        <iconify-icon icon="ph:gift-light"></iconify-icon>
                        </div>
                        <div className={url === '/discover'|| url.includes('/collection') ? Classes.menuText+' '+Classes.menuText_active : Classes.menuText}>
                            <small>Discover</small>
                        </div>
                    </NavLink>
                </div>
                <div className={Classes.menuItem}>
                    <Link to="/shop">
                        <div className={url === '/shop' ||  url.includes('/vendors') || url.includes('/categories') ? Classes.menuIcon+' '+Classes.menuIcon_active :Classes.menuIcon}>
                         
                        <iconify-icon icon="clarity:store-line"></iconify-icon>   
                        </div>
                        <div className={url === '/shop'|| url.includes('/vendors') || url.includes('/categories') ? Classes.menuText+' '+Classes.menuText_active : Classes.menuText}>
                            <small>Shop</small>
                        </div>
                    </Link>
                </div>
                <div className={Classes.menuItem}>
                    <NavLink to="/learn">
                        <div className={url === '/learn' || url.includes('/workshop')|| url.includes('/instructor') ? Classes.menuIcon+' '+Classes.menuIcon_active :Classes.menuIcon}>
                        <iconify-icon icon="gala:book"></iconify-icon>
                        </div>
                        <div className={url === '/learn' || url.includes('/workshop')|| url.includes('/instructor') ? Classes.menuText+' '+Classes.menuText_active : Classes.menuText}>
                            <small>Learn</small>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Mobilenav;