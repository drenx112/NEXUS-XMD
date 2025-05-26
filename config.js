const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0gwOUIvNUpmbTk2K2FrZi9QVHUrcVRBb3B4REdFN29KdVdnbmt6VlFGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHBoVEUzUWFRdWp4OThldFkxaHdUL3VlOW5GanU4SC92N2gyeGswZ2lHaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTTVXOHNJR3YyRXRxMnBXWkNJYUIreCs3Mk1PZ2E0V1p2OTlqSEFFc2w4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrS0NDV2JZNG1zUXIxSHdhRTFuZlFLYlBjOXlaS1R0MXJaYTBiUEhnamowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCYkpnL0tGYXpxU0h1R1czSUhWNDVZWDBXdThIbXdOajBIbDdKWFRsR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQzNXQrc0lZeUdBakZuckEzVmh0aDdlZUtGcjR6RFlYWjBUUFM3WkZhaWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlwb0ViR3k0VHVVdDYrSFNMcUgyY2VNdTd3N2h3TG14YUdWeExOYStFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE5FV3lpc0M2djF5RHliajNzR0hpKzRRdTUxYlFJY3ArR21Pbm5NeUFoWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhkeVZwYm1Sa1VYL0lRc0o4ZnJPWVlXa3h5dEp1WFBGd2pRMDBEU3RNQnN6b3Z5N2dYTzU4UHdjSVdKMkxJd2NZb3AwNFZlVmtXbXZMTHlqczEraWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6Ijk0R3gzeUtCSjRpZ2ZnR2ptR2QwVzZGQ2Zrc28vd1lpZVFvOVhsN1RwakU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzg5MDg1NTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE5M0FDQUQ1NEM2NzM4MkMwRjg4ODY0RUQwOTdGRDAwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDgyODA0MDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4OTA4NTUzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQTc5OTEzNjg4QUUxMjgyQzZENzdBMDIwN0VFNjREMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ4MjgwNDA4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJDR1JCWlMzOSIsIm1lIjp7ImlkIjoiMjYzNzg5MDg1NTMzOjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkLfwnZC44oSV8J2QtfCdmYrwnZGMIiwibGlkIjoiMTIzOTE4Mzk2NDg1ODgyOjMwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1hPL1JZUXVjalN3UVlZQ2lBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN2Y4MFRPRWlyOXpwQWx6SlhwMVJXaE1KMEpqQXUrbUI1OWJaTXNxdTNoaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSXRlYlRrSHF3NVJEOFBLYm9sa3phaFpTRm16QVp4TTFXUDBraEpZNERsbUJsRXoycHVEVmFLZURtTVpvN2pTTEV4eTN0NlRTYXRzWWpTL3BTd21DRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkFJb3VrUGRmdjFGZVhWUTNMT0c2MWFhUGtTa0E1OWc5cVNGQXVucGRHMCtTL2M5NkhHTVJtenBnMkZkaFpMS0ltc21wNmxDZWtGalpxYkczbWFONWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg5MDg1NTMzOjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUzL05FemhJcS9jNlFKY3lWNmRVVm9UQ2RDWXdMdnBnZWZXMlRMS3J0NFoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0ODI4MDQwMiwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPckMifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NEXUS-XMD🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/z62ts0.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐷𝐵𝑌✯-XMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "NEXUS-XMD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263789085533",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐷𝐵𝑌✯",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᵖᵒʷᵉʳᵉᵈ ᵇʸ 𝐷𝐵𝑌✯*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/z62ts0.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *𝐷𝐵𝑌✯-XMD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263789085533",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
