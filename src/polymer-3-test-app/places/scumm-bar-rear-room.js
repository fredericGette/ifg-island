export let scummBarRearRoom = {
    name: `The room behind the curtain`,
    description: `
        You are in the rear room of the 'SCUMM BAR'.
        Three important looking pirates seat at a table.
        <p>
            A cook comes times to times from the door of the kichen.
            He walks through the place, his hands full of foods and goes to the front room. 
            When he comes back, his hands are empty and he goes directly to the kitchen.
        </p>
    `,
    actions: {
        ScummBar: {
            name: `The front room`,
            Go: {
                text: `Go back to the front room`,
                executedText: `You go to the front room of the 'SCUMM BAR'.`
            }
        },
        ScummBarKitchen: {
            name: `The kitchen`,
            Go: {
                text: `Go to the kitchen`,
                executedText: `You go to the kitchen.`
            }
        }
    }
};