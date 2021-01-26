import React from 'react'
import LeagueCard from 'components/LeagueCard'
import { StaticQuery, graphql } from 'gatsby'
import { LeagueListWrapper } from './styles'

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
                return (
                    <LeagueListWrapper>
                        {data.ninozFantasySports.returnAllLeagues.map((league) => (
                            <LeagueCard league={league} key={league.id} />
                        ))}
                    </LeagueListWrapper>
                )
            }}
        />
    )
}

export default LeagueCardList
