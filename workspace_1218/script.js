// Content for each door
const doorContent = [
    {
        day: 1,
        title: "Hey,",
        content: "I prepared some small snippets for you to look back on as we approach the New Year; I know this year we can't celebrate New Year together but I wanted to somehow be there for you. I love you so much Carter, my inspiration, one of my bestest friends and biggest supporter. To many more memories together!!!",
        image: "heart.png", // Add your image path here
        type: "memory"
    },
    {
        day: 2,
        title: "A Memory: First Date",
        content: "I will never forget this! Rittenhouse, Pizza place and then Solar Myth. I loved it so much and had so much fun...we came a long way since then. I would have never expected that I will meet someone this summer, but I'm so happy and grateful that somehow our paths crossed. Ps: I took this picture in Solar Myth when you went to the bathroom haha",
        image: "solar.JPG",
        type: "memory"
    },
    {
        day: 3,
        title: "A Memory: Mango Mango",
        content: "One of my favorite spots with you. I still remember our first time there and how we ate it in the car, I actually thought you wouldn't like it but I'm glad you did. We have to go back soon!",
        image: "mango.PNG",
        link: {
            url: "https://drive.google.com/file/d/1J3A8Ck1-ZV_XLlCZ0xx35MEIlWwDwDnn/view?usp=sharing",
            text: "Click to see the whole image!"
        },
        type: "memory"
    },
    {
        day: 4,
        title: "A Small Gift",
        content: "Check your Georgetown email on the 24th! Let me know if you can't see anything, I'm sending you something small.",
        image: "gift.PNG",
        type: "memory"
    }, 
    {
        day: 5,
        title: "Questions",
        content: "A small list of questions we can use to play in the car... or on any type of date.",
        image: "list.png",
        link: {
            url: "https://docs.google.com/document/d/11j4heBLBBcOnd55z_v-9M1Gu6XkzWOry6c6nVsDEnus/edit?usp=sharing",
            text: "Click to get the whole set!"
        },
        type: "memory"
    },
    {
        day: 6,
        title: "6 Small Things I love about You",
        content: "1. your smile, 2. when you are driving me (somehow it makes me a feel a sense of calmness), 3. your silent hard-workingness and resiliency, 4. when you are goofy with me, 5. you are action-based and you keep your promises, 6. your care and affection for your family, +1. your hug",
        image: "together.png",
        type: "memory"
    },
    {
        day: 7,
        title: "Playlist",
        content: "Join the playlist, it expires in 7 days!!! So we can put this on aux when we are together, also any songs that remind us of each other.",
        image: "music.png",
        link: {
            url: "https://open.spotify.com/playlist/4eNP5D3b5rft1qqYcZkHzQ?si=r-jg10COTtGtr6WgE84NTg&pt=6177c24409ce6c41309817b416333ec1",
            text: "Click to join!"
        },
        type: "memory"
    },
    {
        day: 8,
        title: "A Memory: Boba",
        content: "There are a lot of memories related to this particular drink. You know the inside joke behind it... I never met anyone (who is not asian and) who genuinely likes boba this much as you do. I associate it with a lot of our dates in restaurants, movie nights or in-door hang-outs. You inspired me to like boba too LOL",
        image: "boba.PNG",
        link: {
            url: "https://drive.google.com/file/d/1FvHTMUuBP8n3WZ0TqX0vUaQclNM5QmQ0/view?usp=sharing",
            text: "Click to see the full art!"
        },
        type: "memory"
    },
    {
        day: 9,
        title: "A Recipe for Date Night",
        content: "For the nights when we decide to stay in. By the way, I like beef...",
        image: "steak.PNG",
        link: {
            url: "https://drive.google.com/file/d/1dqurlvhzZqcePMNINMISkks7CBUYyvvO/view?usp=sharing",
            text: "Click to see the whole image!"
        },
        type: "activity"
    },
    {
        day: 10,
        title: "A Memory: Haunted Hayride",
        content: "Thank you so much for inviting me; I've never been to this experience before. It was so much fun spending time with you and your family. I laughed so much that night (besides screaming...) and I loved every single minute of it...the apple cider doughnuts were amazing and I remember holding your hands so tight during those jumpscares too LOL. I also loved seeing you interacting with your parents and siblings, and I could tell you care so much about them...it warmed my heart.",
        image: "photoslip.png",
        link: {
            url: "https://drive.google.com/file/d/1_VO5Y0QzUs8sTGF_oHHZ0COUy3jf55dz/view?usp=sharing",
            text: "Click to see the full art!"
        },
        type: "memory"
    },   
    {
        day: 11,
        title: "Short Video",
        content: "A short video recapping some of my favorite memories. (I teared up during watching it...lowkey embarrassing)",
        image: "play.PNG",
        link: {
            url: "https://drive.google.com/file/d/167LVRVEcEEF2evYNQx3z4W4_BugQ7_P9/view?usp=sharing",
            text: "Click to watch!"
        },
        type: "memory"
    },   
    {
        day: 12,
        title: "Bye Bye, ",
        content: " I hope you enjoyed this little rambling. I will see you in January! Until then, we will have lots of movie nights and Facetime talks :) I will miss you so much.",
        image: "mirror.png",
        type: "memory"
    },        
];

// Helper function to generate the inner content of each door
function generateDoorContent(door) {
    let imageHtml = '';
    let linkHtml = '';

    // Add image if provided
    if (door.image) {
        imageHtml = `<img src="${door.image}" alt="${door.title}" class="door-image">`;
    }

    // Add link if provided
    if (door.link) {
        linkHtml = `<a href="${door.link.url}" target="_blank" class="door-link">${door.link.text}</a>`;
    }

    return `
        <div class="door-inner">
            <div class="door-front">
                <div class="door-number">${door.day}</div>
            </div>
            <div class="door-back">
                <div class="door-content">
                    <h3>${door.title}</h3>
                    <p>${door.content}</p>
                    ${imageHtml}
                    ${linkHtml}
                </div>
            </div>
        </div>
    `;
}

// Update countdown function remains the same
function updateCountdown() {
    const newYear = new Date('December 31, 2024 23:59:59').getTime();
    const now = new Date().getTime();
    const difference = newYear - now;

    document.getElementById('days').textContent = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById('hours').textContent = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById('minutes').textContent = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById('seconds').textContent = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

const doorsContainer = document.querySelector('.doors-grid');

// Generate doors using the content array
doorContent.forEach(door => {
    const doorElement = document.createElement('div');
    doorElement.className = 'door';
    doorElement.innerHTML = generateDoorContent(door);

    doorElement.addEventListener('click', (e) => {
        // Don't toggle the door if clicking on a link
        if (!e.target.closest('a')) {
            doorElement.classList.toggle('open');
        }
    });

    doorsContainer.appendChild(doorElement);
});