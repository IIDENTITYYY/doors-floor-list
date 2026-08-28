const floorsData = [
    {
        name: "Chaos Mode",
        description: "COMPELTE RNG.",
        rank: "#1",
        borderColor: "#e6e6fa",
        glowColor: "rgba(230, 230, 250)",
        bgImage: "chaos.png",
        ytLink: "https://www.youtube.com/watch?v=pIS9_ctaNvQ"
    },
    {
        name: "Super Hard Mode",
        description: "Honestly, this mode is pure pain and leaves everything else in the dust. If you somehow managed to grind out that badge back in 2023, you're an absolute legend.",
        rank: "#2",
        borderColor: "#ff0000",
        glowColor: "rgba(255, 0, 0, 0.4)",
        bgImage: "superhard.png",
        ytLink: "https://www.youtube.com/watch?v=dNEUphwNRbo"
    },
    {
        name: "Endless Mode",
        description: "What do i even say? It's endless.",
        rank: "#3",
        borderColor: "#9932cc",
        glowColor: "rgba(153, 50, 204, 0.4)",
        bgImage: "endless.png",
        ytLink: "https://www.youtube.com/watch?v=50DsmTqkPE4"
    },
    {
        name: "The Backdoor",
        description: "Fully RNG. You can't even hear Blitz when Haste spawns, Also lookman exists.",
        rank: "#4",
        borderColor: "#ffd700",
        glowColor: "rgba(255, 215, 0, 0.3)",
        bgImage: "backdoor.png",
        ytLink: "https://www.youtube.com/watch?v=MwGZl481__4"
    },
    {
        name: "The Mines",
        description: "Honestly carried by the Nest and the 1st Seek Chase, also like 190-199 too i guess.",
        rank: "#5",
        borderColor: "#e0e4e8",
        glowColor: "rgba(224, 228, 232, 0.3)",
        bgImage: "mines.png",
        ytLink: "https://www.youtube.com/watch?v=oCcZH7Vy2I0"
    },
    {
        name: "The Outdoors",
        description: "Carried by Eyestalk Chase, it's just confusing as hell.",
        rank: "#6",
        borderColor: "#ff69b4",
        glowColor: "rgba(255, 105, 180, 0.4)",
        bgImage: "outdoors.png",
        isOutdoors: true,
        ytLink: "https://www.youtube.com/watch?v=cNzl773JeKo"
    },
    {
        name: "The Hotel",
        description: "it's pretty long and door 100 is a little difficult.",
        rank: "#7",
        borderColor: "#00bcd4",
        glowColor: "rgba(0, 188, 212, 0.3)",
        bgImage: "hotel.png",
        ytLink: "https://www.youtube.com/watch?v=k-o9vcNUXbo"
    },
    {
        name: "Retro Mode",
        description: "drakobloxxers would catch you quickly especially on that last door.",
        rank: "#8",
        borderColor: "#ff3300",
        glowColor: "rgba(255, 51, 0, 0.3)",
        bgImage: "retro.png",
        isRetro: true,
        ytLink: "https://www.youtube.com/watch?v=3ogXXQttvRc"
    },
    {
        name: "Hotel -",
        description: "Old hotel, Nothing much to say here.",
        rank: "#9",
        borderColor: "#5c4033",
        glowColor: "rgba(92, 64, 51, 0.4)",
        bgImage: "hotel_minus.png",
        ytLink: "https://www.youtube.com/watch?v=P_W7o4KapZM"
    },
    {
        name: "Rush Mode",
        description: "Exact opposite of Super Hard mode, No greenhouse and items are extremely common including Crucifixes.",
        rank: "#10",
        borderColor: "#1a1a1a",
        glowColor: "rgba(0, 0, 0, 0.6)",
        bgImage: "rush_mode.png",
        ytLink: "https://www.youtube.com/watch?v=H1ifZ3Arhf0"
    },
    {
        name: "Cringle's Workshop",
        description: "Chill and short.",
        rank: "#11",
        borderColor: "#228b22",
        glowColor: "rgba(34, 139, 34, 0.4)",
        bgImage: "workshop.png",
        ytLink: "https://www.youtube.com/watch?v=sG6jMMObi-U"
    },
    {
        name: "Archives",
        description: "Archives, Where Forgotten Memories go. (STILL NOT RANKED BUT WILL BE RANKED EVENTUALLY)",
        rank: "N/A",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.4)",
        bgImage: "archives.png",
        isArchives: true,
        ytLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
    }
];

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
    
    container.innerHTML = floorsData.map(floor => {
        const tag = floor.ytLink && !floor.isArchives ? 'a' : 'div';
        const linkAttrs = floor.ytLink && !floor.isArchives ? `href="${floor.ytLink}" target="_blank" rel="noopener noreferrer"` : '';
        
        return `
            <${tag} ${linkAttrs} class="floor-card ${floor.isOutdoors ? 'outdoors-card' : ''} ${floor.isArchives ? 'archives-card' : ''} ${floor.isRetro ? 'retro-card' : ''}" style="border-color: ${floor.borderColor}; box-shadow: 0 0 25px ${floor.glowColor}, inset 0 0 20px rgba(0,0,0,0.5); background-image: url('${floor.bgImage}'); text-decoration: none;">
                ${floor.isOutdoors ? `<img src="outdoors_frame.png" class="outdoors-vines-frame" alt="Vines Frame">` : ''}
                ${floor.isRetro ? `<img src="drakoblox.png" class="awkward-drakoblox" alt="Drakoblox">` : ''}
                <div class="floor-meta">
                    <span class="rank" style="color: ${floor.borderColor}; text-shadow: 0 0 12px ${floor.glowColor};">${floor.rank}</span>
                </div>
                <div class="floor-info">
                    <h2 style="text-decoration: none;">${floor.name}</h2>
                    <p style="text-decoration: none;">${floor.description}</p>
                </div>
            </${tag}>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', renderFloors);