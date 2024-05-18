document.addEventListener('DOMContentLoaded', function() {
    const projectSection = document.getElementById('projects');

    // Define project links, names, and images
    const projectData = [
        {
            url: "https://replit.com/join/beqohevrsn-claygitobu",
            name: "QR Code",
            image: "https://images.unsplash.com/photo-1550482768-88b710a445fd?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image URL
        },
        {
            url: "https://replit.com/join/rumuxnricn-claygitobu",
            name: "The Weather App",
            image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://replit.com/join/tnjyqczofd-claygitobu",
            name: "Currency Converter",
            image: "https://images.unsplash.com/photo-1607623198457-7aad066a4ade?q=80&w=3415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://replit.com/join/vbbgvbuige-claygitobu",
            name: "BMI Calculator",
            image: "https://images.unsplash.com/photo-1545402138-0c105c73cb4d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://replit.com/join/fidchpuzuj-claygitobu",
            name: "Email Sender",
            image: "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://replit.com/join/nvmztwpfeq-claygitobu",
            name: "Tic Tac Toe",
            image: "https://images.unsplash.com/photo-1602632003094-0494b73b7c4a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://replit.com/join/qncundwfyz-claygitobu",
            name: "Simple Alarm Clock",
            image: "https://images.unsplash.com/photo-1456574808786-d2ba7a6aa654?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://replit.com/join/elaflgavmw-claygitobu",
            name: "Character Generator",
            image: "https://images.unsplash.com/photo-1620231150904-a86b9802656a?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    // Dynamically generate project links with names and images
    projectData.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        // Create project image
        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.name + ' Image';
        projectImage.classList.add('project-image');
        projectItem.appendChild(projectImage);

        // Create project link
        const projectLink = document.createElement('a');
        projectLink.href = project.url;
        projectLink.textContent = project.name;
        projectLink.classList.add('btn');
        projectLink.target = '_blank';
        projectItem.appendChild(projectLink);

        projectSection.appendChild(projectItem);
    });

});