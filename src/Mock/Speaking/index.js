const Speaking = {
    "sections": [
        {
            "id": 1,
            "name": "Part 1",
            "content": `
                The examiner ask the candidate about him/herself, his/her home, work or studies and other familiar topics<newline/>
                <subheading>EXAMPLE</subheading>
                <subheading>Food and cooking</subheading/>
                {list}
                    ---What sorts of food do you like eating most? Why?
                    ---Who normally does the cooking in your house? Why? Why not?
                    ---Do you watch cookery programs on TV? Why? Why not?
                    ---In general, do you prefer eating out or at home? Why?
                {endlist}
            `
        },
        {
            "id": 2,
            "name": "Part 2",
            "content": `
                Describe a house/apartment someone you know lives in<newline/><newline/>
                You should say:
                {list}
                    ---Whose house/apartment this is
                    ---Where the house/apartment is
                    ---What it looks like inside
                {endlist}<newline/><newline/>                
                And explain what you like or dislike about this person’s house/apartment.
            `
        },
        {
            "id": 3,
            "name": "Part 3",
            "content": `
                <subheading>Discussion topics</subheading>
                <subheading>Different types of home</subheading>
                Example questions:
                {list}
                    ---What kinds of home are most popular in your country? Why is this?
                    ---What do you think are the advantages of living in a house rather than an apartment?
                    ---Do you think that everyone would like to live in a larger home? Why is that?
                {endlist}
                <subheading>Different types of home</subheading>
                <subheading>Example questions:</subheading>
                {list}
                    ---What kinds of home are most popular in your country? Why is this?
                    ---What do you think are the advantages of living in a house rather than an apartment?
                    ---Do you think that everyone would like to live in a larger home? Why is that?
                {endlist}
            `
        }
    ],
    "pagination": [
        {
            "part": 1,
            "questions": [1]
        },
        {
            "part": 2,
            "questions": [2]
        },
        {
            "part": 3,
            "questions": [3]
        }
    ]
};

export default Speaking;