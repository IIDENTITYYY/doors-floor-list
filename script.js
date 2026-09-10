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
        name: "Super Hard Mode",
        enjoyability: "Enjoyability: 2.25/10",
        enjoyabilityColor: Color.DarkRed,
        description: "An insanely buffed version of the hotel+ update, This mode is truly on a different level of difficulty.",
        rank: "#1",
        borderColor: "#8b0000",
        glowColor: "rgba(139, 0, 0, 0.5)",
        bgImage: "superhard.png",
        ytLink: "https://www.youtube.com/watch?v=dNEUphwNRbo"
    },
    {
        name: "Chaos Mode",
        enjoyability: "Enjoyability: 2.8/10",
        enjoyabilityColor: Color.Red,
        description: "Completely Relies on RNG. In some scenarios a specific mod can just immediately end your run, Such as Seek Chase + Jail.",
        rank: "#2",
        borderColor: "#ff3333",
        glowColor: "rgba(255, 51, 51, 0.5)",
        bgImage: "chaos.png",
        ytLink: "https://www.youtube.com/watch?v=pIS9_ctaNvQ"
    },
    {
        name: "The Mines",
        enjoyability: "Enjoyability: 9.2/10",
        enjoyabilityColor: Color.Green,
        description: "Places here because of the Doors 190-199, they are just hell, Also the 1st Seek Chase can be confusing sometimes, Truly an Amazing Floor.",
        rank: "#3",
        borderColor: "#00ff66",
        glowColor: "rgba(0, 255, 102, 0.4)",
        bgImage: "mines.png",
        ytLink: "https://www.youtube.com/watch?v=oCcZH7Vy2I0"
    },
    {
        name: "The Backdoor",
        enjoyability: "Enjoyability: 5/10",
        enjoyabilityColor: Color.Yellow,
        description: "Also Depends a ton on RNG and is pretty difficult, Timers can be in sub-rooms and you cannot hear Blitz when haste is approaching.",
        rank: "#4",
        borderColor: "#ffd700",
        glowColor: "rgba(255, 215, 0, 0.4)",
        bgImage: "backdoor.png",
        ytLink: "https://www.youtube.com/watch?v=MwGZl481__4"
    },
    {
        name: "The Outdoors",
        enjoyability: "Enjoyability: 9.45/10",
        enjoyabilityColor: Color.Blue,
        description: "The eyestalk chase is a little confusing and you can get awful combos such as Groundskeeper alongside Mandrake and Maybe Monument.",
        rank: "#5",
        borderColor: "#00d2ff",
        glowColor: "rgba(0, 210, 255, 0.5)",
        bgImage: "outdoors.png",
        isOutdoors: true,
        ytLink: "https://www.youtube.com/watch?v=cNzl773JeKo"
    },
    {
        name: "The Hotel",
        enjoyability: "Enjoyability: 8.3/10",
        enjoyabilityColor: Color.Green,
        description: "A Classic, Carried mostly by the Greenhouse, Library and The Electrical Room, Nothing much to say.",
        rank: "#6",
        borderColor: "#00ff66",
        glowColor: "rgba(0, 255, 102, 0.4)",
        bgImage: "hotel.png",
        ytLink: "https://www.youtube.com/watch?v=k-o9vcNUXbo"
    },
    {
        name: "Hotel -",
        enjoyability: "Enjoyability: 7.8/10",
        enjoyabilityColor: Color.Yellow,
        description: "Straight nostalgia, Only here cuz of old ambush and Jack being pretty common.",
        rank: "#7",
        borderColor: "#ffd700",
        glowColor: "rgba(255, 215, 0, 0.4)",
        bgImage: "hotel_minus.png",
        ytLink: "https://www.youtube.com/watch?v=P_W7o4KapZM"
    },
    {
        name: "Archives",
        enjoyability: "Enjoyability: 9.6/10",
        enjoyabilityColor: Color.Blue,
        description: "Extremely fun and fairly easy to learn, Very beginner friendly and enjoyable.",
        rank: "#8",
        borderColor: "#00d2ff",
        glowColor: "rgba(0, 210, 255, 0.6)",
        bgImage: "archives.png",
        isArchives: true,
        ytLink: "https://www.youtube.com/watch?v=gk4loophOGM"
    },
    {
        name: "Trick Or Treat",
        enjoyability: "Enjoyability: 7.7/10",
        enjoyabilityColor: Color.YellowishGreen,
        description: "Extremely long and a ton of the entities still exist such as rush, Trick or treating IS optional but still.",
        rank: "#9",
        borderColor: "#adff2f",
        glowColor: "rgba(173, 255, 47, 0.4)",
        bgImage: "tot.png",
        ytLink: "https://www.youtube.com/watch?v=gk4loophOGM"
    },
    {
        name: "The Stairwell",
        enjoyability: "Enjoyability: 1.45/10",
        enjoyabilityColor: Color.DarkRed,
        description: "Not Difficult.",
        rank: "#10",
        borderColor: "#8b0000",
        glowColor: "rgba(139, 0, 0, 0.7)",
        bgImage: "stairwell.png",
        isStairwell: true,
        ytLink: "https://www.youtube.com/watch?v=WdBZh7U7EJY"
    },
    {
        name: "Retro Mode",
        enjoyability: "Enjoyability: 8.5/10",
        enjoyabilityColor: Color.Green,
        description: "You have 600 seconds to finish it and the drakobloxxers are nearly impossible to dodge, Also the Library can be quite time consuming.",
        rank: "#11",
        borderColor: "#00ff66",
        glowColor: "rgba(0, 255, 102, 0.4)",
        bgImage: "retro.png",
        isRetro: true,
        ytLink: "https://www.youtube.com/watch?v=3ogXXQttvRc"
    },
    {
        name: "Rush Mode",
        enjoyability: "Enjoyability: 8.8/10",
        enjoyabilityColor: Color.Green,
        description: "More common items, No greenhouse, Overall an easier version of the Hotel.",
        rank: "#12",
        borderColor: "#00ff66",
        glowColor: "rgba(0, 255, 102, 0.4)",
        bgImage: "rush_mode.png",
        ytLink: "https://www.youtube.com/watch?v=H1ifZ3Arhf0"
    },
    {
        name: "Cringle's Workshop",
        enjoyability: "Enjoyability: 7/10",
        enjoyabilityColor: Color.Yellow,
        description: "It's just 1 room.",
        rank: "#13",
        borderColor: "#ffd700",
        glowColor: "rgba(255, 215, 0, 0.4)",
        bgImage: "workshop.png",
        ytLink: "https://www.youtube.com/watch?v=sG6jMMObi-U"
    }
];

