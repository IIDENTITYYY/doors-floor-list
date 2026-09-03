const Color = {
    Red: "#ff3333",
    DarkRed: "#8b0000",
    Yellow: "#ffd700",
    YellowishRed: "#ff6b35",
    Green: "#00ff66",
    Blue: "#00d2ff",
    YellowishGreen: "#adff2f",
    Purple: "#b19cd9"
};

const floorsData = [
    {
        name: "Chaos Mode",
        enjoyability: "Enjoyability: 3/10",
        enjoyabilityColor: Color.Red,
        description: "COMPLETE RNG.",
        rank: "#1",
        borderColor: "#e6e6fa",
        glowColor: "rgba(230, 230, 250, 0.4)",
        bgImage: "chaos.png",
        ytLink: "https://www.youtube.com/watch?v=pIS9_ctaNvQ"
    },
    {
        name: "Super Hard Mode",
        enjoyability: "Enjoyability: 2.5/10",
        enjoyabilityColor: Color.Red,
        description: "Honestly, this mode is pure pain and leaves everything else in the dust. If you somehow managed to grind out that badge back in 2023, you're an absolute legend.",
        rank: "#2",
        borderColor: "#ff3333",
        glowColor: "rgba(255, 51, 51, 0.5)",
        bgImage: "superhard.png",
        ytLink: "https://www.youtube.com/watch?v=dNEUphwNRbo"
    },
    {
        name: "The Mines",
        enjoyability: "Enjoyability: 9/10",
        enjoyabilityColor: Color.Green,
        description: "Honestly carried by the Nest and the 1st Seek Chase, also like 190-199 too i guess.",
        rank: "#3",
        borderColor: "#e0e4e8",
        glowColor: "rgba(224, 228, 232, 0.4)",
        bgImage: "mines.png",
        ytLink: "https://www.youtube.com/watch?v=oCcZH7Vy2I0"
    },
    {
        name: "The Backdoor",
        enjoyability: "Enjoyability: 4.5/10",
        enjoyabilityColor: Color.Red,
        description: "Fully RNG. You can't even hear Blitz when Haste spawns, Also lookman exists.",
        rank: "#4",
        borderColor: "#ffd700",
        glowColor: "rgba(255, 215, 0, 0.4)",
        bgImage: "backdoor.png",
        ytLink: "https://www.youtube.com/watch?v=MwGZl481__4"
    },
    {
        name: "The Outdoors",
        enjoyability: "Enjoyability: 9.5/10",
        enjoyabilityColor: Color.Blue,
        description: "Carried by Eyestalk Chase, it's just confusing as hell.",
        rank: "#5",
        borderColor: "#ff69b4",
        glowColor: "rgba(255, 105, 180, 0.5)",
        bgImage: "outdoors.png",
        isOutdoors: true,
        ytLink: "https://www.youtube.com/watch?v=cNzl773JeKo"
    },
    {
        name: "Archives",
        enjoyability: "Enjoyability: 9.5/10",
        enjoyabilityColor: Color.Blue,
        description: "Archives, Where Forgotten Memories go.",
        rank: "#6",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.5)",
        bgImage: "archives.png",
        ytLink: "https://www.youtube.com/watch?v=gk4loophOGM"
    },
    {
        name: "The Hotel",
        enjoyability: "Enjoyability: 8.5/10",
        enjoyabilityColor: Color.Green,
        description: "it's pretty long and door 100 is a little difficult.",
        rank: "#7",
        borderColor: "#00bcd4",
        glowColor: "rgba(0, 188, 212, 0.4)",
        bgImage: "hotel.png",
        ytLink: "https://www.youtube.com/watch?v=k-o9vcNUXbo"
    },
    {
        name: "The Stairwell",
        enjoyability: "Enjoyability: 1.5/10",
        enjoyabilityColor: Color.DarkRed,
        description: "Extremely Boring and repetitive, There is barely any enjoyability you get from this other than playing it for the first time.",
        rank: "#8",
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
        rank: "#9",
        borderColor: "#ff3300",
        glowColor: "rgba(255, 51, 0, 0.4)",
        bgImage: "retro.png",
        isRetro: true,
        ytLink: "https://www.youtube.com/watch?v=3ogXXQttvRc"
    },
    {
        name: "Hotel -",
        enjoyability: "Enjoyability: 7.5/10",
        enjoyabilityColor: Color.Yellow,
        description: "Old hotel, Nothing much to say here.",
        rank: "#10",
        borderColor: "#5c4033",
        glowColor: "rgba(92, 64, 51, 0.5)",
        bgImage: "hotel_minus.png",
        ytLink: "https://www.youtube.com/watch?v=P_W7o4KapZM"
    },
    {
        name: "Endless Mode",
        enjoyability: "Enjoyability: 3/10",
        enjoyabilityColor: Color.Red,
        description: "What do i even say? It's endless.",
        rank: "#11",
        borderColor: "#9932cc",
        glowColor: "rgba(153, 50, 204, 0.5)",
        bgImage: "endless.png",
        ytLink: "https://www.youtube.com/watch?v=50DsmTqkPE4"
    },
    {
        name: "Rush Mode",
        enjoyability: "Enjoyability: 7/10",
        enjoyabilityColor: Color.Yellow,
        description: "Exact opposite of Super Hard mode, No greenhouse and items are extremely common including Crucifixes.",
        rank: "#12",
        borderColor: "#1a1a1a",
        glowColor: "rgba(0, 0, 0, 0.7)",
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
        glowColor: "rgba(34, 139, 34, 0.5)",
        bgImage: "workshop.png",
        ytLink: "https://www.youtube.com/watch?v=sG6jMMObi-U"
    }
];

