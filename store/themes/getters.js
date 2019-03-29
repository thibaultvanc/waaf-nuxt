export default {
  themes(state) {
    return state.themes
  },
  selected(state) {
    return state.selected
  },
  logoPath(state) {
    return state.logoPath
  },
  wallpapers(state) {
    return state.wallpapers
  },
  wallpaperRandom(state) {
    return state.wallpapers[Math.floor(Math.random() * state.wallpapers.length)]
  }
}
