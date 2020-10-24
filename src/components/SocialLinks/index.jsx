import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { Wrapper, SocialLink } from './styles'

export default function SocialLinks() {
    return (
        <Wrapper>
            <SocialLink
                href="https://www.facebook.com/weedrater/"
                rel="noopener noreferrer"
                aria-label="Weedrater on Facebook"
                target="blank"
            >
                <FaFacebookF />
            </SocialLink>
            <SocialLink
                href="https://www.instagram.com/weedrater/"
                rel="noopener noreferrer"
                aria-label="Weedrater on Instagram"
                target="blank"
            >
                <FaInstagram />
            </SocialLink>
            <SocialLink
                href="https://www.twitter.com/weedrater/"
                rel="noopener noreferrer"
                aria-label="Weedrater on Twitter"
                target="blank"
            >
                <FaTwitter />
            </SocialLink>
        </Wrapper>
    )
}
