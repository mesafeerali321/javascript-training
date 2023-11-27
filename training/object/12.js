let obj = {
    id: '12Ab',
    score: 23,
    batting_average: 56,
    centuries: [
        {
            where: 'New Delhi',
            against: 'Bangladesh',
            runs: 121,
            isnotout: false
        },
        {
            where: 'Lords',
            against: 'Australia',
            runs: 101,
            isnotout: true
        },
        {
            where: 'Lahore',
            against: 'Pakistan',
            runs: 184,
            isnotout: true
        },
    ],
    league_part: [
        {
            leage_name: 'ipl',
            team_part: 'KKR',
            team_owner: 'Shahrukh Khan'
        },
        {
            leage_name: 'big bash',
            team_part: 'canberra',
            team_owner: 'john'
        },
        {
            leage_name: 'ranji',
            team_part: 'punjab',
            team_owner: 'harbajan singh'
        }
    ]
}

// console.log(obj.centuries)
// console.log(obj.centuries[2])

// obj.centuries.map((info) => {
//     console.log(info.where)
// })

obj.league_part.map((info) => {
    console.log(info.leage_name)
})