const chasesData = [
    {
        name: "Mines 1st Seek Chase",
        enjoyability: "Enjoyability: 10/10",
        enjoyabilityColor: Color.Blue,
        description: "The minecart part is a little confusing and a little difficult, Moonlight may be a little hard to see sometimes.",
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
        description: "You have to be very quick to see where you are going to make sure you don't go the wrong direction and also not step on a Snare.",
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
        description: "Pretty much just seek with an insanely massive Speed Boost applied.",
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
        description: "Pretty much just seek with a very small Speed Boost Applied",
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
        description: "Fun and also very simple, Make sure to follow moonlight and even if you go the wrong direction you have a lot of time to change directions before Seek catches up to you.",
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
        description: "In short it is just a longer version of the 1st Hotel Seek Chase.",
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
        description: "Extremely Easy and Simple and Beginner friendly.",
        rank: "#7",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.5)",
        bgImage: "hotelseek1.png",
        ytLink: "https://www.youtube.com/watch?v=MFgJKuRVKRg"
    },
    {
        name: "Hotel- 2nd Seek Chase",
        enjoyability: "Enjoyability: 7/10",
        enjoyabilityColor: Color.Yellow,
        description: "A little buggy sometimes but extremely similar to the current 2nd Seek Chase in the hotel.",
        rank: "#8",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.5)",
        bgImage: "hotelmin2ndseek.png",
	ytLink: "https://www.youtube.com/watch?v=kJdlkH4U0iQ"
    },
    {
        name: "Hotel- 1st Seek Chase",
        enjoyability: "Enjoyability: 6.5/10",
        enjoyabilityColor: Color.YellowishRed,
        description: "A little buggy sometimes but it's extremely similar to the current 1st Seek Chase.",
        rank: "#9",
        borderColor: "#ff6b35",
        glowColor: "rgba(255, 107, 53, 0.5)",
        bgImage: "hotelminchase1.png",
	ytLink: "https://www.youtube.com/watch?v=kJdlkH4U0iQ"
    }
];

