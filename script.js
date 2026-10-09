const Color = {
    Red: "#ff3333",
    DarkRed: "#8b0000",
    Yellow: "#ffd700",
    YellowishRed: "#ff6b35",
    Green: "#00ff66",
    Blue: "#00d2ff",
    YellowishGreen: "#adff2f",
    Purple: "#b19cd9",
    DarkPurple: "#4a0e4e",
    Gray: "#888888",
    DarkGray: "#333333",
    BrightGray: "#e0e0e0",
    BrightGlowPink: "#ff007f",
    OldYellow: "#cc9900",
    Brown: "#8b5a2b",
    BrightBrown: "#d2b48c",
    Black: "#111111",
    Gween: "#32cd32",
    GreenAndPink: "#00ff66"
};

const xmasString = "Cringle's Workshop".split('').map((char, i) =>
    char === ' ' ? ' ' : `<span class="xmas-letter" style="animation-delay: -${(i * 0.15).toFixed(2)}s">${char}</span>`
).join('');

const chaosPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*~!?/\\<>+=-_";
const chaosString = "Cha0s M0d3".split('').map((char) =>
    char === ' ' ? ' ' : `<span class="chaos-letter" data-original="${char}">${char}</span>`
).join('');

function injectCustomStyles() {
    if (document.getElementById('custom-doors-styles')) return;
    const style = document.createElement('style');
    style.id = 'custom-doors-styles';
    style.innerHTML = `
        @keyframes insaneShake {
            0% { transform: translate(0, 0) rotate(0deg); }
            20% { transform: translate(-4px, 4px) rotate(-4deg); }
            40% { transform: translate(4px, -3px) rotate(3deg); }
            60% { transform: translate(-3px, -4px) rotate(4deg); }
            80% { transform: translate(4px, 3px) rotate(-3deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes battleGradient {
            0% { color: #ff007f; text-shadow: 0 0 10px #ff007f; }
            50% { color: #00d2ff; text-shadow: 0 0 10px #00d2ff; }
            100% { color: #ff007f; text-shadow: 0 0 10px #ff007f; }
        }
        @keyframes xmasGlow {
            0% { color: #ff3333; text-shadow: 0 0 10px #ff3333; }
            50% { color: #00ff66; text-shadow: 0 0 10px #00ff66; }
            100% { color: #ffd700; text-shadow: 0 0 10px #ffd700; }
        }
        @keyframes greenPinkGlow {
            0% { color: #00ff66; text-shadow: 0 0 10px #00ff66; }
            50% { color: #ff007f; text-shadow: 0 0 10px #ff007f; }
            100% { color: #00ff66; text-shadow: 0 0 10px #00ff66; }
        }
        .chaos-title {
            display: inline-block;
            animation: insaneShake 0.06s infinite;
        }
        .mines-title {
            font-size: clamp(1.8rem, 5vw, 3rem) !important;
            word-break: break-word;
        }
        .stairwell-title {
            color: ${Color.DarkGray} !important;
            font-family: 'Courier New', Courier, monospace !important;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
        .rooms-title {
            color: #7a7a7a !important;
            font-family: 'Arial', 'Helvetica', sans-serif !important;
            font-weight: normal !important;
            letter-spacing: -0.5px;
            text-shadow: none !important;
        }
        .battlemode-title-custom {
            animation: battleGradient 3s infinite ease-in-out;
            font-weight: bold;
        }
        .xmas-animated-text {
            animation: xmasGlow 2s infinite ease-in-out;
        }
        .tot-animated-text {
            animation: greenPinkGlow 2s infinite ease-in-out;
        }
        .floor-card {
            box-sizing: border-box;
            max-width: 100%;
            touch-action: manipulation;
        }
        @media (max-width: 768px) {
            .floor-card {
                padding: 12px !important;
                margin-bottom: 12px !important;
            }
            .floor-card h2 {
                font-size: clamp(1.4rem, 4.5vw, 2.2rem) !important;
            }
            .floor-enjoyability {
                font-size: 0.95rem !important;
            }
            .floor-card p {
                font-size: 0.85rem !important;
            }
        }
    `;
    document.head.appendChild(style);
}

let chaosIntervalId = null;

