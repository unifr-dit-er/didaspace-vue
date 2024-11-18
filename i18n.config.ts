import fr from './locales/fr.json'
import de from './locales/de.json'
import it from './locales/it.json'

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    fr, de, it
  }
}))
