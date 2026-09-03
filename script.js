const Color = {
    Red: "#ff0000",
    DarkRed: "#8b0000",
    Yellow: "#ffff00",
    YellowishRed: "#ff4500",
    Green: "#00ff00",
    Blue: "#0000ff"
};

const floorsData = [
    {
        name: "Chaos Mode",
        enjoyability: "Enjoyability: 3/10",
        enjoyabilityColor: Color.Red,
        description: "COMPELTE RNG.",
        rank: "#1",
        borderColor: "#e6e6fa",
        glowColor: "rgba(230, 230, 250)",
        bgImage: "chaos.png",
        ytLink: "https://www.youtube.com/watch?v=pIS9_ctaNvQ"
    },
    {
        name: "Super Hard Mode",
        enjoyability: "Enjoyability: 2.5/10",
        enjoyabilityColor: Color.Red,
        description: "Honestly, this mode is pure pain and leaves everything else in the dust. If you somehow managed to grind out that badge back in 2023, you're an absolute legend.",
        rank: "#2",
        borderColor: "#ff0000",
        glowColor: "rgba(255, 0, 0, 0.4)",
        bgImage: "superhard.png",
        ytLink: "https://www.youtube.com/watch?v=dNEUphwNRbo"
    },
    {
        name: "Endless Mode",
        enjoyability: "Enjoyability: 3/10",
        enjoyabilityColor: Color.Red,
        description: "What do i even say? It's endless.",
        rank: "#3",
        borderColor: "#9932cc",
        glowColor: "rgba(153, 50, 204, 0.4)",
        bgImage: "endless.png",
        ytLink: "https://www.youtube.com/watch?v=50DsmTqkPE4"
    },
    {
        name: "The Mines",
        enjoyability: "Enjoyability: 9/10",
        enjoyabilityColor: Color.Green,
        description: "Honestly carried by the Nest and the 1st Seek Chase, also like 190-199 too i guess.",
        rank: "#4",
        borderColor: "#e0e4e8",
        glowColor: "rgba(224, 228, 232, 0.3)",
        bgImage: "mines.png",
        ytLink: "https://www.youtube.com/watch?v=oCcZH7Vy2I0"
    },
    {
        name: "The Backdoor",
        enjoyability: "Enjoyability: 4.5/10",
        enjoyabilityColor: Color.Red,
        description: "Fully RNG. You can't even hear Blitz when Haste spawns, Also lookman exists.",
        rank: "#5",
        borderColor: "#ffd700",
        glowColor: "rgba(255, 215, 0, 0.3)",
        bgImage: "backdoor.png",
        ytLink: "https://www.youtube.com/watch?v=MwGZl481__4"
    },
    {
        name: "The Outdoors",
        enjoyability: "Enjoyability: 9.5/10",
        enjoyabilityColor: Color.Blue,
        description: "Carried by Eyestalk Chase, it's just confusing as hell.",
        rank: "#6",
        borderColor: "#ff69b4",
        glowColor: "rgba(255, 105, 180, 0.4)",
        bgImage: "outdoors.png",
        isOutdoors: true,
        ytLink: "https://www.youtube.com/watch?v=cNzl773JeKo"
    },
    {
        name: "Archives",
        enjoyability: "Enjoyability: 9.5/10",
        enjoyabilityColor: Color.Blue,
        description: "Archives, Where Forgotten Memories go.",
        rank: "#7",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.4)",
        bgImage: "archives.png",
        ytLink: "https://www.youtube.com/watch?v=gk4loophOGM"
    },
    {
        name: "The Hotel",
        enjoyability: "Enjoyability: 8.5/10",
        enjoyabilityColor: Color.Green,
        description: "it's pretty long and door 100 is a little difficult.",
        rank: "#8",
        borderColor: "#00bcd4",
        glowColor: "rgba(0, 188, 212, 0.3)",
        bgImage: "hotel.png",
        ytLink: "https://www.youtube.com/watch?v=k-o9vcNUXbo"
    },
    {
        name: "The Stairwell",
        enjoyability: "Enjoyability: 1.5/10",
        enjoyabilityColor: Color.DarkRed,
        description: "Extremely Boring and repititive, There is barely any enjoyability you get from this other than playing it for the first time.",
        rank: "#9",
        borderColor: "#e0e0e0",
        glowColor: "rgba(224, 224, 224, 0.5)",
        bgImage: "stairwell.png",
        isStairwell: true,
        ytLink: "https://www.youtube.com/watch?v=WdBZh7U7EJY"
    },
    {
        name: "Retro Mode",
        enjoyability: "Enjoyability: 8.7/10",
        enjoyabilityColor: Color.Green,
        description: "drakobloxxers would catch you quickly especially on that last door.",
        rank: "#10",
        borderColor: "#ff3300",
        glowColor: "rgba(255, 51, 0, 0.3)",
        bgImage: "retro.png",
        isRetro: true,
        ytLink: "https://www.youtube.com/watch?v=3ogXXQttvRc"
    },
    {
        name: "Hotel -",
        enjoyability: "Enjoyability: 7.5/10",
        enjoyabilityColor: Color.Yellow,
        description: "Old hotel, Nothing much to say here.",
        rank: "#11",
        borderColor: "#5c4033",
        glowColor: "rgba(92, 64, 51, 0.4)",
        bgImage: "hotel_minus.png",
        ytLink: "https://www.youtube.com/watch?v=P_W7o4KapZM"
    },
    {
        name: "Rush Mode",
        enjoyability: "Enjoyability: 7/10",
        enjoyabilityColor: Color.Yellow,
        description: "Exact opposite of Super Hard mode, No greenhouse and items are extremely common including Crucifixes.",
        rank: "#12",
        borderColor: "#1a1a1a",
        glowColor: "rgba(0, 0, 0, 0.6)",
        bgImage: "rush_mode.png",
        ytLink: "https://www.youtube.com/watch?v=H1ifZ3Arhf0"
    },
    {
        name: "Cringle's Workshop",
        enjoyability: "Enjoyability: 6.5/10",
        enjoyabilityColor: Color.YellowishRed,
        description: "Chill and short.",
        rank: "#13",
        borderColor: "#228b22",
        glowColor: "rgba(34, 139, 34, 0.4)",
        bgImage: "workshop.png",
        ytLink: "https://www.youtube.com/watch?v=sG6jMMObi-U"
    }
];

