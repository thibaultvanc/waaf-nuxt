export default {
  add(state, { text }) {
    state.list.push(text)
  },

  setTheme(state, theme) {
    state.selected = theme
  }
}
