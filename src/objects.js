// This object is referenced in the Point Buy math, with each number having an associated cost in Build Points and mod for derived stats.
let statsObj = {
    3: { cost: 0, mod: -4 },
    4: { cost: 0, mod: -3 },
    5: { cost: 0, mod: -3 },
    6: { cost: 0, mod: -2 },
    7: { cost: -4, mod: -2 },
    8: { cost: -2, mod: -1 },
    9: { cost: -1, mod: -1 },
    10: { cost: 0, mod: 0 },
    11: { cost: 1, mod: 0 },
    12: { cost: 2, mod: 1 },
    13: { cost: 3, mod: 1 },
    14: { cost: 5, mod: 2 },
    15: { cost: 7, mod: 2 },
    16: { cost: 10, mod: 3 },
    17: { cost: 13, mod: 3 },
    18: { cost: 17, mod: 4 },
    19: { cost: 0, mod: 4 },
    20: { cost: 0, mod: 5 },
    21: { cost: 0, mod: 5 },
    22: { cost: 0, mod: 6 }
  };
  
  // This object shows the stat modifiers for all the Core races. Default is Human. If the user selects a race, this object is used to modify the Stats component.
  let raceObj = {
    "dwarf": { 
        raceModActive: false,
        mods: { 
            constitution: "2", 
            wisdom: "2", 
            charisma: "-2" 
            }, 
        size: "medium"
    },
    "elf": { 
        raceModActive: false,
        mods: { 
            dexterity: "2", 
            constitution: "-2", 
            intelligence: "2" 
        }, 
        size: "medium"
    },
    "gnome": { 
        raceModActive: false,
        mods: { 
            strength: "-2", 
            constitution: "2", 
            charisma: "2" 
            },
        size: "small"
    },
    "half-elf": { 
        raceModActive: true, 
        size: "medium"
    },
    "half-orc": { 
        raceModActive: true, 
        size: "medium" 
    },
    "halfling": { 
        raceModActive: false,
         mods: { 
            strength: "-2",
            dexterity: "2",
            charisma: "2" 
        },
        size: "small"
    },
    "human": { 
        raceModActive: true, 
        size: "medium"
    },
    "other": { 
        raceModActive: true, 
        size: "medium" 
    }
};

let classObj = {
    "cleric": {
        "hd": 8,
        "bab": .75,
        "fort": "good",
        "ref": "bad",
        "will": "good",
        "skills": 2
    },
    "bard": {
        "hd": 8,
        "bab": .75,
        "fort": "bad",
        "ref": "good",
        "will": "good",
        "skills": 6
    },
    "barbarian": {
        "hd": 12,
        "bab": 1,
        "fort": "good",
        "ref": "bad",
        "will": "bad",
        "skills": 4

    },
    "fighter": {
        "hd": 10,
        "bab": 1,
        "fort": "good",
        "ref": "bad",
        "will": "bad",
        "skills": 2
    },
    "druid": {
        "hd": 8,
        "bab": .75,
        "fort": "good",
        "ref": "bad",
        "will": "good",
        "skills": 4
    },
    "rogue": {
        "hd": 8,
        "bab": .75,
        "fort": "bad",
        "ref": "good",
        "will": "bad",
        "skills": 8
    },
    "monk": {
        "hd": 8,
        "bab": .75,
        "fort": "good",
        "ref": "good",
        "will": "good",
        "skills": 4
    },
    "paladin": {
        "hd": 10,
        "bab": 1,
        "fort": "good",
        "ref": "bad",
        "will": "good",
        "skills": 2
    },
    "ranger": {
        "hd": 10,
        "bab": 1,
        "fort": "good",
        "ref": "good",
        "will": "bad",
        "skills": 6
    },
    "sorcerer": {
        "hd": 6,
        "bab": .5,
        "fort": "bad",
        "ref": "bad",
        "will": "good",
        "skills": 2
    },
    "wizard": {
        "hd": 6,
        "bab": .5,
        "fort": "bad",
        "ref": "bad",
        "will": "good",
        "skills": 2
    }
}

  export {statsObj, raceObj, classObj};