const bossFightsData = [
    {
        name: "Super Hard Mode Library",
        enjoyability: "Enjoyability: 4/10",
        enjoyabilityColor: Color.YellowishRed,
        description: "11 Symbols for the code, No need to explain.",
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
        description: "Fun and pretty easy, but harder than the others on this list.",
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
        description: "Not hard, But can take up to ~20 minutes if you're slow and if you're a new player then it will be pretty difficult for you.",
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
        description: "Just normal electrical room except figure has a small speed boost that may give him an advantage.",
        rank: "#4",
        borderColor: "#ffff00",
        glowColor: "rgba(255, 255, 0, 0.5)",
        bgImage: "sph100.png",
        ytLink: "https://www.youtube.com/watch?v=_FhOxC6iN4k"
    },
    {
        name: "Krampus Bossfight",
        enjoyability: "Enjoyability: 7/10",
        enjoyabilityColor: Color.Yellow,
        description: "Its just 1 room.",
        rank: "#5",
        borderColor: "#ffd700",
        glowColor: "rgba(255, 215, 0, 0.5)",
        bgImage: "cringleboss.png",
        ytLink: "https://www.youtube.com/watch?v=sG6jMMObi-U"
    },
    {
        name: "Electrical Room",
        enjoyability: "Enjoyability: 8/10",
        enjoyabilityColor: Color.Green,
        description: "may take a while and sometimes figure can just stop being blind fr.",
        rank: "#6",
        borderColor: "#00ff00",
        glowColor: "rgba(0, 255, 0, 0.5)",
        bgImage: "door100real.png",
        ytLink: "https://www.youtube.com/watch?v=EZSaFOBFxl0"
    },
    {
        name: "Bramble",
        enjoyability: "Enjoyability: 8/10",
        enjoyabilityColor: Color.Green,
        description: "You need to pay attention, either sound cue or visual cue, whatever you like, Just focus.",
        rank: "#7",
        borderColor: "#00ff00",
        glowColor: "rgba(0, 255, 0, 0.5)",
        bgImage: "brambleboss.png",
        ytLink: "https://www.youtube.com/watch?v=N_smsoSXyag"
    },
    {
        name: "The Library",
        enjoyability: "Enjoyability: 7.3/10",
        enjoyabilityColor: Color.YellowishGreen,
        description: "You do need 8 books to fully do it but 7 is enough to guess the last one, A ton of safe spots but figure can stop being blind sometimes.",
        rank: "#8",
        borderColor: "#9acd32",
        glowColor: "rgba(154, 205, 50, 0.5)",
        bgImage: "librarytuff.png",
        ytLink: "https://www.youtube.com/watch?v=SVRqptCuL7M"
    },
    {
        name: "Seek Wall",
        enjoyability: "Enjoyability: 6.8/10",
        enjoyabilityColor: Color.Yellow,
        description: "Y e a .",
        rank: "#9",
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
                }, 300);
            }
        });
        if (homeView) {
            homeView.style.display = 'flex';
            homeView.classList.remove('fade-out-up');
            homeView.classList.add('fade-in-down');
            void homeView.offsetWidth;
            setTimeout(() => {
                homeView.classList.remove('fade-in-down');
            }, 300);
        }
    } else {
        if (homeView) {
            homeView.classList.remove('fade-in-down');
            homeView.classList.add('fade-out-up');
            setTimeout(() => {
                homeView.style.display = 'none';
                homeView.classList.remove('fade-out-up');
            }, 300);
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
            targetView.classList.remove('slide-down-in', 'slide-up-out');
            void targetView.offsetWidth;
            targetView.classList.add('slide-down-in');
            setTimeout(() => {
                targetView.classList.remove('slide-down-in');
            }, 300);
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
