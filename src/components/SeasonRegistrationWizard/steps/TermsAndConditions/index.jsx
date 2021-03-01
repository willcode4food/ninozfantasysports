import React from 'react'
import PropTypes from 'prop-types'
import { SEASON_REGISTER_STEPS } from 'utils/constants'
import { SPACERS } from 'utils/styleHelpers'
import { TermsWrapper, TermsBox, TermsScollBox, TermsScollStyles } from './styles'
import { useStaticQuery, graphql } from 'gatsby'
function TermsAndConditions({ setFieldValidation, fieldValidation }) {
    const data = useStaticQuery(graphql`
        query tosQuery {
            allMarkdownRemark(filter: { frontmatter: { title: { eq: "Terms of Use" } } }) {
                edges {
                    node {
                        html
                    }
                }
            }
        }
    `)

    const {
        allMarkdownRemark: { edges },
    } = data
    const {
        node: { html },
    } = edges[0]
    return (
        <TermsWrapper>
            <TermsBox>Read through Terms and Conditions</TermsBox>
            <TermsBox>
                <TermsScollBox>
                    <TermsScollStyles dangerouslySetInnerHTML={{ __html: html }}></TermsScollStyles>
                </TermsScollBox>
            </TermsBox>
            <TermsBox paddingTop={SPACERS.M}>
                I Agree to the Terms of Service
                <input
                    role="checkbox"
                    type="checkbox"
                    checked={fieldValidation[SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]}
                    onChange={() => {
                        setFieldValidation({
                            ...fieldValidation,
                            [SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]: !fieldValidation[
                                SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS
                            ],
                        })
                    }}
                />
            </TermsBox>
        </TermsWrapper>
    )
}

TermsAndConditions.propTypes = {
    setFieldValidation: PropTypes.func,
    fieldValidation: PropTypes.shape({
        [SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]: PropTypes.bool,
        [SEASON_REGISTER_STEPS.PAYMENT]: PropTypes.bool,
    }),
}

export default TermsAndConditions
