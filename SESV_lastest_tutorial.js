async function fetchData() {
    try {
        // const corsProxy = 'https://corsproxy.io/';

        // fetch(corsProxy + 'https://www.sesvtutorial.com/page-data/index/page-data.json')
        
        const response = await fetch('https://www.sesvtutorial.com/page-data/index/page-data.json/');

        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        if (!response.ok){
            throw new Error ("Cannot fetch data");
        }
        const data = await response.json();

        // Create element
        htmlContent = '<ol>';
    
        // access to edges for latest tutorials
        const edges = data.result.data.latest.edges;
        edges.forEach(edge => {
            const title = edge.node.frontmatter.title;
            htmlContent += '<li>' + title + '</li>';
            console.log('Title:', title);
        })

        document.getElementById('display').innerHTML = htmlContent;

    } catch (error) {
        console.error(error);
        alert('Error fetching data: ' + error.message);
    }
}

function confirmAction (actionName, callback) {
    // if (confirm(`Are you sure you want to ${actionName}?`)) {
    //     callback();
    // } else {
    //     alert('Action cancelled!');
    // }
    Swal.fire({
        title: 'Confirm',
        text: `Do you actually want to ${actionName}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        } else {
            Swal.fire({
                title: 'Canceled',
                text: `Action ${actionName} is canceled.`,
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    });
}