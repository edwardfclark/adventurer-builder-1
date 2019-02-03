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
        "skills": 2,
        "classSkills": [
            "Appraise",
            "Craft",
            "Diplomacy",
            "Heal",
            "Kn: Arcana",
            "Kn: History",
            "Kn: Nobility",
            "Kn: Planes",
            "Kn: Religion",
            "Linguistics",
            "Profession",
            "Sense Motive",
            "Spellcraft"
        ]
    },
    "bard": {
        "hd": 8,
        "bab": .75,
        "fort": "bad",
        "ref": "good",
        "will": "good",
        "skills": 6,
        "classSkills": [
            "Acrobatics",
            "Appraise",
            "Bluff",
            "Climb",
            "Craft",
            "Diplomacy",
            "Disguise",
            "Escape Artist",
            "Intimidate",
            "Kn: Arcana",
            "Kn: Dungeoneering",
            "Kn: Engineering",
            "Kn: Geography",
            "Kn: History",
            "Kn: Local",
            "Kn: Nature",
            "Kn: Nobility",
            "Kn: Planes",
            "Kn: Religion",
            "Linguistics",
            "Perception",
            "Perform",
            "Profession",
            "Sense Motive",
            "Sleight of Hand",
            "Spellcraft",
            "Stealth",
            "Use Magic Device"
        ]
    },
    "barbarian": {
        "hd": 12,
        "bab": 1,
        "fort": "good",
        "ref": "bad",
        "will": "bad",
        "skills": 4,
        "classSkills": [
            "Acrobatics",
            "Climb",
            "Craft",
            "Handle Animal",
            "Intimidate",
            "Kn: Nature",
            "Perception",
            "Ride",
            "Survival",
            "Swim"
        ]

    },
    "fighter": {
        "hd": 10,
        "bab": 1,
        "fort": "good",
        "ref": "bad",
        "will": "bad",
        "skills": 2,
        "classSkills": [
            "Climb",
            "Craft",
            "Handle Animal",
            "Intimidate",
            "Kn: Dungeoneering",
            "Kn: Engineering",
            "Profession",
            "Ride",
            "Survival",
            "Swim"
        ]
    },
    "druid": {
        "hd": 8,
        "bab": .75,
        "fort": "good",
        "ref": "bad",
        "will": "good",
        "skills": 4,
        "classSkills": [
            "Climb",
            "Craft",
            "Fly",
            "Handle Animal",
            "Heal",
            "Kn: Geography",
            "Kn: Nature",
            "Perception",
            "Profession",
            "Ride",
            "Spellcraft",
            "Survival",
            "Swim"
        ]
    },
    "rogue": {
        "hd": 8,
        "bab": .75,
        "fort": "bad",
        "ref": "good",
        "will": "bad",
        "skills": 8,
        "classSkills": [
            "Acrobatics",
            "Appraise",
            "Bluff",
            "Climb",
            "Craft",
            "Diplomacy",
            "Disable Device",
            "Disguise",
            "Escape Artist",
            "Intimidate",
            "Kn: Dungeoneering",
            "Kn: Local",
            "Linguistics",
            "Perception",
            "Perform",
            "Profession",
            "Sense Motive",
            "Stealth",
            "Swim",
            "Use Magic Device"
        ]
    },
    "monk": {
        "hd": 8,
        "bab": .75,
        "fort": "good",
        "ref": "good",
        "will": "good",
        "skills": 4,
        "classSkills": [
            "Acrobatics",
            "Climb",
            "Craft",
            "Escape Artist",
            "Intimidate",
            "Kn: History",
            "Kn: Religion",
            "Perception",
            "Perform",
            "Profession",
            "Ride",
            "Sense Motive",
            "Stealth",
            "Swim"
        ]
    },
    "paladin": {
        "hd": 10,
        "bab": 1,
        "fort": "good",
        "ref": "bad",
        "will": "good",
        "skills": 2,
        "classSkills": [
            "Craft",
            "Diplomacy",
            "Handle Animal",
            "Heal",
            "Kn: Nobility",
            "Kn: Religion",
            "Profession",
            "Ride",
            "Sense Motive",
            "Spellcraft"
        ]
    },
    "ranger": {
        "hd": 10,
        "bab": 1,
        "fort": "good",
        "ref": "good",
        "will": "bad",
        "skills": 6,
        "classSkills": [
            "Climb",
            "Craft",
            "Handle Animal",
            "Heal",
            "Intimidate",
            "Kn: Dungeoneering",
            "Kn: Geography",
            "Kn: Nature",
            "Perception",
            "Profession",
            "Ride",
            "Spellcraft",
            "Stealth",
            "Survival",
            "Swim"
        ]
    },
    "sorcerer": {
        "hd": 6,
        "bab": .5,
        "fort": "bad",
        "ref": "bad",
        "will": "good",
        "skills": 2,
        "classSkills": [
            "Appraise",
            "Bluff",
            "Craft",
            "Kn: Arcana",
            "Profession",
            "Spellcraft",
            "Use Magic Device"
        ]
    },
    "wizard": {
        "hd": 6,
        "bab": .5,
        "fort": "bad",
        "ref": "bad",
        "will": "good",
        "skills": 2,
        "classSkills": [
            "Appraise",
            "Craft",
            "Fly",
            "Kn: Arcana",
            "Kn: Dungeoneering",
            "Kn: Engineering",
            "Kn: Geography",
            "Kn: History",
            "Kn: Local",
            "Kn: Nature",
            "Kn: Nobility",
            "Kn: Planes",
            "Kn: Religion",
            "Linguistics",
            "Profession",
            "Spellcraft"
        ]
    }
}

