import Houses from './actions/houses'
import Lebowski from './actions/lebowski'



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
            action: Houses
        },
        {
            path: 'lebowski',
            type: 'text',
            action: Lebowski
        }
    ]
}

/*export const routes = [
  {
    path: 'houses',
    type: 'text',
    action: Houses,
    childRoutes: [{
        path: 'lebowski',
        type: 'text',
        action: Lebowski
    }]
}
]*/