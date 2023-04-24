import { Colors } from './types'

const white = '#FFFFFF'
const black = '#000000'

function colors(darkMode: boolean): Colors {
  return {
    darkMode,
    // base
    white,
    black,

    // backgrounds / greys
    neutral8: darkMode ? '#FEFEFE' : '#FCFCFD',
    neutral7: darkMode ? '#F8F8F8' : '#E2E4EA',
    neutral6: darkMode ? '#E5E7E6' : '#9EA3B2',
    neutral5: darkMode ? '#A6A6A6' : '#72788C',
    neutral4: darkMode ? '#4E4E4E' : '#444855',
    neutral3: darkMode ? '#303030' : '#313341',
    neutral2: darkMode ? '#1F1F1F' : '#21222C',
    neutral1: darkMode ? '#0A0A0A' : '#191A22',

    //primary colors
    primary1: '#00FF87',
    primary2: '#109C5A',

    // secondary colors
    secondary1: '#3E86FF',
    secondary2: '#34B2FF',
    secondary3: '#27DAF7',
    secondary4: '#16E1CA',

    // other
    yellow1: '#FFC634',
    red1: '#FF3E6C',
    green1: '#04E89B',

    modalBG: darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.6)',
  }
}

export default colors
