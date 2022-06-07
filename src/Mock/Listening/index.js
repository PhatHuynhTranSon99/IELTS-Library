const data = {
    "sections": [
        {
            "id": 1,
            "name": "Section 1",
            "subtitle": "Question 1-8",
            "tasks": [
                {
                    "name": "Question 1-4",
                    "task": "Complete the notes bellow<br/>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                    "heading": "Transport Survey",
                    "type": "NOTE_COMPLETION",
                    "questions": `
                        <h2>Before the event</h2>
                        <p><b>Name:</b> Luisa <input id='1'/></p>
                        <p><b>Address:</b> <input id='2'/> White Stone Road</p>
                        <h2>Suggestion for improvement</h2>
                        <ul>
                            <li>better <input id='3'/></li>
                            <li>more frequent <input id='4'/></li>
                        </ul>
                    `
                },
                {
                    "name": "Question 5-8",
                    "task": "Complete the table bellow<br/><br/>Write <b>NO MORE THAN TWO WORDS</bo> for each answer",
                    "heading": null,
                    "type": "TABLE_COMPLETION",
                    "rows": [
                        {
                            "id": 1,
                            "items": [
                                "",
                                "<b>Number of days</b",
                                "<b>Total distance</b>",
                                "<b>Price (per person)</b>",
                                "<b>Include</b>"
                            ]
                        },
                        {
                            "id": 2,
                            "items": [
                                "<b>Trip One</b>",
                                "12 days",
                                "<input id='5'/> km",
                                "525 pounds",
                                `
                                <ul>
                                    <li>accommodation</li>
                                    <li>car</li>
                                    <li>one <input id='6'/></li>
                                </ul>
                                `
                            ]
                        },
                        {
                            "id": 3,
                            "items": [
                                "<bold>Trip Two</bold>",
                                "9 days",
                                "980 km",
                                "<input id='7'/> pounds",
                                `
                                <ul>
                                    <li>accommodation</li>
                                    <li>car</li>
                                    <li>one <input id='8'/></li>
                                </ul>
                                `
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "Section 2",
            "subtitle": "Question 9-14",
            "tasks": [
                {
                    "name": "Question 9-12",
                    "task": "Choose the correct answer",
                    "heading": "Global Design Competition",
                    "type": "SINGLE_MULTIPLE_CHOICE",
                    "questions": [
                        {
                            "id": 9,
                            "content": "In paragraph one, the author suggest that",
                            "answers": [
                                {
                                    "choice": "A",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "B",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "C",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "D",
                                    "content": "abolishing pay schemes that are based on age"
                                }
                            ]
                        },
                        {
                            "id": 10,
                            "content": "In paragraph one, the author suggest that",
                            "answers": [
                                {
                                    "choice": "A",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "B",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "C",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "D",
                                    "content": "abolishing pay schemes that are based on age"
                                }
                            ]
                        },
                        {
                            "id": 11,
                            "content": "In paragraph one, the author suggest that",
                            "answers": [
                                {
                                    "choice": "A",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "B",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "C",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "D",
                                    "content": "abolishing pay schemes that are based on age"
                                }
                            ]
                        },
                        {
                            "id": 12,
                            "content": "In paragraph one, the author suggest that",
                            "answers": [
                                {
                                    "choice": "A",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "B",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "C",
                                    "content": "abolishing pay schemes that are based on age"
                                },
                                {
                                    "choice": "D",
                                    "content": "abolishing pay schemes that are based on age"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Question 13-14",
                    "task": "",
                    "heading": "",
                    "type": "MULTIPLE_MULTIPLE_CHOICES",
                    "questions": [
                        {
                            "id": [13, 14],
                            "content": `
                                Choose <b>TWO</b> letters <b>A-D</b><br/><br/>
                                Which TWO facilities of the club have been improved?
                            `,
                            "answers": [
                                {
                                    "id": "A",
                                    "content": "camping"
                                },
                                {
                                    "id": "B",
                                    "content": "climbing"
                                },
                                {
                                    "id": "C",
                                    "content": "collecting"
                                },
                                {
                                    "id": "D",
                                    "content": "hunting"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "name": "Section 3",
            "subtitle": "Question 15-22",
            "tasks": [
                {
                    "name":  "Question 15-18",
                    "task": `
                        What information should Tim use?<br/><br/>
                        Choose <b>SIX</b> answers from the box and write the correct letter <b>A-G</b>, next to the question 15-18
                    `,
                    "heading": "",
                    "type": "MATCH_ITEM",
                    "questions": [
                        {
                            "id": 15,
                            "content": "Less time should be spent on exercises. <input id='15'/>"
                        },
                        {
                            "id": 16,
                            "content": "Less time should be spent on exercises. <input id='16'/>"
                        },
                        {
                            "id": 17,
                            "content": "Less time should be spent on exercises. <input id='17'/>"
                        },
                        {
                            "id": 18,
                            "content": "Less time should be spent on exercises. <input id='18'/>"
                        }
                    ],
                    "questionTitle": "Area of the world",
                    "items": [
                        {
                            "id": "A",
                            "content": "Freeman"
                        },
                        {
                            "id": "B",
                            "content": "Freeman"
                        },
                        {
                            "id": "C",
                            "content": "Freeman"
                        },
                        {
                            "id": "D",
                            "content": "Freeman"
                        }
                    ],
                    "itemTitle": "Features"
                },
                {
                    "name": "Question 19-22",
                    "task": `
                        Label the map bellow<br/><br/>
                        Write the correct letter <b>A-I</b>, next to Question 19-22
                    `,
                    "heading": "",
                    "type": "LABEL_MAP",
                    "questions": [
                        {
                            "id": 19,
                            "content": "House <input id='19'/>"
                        },
                        {
                            "id": 20,
                            "content": "Lake <input id='20'/>"
                        },
                        {
                            "id": 21,
                            "content": "Venue <input id='21'/>"
                        },
                        {
                            "id": 22,
                            "content": "Park <input id='22'/>"
                        }
                    ],
                    "image": "https://www.ieltsjacky.com/images/FlowChartAntiAgingPill.jpg"
                }
            ]
        }
    ],
    "pagination": [
        {
            "section": 1,
            "questions": [1, 2, 3, 4, 5, 6, 7, 8]
        },
        {
            "section": 2,
            "questions": [9, 10, 11, 12, 13, 14,]
        },
        {
            "section": 3,
            "questions": [15, 16, 17, 18, 19, 20, 21, 22]
        },
    ]
};

export default data;