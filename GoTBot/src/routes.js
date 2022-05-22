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
    } else if(input.text == 'See words') {
        return [
            {
                path: 'words',
                text: 'See words',
                payload: (t) => t.startsWith('https://www.anapioficeandfire.com/api/houses'),
                action: Words
            }
        ]
    } else return [
        {
            path: 'lebowski',
            type: 'text',
            action: Lebowski
        }
    ]
}