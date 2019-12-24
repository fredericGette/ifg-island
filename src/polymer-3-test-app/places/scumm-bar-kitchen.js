export let scummBarKitchen = {
    name: `The kitchen`,
    description: `
        You are in the kitchen of the 'SCUMM BAR'.
        <p>
            There's another door that goes to the outside.        
        </p>
    `,
    actions: {
        ScummBarRearRoom: {
            text: `The rear room`,
            Go: {
                text: `Go back to the rear room`,
                executedText: `You go to the rear room of the 'SCUMM BAR'.`
            }
        },
        ScummBarKitchenOutside: {
            text: `The outside`,
            Go: {
                text: `Go to the outside`,
                executedText: `You go to the outside of the kitchen.`
            }
        }
    }
};