'use client'
import Image from "next/image"
import styles from "@/styles/layout/layout.module.css"
import LocationSearch from "@/container/search/LocationSearch"

export default function HeaderLayout(){
    return(
        <header className={styles.header}>
            <div className={styles.title}>날씨프로젝트</div>
            <div>
                <LocationSearch/>
            </div>
            <Image
            src="/icons/hamburger.svg"
            alt="menuButton"
            width={30}
            height={30}
            />
        </header>
    )
}