import { css, Global } from '@emotion/react'
import Breadcrumbs from 'components/Breadcrumbs'
import Footer from 'components/Footer'
import Header from 'components/Header'
import NavDrawer from 'components/NavDrawer'
import SEO from 'components/SEO'
import VerifyAgeModal from 'components/VerifyAgeModal'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { COLORS } from 'utils/styleHelpers'
import { Body, BreadcrumbsWrapper } from './styles'
import { resetPathHistory, getPathHistory } from 'components/PathHistory'
function GlobalLayout({
    backgroundColor,
    children,
    isDisplayingSearch,
    isShowingFooter = true,
    isShowingBreadcrumbs = true,
    isShowingAccountLink = true,
    isVerifyAgeModalOverriden = false,
    pageTitle,
    location,
}) {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(isDisplayingSearch)

    const { pathname } = location
    const resetState = () => {
        setIsNavOpen(false)
        setIsSearchOpen(false)
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
        setIsSearchOpen(false)
    }

    const toggleSearch = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setIsNavOpen(false)
        setIsSearchOpen(!isSearchOpen)
    }

    useEffect(() => {
        if (location.pathname === getPathHistory()) {
            resetPathHistory()
        }
    }, [])

    return (
        <>
            <Global
                styles={css`
                    body {
                        background: ${backgroundColor};
                        transition: background 0.5s;
                    }
                `}
            />
            <Helmet
                meta={[
                    {
                        name: 'viewport',
                        content: `width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no`,
                    },
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                    { name: 'robots', content: 'noindex, nofollow' },
                    { name: 'theme-color', content: `${COLORS.SECONDARY}` },
                    { name: 'google', content: 'notranslate' },
                    { httpEquiv: 'Content-Language', content: 'en' },
                    { name: 'apple-mobile-web-app-capable', content: 'yes' },
                ]}
                title="Pond Street Software"
            >
                {/* inline style elements */}
                <style type="text/css">{`
							:focus {
								outline: 0;
							}
						`}</style>
            </Helmet>
            <Header
                isDisplayingSearch={isDisplayingSearch}
                isShowingBreadcrumbs={isShowingBreadcrumbs}
                isShowingAccountLink={isShowingAccountLink}
                pathname={pathname}
                location={location}
                resetDrawer={resetState}
                toggleNav={toggleNav}
                toggleSearch={toggleSearch}
            />
            {isShowingBreadcrumbs && (
                <BreadcrumbsWrapper>
                    <Breadcrumbs location={location} />
                </BreadcrumbsWrapper>
            )}
            <SEO pathname={pathname} title={pageTitle} />
            <VerifyAgeModal hasAgeVerified={isVerifyAgeModalOverriden} />
            <Body
                backgroundColor={backgroundColor}
                isDisplayingSearch={isDisplayingSearch}
                isShowingFooter={isShowingFooter}
            >
                {children}
            </Body>
            {isShowingFooter && <Footer />}
            <NavDrawer
                isNavOpen={isNavOpen}
                resetState={resetState}
                pathname={pathname}
                isShowingBreadcrumb={isShowingBreadcrumbs}
            />
        </>
    )
}

GlobalLayout.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    isVerifyAgeModalOverriden: PropTypes.bool,
    isDisplayingSearch: PropTypes.bool,
    isShowingAccountLink: PropTypes.bool,
    isShowingBreadcrumbs: PropTypes.bool,
    isShowingFooter: PropTypes.bool,
    pageTitle: PropTypes.string,
    location: PropTypes.object,
}

export default GlobalLayout
