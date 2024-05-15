'use client'
import Image from "next/image"
import styles from "@/styles/layout/layout.module.css"
import LocationSearch from "@/container/search/LocationSearch"

export default function HeaderLayout(){
    return(
        <header className={styles.header}>
            <div className={styles.title}>날씨프로젝트</div>
            <div className={styles.searchInputContainer}>
                <LocationSearch/>
            </div>
            <div className={styles.hamburgerMenuContainer}>
                <Image
                src="/icons/hamburger.png"
                alt="menuButton"
                fill
                />
            </div>
        </header>
    )
}