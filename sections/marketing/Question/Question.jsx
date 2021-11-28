import React from 'react'
import styles from './Questions.module.css'
import {FiPhoneCall} from 'react-icons/fi'
import {IoMailOutline} from 'react-icons/io5'
import {MdOndemandVideo} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
import {AiFillSafetyCertificate} from 'react-icons/ai'
const Questions=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.title}>
            You still have a question?
            </div>
            <div className={styles.desc}>
            If you cannot find answer to your question inour FAQ, you can always contact us. We wll answer to you shortly!
            </div>
            <div className={styles.contact}>
                <div className={styles.first}>
                    <div>
                        <FiPhoneCall size='3em'/>
                    </div>
                    <div className={styles.phone}>
                    +977 9825165567
                    </div>
                    <div>
                    We are always happy to help.
                    </div>
                </div>
                <div className={styles.second}>
                <div>
                        <IoMailOutline size='3em'/>
                    </div>
                    <div className={styles.phone}>
                    Chat
                    </div>
                    <div>
                    The best way to get answer faster.
                    </div>
                </div>
                <div className={styles.first}>
                    <div>
                        <IoMailOutline size='3em'/>
                    </div>
                    <div className={styles.phone}>
                    support@restrox.co
                    </div>
                    <div>
                    The best way to get answer faster.
                    </div>
                </div>
            </div>
            <div className={styles.support}>
                <div className={styles.box}>
                    <MdOndemandVideo/>
                    On-demand demo & 24-hour support
                </div>
                <div className={styles.box}>
                    <BiSupport/>
                    100% <div>
                      costumer satisfaction
                      </div>
                </div>
                <div className={styles.box}>
                    <AiFillSafetyCertificate/>
                   <div>
                   Serious about
                       </div>  security & privacy
                </div>
            </div>
        </div>
    )
}

export default Questions