let skillsObj = {
    "Acrobatics": {
        "linkedStat": "dexterity"
    },
    "Appraise": {
        "linkedStat": "intelligence"
    },
    "Bluff": {
        "linkedStat": "charisma"
    },
    "Climb": {
        "linkedStat": "strength"
    },
    "Craft": {
        "linkedStat": "intelligence"
    },
    "Diplomacy": {
        "linkedStat": "charisma"
    },
    "Disable Device": {
        "linkedStat": "dexterity"
    },
    "Disguise": {
        "linkedStat": "charisma"
    },
    "Escape Artist": {
        "linkedStat": "dexterity"
    },
    "Fly": {
        "linkedStat": "dexterity"
    },
    "Handle Animal": {
        "linkedStat": "charisma"
    },
    "Heal": {
        "linkedStat": "wisdom"
    },
    "Intimidate": {
        "linkedStat": "charisma"
    },
    "Kn: Arcana": {
        "linkedStat": "intelligence"
    },
    "Kn: Dungeoneering": {
        "linkedStat": "intelligence"
    },
    "Kn: Engineering": {
        "linkedStat": "intelligence"
    },
    "Kn: Geography": {
        "linkedStat": "intelligence"
    },
    "Kn: History": {
        "linkedStat": "intelligence"
    },
    "Kn: Local": {
        "linkedStat": "intelligence"
    },
    "Kn: Nature": {
        "linkedStat": "intelligence"
    },
    "Kn: Nobility": {
        "linkedStat": "intelligence"
    },
    "Kn: Planes": {
        "linkedStat": "intelligence"
    },
    "Kn: Religion": {
        "linkedStat": "intelligence"
    },
    "Linguistics": {
        "linkedStat": "intelligence"
    },
    "Perception": {
        "linkedStat": "wisdom"
    },
    "Perform": {
        "linkedStat": "charisma"
    },
    "Profession": {
        "linkedStat": "wisdom"
    },
    "Ride": {
        "linkedStat": "dexterity"
    },
    "Sense Motive": {
        "linkedStat": "wisdom"
    },
    "Sleight of Hand": {
        "linkedStat": "dexterity"
    },
    "Spellcraft": {
        "linkedStat": "intelligence"
    },
    "Stealth": {
        "linkedStat": "dexterity"
    },
    "Survival": {
        "linkedStat": "wisdom"
    },
    "Swim": {
        "linkedStat": "strength"
    },
    "Use Magic Device": {
        "linkedStat": "intelligence"
    }
};

  export {statsObj, raceObj, classObj, skillsObj};