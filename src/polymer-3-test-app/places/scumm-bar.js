export let scummBar = {
    name: `The Scumm Bar`,
    description: `
        You're in the front room of the bar. It's full of pirates drinking and talking loud.
        <p>
            There's a large curtain at the opposite of the room. 
            A cook comes sometimes from behind this curtain. And you can see that there's another room behind.
        </p>
    `,
    actions: {
        Dock: {
            text: `The dock`,
            Go: {
                text: `Go back to the dock`,
                executedText: `You go out of the 'SCUMM BAR'.`
            }
        },
        ScummBarRearRoom: {
            text: `The curtain`,
            Go: {
                text: `Go through the curtain`,
                executedText: `You pass the curtain.`
            }
        }
    }
};