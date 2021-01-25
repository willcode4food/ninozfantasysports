import React from 'react'
import LeagueCard from 'components/LeagueCard'
import { StaticQuery, graphql } from 'gatsby'

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
                return data.ninozFantasySports.returnAllLeagues.map((league) => (
                    <LeagueCard league={league} key={league.id} />
                ))
            }}
        />
    )
}

export default LeagueCardList
