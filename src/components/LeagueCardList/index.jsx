import React, { useState, useEffect } from 'react'
import LeagueCard from 'components/LeagueCard'
import { StaticQuery, graphql } from 'gatsby'
import { LeagueListWrapper } from './styles'
import { leagueSeasonSorter } from 'utils/arrayHelpers'

function LeagueCardList() {
    return (
        <StaticQuery
            query={graphql`
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
            `}
            render={(data) => {
                const [sortedLeagues, setSortedLeagues] = useState([])
                useEffect(() => {
                    const leaguesSortedBySeason = data.ninozFantasySports.returnAllLeagues.sort(
                        leagueSeasonSorter('seasons', 'startDate')
                    )
                    setSortedLeagues(leaguesSortedBySeason)
                }, [data])

                return (
                    <LeagueListWrapper>
                        {sortedLeagues.map((league) => (
                            <LeagueCard league={league} key={league.id} />
                        ))}
                    </LeagueListWrapper>
                )
            }}
        />
    )
}

export default LeagueCardList
