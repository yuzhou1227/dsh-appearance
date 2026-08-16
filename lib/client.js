window.__ModuleLoader__.load({
	id: "@yuzhou1227/dsh-appearance",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		let React = require("react");

const STORAGE_KEY = 'dsh.appearance.v1';

const DEFAULTS = {
  themeMode: 'system',
  lightTheme: 'default',
  darkTheme: 'default',
  customTheme: null,
  dockBadge: true,
  lang: 'auto',
  timeFormat: 'auto',
  weekStart: 'auto',
  uiFont: 'default',
  codeFont: 'default',
  uiScale: 100,
  terminalFontSize: 14,
  editorFontSize: 13,
  density: 100,
  windowControlsPosition: 'right',
  windowControlsStyle: 'traffic',
  installName: '',
  screenOrientation: 'auto',
  mobileKeyboardMode: 'default',
  mobileLayout: 'auto',
  mobileInputOffset: 0
};

const OC_VARS = ["--dsw-alias-bg-base","--dsw-alias-bg-layer-1","--dsw-alias-bg-layer-2","--dsw-specific-sidebar-fill","--dsw-alias-bg-layer-3","--dsw-alias-bg-overlay","--dsw-alias-bg-mask-1","--dsw-alias-label-primary","--dsw-alias-label-secondary","--dsw-alias-brand-primary","--dsw-alias-state-business-primary","--dsw-alias-button-primary-hover","--dsw-alias-border-l2","--dsw-alias-border-l3","--dsw-alias-interactive-bg-hover","--dsw-alias-interactive-bg-active","--dsw-alias-interactive-bg-hover-accent","--dsw-alias-state-error-primary","--dsw-alias-interactive-bg-hover-danger","--dsw-alias-state-warn-primary","--dsw-alias-state-success-primary","--dsw-alias-markdown-code-block","--dsw-alias-markdown-code-block-banner","--dsw-alias-label-tertiary","--dsw-alias-markdown-inline-code","--dsw-specific-bubble","--dsw-alias-label-caption","--dsw-alias-border-l1"];
const OC_LIGHT_RAW = [
  ["aura-light","Aura",["#F5F0FF","#f1ebfb","#EFE8FC","#EFE8FC","#EFE8FC","#EFE8FC80","#15101F20","#2D2640","#5C5270","#A277FF","#A277FF","#B38FFF","#E0D6F2","#D5C9EB","#bdb2d72d","#bdb2d74c","#bdb2d74c","#D94F4F","#D94F4F20","#D9A24A","#40BF7A","#EFE8FC","#EFE8FC","#5C5270","#EFE8FC","#EFE8FC","#5C5270","#E0D6F2"]],
  ["ayu-light","Ayu",["#FDFAF4","#faf6ed","#f7f3eb","#f7f3eb","#FFF7E5","#FCF9F380","#1B232B20","#394049","#77818D","#4AA8C8","#4AA8C8","#6EB8D1","#ece5d9","#DCD3C5","#9fb2c42c","#9fb2c43e","#9fb2c43e","#E6656A","#E6656A20","#EA9F41","#5FB978","#FCF9F3","#FCF9F3","#77818D","#FCF9F3","#fff7e5","#77818D","#E6DDCF"]],
  ["carbonfox-light","Carbonfox",["#FFFFFF","#f4f4f7","#F4F4F4","#F4F4F4","#f6f6f8","#F4F4F480","#00000020","#161616","#525252","#0072C3","#0072C3","#338ECF","#e3e2e2","#D0D0D0","#43424214","#43424212","#cacfd87f","#DA1E28","#DA1E2820","#F1C21B","#198038","#F4F4F4","#F4F4F4","#525252","#F4F4F4","#f4f4f7","#525252","#DCDCDC"]],
  ["catppuccin-light","Catppuccin",["#fff6f4","#fbefea","#f8edeb","#f8edeb","#fdeeee","#F2D8D480","#1F1F2A20","#2e314a","#6C6F85","#7287FD","#7287FD","#8C99F6","#e4d9dc","#D6C4C8","#ffffff8f","#ffffff","#ffffff","#D20F39","#D20F3920","#DF8E1D","#40A02B","#F2D8D4","#F2D8D4","#6C6F85","#f6eeec","#ffffff","#6C6F85","#E0CFD3"]],
  ["dracula-light","Dracula",["#F8F8F2","#eeeee5","#eff1eb","#eff1eb","#edeee7","#F1F2ED80","#05040C20","#1F1F2F","#52526B","#7C6BF5","#7C6BF5","#9587F4","#E2E3DA","#D8D9D0","#c2bcea38","#c2bcea63","#c2bcea63","#D9536F","#D9536F20","#F7A14D","#2FBF71","#F1F2ED","#F1F2ED","#52526B","#F1F2ED","#F1F2ED","#52526B","#E2E3DA"]],
  ["fields-of-the-shire-light","Fields of the Shire",["#f9f5eb","#fcf9f0","#f4efe3","#f4efe3","#f1ece1","#f4efe380","#1a161220","#1a1612","#5a5048","#4a6030","#4a6030","#5e773f","#1a16121c","#1a161230","#efe8da","#1a16121f","#1a16121a","#a24d3f","#a24d3f20","#8c5520","#4a6030","#ece5d6","#ece5d6","#5a5048","#ece5d6","#efe8da","#8a7e72","#1a16121c"]],
  ["flexoki-light","Flexoki",["#fffdf4","#fbfaf2","#f6f5ee","#f6f5ee","#f7f4ec","#f6f5ee50","#100F0F20","#100F0F","#6F6E69","#BC5215","#BC5215","#F9AE77","#e6e4db","#CECDC3","#76736f20","#76736f20","#76736f30","#AF3029","#D14D4120","#BC5215","#66800B","#f6f5ee","#f6f5ee","#6F6E69","#f6f5ee","#f7f4ec","#6F6E69","#DAD8CE"]],
  ["gruvbox-light","Gruvbox",["#f8f1d5","#efebcd","#F2E5BC","#F2E5BC","#f3efde","#F2E5BC80","#28282820","#3C3836","#7C6F64","#076678","#076678","#388288","#e8d7b7","#C9B897","#fffdfdb3","#f1eaeaec","#f1eaeaec","#9D0006","#9D000620","#B57614","#79740E","#F2E5BC","#F2E5BC","#7C6F64","#F2E5BC","#FDF9E8","#7C6F64","#D5C4A1"]],
  ["jetbrains-light","JetBrains",["#FFF","#FFFFFF","#F7F8FA","#F7F8FA","#f5f8fd","#F5F7F950","#00000025","#000000","#404040","#195ce3","#195ce3","#2D61F0","#dde0ea","#AEB3C2","#E6E6E8","#DBDCDE","#DFE1E5","#CE0606","#FFE8E8","#F49810","#077D18","#FFFFFF","#FFFFFF","#404040","#F5F7F9","#eff4fd","#767A8A","#C9CCD6"]],
  ["kanagawa-light","Kanagawa",["#f6f3d6","#eae4bf","#ece6c8","#ece6c8","#e6f0e3","#DCD5AC50","#54546433","#545464","#8A8980","#4D699B","#4D699B","#6693BF","#d7d1ba","#8A8980","#e9f3e5a9","#e9f3e5cf","#e9f3e5cf","#E82424","#E8242420","#DE9800","#6F894E","#DCD5AC","#DCD5AC","#8A8980","#e7e2c7","#e6f2e1","#716E61","#716E61"]],
  ["mono-light","Mono",["#FFFFFF","#FAFAFA","#F5F5F5","#F5F5F5","#F0F0F0","#F5F5F550","#00000020","#1A1A1A","#808080","#000000","#000000","#1A1A1A","#e3e3e3","#B3B3B3","#00000010","#00000015","#00000015","#999999","#00000008","#666666","#1A1A1A","#F5F5F5","#F5F5F5","#666666","#f1f1f1","#E5E5E5","#808080","#D9D9D9"]],
  ["mono-plus-light","Mono Plus",["#FFFFFF","#FAFAFA","#F5F5F5","#F5F5F5","#F0F0F0","#F5F5F550","#00000020","#1A1A1A","#808080","#4a6a9e","#4a6a9e","#1A1A1A","#e3e3e3","#B3B3B3","#00000010","#00000015","#00000015","#8a5a5a","#8a5a5a18","#8a7a5a","#5a7a5a","#f5f5f5","#f5f5f5","#666666","#f1f1f1","#E5E5E5","#808080","#D9D9D9"]],
  ["monokai-light","Monokai",["#FDF8EC","#FBF5E8","#F8F2E6","#F8F2E6","#F7EFDD","#F8F2E680","#1C150C20","#292318","#6D5C40","#BF7BFF","#BF7BFF","#CB94FB","#E9E0CF","#DFD5C3","#e6e0d5","#FBF5E8","#1C150C22","#E54B4B","#E54B4B20","#F1A948","#4FB54B","#F8F2E6","#F8F2E6","#6D5C40","#F8F2E6","#F8F2E6","#6D5C40","#E9E0CF"]],
  ["nightowl-light","Night Owl",["#FBFBFB","#FFFFFF","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F080","#1A1A1A20","#403F53","#7A8181","#4876D6","#4876D6","#6C91DD","#dfdfdf","#CCCCCC","#706e6e16","#706e6e22","#706e6e22","#DE3D3B","#DE3D3B20","#C96765","#2AA298","#F0F0F0","#F0F0F0","#7A8181","#F0F0F0","#F0F0F0","#7A8181","#D9D9D9"]],
  ["nord-light","Nord",["#ECEFF4","#e7ebf5","#E4E8F0","#E4E8F0","#e3e7ee","#E4E8F080","#1F253020","#2E3440","#4C566A","#5E81AC","#5E81AC","#7A97BA","#cfd5df","#C9D0DE","#c6ccd84a","#c6ccd881","#c6ccd881","#BF616A","#BF616A20","#D08770","#8FBCBB","#E4E8F0","#E4E8F0","#4C566A","#E4E8F0","#dee4f0","#4C566A","#D5DBE7"]],
  ["onedarkpro-light","One Dark Pro",["#F5F6F8","#f0f5fa","#EEF0F4","#EEF0F4","#edeff5","#EEF0F480","#0E111820","#2B303B","#6B717F","#528BFF","#528BFF","#73A0FE","#d5d8de","#D4D9E3","#d8dde6c2","#FAFBFC","#d8dde6","#E06C75","#E06C7520","#D19A66","#4FA66D","#EEF0F4","#EEF0F4","#6B717F","#EEF0F4","#eaedf4","#6B717F","#DEE2EB"]],
  ["openchamber-light","OpenChamber",["#fdfcfa","#f8f7f5","#f7f6f4","#f7f6f4","#f7f6f4","#efeeec50","#39393420","#393a34","#6b6b63","#b35017","#b35017","#9a4310","#e5e1de","#cbc7c2","#0000000d","#00000014","#b350172b","#b7493f","#b7493f20","#8d6c15","#5f8d3d","#f4f3f1","#f4f3f1","#6b6b63","#f4f3f1","#f7f2ee","#6b6b63","#d8d5d0"]],
  ["solarized-light","Solarized",["#FDF6E3","#FAF3DC","#F6EFDA","#F6EFDA","#F6EFDA","#F6EFDA80","#07364220","#586E75","#7A8C8E","#268BD2","#268BD2","#51A0D5","#e0decc","#D9D4C2","#10647a14","#10647a22","#10647a22","#DC322F","#DC322F20","#B58900","#859900","#F6EFDA","#F6EFDA","#7A8C8E","#F6EFDA","#F6EFDA","#7A8C8E","#E3E0CD"]],
  ["tokyonight-light","Tokyonight",["#E1E2E7","#dee0ee","#DEE0EA","#DEE0EA","#dadce6","#DEE0EA80","#1C254420","#273153","#5C6390","#2E7DE9","#2E7DE9","#5291E9","#c7c9d3","#C3C6D2","#7b86ad2a","#7b86ad47","#939cbf47","#C94060","#C9406020","#8C6C3E","#587539","#DEE0EA","#DEE0EA","#5C6390","#DEE0EA","#dcdee9","#5C6390","#CDD0DC"]],
  ["vesper-light","Vesper",["#FFFFFF","#f6f5f5","#F8F8F8","#F8F8F8","#f6f2f2","#F8F8F880","#00000020","#101010","#717070","#a06535","#a06535","#FFD2AD","#dfdada","#E0E0E0","#5e5c5c22","#48474722","#5e5b5b22","#d46868","#b95f5f20","#cb7f40","#109b76","#F8F8F8","#F8F8F8","#717070","#f3f1f1","#f4f1f1","#717070","#E8E8E8"]],
  ["vitesse-light-light","Vitesse Light",["#ffffff","#f7f7f7","#f2f0f0","#f2f0f0","#f6f3f3","#ffffff50","#ffffff80","#2c2c28","#404139b6","#1c6b48","#1c6b48","#1c6b48","#dbd8d8","#cbc7c7","#22222218","#22222218","#22222218","#ab5959","#ab595920","#a65e2b","#1e754f","#ffffff","#ffffff","#21221e86","#f7f3f395","#f4f1f1","#393a3450","#00000015"]]
];
const OC_DARK_RAW = [
  ["aura-dark","Aura",["#15141B","#201e2b","#1A1921","#1A1921","#25232f","#1A192180","#FFFFFF20","#EDECEE","#6D6D6D","#A277FF","#A277FF","#8D68DD","#2a2935","#47415a","#7887ac2d","#95abe02d","#95abe02d","#FF6767","#FF676720","#FFCA85","#61FFCA","#1A1921","#1A1921","#6D6D6D","#1A1921","#393647","#6D6D6D","#2D2B38"]],
  ["ayu-dark","Ayu",["#0F1419","#17202a","#18222C","#18222C","#1e252d","#18222C80","#FBFBFD20","#D6DAE0","#A3ADBA","#3FB7E3","#3FB7E3","#389FC5","#292c30","#323C49","#b6b6cc1d","#b8b8ce1d","#c7c7df1d","#F58572","#F5857220","#E4A75C","#78D05C","#18222C","#18222C","#A3ADBA","#161d23","#1d2935","#A3ADBA","#2B3440"]],
  ["carbonfox-dark","Carbonfox",["#161616","#222222","#222222","#222222","#292828","#26262680","#FFFFFF20","#F2F4F8","#8D8D8D","#33B1FF","#33B1FF","#2F9ADC","#2d2c2c","#4C4C4C","#ffffff12","#ffffff12","#ffffff20","#FF8389","#FF838920","#F1C21B","#42BE65","#262626","#262626","#8D8D8D","#1e1e1e","#262626","#8D8D8D","#393939"]],
  ["catppuccin-dark","Catppuccin",["#1E1E2E","#282841","#2a273b","#2a273b","#26263f","#211F3180","#F4F2FF20","#CDD6F4","#A6ADC8","#7d8fff","#7d8fff","#9EA6DF","#35324A","#393655","#a19ace20","#a19ace20","#8883ae5c","#F38BA8","#F38BA820","#F4B8E4","#A6D189","#211F31","#211F31","#A6ADC8","#2d2a42","#3a3a5b","#A6ADC8","#35324A"]],
  ["dracula-dark","Dracula",["#14151F","#161722","#181926","#181926","#1f2030","#18192680","#FFFFFF20","#F8F8F2","#B6B9E4","#BD93F9","#BD93F9","#A480D8","#292a36","#303244","#30334ba3","#30334b","#30334b","#FF5555","#FF555520","#FFB86C","#50FA7B","#181926","#181926","#B6B9E4","#202132","#222436","#B6B9E4","#2D2F3C"]],
  ["fields-of-the-shire-dark","Fields of the Shire",["#1b1815","#2b2622","#23201c","#23201c","#282320","#23201c80","#1b1815cc","#ebe0d1","#a19a96","#7a8a5a","#7a8a5a","#93a56b","#35322f","#f0e6d830","#332d28","#f0e6d824","#f0e6d81f","#b34d3b","#b85a4a20","#c47a3a","#7f905e","#23201c","#23201c","#a89888","#23201c","#272a25","#6a5e52","#f0e6d81c"]],
  ["flexoki-dark","Flexoki",["#171515","#1c1a19","#1C1B1A","#1C1B1A","#1e1d1c","#1C1B1A50","#00000080","#CECDC3","#878580","#DA702C","#DA702C","#DA702C","#2b2a28","#403E3C","#ffffff18","#ffffff1f","#f4f4f41f","#D14D41","#AF302920","#DA702C","#A0AF54","#1C1B1A","#1C1B1A","#aca7a1","#1C1B1A","#27180E","#878580","#343331"]],
  ["gruvbox-dark","Gruvbox",["#282828","#25292b","#32302F","#32302F","#343230","#32302F80","#FBF1C720","#EBDBB2","#A89984","#83A598","#83A598","#759287","#453f3b","#5A524B","#5a5647d9","#5a5647ec","#5a5647db","#FB4934","#FB493420","#FABD2F","#B8BB26","#32302F","#32302F","#A89984","#32302F","#3e3c3a","#A89984","#504945"]],
  ["jetbrains-dark","JetBrains",["#1E1F22","#2B2D30","#26282B","#26282B","#28292c","#26282B50","#00000080","#DFE1E5","#B0B1B3","#6796f5","#6796f5","#70AEFF","#383a3f","#4B5059","#3C3E41","#494A4D","#43454A","#FA6675","#402929","#F2C55C","#57965D","#1E1F22","#1E1F22","#B0B1B3","#26282B","#2a3b5d76","#7A7E85","#393B41"]],
  ["kanagawa-dark","Kanagawa",["#1F1F28","#2A2A37","#23232d","#23232d","#2a2a36","#16161D50","#16161DCC","#DCD7BA","#818182","#7FB4CA","#7FB4CA","#9DC5E0","#333343","#54546D","#363646","#54546D","#729fb333","#E82424","#E8242420","#FF9E3B","#98BB6C","#16161D","#16161D","#afad9c","#16161D","#2A2A37","#54546D","#363646"]],
  ["mono-dark","Mono",["#000000","#141414","#0A0A0A","#0A0A0A","#1A1A1A","#0A0A0A50","#00000080","#E5E5E5","#808080","#FFFFFF","#FFFFFF","#E5E5E5","#2f2f2f","#333333","#ffffff1f","#ffffff1f","#ffffff1f","#666666","#ffffff10","#999999","#E5E5E5","#0A0A0A","#0A0A0A","#A6A6A6","#1A1A1A","#1A1A1A","#808080","#333333"]],
  ["mono-plus-dark","Mono Plus",["#000000","#141414","#0A0A0A","#0A0A0A","#1A1A1A","#0A0A0A50","#00000080","#E5E5E5","#808080","#a2bee8","#a2bee8","#E5E5E5","#2f2f2f","#333333","#ffffff1f","#ffffff1f","#ffffff1f","#9e6a6a","#9e6a6a20","#9e8a6a","#6a8e6a","#0a0a0a","#0a0a0a","#A6A6A6","#1A1A1A","#1A1A1A","#808080","#333333"]],
  ["monokai-dark","Monokai",["#23241E","#21221a","#282a20","#282a20","#303126","#27281F80","#FFFFFF20","#F8F8F2","#C5C5C0","#AE81FF","#AE81FF","#9973DD","#343528","#393A2D","#36372a","#36382e","#434d3cfe","#F92672","#F9267220","#FD971F","#A6E22E","#27281F","#27281F","#C5C5C0","#27281F","#36372a","#C5C5C0","#343528"]],
  ["nightowl-dark","Night Owl",["#011627","#001122","#0B253A","#0B253A","#162431","#0B253A80","#FFFFFF20","#D6DEEB","#5F7E97","#82AAFF","#82AAFF","#6F94DF","#2b3339","#234561","#555d6d68","#555d6d94","#555d6d94","#EF5350","#EF535020","#ECC48D","#C5E478","#0B253A","#0B253A","#5F7E97","#0B253A","#0f283f","#5F7E97","#1D3B53"]],
  ["nord-dark","Nord",["#1F2430","#1C202A","#222938","#222938","#252c3c","#22293880","#F8FAFC20","#E5E9F0","#A4ADBF","#88C0D0","#88C0D0","#78A9B8","#383d49","#383F50","#3e4a5692","#3e4a56fe","#3e4a56fe","#BF616A","#BF616A20","#D08770","#A3BE8C","#222938","#222938","#A4ADBF","#252c3c","#272f40","#A4ADBF","#343A47"]],
  ["onedarkpro-dark","One Dark Pro",["#1E222A","#232832","#212631","#212631","#272c37","#21263180","#F6F7FB20","#ABB2BF","#818899","#61AFEF","#61AFEF","#579AD1","#313848","#363D52","#a8aec525","#a8aec533","#a8aec533","#E06C75","#E06C7520","#E5C07B","#98C379","#212631","#212631","#818899","#232937","#2e3442","#818899","#323848"]],
  ["openchamber-dark","OpenChamber",["#120f0e","#181715","#171615","#171615","#171616","#120f0e50","#00000099","#c9c5ba","#aba9a3","#da7c47","#da7c47","#eb8c57","#242323","#504e4c","#ffffff12","#ffffff1f","#b9a5992b","#da5b4a","#da5b4a20","#c67f13","#76ad4f","#120f0e","#120f0e","#ada9a0","#211f1d","#25170e","#8f8b81","#302e2b"]],
  ["solarized-dark","Solarized",["#001e25","#052832","#02232e","#02232e","#062930","#02273380","#FDF6E320","#93A1A1","#6C7F80","#278BD2","#278BD2","#5C65AC","#223a41","#243E47","#98afbd25","#98afbd33","#98afbd33","#DC322F","#DC322F20","#B58900","#859900","#022733","#022733","#6C7F80","#022733","#042B34","#6C7F80","#20373F"]],
  ["tokyonight-dark","Tokyonight",["#0F111A","#131629","#111428","#111428","#15192b","#11142880","#EAEAFF20","#C0CAF5","#a4adda","#7AA2F7","#7AA2F7","#6A8CD6","#2d2f43","#292C43","#272E49","#262C46","#b3b3cc33","#F7768E","#F7768E20","#E0AF68","#9ECE6A","#111428","#111428","#7A88CF","#111428","#171b30","#7A88CF","#25283B"]],
  ["vesper-dark","Vesper",["#151515","#242121","#1c1b1b","#1c1b1b","#1f1f1f","#14141480","#FFFFFF20","#e8e5e5","#A0A0A0","#FFC799","#FFC799","#DBAC84","#373636","#202020","#ffffff1c","#ffffff33","#b1adad33","#FF8080","#FF808020","#FFC799","#99FFE4","#141414","#141414","#A0A0A0","#292727","#2b2a2a","#A0A0A0","#1C1C1C"]],
  ["vitesse-dark-dark","Vitesse Dark",["#121212","#1a1a1a","#171717","#171717","#1e1e1e","#12121250","#12121280","#dbd7caee","#e9e8e27f","#4d9375","#4d9375","#4d9375","#313131","#3c3c3c","#eeeeee14","#eeeeee18","#eeeeee18","#cb7676","#cb767620","#d4976c","#4d9375","#121212","#121212","#dedcd5a4","#121212","#252525","#dedcd550","#ffffff15"]]
];
const ocDecode = function (raw) {
  return raw.map(function (e) {
    const tokens = {};
    const vals = e[2];
    for (let i = 0; i < vals.length; i += 1) {
      const v = vals[i];
      if (v) tokens[OC_VARS[i]] = v;
    }
    return { id: e[0], name: e[1], tokens: tokens };
  });
};
const OC_LIGHT = ocDecode(OC_LIGHT_RAW);
const OC_DARK = ocDecode(OC_DARK_RAW);


const LIGHT_PALETTES = [
  { id: 'default', name: '默认', tokens: null },
  { id: 'paper', name: '纸张', tokens: {
    '--dsw-alias-bg-base': '#f8f5ee',
    '--dsw-alias-bg-layer-1': '#fdfbf6',
    '--dsw-alias-bg-layer-2': '#f6f1e6',
    '--dsw-alias-bg-layer-3': '#efe8d7',
    '--dsw-alias-bg-overlay': '#e7dfc9',
    '--dsw-alias-border-l1': 'rgba(122,93,52,.10)',
    '--dsw-alias-border-l2': 'rgba(122,93,52,.16)',
    '--dsw-alias-border-l3': 'rgba(122,93,52,.22)',
    '--dsw-alias-label-primary': '#3d362a',
    '--dsw-alias-label-secondary': '#6f6350',
    '--dsw-alias-label-tertiary': '#94886f',
    '--dsw-alias-label-caption': '#a89c83',
    '--dsw-alias-label-dimmed': '#c9bfa8',
    '--dsw-alias-brand-primary': '#a07c3f',
    '--dsw-alias-state-business-primary': '#a07c3f',
    '--dsw-specific-sidebar-fill': '#f2ecdc',
    '--dsw-specific-input-major': '#fdfbf6',
    '--dsw-specific-menu': '#fdfbf6',
    '--dsw-specific-selector': '#f2ecdc',
    '--dsw-specific-tip': '#f3eddd',
    '--dsw-alias-markdown-code-block': '#efe9d7',
    '--dsw-alias-markdown-code-block-banner': '#e9e2cc',
    '--dsw-alias-markdown-inline-code': '#f1ead6',
    '--dsw-specific-bubble': '#f2ead6',
    '--dsw-specific-bubble-highlight': '#e9dcc0',
    '--dsw-alias-scrollbar-bg-l2': '#e3dcc8',
    '--dsw-alias-scrollbar-hover-l2': '#d5ccb4'
  } },
  { id: 'nord', name: '北欧蓝', tokens: {
    '--dsw-alias-bg-base': '#eceff4',
    '--dsw-alias-bg-layer-1': '#e7ebf1',
    '--dsw-alias-bg-layer-2': '#e1e6ee',
    '--dsw-alias-bg-layer-3': '#d8dee9',
    '--dsw-alias-bg-overlay': '#cdd4e0',
    '--dsw-alias-border-l1': 'rgba(46,52,64,.10)',
    '--dsw-alias-border-l2': 'rgba(46,52,64,.16)',
    '--dsw-alias-border-l3': 'rgba(46,52,64,.22)',
    '--dsw-alias-label-primary': '#2e3440',
    '--dsw-alias-label-secondary': '#4c566a',
    '--dsw-alias-label-tertiary': '#6b7688',
    '--dsw-alias-label-caption': '#8d97a9',
    '--dsw-alias-label-dimmed': '#b6bdc9',
    '--dsw-alias-brand-primary': '#5e81ac',
    '--dsw-alias-state-business-primary': '#5e81ac',
    '--dsw-specific-sidebar-fill': '#e2e8f0',
    '--dsw-specific-input-major': '#ffffff',
    '--dsw-specific-menu': '#e7ebf1',
    '--dsw-specific-selector': '#dde3ec',
    '--dsw-specific-tip': '#e2e8f0',
    '--dsw-alias-markdown-code-block': '#e3e8f0',
    '--dsw-alias-markdown-code-block-banner': '#dbe2ec',
    '--dsw-alias-markdown-inline-code': '#e0e6ee',
    '--dsw-specific-bubble': '#e3eaf5',
    '--dsw-specific-bubble-highlight': '#cfd9ea',
    '--dsw-alias-scrollbar-bg-l2': '#c3ccda',
    '--dsw-alias-scrollbar-hover-l2': '#b0baca'
  } },
  ...OC_LIGHT
];

const DARK_PALETTES = [
  { id: 'default', name: '默认', tokens: null },
  { id: 'midnight', name: '深夜蓝', tokens: {
    '--dsw-alias-bg-base': '#0e131c',
    '--dsw-alias-bg-layer-1': '#131a26',
    '--dsw-alias-bg-layer-2': '#182030',
    '--dsw-alias-bg-layer-3': '#1e2838',
    '--dsw-alias-bg-overlay': '#232f42',
    '--dsw-alias-border-l1': 'rgba(148,170,204,.10)',
    '--dsw-alias-border-l2': 'rgba(148,170,204,.18)',
    '--dsw-alias-border-l3': 'rgba(148,170,204,.26)',
    '--dsw-alias-label-primary': '#e6ebf4',
    '--dsw-alias-label-secondary': '#a3aec2',
    '--dsw-alias-label-tertiary': '#74809a',
    '--dsw-alias-label-caption': '#5c6880',
    '--dsw-alias-label-dimmed': '#3d4a60',
    '--dsw-alias-brand-primary': '#7aa2f7',
    '--dsw-alias-state-business-primary': '#7aa2f7',
    '--dsw-specific-sidebar-fill': '#0b0f16',
    '--dsw-specific-input-major': '#131a26',
    '--dsw-specific-menu': '#1e2838',
    '--dsw-specific-selector': '#1a2233',
    '--dsw-specific-tip': '#182030',
    '--dsw-alias-markdown-code-block': '#0b0f16',
    '--dsw-alias-markdown-code-block-banner': '#101622',
    '--dsw-alias-markdown-inline-code': '#1a2233',
    '--dsw-specific-bubble': '#1c2638',
    '--dsw-specific-bubble-highlight': '#24304a',
    '--dsw-alias-scrollbar-bg-l2': '#26324a',
    '--dsw-alias-scrollbar-hover-l2': '#34425e'
  } },
  { id: 'amoled', name: '纯黑', tokens: {
    '--dsw-alias-bg-base': '#000000',
    '--dsw-alias-bg-layer-1': '#0a0a0a',
    '--dsw-alias-bg-layer-2': '#121212',
    '--dsw-alias-bg-layer-3': '#1a1a1a',
    '--dsw-alias-bg-overlay': '#202020',
    '--dsw-alias-border-l1': 'rgba(255,255,255,.08)',
    '--dsw-alias-border-l2': 'rgba(255,255,255,.16)',
    '--dsw-alias-border-l3': 'rgba(255,255,255,.24)',
    '--dsw-alias-label-primary': '#f2f2f2',
    '--dsw-alias-label-secondary': '#b0b0b0',
    '--dsw-alias-label-tertiary': '#7d7d7d',
    '--dsw-alias-label-caption': '#5c5c5c',
    '--dsw-alias-label-dimmed': '#3a3a3a',
    '--dsw-alias-brand-primary': '#4d7cf6',
    '--dsw-alias-state-business-primary': '#4d7cf6',
    '--dsw-specific-sidebar-fill': '#000000',
    '--dsw-specific-input-major': '#0a0a0a',
    '--dsw-specific-menu': '#1a1a1a',
    '--dsw-specific-selector': '#161616',
    '--dsw-specific-tip': '#121212',
    '--dsw-alias-markdown-code-block': '#000000',
    '--dsw-alias-markdown-code-block-banner': '#0d0d0d',
    '--dsw-alias-markdown-inline-code': '#161616',
    '--dsw-specific-bubble': '#141414',
    '--dsw-specific-bubble-highlight': '#1f1f1f',
    '--dsw-alias-scrollbar-bg-l2': '#242424',
    '--dsw-alias-scrollbar-hover-l2': '#333333'
  } },
  { id: 'violet', name: '暮紫', tokens: {
    '--dsw-alias-bg-base': '#131020',
    '--dsw-alias-bg-layer-1': '#191528',
    '--dsw-alias-bg-layer-2': '#1f1a30',
    '--dsw-alias-bg-layer-3': '#262040',
    '--dsw-alias-bg-overlay': '#2e2748',
    '--dsw-alias-border-l1': 'rgba(190,170,255,.10)',
    '--dsw-alias-border-l2': 'rgba(190,170,255,.18)',
    '--dsw-alias-border-l3': 'rgba(190,170,255,.26)',
    '--dsw-alias-label-primary': '#ece7f8',
    '--dsw-alias-label-secondary': '#b6aad2',
    '--dsw-alias-label-tertiary': '#887ba8',
    '--dsw-alias-label-caption': '#6d6189',
    '--dsw-alias-label-dimmed': '#4a4060',
    '--dsw-alias-brand-primary': '#a78bfa',
    '--dsw-alias-state-business-primary': '#a78bfa',
    '--dsw-specific-sidebar-fill': '#0f0c1a',
    '--dsw-specific-input-major': '#191528',
    '--dsw-specific-menu': '#262040',
    '--dsw-specific-selector': '#211b36',
    '--dsw-specific-tip': '#1f1a30',
    '--dsw-alias-markdown-code-block': '#0f0c1a',
    '--dsw-alias-markdown-code-block-banner': '#161126',
    '--dsw-alias-markdown-inline-code': '#211b36',
    '--dsw-specific-bubble': '#241d3a',
    '--dsw-specific-bubble-highlight': '#2e2550',
    '--dsw-alias-scrollbar-bg-l2': '#332a52',
    '--dsw-alias-scrollbar-hover-l2': '#463a6e'
  } },
  ...OC_DARK
];

const UI_FONTS = {
  default: null,
  system: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, 'PingFang SC', 'Microsoft YaHei', sans-serif",
  pingfang: "-apple-system, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
  yahei: "'Microsoft YaHei', 'PingFang SC', 'Segoe UI', sans-serif",
  segui: "'Segoe UI', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif",
  noto: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif"
};
const UI_FONT_OPTIONS = [
  { id: 'default', label: 'System' },
  { id: 'pingfang', label: '苹方' },
  { id: 'yahei', label: '微软雅黑' },
  { id: 'segui', label: 'Segoe UI' },
  { id: 'noto', label: '思源黑体' }
];
const CODE_FONTS = {
  default: null,
  jetbrains: "'JetBrains Mono', 'SF Mono', Consolas, 'Courier New', monospace",
  firacode: "'Fira Code', 'SF Mono', Consolas, monospace",
  consolas: "Consolas, 'Courier New', monospace",
  sfmono: "'SF Mono', Menlo, Consolas, monospace",
  mono: "ui-monospace, 'Cascadia Code', Consolas, monospace"
};
const CODE_FONT_OPTIONS = [
  { id: 'default', label: 'System Mono' },
  { id: 'jetbrains', label: 'JetBrains Mono' },
  { id: 'firacode', label: 'Fira Code' },
  { id: 'consolas', label: 'Consolas' },
  { id: 'sfmono', label: 'SF Mono' },
  { id: 'mono', label: '系统等宽' }
];

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return Object.assign({}, DEFAULTS);
    const parsed = JSON.parse(raw);
    const out = Object.assign({}, DEFAULTS, parsed);
    if (out.customTheme && typeof out.customTheme !== 'object') out.customTheme = null;
    return out;
  } catch (e) {
    return Object.assign({}, DEFAULTS);
  }
}
function save(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch (e) { /* storage unavailable: keep in-memory only */ }
}

