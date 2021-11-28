import React from "react"
import Card from "./style"
import styles from './style.module.css'
export default function TeamCard({image,userName,userPosition,...rest}) {
  return (
    <>
      <Card {...rest}>
        <img
          className="w-100"
          src={image}
          alt="testimonial"
        />
        <Card.InnerBlock>
          <div>
           <div className={styles.top1}>{userName} </div>
           <div className={styles.top2}> {userPosition} </div> 
             
          
            {/* <Card.Social>
              <Card.SocialItem as="a" href="href://instagram.com" tabIndex={0}>
                <i className="fab fa-instagram" />
              </Card.SocialItem>
              <Card.SocialItem as="a" href="href://instagram.com" tabIndex={0}>
                <i className="fab fa-linkedin" />
              </Card.SocialItem>
              <Card.SocialItem as="a" href="href://instagram.com" tabIndex={0}>
                <i className="fab fa-facebook" />
              </Card.SocialItem>
              <Card.SocialItem as="a" href="href://instagram.com" tabIndex={0}>
                <i className="fab fa-twitter" />
              </Card.SocialItem>
            </Card.Social> */}
          </div>
        </Card.InnerBlock>
      </Card>
    </>
  )
}
