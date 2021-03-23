import React from 'react'
import LeagueCard from 'components/LeagueCard'
import { useStaticQuery, graphql } from 'gatsby'
import { LeagueListWrapper } from './styles'
import { leagueSeasonSorter } from 'utils/arrayHelpers'

function LeagueCardList() {
    const data = useStaticQuery(graphql`
        query AllLeagues {
            ninozFantasySports {
                returnAllLeagues {
                    id
                    name
                    description
                    seasons {
                        id
                        name
                        startDate
                        endDate
                    }
                    type
                    ownerId
                    ownerName
                }
            }
        }
    `)
    return (
        <LeagueListWrapper>
            {data.ninozFantasySports.returnAllLeagues.sort(leagueSeasonSorter('seasons', 'startDate')).map((league) => (
                <LeagueCard league={league} key={league.id} />
            ))}
        </LeagueListWrapper>
    )
}

export default LeagueCardList
