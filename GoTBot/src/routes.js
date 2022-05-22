import Houses from './actions/houses'
import Lebowski from './actions/lebowski'
import Words from './actions/words'

export function routes({ input, session }) {
    if (session.is_first_interaction) {
      return [
        {
            path: 'houses',
            type: 'text',
            action: Houses,
        }
      ]
    } else return [
        {
            path: 'words',
            text: 'See words',
            payload: (t) => t.startsWith('https://www.anapioficeandfire.com/api/houses'),
            action: Words
        },
        {
            path: 'lebowski',
            type: 'text',
            action: Lebowski
        }
    ]
}