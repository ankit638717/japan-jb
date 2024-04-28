// Sample job data (replace with real data fetched from an API)
const jobs = [
    { title: "Software Engineer", company: "TechCo", location: "Tokyo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Marketing Specialist", company: "MarketX", location: "Osaka", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." } 
];

// Function to display job listings
function displayJobs() {
    const jobsContainer = document.getElementById( "jobsContainer" );
    jobsContainer.innerHTML = '';

    const searchTerm = document.getElementById( "searchInput" ).value.toLowerCase();

    jobs.forEach( job => {
        if ( job.title.toLowerCase().includes( searchTerm ) || job.company.toLowerCase().includes( searchTerm ) || job.location.toLowerCase().includes( searchTerm ) ) {
            const jobCard = document.createElement( "div" );
            jobCard.classList.add( "job-card" );
            jobCard.innerHTML = `
                <h3>${ job.title }</h3>
                <p><strong>Company:</strong> ${ job.company }</p>
                <p><strong>Location:</strong> ${ job.location }</p>
                <p>${ job.description }</p>
            `;
            jobsContainer.appendChild( jobCard );
        }
    } );
}

// Event listener for search input
document.getElementById( "searchInput" ).addEventListener( "input", displayJobs );

// Display initial job listings
displayJobs();
