// reducer.js

import { UPDATE_THEME, SET_SIDEBAR_VISIBILITY,SET_SIDEBAR_OPEN_ALWAYS, SET_ACTIVE_VARIABLE } from './actionTypes';


// Tpg:TopBackgroud
// Bbg:BottomBackgroud
// Sbg:SecondaryBackgroud
// Apg:ActiveBackgroud
// Cpg:clikActiveBackgroud


const initialState = {
  primaryText:"#ffffff",
  secondryText:"#022367",
  lighterBlue:"#3dbefd",
  gray50:"#505050",
  gray30:"#c0c0c0",
  gray40:"#808080",
  textLighter:'#b0b0b0',
  WhiteBg:"#ffffff",
  grayBtn:"linear-gradient(180deg, #f4f4f4, silver)",
  activeBtn:"linear-gradient(180deg, #53c6ff, #0095de)",
  headerBg: 'linear-gradient(180deg, rgba(0, 33, 105, 0.38), rgba(0, 39, 98, 0))',
  caretColor:"#46c2ff",
  primaryBg:"#0e111b",
  borderColor:"rgba(102,161,255,.2)",
  sectionBg: "#141826",
  textShadowCss:"1px 1px 1px rgba(0, 0, 0, .5)",
  inviteBg:"linear-gradient(180deg, #5996ff, #160152)",
  bonusBg:"linear-gradient(148.17deg,#d90770 .42%,#990026)",
  dailyEventBg:"linear-gradient(205.47deg,#4a33a6,#00b87d)",
  topChoiceBg:"linear-gradient(0deg,#141929,#242c45)",
  cardsShadow:"linear-gradient(28deg, #0b1b3a, transparent 50%)",
  arrowBg:"#18a8ee",
  allBtn:"hsla(0,0%,58%,.8)",
  playBtnHoverBorder:"#0095de",
  logoLIineFooter:"rgba(11, 25, 94, 1)",
  telegramBg:"linear-gradient(225.23deg,#00afd9,#0086d2)",
  whatsappBg:"linear-gradient(135deg,#78e327,#00b819)",
  instaBg:"linear-gradient(225deg,#ffad00,#f10d9f)",
  fbBg:"linear-gradient(140deg,#6a8edf,#436abe)",
  twitterBg:"linear-gradient(222.95deg,#2a2a2a,#454545)",
  markerColor:"#3182ce",
  scrollBarBg:"#2f3547",
  scrollThumbBg:"#185fc9",
  sportTopDivider:"radial-gradient(hsla(0, 0%, 100%, .6) 0, hsla(0, 0%, 100%, .6) 20%, transparent 0, transparent 100%)",
  providerBg:"#303030",
  paginationBtnBgActive:"#0095de",
  paginationBtnBgInActive:"hsla(0,0%,100%,.15)",
  languagePopupBg:"#152234",
  languageActiveBg:"rgba(30,152,252,.05)",
  LoginPopupBg:"rgba(151,163,186,.59)",
  loginPopupBtnTabsBg:"#1c2d44",
  inputBg:"rgba(28,45,68,.5)",
  inputFlagBg:"rgba(28,45,68,.8)",
  loginBtnPopup:"linear-gradient(180deg,#3dbefd,#007fbd)",
  loginBtnShadow:"0 0 12px rgba(79,208,255,.2)",
  RegistrationText:"#3dbefd",
  RegistrationPopupBg:"#152234",
  leftSideBarBg:"#152234",
  bgBlack:"#000000",
  promotionCardBg:"#152234",
  PopupBg:"#152234",
  popupFooterBg:"rgba(8,15,26,.75)",
  tabsBg:"#131926",
  bonusTitle:"hsla(0,0%,100%,.5)",
  bonusTitleLine:"linear-gradient(90deg,transparent,#ffeb3b)",
  refreshBg:"linear-gradient(180deg,#3dbefd,#007fbd)",
  profileInputBg:"rgba(28, 45, 68, .4)",
  GoToVerifyBG:"linear-gradient(180deg,#fa5757,#bd0000)",
  changePassBg:"linear-gradient(180deg,#223652,#1c2d44)",
  changePassConfirmBtn:"#0496df",
  bonusRecordTabsBg:"rgba(21,34,52,.5)",
  bonusRecordBtnBg:"#1e98fc",
  resultBoxBg:"#142945",
  linBg:"#145ec7",
  yellowColor:"#f8e71c",
  gray25:"hsla(0,0%,100%,.7)",
  gray3:"hsla(0,0%,100%,.3)",
  depositConfirmBtn:"linear-gradient(0deg,#a4a9b4,#bcc4cf)",
  warningColor:"#fa3737",
  bankinfoBorder:"#1a9ad9",
  bankinfoShadow:"0 0 9px rgba(17,166,255,.6)",
  transactionsActiveTab:"linear-gradient(180deg,#3dbefd,#007fbd)",
  copyBg:"linear-gradient(180deg,#14335e,#215394)",
  depositBtnBefore:"linear-gradient(-45deg,hsla(0,0%,100%,0) 27%,hsla(0,0%,100%,.3) 48%,hsla(0,0%,100%,0) 69%)",
  bellIconBg:"#1c2d44",
  bankDetailsInputBg:"rgb(28 45 68)",
  bankDetailsText:"hsla(0, 0%, 100%, .3)",
  cricketSectionBg:"rgb(19, 27, 51)",
  modeTabsActiveColor:"rgb(68, 179, 242)",
  matchNameColor:"rgb(68, 179, 242)",
  matchNameBg:"rgba(255, 255, 255, 0.1)",
  matchBycometitionBg:"rgb(14, 17, 27)",
  transectionBtn:"0% 0% no-repeat padding-box padding-box rgb(68, 179, 242)"
}

const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_THEME:
      return {
        ...state,
         
          ...state.theme,
          ...action.payload
        
      };
    case SET_SIDEBAR_VISIBILITY:
      return {
        ...state,
        sidebarVisible: action.payload
      };
      case SET_SIDEBAR_OPEN_ALWAYS:
        return {
          ...state,
          sidebarVisibleAlways: action.payload
        };
        case SET_ACTIVE_VARIABLE:
          return {
            ...state,
            activeVariable: action.payload
          };
    
    default:
      return state;
  }
};          

        
         

export default themeReducer;
