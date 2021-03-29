import React from 'react'

import { Link } from 'gatsby'
import styles from './style.module.css'
import Button from '../Button'
import InfoTab from '../InfoTab'

const PrijavaForm = () => (
    <div className={styles.prijava}>
        <InfoTab text="Korisničko ime:"/>
        <InfoTab text="Lozinka:"/>
        <Button activeButton="signIn"/>
        <div className={styles.introMessageSignIn}>
            NEMATE RAČUN? REGISTRIRAJTE SE. *SMILEY FACE*
            <Link to='/korisnickiProfil'>
                <div className={styles.testClickProfile}>
                    click to see profile
                </div>
            </Link>
        </div>
    </div>
)

export default PrijavaForm