const chasesData = [
    {
        name: "Mines 1st Seek Chase",
        enjoyability: "Enjoyability: 10/10",
        enjoyabilityColor: Color.Blue,
        description: "The minecart part is still pretty difficult",
        rank: "#1",
        borderColor: "#0000ff",
        glowColor: "rgba(0, 0, 255, 0.5)",
        bgImage: "minesseek1.png",
        ytLink: "https://www.youtube.com/watch?v=hCoS5a20CPY"
    },
    {
        name: "Eyestalk Chase",
        enjoyability: "Enjoyability: 10/10",
        enjoyabilityColor: Color.Blue,
        description: "You have to be quick to see where you are going",
        rank: "#2",
        borderColor: "#0000ff",
        glowColor: "rgba(0, 0, 255, 0.5)",
        bgImage: "eyestalkchase.png",
        ytLink: "https://www.youtube.com/watch?v=d4Q3Y9wjaLg"
    },
    {
        name: "Super Hard Mode Seek",
        enjoyability: "Enjoyability: 8.3/10",
        enjoyabilityColor: Color.Green,
        description: "Pretty much just seek with a big Speed Boost",
        rank: "#3",
        borderColor: "#00ff00",
        glowColor: "rgba(0, 255, 0, 0.5)",
        bgImage: "sphseek.png",
        ytLink: "https://www.youtube.com/watch?v=_AbT2DTbJXw"
    },
    {
        name: "Rush Seek",
        enjoyability: "Enjoyability: 7.5/10",
        enjoyabilityColor: Color.YellowishGreen,
        description: "Normal seek with a speed boost",
        rank: "#4",
        borderColor: "#9acd32",
        glowColor: "rgba(154, 205, 50, 0.5)",
        bgImage: "rushseek.png",
        ytLink: "https://www.youtube.com/watch?v=XPj3h2Ojwm8"
    },
    {
        name: "Mines 2nd Seek Chase",
        enjoyability: "Enjoyability: 9.8/10",
        enjoyabilityColor: Color.Blue,
        description: "Very fun and pretty simple, Just follow Moonlight",
        rank: "#5",
        borderColor: "#0000ff",
        glowColor: "rgba(0, 0, 255, 0.5)",
        bgImage: "2ndseekmines.png",
        ytLink: "https://www.youtube.com/watch?v=SJ44-Z1ZXTQ"
    },
    {
        name: "Hotel 2nd Seek Chase",
        enjoyability: "Enjoyability: 7.5/10",
        enjoyabilityColor: Color.YellowishGreen,
        description: "Just Longer than 1st Hotel Seek Chase",
        rank: "#6",
        borderColor: "#9acd32",
        glowColor: "rgba(154, 205, 50, 0.5)",
        bgImage: "hotelseek2.png",
        ytLink: "https://www.youtube.com/watch?v=MFgJKuRVKRg"
    },
    {
        name: "Hotel 1st Seek Chase",
        enjoyability: "Enjoyability: 7/10",
        enjoyabilityColor: Color.Yellow,
        description: "i am NOT explaining this,",
        rank: "#7",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.5)",
        bgImage: "hotelseek1.png",
        ytLink: "https://www.youtube.com/watch?v=MFgJKuRVKRg"
    }
];