function initChaosGlitch() {
    injectCustomStyles();
    if (chaosIntervalId) clearInterval(chaosIntervalId);

    chaosIntervalId = setInterval(() => {
        const letters = document.querySelectorAll('.chaos-letter');
        if (!letters.length) return;
        
        let steps = 0;
        const maxSteps = 19;
        const intervalTime = 20; 
        
        const glitchTimer = setInterval(() => {
            letters.forEach(el => {
                if (steps < maxSteps) {
                    const randomChar = chaosPool[Math.floor(Math.random() * chaosPool.length)];
                    el.textContent = randomChar;
                    el.style.color = '#ff00ff';
                    el.style.textShadow = '0 0 10px #ff00ff, 0 0 20px #00ffff';
                } else {
                    el.textContent = el.getAttribute('data-original');
                    el.style.color = '';
                    el.style.textShadow = '';
                }
            });
            steps++;
            if (steps > maxSteps) {
                clearInterval(glitchTimer);
            }
        }, intervalTime);
    }, 840);
}

const floorsData = [
    {
        name: `Super Hard mode <span class="spin-pentagram">⛧</span>`,
        titleClass: "super-hard-title",
        titleColor: Color.DarkRed,
        enjoyability: "Enjoyability: 2.25/10",
        enjoyabilityColor: Color.DarkRed,
        description: "Truly Hell, Subspace Tripmines (Dupe) one shot you, there are multiple rush variants, Jeff the killer exists, Greed can also get you from Auto-Collecting coins which wouldn't even be your fault and so much more, This Is truly something else.",
        rank: "#1",
        borderColor: Color.DarkRed,
        glowColor: "rgba(139, 0, 0, 0.6)",
        bgImage: "superhard.png",
        ytLink: "https://www.youtube.com/watch?v=dNEUphwNRbo"
    },
    {
        name: chaosString,
        titleClass: "chaos-title",
        titleColor: Color.DarkPurple,
        enjoyability: "Enjoyability: 2.8/10",
        enjoyabilityColor: Color.DarkPurple,
        description: "Fully depends on RNG and your luck, In some scenarios you're just.. dead, Nothing you could've done, This Vision is actually horrible to play and fully deserves this spot.",
        rank: "#2",
        borderColor: Color.DarkPurple,
        glowColor: "rgba(74, 14, 78, 0.6)",
        bgImage: "chaos.png",
        ytLink: "https://www.youtube.com/watch?v=pIS9_ctaNvQ"
    },
    {
        name: "The Mines",
        titleClass: "mines-title",
        titleColor: Color.BrightGray,
        enjoyability: "Enjoyability: 9.2/10",
        enjoyabilityColor: Color.BrightGray,
        description: "The Doors 190-199 are very very difficult, Some Rooms could have a generator where you just can't find the fuses and it'll lead to dread catching you, The figure encounters are pretty difficult, The Nest, 1st Seek chase, and more! This is the hardest Floor..",
        rank: "#3",
        borderColor: Color.BrightGray,
        glowColor: "rgba(224, 224, 224, 0.6)",
        bgImage: "mines.png",
        ytLink: "https://www.youtube.com/watch?v=oCcZH7Vy2I0"
    },
    {
        name: "The Outdoors",
        titleClass: "outdoors-title",
        titleColor: Color.BrightGlowPink,
        enjoyability: "Enjoyability: 9.45/10",
        enjoyabilityColor: Color.BrightGlowPink,
        description: "Entities could team up on you resulting in a run ender, Eyestalk chase is a little confusing but overall it is not THAT hard.",
        rank: "#4",
        borderColor: Color.BrightGlowPink,
        glowColor: "rgba(255, 0, 127, 0.6)",
        bgImage: "outdoors.png",
        isOutdoors: true,
        ytLink: "https://www.youtube.com/watch?v=cNzl773JeKo"
    },
    {
        name: "The Backdoor",
        titleClass: "backdoor-title",
        titleColor: Color.OldYellow,
        enjoyability: "Enjoyability: 5/10",
        enjoyabilityColor: Color.OldYellow,
        description: "Heavily depends on RNG, You cannot hear Blitz when Haste is approaching, Vacuum can catch you off guard, Lookman is extremely annoying and it is pretty stressful when you're running out of time.",
        rank: "#5",
        borderColor: Color.OldYellow,
        glowColor: "rgba(204, 153, 0, 0.6)",
        bgImage: "backdoor.png",
        ytLink: "https://www.youtube.com/watch?v=MwGZl481__4"
    },
    {
        name: "The Hotel",
        titleClass: "hotel-title",
        titleColor: Color.Brown,
        enjoyability: "Enjoyability: 8.3/10",
        enjoyabilityColor: Color.Brown,
        description: "A Classic, Carried mostly by the Greenhouse, Library and The Electrical Room, Nothing much to say.",
        rank: "#6",
        borderColor: Color.Brown,
        glowColor: "rgba(139, 90, 43, 0.6)",
        bgImage: "hotel.png",
        ytLink: "https://www.youtube.com/watch?v=k-o9vcNUXbo"
    },
    {
        name: "The Archives",
        titleClass: "archives-title",
        titleColor: Color.Yellow,
        enjoyability: "Enjoyability: 9.6/10",
        enjoyabilityColor: Color.Yellow,
        description: "A very forgiving sub-floor and very easy and fun to learn! Still an amazing Sub-Floor.",
        rank: "#7",
        borderColor: Color.Yellow,
        glowColor: "rgba(255, 215, 0, 0.6)",
        bgImage: "archives.png",
        isArchives: true,
        ytLink: "https://www.youtube.com/watch?v=gk4loophOGM"
    },
    {
        name: "Hotel -",
        titleClass: "hotel-minus-title",
        titleColor: Color.BrightBrown,
        enjoyability: "Enjoyability: 7.8/10",
        enjoyabilityColor: Color.BrightBrown,
        description: "Straight nostalgia, Only here cuz of old ambush and Jack being pretty common.",
        rank: "#8",
        borderColor: Color.BrightBrown,
        glowColor: "rgba(210, 180, 140, 0.6)",
        bgImage: "hotel_minus.png",
        ytLink: "https://www.youtube.com/watch?v=P_W7o4KapZM"
    },
    {
        name: "Overall Battle mode",
        titleClass: "battlemode-title-custom",
        enjoyClass: "battlemode-title-custom",
        enjoyability: "Enjoyability: 8/10",
        description: "Could be annoying sometimes and is very very long.",
        rank: "#9",
        borderColor: Color.BrightGlowPink,
        glowColor: "rgba(255, 0, 127, 0.6)",
        bgImage: "battlemode.png"
    },
    {
        name: "THE STAIRWELL",
        titleClass: "stairwell-title",
        titleColor: Color.DarkGray,
        enjoyability: "Enjoyability: 4/10",
        enjoyabilityColor: Color.DarkGray,
        description: "Very difficult and confusing especially due to the crushers throughout the landings.",
        rank: "#10",
        borderColor: Color.DarkGray,
        glowColor: "rgba(51, 51, 51, 0.6)",
        bgImage: "stairwell.png",
        ytLink: "https://www.youtube.com/watch?v=GuqcKICDjPw"
    },
    {
        name: "Trick or Treat",
        titleClass: "tot-title tot-animated-text",
        enjoyClass: "tot-animated-text",
        enjoyability: "Enjoyability: 7.7/10",
        description: "Extremely long and a ton of the entities still exist such as rush, Trick or treating IS optional but still, the vision itself is hard to beat.",
        rank: "#11",
        borderColor: Color.Green,
        glowColor: "rgba(0, 255, 102, 0.6)",
        bgImage: "tot.png",
        ytLink: "https://www.youtube.com/watch?v=gk4loophOGM"
    },
    {
        name: "The Rooms",
        titleClass: "rooms-title",
        enjoyability: "Enjoyability: 6/10",
        enjoyabilityColor: "#7a7a7a",
        description: "A-1OOO",
        rank: "#12",
        borderColor: "#555555",
        glowColor: "rgba(122, 122, 122, 0.2)",
        bgImage: "roomsbanner.png",
        ytLink: "https://www.youtube.com/watch?v=DKfk50gHceY"
    },
    {
        name: xmasString,
        titleClass: "xmas-title",
        enjoyClass: "xmas-animated-text",
        enjoyability: "Enjoyability: 7/10",
        description: "Breeze may come in the worst minute, Krampus is pretty fast and has a very big hitbox.",
        rank: "#13",
        borderColor: Color.Yellow,
        glowColor: "rgba(255, 215, 0, 0.6)",
        bgImage: "workshop.png",
        ytLink: "https://www.youtube.com/watch?v=sG6jMMObi-U"
    },
    {
        name: "RETRO MODE",
        titleClass: "retro-title",
        titleColor: Color.Green,
        enjoyability: "Enjoyability: 8.5/10",
        enjoyabilityColor: Color.Green,
        description: "You have 600 seconds to finish it and the drakobloxxers are nearly impossible to dodge, Also the Library can be quite time consuming.",
        rank: "#14",
        borderColor: Color.Green,
        glowColor: "rgba(0, 255, 102, 0.6)",
        bgImage: "retro.png",
        isRetro: true,
        ytLink: "https://www.youtube.com/watch?v=3ogXXQttvRc"
    },
    {
        name: "Rush Mode",
        titleClass: "rush-title",
        titleColor: Color.Black,
        titleExtra: "-webkit-text-stroke: 1px #33ffaa; text-shadow: 0 0 10px rgba(0,0,0,0.8);",
        enjoyability: "Enjoyability: 8.8/10",
        enjoyabilityColor: Color.Black,
        description: "Common items, No Greenhouse, you can kill some entities, Just an easier version of The Hotel honestly.",
        rank: "#15",
        borderColor: Color.Black,
        glowColor: "rgba(17, 17, 17, 0.8)",
        bgImage: "rush_mode.png",
        ytLink: "https://www.youtube.com/watch?v=H1ifZ3Arhf0"
    },
    {
        name: "Overall Daily Runs",
        titleClass: "daily-runs-title",
        titleColor: Color.Gween,
        enjoyability: "Enjoyability: 8/10",
        enjoyabilityColor: Color.Gween,
        description: "It has no bossfights but you can get awful combos and you can also get figure, Still very easy.",
        rank: "#16",
        borderColor: Color.Gween,
        glowColor: "rgba(50, 205, 50, 0.6)",
        bgImage: "DailyRunIMG.png"
    },
    {
        name: "The Candy Vault",
        titleClass: "candyvault-title",
        enjoyClass: "rainbow-text",
        descClass: "rainbow-text",
        enjoyability: "Enjoyability : N/A",
        enjoyabilityColor: "transparent",
        description: "Status : Coming Soon.",
        rank: "N/A",
        borderColor: Color.DarkRed,
        glowColor: "rgba(139, 0, 0, 0.7)",
        bgImage: "candyvaultbanner.png"
    },
    {
        name: "Floor 3",
        titleClass: "floor3-title",
        enjoyClass: "rainbow-text",
        descClass: "rainbow-text",
        enjoyability: "Enjoyability : N/A",
        enjoyabilityColor: "transparent",
        description: "Status : Coming Soon.",
        rank: "N/A",
        borderColor: Color.DarkRed,
        glowColor: "rgba(139, 0, 0, 0.7)",
        bgImage: "floor3banner.png"
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
    
    const fragment = document.createDocumentFragment();
    
    data.forEach(item => {
        const tag = item.ytLink ? 'a' : 'div';
        const card = document.createElement(tag);
        
        if (item.ytLink) {
            card.href = item.ytLink;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
        }
        
        card.className = `floor-card ${item.isOutdoors ? 'outdoors-card' : ''} ${item.isArchives ? 'archives-card' : ''} ${item.isRetro ? 'retro-card' : ''} ${item.isStairwell ? 'stairwell-card' : ''}`;
        card.style.cssText = `border-color: ${item.borderColor}; box-shadow: 0 0 30px ${item.glowColor}; background-image: url('${item.bgImage}'); text-decoration: none; position: relative; overflow: hidden;`;

        let extraImages = '';
        if (item.isOutdoors) {
            extraImages += '<img src="outdoors_frame.png" class="outdoors-vines-frame" alt="Vines Frame">';
        }
        if (item.isRetro) {
            extraImages += '<img src="drakoblox.png" class="awkward-drakoblox" alt="Drakoblox" style="display: block;">';
        }

        const titleColorStyle = item.titleColor ? `color: ${item.titleColor};` : '';
        const titleExtraStyle = item.titleExtra || '';
        const titleStyle = `style="text-decoration: none; margin-bottom: 4px; ${titleColorStyle} ${titleExtraStyle}"`;

        const enjoyabilityColorStyle = item.enjoyabilityColor ? `color: ${item.enjoyabilityColor};` : '';

        let descHtml = '';
        if (item.description) {
            descHtml = `<p class="${item.descClass || ''}" style="text-decoration: none;">${item.description}</p>`;
        }

        card.innerHTML = `
            ${extraImages}
            <div class="floor-meta">
                <span class="rank" style="color: ${item.borderColor}; text-shadow: 0 0 15px ${item.glowColor};">${item.rank}</span>
            </div>
            <div class="floor-info">
                <h2 class="${item.titleClass || ''}" ${titleStyle}>${item.name}</h2>
                <p class="floor-enjoyability ${item.enjoyClass || ''}" style="${enjoyabilityColorStyle} font-size: 1.1rem; font-weight: bold; margin-bottom: 12px; text-shadow: 0 0 10px rgba(0, 0, 0, 0.95);">${item.enjoyability}</p>
                ${descHtml}
            </div>
        `;
        
        fragment.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
}

function renderAll() {
    renderList(floorsData, 'floors-container');
    renderList(chasesData, 'chases-container');
    renderList(bossFightsData, 'bossfights-container');
}

window.addEventListener('resize', checkMobile);

document.addEventListener('DOMContentLoaded', () => {
    checkMobile();
    renderAll();
    initChaosGlitch();
});