function checkMobile() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    if (isMobile) {
        document.body.classList.add('mobile-device');
    } else {
        document.body.classList.remove('mobile-device');
    }
}

window.addEventListener('resize', checkMobile);
document.addEventListener('DOMContentLoaded', checkMobile);

function showPage(pageId) {
    const homeView = document.getElementById('home-view');
    const floorsView = document.getElementById('floors-view');

    if (pageId === 'home') {
        if (homeView) homeView.style.display = 'flex';
        if (floorsView) floorsView.style.display = 'none';
    } else if (pageId === 'floors') {
        if (homeView) homeView.style.display = 'none';
        if (floorsView) floorsView.style.display = 'block';
        window.scrollTo(0, 0);
    }
}

function renderFloors() {
    const container = document.getElementById('floors-container');
    if (!container) return;
    
    container.innerHTML = floorsData.map(floor => {
        const tag = floor.ytLink ? 'a' : 'div';
        const linkAttrs = floor.ytLink ? `href="${floor.ytLink}" target="_blank" rel="noopener noreferrer"` : '';
        
        return `
            <${tag} ${linkAttrs} class="floor-card ${floor.isOutdoors ? 'outdoors-card' : ''} ${floor.isArchives ? 'archives-card' : ''} ${floor.isRetro ? 'retro-card' : ''} ${floor.isStairwell ? 'stairwell-card' : ''}" style="border-color: ${floor.borderColor}; box-shadow: 0 0 25px ${floor.glowColor}; background-image: url('${floor.bgImage}'); text-decoration: none; position: relative; overflow: hidden;">
                ${floor.isOutdoors ? `<img src="outdoors_frame.png" class="outdoors-vines-frame" alt="Vines Frame">` : ''}
                ${floor.isRetro ? `<img src="drakoblox.png" class="awkward-drakoblox" alt="Drakoblox" style="position: absolute; pointer-events: none; transform: translate(-50%, -50%); transition: transform 0.05s ease-out; display: none; width: 60px; height: 60px;">` : ''}
                <div class="floor-meta">
                    <span class="rank" style="color: ${floor.borderColor}; text-shadow: 0 0 12px ${floor.glowColor};">${floor.rank}</span>
                </div>
                <div class="floor-info">
                    <h2 style="text-decoration: none; margin-bottom: 4px;">${floor.name}</h2>
                    <p class="floor-enjoyability" style="color: ${floor.enjoyabilityColor}; font-size: 1.1rem; font-weight: bold; margin-bottom: 12px; text-shadow: 0 0 8px rgba(0, 0, 0, 0.95);">${floor.enjoyability}</p>
                    <p style="text-decoration: none;">${floor.description}</p>
                </div>
            </${tag}>
        `;
    }).join('');

    const retroCard = container.querySelector('.retro-card');
    if (retroCard) {
        const drakobloxImg = retroCard.querySelector('.awkward-drakoblox');
        if (drakobloxImg) {
            retroCard.addEventListener('mouseenter', () => {
                drakobloxImg.style.display = 'block';
            });
            retroCard.addEventListener('mouseleave', () => {
                drakobloxImg.style.display = 'none';
            });
            retroCard.addEventListener('mousemove', (e) => {
                const rect = retroCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                drakobloxImg.style.left = `${x}px`;
                drakobloxImg.style.top = `${y}px`;
            });
        }
    }
}

renderFloors();