const bossFightsData = [
    {
        name: "Super Hard Mode Library",
        enjoyability: "Enjoyability: 4/10",
        enjoyabilityColor: Color.YellowishRed,
        description: "Just Look at the image...",
        rank: "#1",
        borderColor: "#ff4500",
        glowColor: "rgba(255, 69, 0, 0.5)",
        bgImage: "sphdoor50.png",
        ytLink: "https://www.youtube.com/watch?v=Ymzp8W1nzG0"
    },
    {
        name: "Honcho Sequence",
        enjoyability: "Enjoyability: 8.9/10",
        enjoyabilityColor: Color.Green,
        description: "It's pretty difficult but also very fun",
        rank: "#2",
        borderColor: "#00ff00",
        glowColor: "rgba(0, 255, 0, 0.5)",
        bgImage: "honchoboss.png",
        ytLink: "https://www.youtube.com/watch?v=uVd-BmJrRZo"
    },
    {
        name: "The Nest",
        enjoyability: "Enjoyability: 8.4/10",
        enjoyabilityColor: Color.Green,
        description: "Not hard just harder than the other stuff on the list, Even after the nerfs.",
        rank: "#3",
        borderColor: "#00ff00",
        glowColor: "rgba(0, 255, 0, 0.5)",
        bgImage: "thenest.png",
        ytLink: "https://www.youtube.com/watch?v=vOGOQ5jVHMw"
    },
    {
        name: "Super Hard Mode Electrical Room",
        enjoyability: "Enjoyability: 6/10",
        enjoyabilityColor: Color.Yellow,
        description: "Just normal electrical room except figure has a speed boost",
        rank: "#4",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.5)",
        bgImage: "sph100.png",
        ytLink: "https://www.youtube.com/watch?v=_FhOxC6iN4k"
    },
    {
        name: "Electrical Room",
        enjoyability: "Enjoyability: 8/10",
        enjoyabilityColor: Color.Green,
        description: "It is NOT hard at all",
        rank: "#5",
        borderColor: "#00ff00",
        glowColor: "rgba(0, 255, 0, 0.5)",
        bgImage: "door100real.png",
        ytLink: "https://www.youtube.com/watch?v=EZSaFOBFxl0"
    },
    {
        name: "Bramble",
        enjoyability: "Enjoyability: 8/10",
        enjoyabilityColor: Color.Green,
        description: "This one is very easy you just need to pay attention.",
        rank: "#6",
        borderColor: "#00ff00",
        glowColor: "rgba(0, 255, 0, 0.5)",
        bgImage: "brambleboss.png",
        ytLink: "https://www.youtube.com/watch?v=N_smsoSXyag"
    },
    {
        name: "The Library",
        enjoyability: "Enjoyability: 7.3/10",
        enjoyabilityColor: Color.YellowishGreen,
        description: "You do need 8 books to fully do it but 7 is enough to guess the last one, also many MANY safe spots",
        rank: "#7",
        borderColor: "#9acd32",
        glowColor: "rgba(154, 205, 50, 0.5)",
        bgImage: "librarytuff.png",
        ytLink: "https://www.youtube.com/watch?v=SVRqptCuL7M"
    },
    {
        name: "Seek Wall",
        enjoyability: "Enjoyability: 6.8/10",
        enjoyabilityColor: Color.Yellow,
        description: "Yea.",
        rank: "#8",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.5)",
        bgImage: "dripdripseek.png",
        ytLink: "https://www.youtube.com/watch?v=9mlkWd7UXyg"
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
    const chasesView = document.getElementById('chases-view');
    const bossfightsView = document.getElementById('bossfights-view');

    const views = [floorsView, chasesView, bossfightsView];

    if (pageId === 'home') {
        views.forEach(v => {
            if (v && v.style.display === 'block') {
                v.classList.remove('slide-down-in');
                v.classList.add('slide-up-out');
                setTimeout(() => {
                    v.style.display = 'none';
                    v.classList.remove('slide-up-out');
                }, 400);
            }
        });
        if (homeView) {
            homeView.style.display = 'flex';
            homeView.classList.remove('fade-out-up');
            homeView.classList.add('fade-in-down');
        }
    } else {
        if (homeView) {
            homeView.classList.remove('fade-in-down');
            homeView.classList.add('fade-out-up');
            setTimeout(() => {
                homeView.style.display = 'none';
                homeView.classList.remove('fade-out-up');
            }, 400);
        }

        views.forEach(v => {
            if (v) {
                v.style.display = 'none';
                v.classList.remove('slide-down-in', 'slide-up-out');
            }
        });

        let targetView = null;
        if (pageId === 'floors') targetView = floorsView;
        else if (pageId === 'chases') targetView = chasesView;
        else if (pageId === 'bossfights') targetView = bossfightsView;

        if (targetView) {
            targetView.style.display = 'block';
            targetView.classList.add('slide-down-in');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

function renderList(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = data.map(item => {
        const tag = item.ytLink ? 'a' : 'div';
        const linkAttrs = item.ytLink ? `href="${item.ytLink}" target="_blank" rel="noopener noreferrer"` : '';
        
        return `
            <${tag} ${linkAttrs} class="floor-card ${item.isOutdoors ? 'outdoors-card' : ''} ${item.isArchives ? 'archives-card' : ''} ${item.isRetro ? 'retro-card' : ''} ${item.isStairwell ? 'stairwell-card' : ''}" style="border-color: ${item.borderColor}; box-shadow: 0 0 30px ${item.glowColor}; background-image: url('${item.bgImage}'); text-decoration: none; position: relative; overflow: hidden;">
                ${item.isOutdoors ? `<img src="outdoors_frame.png" class="outdoors-vines-frame" alt="Vines Frame">` : ''}
                ${item.isRetro ? `<img src="drakoblox.png" class="awkward-drakoblox" alt="Drakoblox">` : ''}
                <div class="floor-meta">
                    <span class="rank" style="color: ${item.borderColor}; text-shadow: 0 0 15px ${item.glowColor};">${item.rank}</span>
                </div>
                <div class="floor-info">
                    <h2 style="text-decoration: none; margin-bottom: 4px;">${item.name}</h2>
                    <p class="floor-enjoyability" style="color: ${item.enjoyabilityColor}; font-size: 1.1rem; font-weight: bold; margin-bottom: 12px; text-shadow: 0 0 10px rgba(0, 0, 0, 0.95);">${item.enjoyability}</p>
                    ${item.description ? `<p style="text-decoration: none;">${item.description}</p>` : ''}
                </div>
            </${tag}>
        `;
    }).join('');
}

function renderAll() {
    renderList(floorsData, 'floors-container');
    renderList(chasesData, 'chases-container');
    renderList(bossFightsData, 'bossfights-container');

    const container = document.getElementById('floors-container');
    if (!container) return;
    const retroCard = container.querySelector('.retro-card');
    if (retroCard) {
        const drakobloxImg = retroCard.querySelector('.awkward-drakoblox');
        if (drakobloxImg) {
            drakobloxImg.style.display = 'block';
        }
    }
}

renderAll();
