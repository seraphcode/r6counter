// Code goes here

var variables = {
  title: 'R6Counter',
  back: '<a href="index.html">Select Operator</a>',
  smokeName: 'Smoke',
  smokeImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_21_smoke.f69917bb.png'
  muteName: 'Mute',
  muteImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_31_mute.b2b4612d.png',
  sledgeName: 'Sledge',
  sledgeImg: 'img src="https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_41_sledge.82a35a64.png'
  thatcherName: 'Thatcher',
  thatcherImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_51_thatcher.20abf6c3.png',
  castleName: 'Castle',
  castleImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_22_castle.161be66c.png',
  ashName: 'Ash',
  ashImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_32_ash.d2714368.png',
  pulseName: 'Pulse',
  pulseImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_42_pulse.7b69022a.png',
  thermiteName: 'Thermite' ,
  thermiteImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_52_thermite.7c02c54a.png',
  docName: 'Doc',
  docImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_23_doc.2add017f.png',
  rookName: 'Rook',
  rookImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_33_rook.c2a5089c.png',
  twitchName: 'Twitch',
  twitchImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_43_twitch.fb82bea7.png',
  montagneName: 'Mountain',
  montagneImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_53_montagne.adaa88db.png',
  glazName: 'Glaz',
  glazImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_24_glaz.90d8c0a2.png',
  fuzeName: 'Fuze',
  fuzeImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_34_fuze.fd4e9f74.png',
  kapkanName: 'Kapkan',
  kapkanImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_44_kapkan.1732ae50.png',
  tachankaName: 'Lord Chanka',
  tachankaImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_54_tachanka.c43a0017.png',
  blitzName: 'Blitz',
  blitzImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_25_blitz.948006b5.png',
  iqName: 'IQ Waifu',
  iqImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_35_iq.f04df084.png',
  jagerName: 'JÄger',
  jagerImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_45_jager.d1ba4c49.png',
  banditName: 'Bandit',
  banditImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_55_bandit.ddc62e11.png',
  buckName: 'Buck',
  buckImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_26_buck.44eca07d.png',
  frostName: 'Frost',
  frostImg: 'https://ubistatic-a.akamaihd.net/0058/prod/img/package/badges/retina/image_badge_36_frost.4e81957e.png',
  blackName: 'Blackbeard',
  blackImg: 'https://s21.postimg.org/hjm1pgvrr/badge_blackbeard.png',
  valkName: 'Valkyrie',
  valkImg: 'https://s21.postimg.org/789owt42f/badge_valkyrie.png',
  cavName: 'Caveria',
  cavImg: 'https://s3.postimg.io/4sty7l89f/badge_caveira.png',
  capName: 'Capitao',
  capImg: 'https://s3.postimg.io/8qh7wzv2r/badge_capitao.png',
  hibName: 'Hibana',
  hibImg: 'https://s21.postimg.org/cffiz8xef/R6_S_hibana.png',
  echoName: 'Echo',
  echoImg: 'https://s21.postimg.org/r0zzb8onr/R6_S_echo.png',
  counter: 'Counters',
  counterby: 'Countered By',
  team: 'Team With',
  danger: 'Avoid When',
};

for(var v in variables) {
  document.getElementById(v).innerHTML = variables[v];
}
