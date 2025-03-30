

    function generateUsername(options) {
        let username = "";
        const prefixes = options.prefixes || [""];
        const suffixes = options.suffixes || [""];
        const words = options.words || [];
        const wordCount = options.wordCount || 1;
        const wordSeparator = options.wordSeparator || "";

        username += prefixes[Math.floor(Math.random() * prefixes.length)];

        for (let i = 0; i < wordCount; i++) {
            username += words[Math.floor(Math.random() * words.length)];
            if (i < wordCount - 1) {
                username += wordSeparator;
            }
        }

        username += suffixes[Math.floor(Math.random() * suffixes.length)];

        return username;
    }

    function generateAndDisplay() {
        const usernameOptions = {
            prefixes: ["xX", "Xx", ""],
            suffixes: ["xX", "Xx", ""],
            words: [
"t0xic", "molotov", "vendetta", "l0ve", "junkie", "3cho", "v0id", "kn1vess", "cyber", "velvet", "static","veil", "pierced","circuit","girl","b0y","cemetery","rats","kerosene","rawr","decibel","phantom", "shadow", "crimson", "velvet", "midnight", "ashes", "tears", "whisper", "silence", "heartache", "solitude",
                "despair", "angst", "razor", "bleed", "veil", "sorrow", "broken", "static", "decay", "fade",
                "pixel", "cyber", "gl1tch", "neon", "circuit", "riot", "synth", "v0ltage", "sparkle", "scene", "kandi", "fuzz", "phantom", "specter", "eclipse", "raven",
                "serpent", "onyx", "obsidian", "twilight", "n0cturne", "wraith", "hex", "cursed", "witch", "gloom",
                "flame", "storm", "frost", "nova", "ru1n", "hav0c", "tempest", "rebel", "vandal",
                "chaos", "rage", "fallen", "l0st"
            ],
            wordCount: Math.floor(Math.random() * 3) + 1,
            wordSeparator: Math.random() < 0.5 ? "_" : "",
        };

        const username = generateUsername(usernameOptions);
        document.getElementById('usernameDisplay').textContent = username;
    }
