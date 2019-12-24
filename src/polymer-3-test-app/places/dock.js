export let dock = {
    name: `The dock`,
    description: `
        The dock is strangely empty: no boat. 
        <p>
            From here, you can see the Lookout Point and the nearby village.
        </p>
        <p>
            You hear some noise coming from a building.
            'SCUMM BAR' is written above the door.
        </p>
    `,
    actions: {
        LookoutPoint: {
            text: `The Lookout Point`,
            Go: {
                text: `Go to the Lookout Point`,
                executedText: `You go the Lookout Point.`
            }
        },
        ScummBar: {
            text: `The Scumm Bar`,
            Go: {
                text: `Go into the 'SCUMM BAR'`,
                executedText: `You enter into the 'SCUMM BAR'.`
            }
        },
        Village:
        {
            text: `The village`,
            Go: {
                text: `Go to the village`,
                executedText: `You go to the village`
            }
        }
    }
};