function detectPlatform() {
  try {
    const ua = navigator.userAgent || '';
    const isMac = /Macintosh|Mac OS X/.test(ua);
    const isIOS = /iPhone|iPad|iPod/.test(ua) || (isMac && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/.test(ua);
    const isMobile = isIOS || isAndroid || /Mobi|Mobile/.test(ua);
    const isPWA = (typeof matchMedia === 'function' && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
    const wco = navigator.windowControlsOverlay;
    const isFrameless = !isMobile && (isPWA || (wco && wco.visible === true));
    return { isMac: isMac && !isMobile, isMobile: isMobile, isPWA: isPWA, isFrameless: isFrameless, isWeb: true };
  } catch (e) {
    return { isMac: false, isMobile: false, isPWA: false, isFrameless: false, isWeb: true };
  }
}

function systemDark() {
  try {
    return matchMedia('(prefers-color-scheme: dark)').matches;
  } catch (e) {
    return false;
  }
}
function effectiveScheme(s) {
  return s.themeMode === 'system' ? (systemDark() ? 'dark' : 'light') : s.themeMode;
}

function customLayerFor(s, scheme) {
  const ct = s.customTheme;
  if (!ct || typeof ct !== 'object') return null;
  const layer = ct[scheme] || ct.all || ct.tokens || null;
  if (!layer || typeof layer !== 'object') return null;
  const picked = {};
  for (const [k, v] of Object.entries(layer)) {
    if (k.indexOf('--') === 0 && typeof v === 'string') picked[k] = v;
  }
  return Object.keys(picked).length ? picked : null;
}

function paletteListFor(s, scheme) {
  const base = scheme === 'dark' ? DARK_PALETTES : LIGHT_PALETTES;
  const custom = customLayerFor(s, scheme);
  if (!custom) return base;
  return base.concat([{ id: 'custom', name: '自定义', tokens: custom }]);
}

let appliedTokenNames = [];
function applyTokens(body, scheme, s) {
  const tokens = {};
  const key = scheme === 'dark' ? 'darkTheme' : 'lightTheme';
  if (s[key] === 'custom') {
    const custom = customLayerFor(s, scheme);
    if (custom) Object.assign(tokens, custom);
  } else {
    const list = scheme === 'dark' ? DARK_PALETTES : LIGHT_PALETTES;
    const pal = list.find(function (p) { return p.id === s[key]; }) || list[0];
    if (pal && pal.tokens) Object.assign(tokens, pal.tokens);
  }
  for (const n of appliedTokenNames) body.style.removeProperty(n);
  appliedTokenNames = Object.keys(tokens);
  for (const [k, v] of Object.entries(tokens)) body.style.setProperty(k, v);
}

function applySettings(ctx, s) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const body = document.body;
  if (!root || !body) return;

  const theme = ctx.get('theme');
  if (theme && typeof theme.setTheme === 'function' && typeof theme.getTheme === 'function') {
    try {
      const pref = theme.getTheme().preference;
      if (pref !== s.themeMode) theme.setTheme(s.themeMode);
    } catch (e) { /* ignore */ }
  }

  const scheme = effectiveScheme(s);
  root.dataset.appearanceMode = scheme;
  root.dataset.appearancePref = s.themeMode;
  try { root.style.colorScheme = scheme; } catch (e) { /* ignore */ }
  applyTokens(body, scheme, s);

  const uiFont = UI_FONTS[s.uiFont] || null;
  if (uiFont) body.style.setProperty('--dsw-font-family', uiFont);
  else body.style.removeProperty('--dsw-font-family');
  const codeFont = CODE_FONTS[s.codeFont] || null;
  if (codeFont) body.style.setProperty('--ds-font-family-code', codeFont);
  else body.style.removeProperty('--ds-font-family-code');

  const zoom = s.uiScale / 100;
  if ('zoom' in root.style) {
    if (zoom === 1) root.style.removeProperty('zoom');
    else root.style.zoom = String(zoom);
  }
  root.style.setProperty('--dsh-appearance-ui-scale', String(s.uiScale) + '%');

  root.style.setProperty('--dsh-appearance-terminal-font-size', s.terminalFontSize + 'px');
  root.style.setProperty('--dsh-appearance-editor-font-size', s.editorFontSize + 'px');
  root.style.setProperty('--dsh-appearance-density', String(s.density / 100));
  root.style.setProperty('--dsh-appearance-mobile-input-offset', s.mobileInputOffset + 'px');
  root.dataset.appearanceTimeFormat = s.timeFormat;
  root.dataset.appearanceWeekStart = s.weekStart;
  root.dataset.appearanceWindowControlsPosition = s.windowControlsPosition;
  root.dataset.appearanceWindowControlsStyle = s.windowControlsStyle;
  root.dataset.appearanceInstallName = s.installName || '';
  root.dataset.appearanceScreenOrientation = s.screenOrientation;
  root.dataset.appearanceMobileKeyboard = s.mobileKeyboardMode;
  root.dataset.appearanceMobileLayout = s.mobileLayout;
  root.dataset.appearanceMobileInputOffset = String(s.mobileInputOffset);
  root.dataset.appearanceDockBadge = s.dockBadge ? 'on' : 'off';

  const locale = ctx.get('locale');
  if (locale && s.lang !== 'auto' && typeof locale.setLocale === 'function' && typeof locale.getSnapshot === 'function') {
    try {
      const snap = locale.getSnapshot();
      if (snap && snap.active !== s.lang) locale.setLocale(s.lang);
    } catch (e) { /* ignore */ }
  }

  if (s.screenOrientation !== 'auto' && document.fullscreenElement && screen.orientation && typeof screen.orientation.lock === 'function') {
    try {
      const p = screen.orientation.lock(s.screenOrientation === 'portrait' ? 'portrait' : 'landscape');
      if (p && typeof p.catch === 'function') p.catch(function () { /* ignore */ });
    } catch (e) { /* ignore */ }
  }
}

function collectCustomProps() {
  const names = new Set();
  const walk = function (rules) {
    for (const r of rules || []) {
      if (r && r.style && typeof r.style.length === 'number') {
        for (let i = 0; i < r.style.length; i += 1) {
          const p = r.style[i];
          if (p && p.indexOf('--') === 0) names.add(p);
        }
      }
      if (r && r.cssRules) walk(r.cssRules);
    }
  };
  try {
    for (const sheet of document.styleSheets) walk(sheet.cssRules);
  } catch (e) { /* cross-origin sheet */ }
  return names;
}
function pickTokens(o) {
  const out = {};
  for (const [k, v] of Object.entries(o)) {
    if (k.indexOf('--') === 0 && typeof v === 'string') out[k] = v;
  }
  return out;
}
function parseCustomTheme(text) {
  const obj = JSON.parse(text);
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw new Error('必须是 JSON 对象');
  if (obj.light && obj.dark && typeof obj.light === 'object' && typeof obj.dark === 'object') {
    return { light: pickTokens(obj.light), dark: pickTokens(obj.dark) };
  }
  const tokens = obj.tokens && typeof obj.tokens === 'object' ? obj.tokens : obj;
  const picked = pickTokens(tokens);
  if (obj.scheme === 'light' || obj.scheme === 'dark') {
    const layer = {};
    layer[obj.scheme] = picked;
    return layer;
  }
  return { light: picked, dark: picked };
}

const CSS = [
  '.dshAp-section{max-width:720px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:20px;display:flex}',
  '.dshAp-title{margin:0;font-size:18px;font-weight:600;line-height:26px}',
  '.dshAp-intro{color:var(--dsw-alias-label-tertiary);margin:0 0 2px;font-size:13px;line-height:20px}',
  '.dshAp-sec{flex-direction:column;display:flex}',
  '.dshAp-secHead{align-items:center;gap:6px;margin:0 0 2px;display:flex}',
  '.dshAp-secTitle{margin:0;font-size:14px;font-weight:600;line-height:22px}',
  '.dshAp-badge{border:1px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-tertiary);border-radius:4px;flex:none;padding:1px 6px;font-size:11px;line-height:16px;font-weight:400}',
  '.dshAp-info{width:14px;height:14px;border-radius:50%;border:1px solid var(--dsw-alias-label-caption);color:var(--dsw-alias-label-caption);font-size:10px;line-height:13px;text-align:center;cursor:help;flex:none;display:inline-block}',
  '.dshAp-row{align-items:center;gap:12px;min-height:42px;padding:8px 0;display:flex}',
  '.dshAp-row + .dshAp-row{border-top:1px solid var(--dsw-alias-border-l1)}',
  '.dshAp-rowCol{flex-direction:row;align-items:center;gap:6px;min-width:0;flex:1;display:flex}',
  '.dshAp-rowTitle{color:var(--dsw-alias-label-primary);font-size:14px;line-height:20px;white-space:nowrap}',
  '.dshAp-ctl{flex:none;align-items:center;gap:8px;display:flex}',
  '.dshAp-seg{background:var(--dsw-alias-bg-layer-2);border-radius:9px;flex:none;gap:2px;padding:2px;display:inline-flex}',
  '.dshAp-segBtn{appearance:none;border:0;background:0 0;border-radius:7px;cursor:pointer;color:var(--dsw-alias-label-secondary);padding:4px 10px;font-family:inherit;font-size:13px;line-height:18px}',
  '.dshAp-segBtn:hover{color:var(--dsw-alias-label-primary)}',
  '.dshAp-segOn{background:var(--dsw-alias-bg-layer-3);color:var(--dsw-alias-label-primary)}',
  '.dshAp-trig{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);border-radius:8px;color:var(--dsw-alias-label-primary);cursor:pointer;align-items:center;gap:10px;min-width:200px;padding:5px 10px;font-family:inherit;font-size:13px;line-height:18px;display:inline-flex}',
  '.dshAp-trig:hover{border-color:var(--dsw-alias-border-l3)}',
  '.dshAp-trigLabel{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}',
  '.dshAp-trigCaret{color:var(--dsw-alias-label-caption);flex:none;font-size:10px}',
  '.dshAp-wrap{position:relative}',
  '.dshAp-menu{box-sizing:border-box;z-index:3000;border:1px solid var(--dsw-alias-border-inverted);background:var(--dsw-specific-menu);box-shadow:var(--dsw-shadow-lv3);color:var(--dsw-alias-label-primary);--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);border-radius:12px;flex-direction:column;padding:4px;display:flex;position:absolute;overflow:hidden}',
  '.dshAp-menuList{min-height:0;flex-direction:column;gap:1px;display:flex;overflow-y:auto}',
  '.dshAp-menuFoot{flex:none;background:var(--dsw-specific-menu);border-top:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-caption);margin:2px -4px -4px;padding:5px 10px;font-size:11px;line-height:16px;text-align:center}',
  '.dshAp-menuRow{box-sizing:border-box;width:100%;min-height:32px;border-radius:8px;align-items:center;gap:8px;padding:6px 10px;font-size:13px;line-height:18px;display:flex;cursor:pointer;color:var(--dsw-alias-label-primary)}',
  '.dshAp-menuRow:hover{background:var(--dsw-alias-interactive-bg-hover)}',
  '.dshAp-menuOn{background:var(--dsw-alias-interactive-bg-hover)}',
  '.dshAp-menuCheck{color:var(--dsw-alias-state-business-primary);flex:none;margin-left:auto;font-size:12px}',
  '.dshAp-menuName{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}',
  '.dshAp-range{accent-color:var(--dsw-alias-state-business-primary);width:140px;cursor:pointer;margin:0}',
  '.dshAp-palBlock{flex-direction:column;gap:6px;padding:8px 0 4px;display:flex}',
  '.dshAp-val{min-width:46px;text-align:right;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px;font-variant-numeric:tabular-nums}',
  '.dshAp-btn{border:1px solid var(--dsw-alias-border-l2);background:0 0;border-radius:8px;color:var(--dsw-alias-label-secondary);cursor:pointer;padding:6px 12px;font-family:inherit;font-size:13px;line-height:18px}',
  '.dshAp-btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}',
  '.dshAp-btnPrimary{border-color:transparent;background:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-primary-foreground)}',
  '.dshAp-btnPrimary:hover{background:var(--dsw-alias-state-business-primary);filter:brightness(.93)}',
  '.dshAp-json{box-sizing:border-box;width:100%;min-height:130px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:8px;color:var(--dsw-alias-label-primary);font-family:var(--ds-font-family-code);font-size:12px;line-height:18px;padding:8px 10px;resize:vertical}',
  '.dshAp-ok{color:var(--dsw-alias-state-success-primary);font-size:12px;line-height:18px}',
  '.dshAp-err{color:var(--dsw-alias-state-error-primary);font-size:12px;line-height:18px}',
  '.dshAp-win{flex-direction:row;align-items:center;gap:5px;width:52px;height:14px;display:flex}',
  '.dshAp-win[data-side=left]{justify-content:flex-start}',
  '.dshAp-win[data-side=right]{justify-content:flex-end}',
  '.dshAp-dot{width:8px;height:8px;border-radius:50%;flex:none;border:1px solid rgba(0,0,0,.14)}',
  '.dshAp-switch{appearance:none;width:34px;height:20px;border-radius:999px;background:var(--dsw-alias-border-l3);cursor:pointer;position:relative;border:0;padding:0;transition:background .15s}',
  '.dshAp-switch:before{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:var(--dsw-alias-bg-layer-3);transition:transform .15s}',
  '.dshAp-switch[aria-checked=true]{background:var(--dsw-alias-state-success-primary)}',
  '.dshAp-switch[aria-checked=true]:before{transform:translateX(14px)}',
  '.dshAp-foot{flex-direction:row;justify-content:flex-end;align-items:center;gap:10px;display:flex}',
  '.dshAp-divider{height:1px;background:var(--dsw-alias-border-l1);margin:2px 0}'
].join('');

const inject = ["slots"];

function apply(ctx) {
  const h = React.createElement;
  const PLATFORM = detectPlatform();
  let statusTimer = null;
  console.log('appearance: static bundle active, palettes light=' + LIGHT_PALETTES.length + ' dark=' + DARK_PALETTES.length);

  applySettings(ctx, load());

  ctx.effect(() => {
    let styleEl = null;
    if (typeof document !== 'undefined' && document.head) {
      styleEl = document.createElement('style');
      styleEl.dataset.pluginCss = 'dsh-appearance';
      styleEl.textContent = CSS;
      document.head.appendChild(styleEl);
    }
    let offMq = function () {};
    if (typeof matchMedia === 'function') {
      const mq = matchMedia('(prefers-color-scheme: dark)');
      const onChange = function () {
        const s = load();
        if (s.themeMode === 'system') applySettings(ctx, s);
      };
      mq.addEventListener('change', onChange);
      offMq = function () { mq.removeEventListener('change', onChange); };
    }
    return function () {
      if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
      offMq();
    };
  }, 'appearance: theme layer');

  const sectionLabel = function () {
    try {
      const locale = ctx.get('locale');
      const snap = locale && typeof locale.getSnapshot === 'function' ? locale.getSnapshot() : undefined;
      return snap && snap.active === 'en' ? 'Appearance' : '外观';
    } catch (e) {
      return '外观';
    }
  };

  ctx.effect(() => ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section',
    id: 'appearance',
    order: 25,
    label: sectionLabel
  }, AppearancePage)), 'appearance: settings section');

  function Seg(options, value, onChange) {
    return h('div', { className: 'dshAp-seg', role: 'group' },
      options.map(function (o) {
        return h('button', {
          key: o.id,
          type: 'button',
          className: 'dshAp-segBtn' + (value === o.id ? ' dshAp-segOn' : ''),
          'aria-pressed': value === o.id,
          onClick: function () { onChange(o.id); }
        }, o.label);
      }));
  }
  function Row(props) {
    return h('div', { className: 'dshAp-row' },
      h('div', { className: 'dshAp-rowCol' },
        h('div', { className: 'dshAp-rowTitle' }, props.title),
        props.info ? h('span', { className: 'dshAp-info', title: props.info }, 'i') : null),
      h('div', { className: 'dshAp-ctl' }, props.children));
  }
  function Sec(props) {
    return h('section', { className: 'dshAp-sec' },
      h('div', { className: 'dshAp-secHead' },
        h('h3', { className: 'dshAp-secTitle' }, props.title),
        props.info ? h('span', { className: 'dshAp-info', title: props.info }, 'i') : null,
        props.badge ? h('span', { className: 'dshAp-badge' }, props.badge) : null),
      props.children);
  }
  function Range(props) {
    return h('div', { className: 'dshAp-ctl' },
      h('input', {
        type: 'range',
        min: props.min,
        max: props.max,
        step: props.step || 1,
        value: props.value,
        className: 'dshAp-range',
        onChange: function (e) { props.onChange(Number(e.target.value)); }
      }),
      h('span', { className: 'dshAp-val' }, String(props.value) + (props.unit || '')));
  }
  function MenuSelect(props) {
    const [open, setOpen] = React.useState(false);
    const [pos, setPos] = React.useState(null);
    const current = props.options.find(function (o) { return o.id === props.value; });
    function toggle(e) {
      if (open) { setOpen(false); return; }
      const r = e.currentTarget.getBoundingClientRect();
      const spaceAbove = r.top - 8;
      const spaceBelow = window.innerHeight - r.bottom - 8;
      const up = spaceAbove >= spaceBelow;
      const width = Math.min(240, window.innerWidth - 32);
      const leftAlign = r.left + width <= window.innerWidth - 8;
      const maxH = Math.max(120, Math.min(360, up ? spaceAbove : spaceBelow));
      setPos({ up: up, leftAlign: leftAlign, width: width, maxHeight: maxH });
      setOpen(true);
    }
    React.useEffect(function () {
      if (!open) return undefined;
      function onDown(e) {
        const t = e.target;
        if (t && t.closest && (t.closest('.dshAp-trig') || t.closest('.dshAp-menu'))) return;
        setOpen(false);
      }
      function onKey(e) { if (e.key === 'Escape') setOpen(false); }
      document.addEventListener('mousedown', onDown);
      window.addEventListener('keydown', onKey);
      return function () {
        document.removeEventListener('mousedown', onDown);
        window.removeEventListener('keydown', onKey);
      };
    }, [open]);
    const menuStyle = pos ? {
      width: pos.width,
      maxHeight: pos.maxHeight,
      bottom: pos.up ? 'calc(100% + 8px)' : undefined,
      top: pos.up ? undefined : 'calc(100% + 8px)',
      left: pos.leftAlign ? 0 : undefined,
      right: pos.leftAlign ? undefined : 0
    } : null;
    return h('div', { className: 'dshAp-wrap' },
      h('button', {
        type: 'button',
        className: 'dshAp-trig',
        'aria-haspopup': 'listbox',
        'aria-expanded': open,
        onClick: toggle
      },
        h('span', { className: 'dshAp-trigLabel' }, current ? current.label : props.value),
        h('span', { className: 'dshAp-trigCaret' }, '▾')),
      open && pos ? h('div', { className: 'dshAp-menu', style: menuStyle, role: 'listbox' },
        h('div', { className: 'dshAp-menuList' },
          props.options.map(function (o) {
            const on = o.id === props.value;
            return h('button', {
              key: o.id,
              type: 'button',
              role: 'option',
              'aria-selected': on,
              className: 'dshAp-menuRow' + (on ? ' dshAp-menuOn' : ''),
              onClick: function () { props.onChange(o.id); setOpen(false); }
            },
              h('span', { className: 'dshAp-menuName' }, o.label),
              on ? h('span', { className: 'dshAp-menuCheck' }, '✓') : null);
          })),
        props.options.length > 8 ? h('div', { className: 'dshAp-menuFoot' }, '共 ' + props.options.length + ' 项 · 滚动查看更多') : null) : null);
  }

  function AppearancePage() {
    const [s, setS] = React.useState(function () { return load(); });
    const [status, setStatus] = React.useState(null);
    const [jsonOpen, setJsonOpen] = React.useState(false);
    const [jsonText, setJsonText] = React.useState('');
    const fileRef = {};

    React.useEffect(function () {
      let next = load();
      const theme = ctx.get('theme');
      if (theme && typeof theme.getTheme === 'function') {
        try {
          const pref = theme.getTheme().preference;
          if (pref && next.themeMode !== pref) {
            next = Object.assign({}, next, { themeMode: pref });
            save(next);
          }
        } catch (e) { /* ignore */ }
      }
      applySettings(ctx, next);
      setS(next);
      return function () { if (statusTimer) { clearTimeout(statusTimer); statusTimer = null; } };
    }, []);

    function flash(text, isErr) {
      setStatus({ text: text, isErr: !!isErr });
      if (statusTimer) { clearTimeout(statusTimer); statusTimer = null; }
      statusTimer = setTimeout(function () { setStatus(null); }, 2200);
    }
    function update(patch) {
      const next = Object.assign({}, s, patch);
      save(next);
      applySettings(ctx, next);
      setS(next);
      console.log('appearance: set', patch);
      flash('已保存');
    }
    function reloadTheme() {
      applySettings(ctx, s);
      flash('主题已重新加载');
    }
    function exportJson() {
      try {
        const cs = getComputedStyle(document.body);
        const tokens = {};
        for (const n of collectCustomProps()) {
          if (n.indexOf('--dsw-') !== 0 && n.indexOf('--ds-') !== 0) continue;
          const v = cs.getPropertyValue(n).trim();
          if (v) tokens[n] = v;
        }
        const data = { name: 'DSH Appearance', scheme: effectiveScheme(s), tokens: tokens };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dsh-appearance-theme.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
        flash('已导出当前方案的主题 JSON');
      } catch (e) {
        flash('导出失败：' + e.message, true);
      }
    }
    function applyJson() {
      try {
        const layer = parseCustomTheme(jsonText);
        const next = Object.assign({}, s, { customTheme: layer });
        if (layer.light && Object.keys(layer.light).length) next.lightTheme = 'custom';
        if (layer.dark && Object.keys(layer.dark).length) next.darkTheme = 'custom';
        save(next);
        applySettings(ctx, next);
        setS(next);
        setJsonOpen(false);
        setJsonText('');
        flash('自定义主题已应用');
      } catch (e) {
        flash('JSON 无效：' + e.message, true);
      }
    }
    function clearCustom() {
      const next = Object.assign({}, s, { customTheme: null });
      if (s.lightTheme === 'custom') next.lightTheme = 'default';
      if (s.darkTheme === 'custom') next.darkTheme = 'default';
      save(next);
      applySettings(ctx, next);
      setS(next);
      flash('已清除自定义主题');
    }
    function resetAll() {
      const next = Object.assign({}, DEFAULTS);
      save(next);
      applySettings(ctx, next);
      setS(next);
      flash('已恢复默认设置');
    }
    function onFile(e) {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = function () {
        setJsonText(String(r.result || ''));
        setJsonOpen(true);
      };
      r.readAsText(f);
      e.target.value = '';
    }

    const winDots = s.windowControlsStyle === 'traffic'
      ? ['#ff5f57', '#febc2e', '#28c840']
      : ['#c9c9c9', '#c9c9c9', '#c9c9c9'];
    const lightList = paletteListFor(s, 'light');
    const darkList = paletteListFor(s, 'dark');

    const lightOpts = lightList.map(function (p) { return { id: p.id, label: p.name }; });
    const darkOpts = darkList.map(function (p) { return { id: p.id, label: p.name }; });

    return h('div', { className: 'dshAp-section' },
      h('h2', { className: 'dshAp-title' }, '外观'),
      h('p', { className: 'dshAp-intro' }, '自定义 DSH 的外观与体验。'),

      h(Sec, { title: '颜色模式与主题' },
        h(Row, { title: '主题模式', info: '切换界面深浅色方案；「跟随系统」会随操作系统自动切换。' },
          Seg([
            { id: 'system', label: '跟随系统' },
            { id: 'light', label: '浅色' },
            { id: 'dark', label: '深色' }
          ], s.themeMode, function (v) { update({ themeMode: v }); })),
        h(Row, { title: '浅色主题', info: '浅色模式下使用的配色方案。' },
          h(MenuSelect, { options: lightOpts, value: s.lightTheme, onChange: function (v) { update({ lightTheme: v }); } })),
        h(Row, { title: '深色主题', info: '深色模式下使用的配色方案。' },
          h(MenuSelect, { options: darkOpts, value: s.darkTheme, onChange: function (v) { update({ darkTheme: v }); } })),
        h(Row, { title: '重新加载主题', info: '重新应用当前主题设置；支持导出/导入 JSON 主题，导入后可在「浅色/深色主题」中选择「自定义」。' },
          h('button', { type: 'button', className: 'dshAp-btn', onClick: reloadTheme }, '重新加载主题'),
          h('button', { type: 'button', className: 'dshAp-btn', onClick: exportJson }, '导出 JSON'),
          h('button', { type: 'button', className: 'dshAp-btn', onClick: function () { fileRef.current && fileRef.current.click(); } }, '导入 JSON'),
          h('button', { type: 'button', className: 'dshAp-btn', onClick: function () { setJsonOpen(!jsonOpen); } }, '粘贴 JSON'),
          h('input', { ref: function (el) { fileRef.current = el; }, type: 'file', accept: '.json,application/json', style: { display: 'none' }, onChange: onFile })),
        jsonOpen ? h('div', { className: 'dshAp-palBlock' },
          h('textarea', { className: 'dshAp-json', value: jsonText, spellCheck: false, placeholder: '{ "light": { "--dsw-alias-bg-base": "#ffffff" }, "dark": { … } }', onChange: function (e) { setJsonText(e.target.value); } }),
          h('div', { className: 'dshAp-ctl' },
            h('button', { type: 'button', className: 'dshAp-btn dshAp-btnPrimary', onClick: applyJson }, '应用'),
            h('button', { type: 'button', className: 'dshAp-btn', onClick: function () { setJsonOpen(false); } }, '取消'))) : null,
        s.customTheme ? h(Row, { title: '清除自定义主题', info: '移除导入的自定义主题并恢复默认选择。' },
          h('button', { type: 'button', className: 'dshAp-btn', onClick: clearCustom }, '清除')) : null,
        PLATFORM.isMac ? h(Row, { title: 'Dock 徽标', info: '在 macOS Dock 图标上显示未读/进行中徽标。' },
          h('button', {
            type: 'button',
            role: 'switch',
            'aria-checked': s.dockBadge,
            className: 'dshAp-switch',
            onClick: function () { update({ dockBadge: !s.dockBadge }); }
          })) : null),

      PLATFORM.isFrameless ? h(Sec, { title: '窗口控件', info: '仅无边框桌面窗口显示。' },
        h(Row, { title: '窗口控件位置', info: '窗口最小化/最大化/关闭按钮的位置。' },
          Seg([
            { id: 'left', label: '左侧' },
            { id: 'right', label: '右侧' }
          ], s.windowControlsPosition, function (v) { update({ windowControlsPosition: v }); }),
          h('div', { className: 'dshAp-win', 'data-side': s.windowControlsPosition },
            winDots.map(function (c, i) {
              return h('span', { key: i, className: 'dshAp-dot', style: { background: c } });
            }))),
        h(Row, { title: '样式', info: '经典为统一灰色圆点，红绿灯为 macOS 风格三色。' },
          Seg([
            { id: 'classic', label: '经典' },
            { id: 'traffic', label: '红绿灯' }
          ], s.windowControlsStyle, function (v) { update({ windowControlsStyle: v }); }))) : null,

      h(Sec, { title: '本地化' },
        h(Row, { title: '语言', info: '界面显示语言；「跟随系统」使用浏览器语言。' },
          h(MenuSelect, {
            value: s.lang,
            options: [
              { id: 'auto', label: '跟随系统' },
              { id: 'zh', label: '简体中文' },
              { id: 'en', label: 'English' }
            ],
            onChange: function (v) { update({ lang: v }); }
          })),
        h(Row, { title: '时间格式', info: '消息与任务中的时间显示方式。' },
          h(MenuSelect, {
            value: s.timeFormat,
            options: [
              { id: 'auto', label: '自动' },
              { id: '24', label: '24 小时制' },
              { id: '12', label: '12 小时制' }
            ],
            onChange: function (v) { update({ timeFormat: v }); }
          })),
        h(Row, { title: '一周起始日', info: '日历与排期视图的周起始日。' },
          h(MenuSelect, {
            value: s.weekStart,
            options: [
              { id: 'auto', label: '自动' },
              { id: 'monday', label: '周一' },
              { id: 'sunday', label: '周日' }
            ],
            onChange: function (v) { update({ weekStart: v }); }
          }))),

      h(Sec, { title: '密度与字体' },
        h(Row, { title: '界面字体', info: '界面文本使用的字体族。' },
          h(MenuSelect, { value: s.uiFont, options: UI_FONT_OPTIONS, onChange: function (v) { update({ uiFont: v }); } })),
        h(Row, { title: '代码字体', info: '代码块、终端与日志使用的等宽字体。' },
          h(MenuSelect, { value: s.codeFont, options: CODE_FONT_OPTIONS, onChange: function (v) { update({ codeFont: v }); } })),
        h(Row, { title: '界面字号', info: '整体界面缩放（50% – 200%）。' },
          Range({ value: s.uiScale, min: 50, max: 200, step: 5, unit: '%', onChange: function (v) { update({ uiScale: v }); } })),
        h(Row, { title: '终端字号', info: '终端输出字体大小（9 – 52px）。' },
          Range({ value: s.terminalFontSize, min: 9, max: 52, step: 1, unit: 'px', onChange: function (v) { update({ terminalFontSize: v }); } })),
        h(Row, { title: '编辑器字号', info: '代码编辑器字体大小（9 – 32px）。' },
          Range({ value: s.editorFontSize, min: 9, max: 32, step: 1, unit: 'px', onChange: function (v) { update({ editorFontSize: v }); } })),
        h(Row, { title: '间距密度', info: '界面元素间距的紧凑程度（50% – 200%）。' },
          Range({ value: s.density, min: 50, max: 200, step: 5, unit: '%', onChange: function (v) { update({ density: v }); } }))),

      h(Sec, { title: '应用安装', info: '仅 Web / PWA 端。', badge: 'Web / PWA' },
        h(Row, { title: '安装名称', info: '安装 PWA / 应用时显示的名称。' },
          h('input', {
            className: 'dshAp-text',
            value: s.installName,
            placeholder: 'DSH',
            onChange: function (e) { update({ installName: e.target.value }); }
          })),
        h(Row, { title: '屏幕方向', info: '仅在全屏 / 已安装的 PWA 中生效。' },
          h(MenuSelect, {
            value: s.screenOrientation,
            options: [
              { id: 'auto', label: '自动' },
              { id: 'portrait', label: '竖屏' },
              { id: 'landscape', label: '横屏' }
            ],
            onChange: function (v) { update({ screenOrientation: v }); }
          })),
        h(Row, { title: '移动端键盘模式', info: '输入框回车键的提示与行为。' },
          h(MenuSelect, {
            value: s.mobileKeyboardMode,
            options: [
              { id: 'default', label: '默认' },
              { id: 'done', label: '完成' },
              { id: 'search', label: '搜索' },
              { id: 'go', label: '前往' },
              { id: 'send', label: '发送' },
              { id: 'next', label: '下一步' }
            ],
            onChange: function (v) { update({ mobileKeyboardMode: v }); }
          }))),

      PLATFORM.isMobile ? h(Sec, { title: '移动端', info: '仅移动端。', badge: '移动端' },
        h(Row, { title: '布局偏好', info: '移动端的整体布局密度。' },
          h(MenuSelect, {
            value: s.mobileLayout,
            options: [
              { id: 'auto', label: '自动' },
              { id: 'comfortable', label: '舒适' },
              { id: 'compact', label: '紧凑' }
            ],
            onChange: function (v) { update({ mobileLayout: v }); }
          })),
        h(Row, { title: '输入栏偏移', info: '输入栏相对键盘/安全区的垂直偏移（px）。' },
          Range({ value: s.mobileInputOffset, min: 0, max: 80, step: 2, unit: 'px', onChange: function (v) { update({ mobileInputOffset: v }); } }))) : null,

      h('div', { className: 'dshAp-divider' }),
      h('div', { className: 'dshAp-foot' },
        status ? h('span', { className: status.isErr ? 'dshAp-err' : 'dshAp-ok' }, status.text) : null,
        h('button', { type: 'button', className: 'dshAp-btn', onClick: resetAll }, '恢复默认设置')));
  }
}

exports.apply = apply;
exports.inject = inject;
return module.exports;
	}
});
