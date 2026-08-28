const floorsData = [
    {
        name: "Super Hard Mode",
        description: "Honestly, this mode is pure pain and leaves everything else in the dust. If you somehow managed to grind out that badge back in 2023, you're an absolute legend.",
        rank: "#1",
        borderColor: "#ff0000",
        glowColor: "rgba(255, 0, 0, 0.4)",
        bgImage: "superhard.png"
    },
    {
        name: "Endless Mode",
        description: "What is there even to say? It literally just goes on forever until you inevitably choke.",
        rank: "#2",
        borderColor: "#9932cc",
        glowColor: "rgba(153, 50, 204, 0.4)",
        bgImage: "endless.png"
    },
    {
        name: "The Backdoor",
        description: "Total RNG madness. Good luck trying to listen for Blitz cues while Haste is barreling toward you, all while dodging Lookman's staring contest.",
        rank: "#3",
        borderColor: "#ffd700",
        glowColor: "rgba(255, 215, 0, 0.3)",
        bgImage: "backdoor.png"
    },
    {
        name: "The Mines",
        description: "Honestly carried entirely by the Nest and that insane 1st Seek Chase—plus those sweaty runs through doors 190 to 199.",
        rank: "#4",
        borderColor: "#e0e4e8",
        glowColor: "rgba(224, 228, 232, 0.3)",
        bgImage: "mines.png"
    },
    {
        name: "The Outdoors",
        description: "Honestly just here because of the Eyestalk. That one single mechanic makes the whole zone a headache.",
        rank: "#5",
        borderColor: "#ff69b4",
        glowColor: "rgba(255, 105, 180, 0.4)",
        bgImage: "outdoors.png",
        isOutdoors: true
    },
    {
        name: "The Hotel",
        description: "A solid, classic grind that actually tests your patience. Door 100 alone makes it way tougher than the outdoors.",
        rank: "#6",
        borderColor: "#00bcd4",
        glowColor: "rgba(0, 188, 212, 0.3)",
        bgImage: "hotel.png"
    },
    {
        name: "Retro Mode",
        description: "Looks all nostalgic and cute until those speedy drakobloxxers sprint out of nowhere and jump you right at the finish line.",
        rank: "#7",
        borderColor: "#ff3300",
        glowColor: "rgba(255, 51, 0, 0.3)",
        bgImage: "retro.png"
    },
    {
        name: "Hotel -",
        description: "Vintage hotel vibes. Nothing crazy going on here, pretty standard stuff.",
        rank: "#8",
        borderColor: "#5c4033",
        glowColor: "rgba(92, 64, 51, 0.4)",
        bgImage: "hotel_minus.png"
    },
    {
        name: "Rush Mode",
        description: "Basically easy mode for the hotel. No greenhouse stress and you're practically drowning in items everywhere you look.",
        rank: "#9",
        borderColor: "#1a1a1a",
        glowColor: "rgba(0, 0, 0, 0.6)",
        bgImage: "rush_mode.png"
    },
    {
        name: "Cringle's Workshop",
        description: "Super chill, super short, and practically a free win.",
        rank: "#10",
        borderColor: "#228b22",
        glowColor: "rgba(34, 139, 34, 0.4)",
        bgImage: "workshop.png"
    },
    {
        name: "Archives",
        description: "Where all the lost concepts go to sleep. Not ranked yet, but it's definitely claiming a spot eventually.",
        rank: "N/A",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.4)",
        bgImage: "archives.png",
        isArchives: true
    }
];

function checkMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

function showPage(pageId) {
    const homeView = document.getElementById('home-view');
    const floorsView = document.getElementById('floors-view');

    if (homeView) homeView.style.display = 'none';
    if (floorsView) floorsView.style.display = 'none';

    if (pageId === 'home') {
        if (homeView) homeView.style.display = 'flex';
    } else if (pageId === 'floors') {
        if (floorsView) floorsView.style.display = 'block';
    }
}

function renderFloors() {
    const container = document.getElementById('floors-container');
    if (!container) return;
    
    const isMobile = checkMobileDevice();
    if (isMobile) {
        container.classList.add('mobile-layout');
    } else {
        container.classList.remove('mobile-layout');
    }
    
    container.innerHTML = floorsData.map(floor => `
        <div class="floor-card ${floor.isOutdoors ? 'outdoors-card' : ''} ${floor.isArchives ? 'archives-card' : ''} ${isMobile ? 'mobile-card' : ''}" style="border-color: ${floor.borderColor}; box-shadow: 0 0 25px ${floor.glowColor}, inset 0 0 20px rgba(0,0,0,0.5); background-image: url('${floor.bgImage}');">
            ${floor.isOutdoors ? `<img src="outdoors_frame.png" class="outdoors-vines-frame" alt="Vines Frame">` : ''}
            <div class="floor-meta">
                <span class="rank" style="color: ${floor.borderColor}; text-shadow: 0 0 12px ${floor.glowColor};">${floor.rank}</span>
            </div>
            <div class="floor-info">
                <h2>${floor.name}</h2>
                <p>${floor.description}</p>
            </div>
        </div>
    `).join('');
}

window.addEventListener('resize', renderFloors);
document.addEventListener('DOMContentLoaded', renderFloors);
