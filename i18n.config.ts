import fr from './locales/fr.json'
import de from './locales/de.json'

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    fr, de
  }
}))
