async function githubFetchActivity(username) {
    const url = `https://api.github.com/users/${username}/events`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
}

function display(events) {
    const result = events.map(event => {
        if (event.type === "PushEvent") {
            return `Pushed ${event.payload.commits.length} commits to ${event.repo.name}`;
        }

        if (event.type === "IssuesEvent") {
            return `${event.payload.action[0].toUpperCase() + event.payload.action.slice(1)} an issue in ${event.repo.name}`;
        }

        if (event.type === "WatchEvent") {
            return `Starred ${event.repo.name}`;
        }

        if (event.type === "ForkEvent") {
            return `Forked ${event.repo.name}`;
        }

        if (event.type === "CreateEvent") {
            return `Created ${event.payload.ref_type} in ${event.repo.name}`;
        }

        return `${event.type.replace("Event", "")} in ${event.repo.name}`;
    });

    result.forEach(action => console.log(`- ${action}`));
}


function main() {
    const username = process.argv[2];
    if (!username) {
        console.error('Please provide a GitHub username as a command-line argument.');
        process.exit(1);
    }

    githubFetchActivity(username).then((events) => {
        if (!events || events.length === 0) {
            console.log('No activity found for this user.');
            return;
        }
        display(events);
    }).catch((error) => {
        console.error('Error fetching activity:', error);
        process.exit(1);
    });
}

main();