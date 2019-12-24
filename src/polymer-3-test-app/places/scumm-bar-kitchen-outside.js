export let scummBarKitchenOutside = {
    name: `The outside of the kitchen`,
    description: `
        You are outside, just next to the kitchen of the 'SCUMM BAR'.
        <p>
            You're in front of the sea. This is a dead end. 
        </p>
        <p>
            The cook should use this place to throw out the wastes.
        </p>
    `,
    actions: {
        ScummBarKitchen: {
            name: 'The kitchen',
            Go: {
                text: `Go back to the kitchen`,
                executedText: `You go to the kitchen of the 'SCUMM BAR'.`
            }
        }
    }
};