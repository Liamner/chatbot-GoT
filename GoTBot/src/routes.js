import Houses from './actions/houses'
import Lebowski from './actions/lebowski'

export const routes = [
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
]