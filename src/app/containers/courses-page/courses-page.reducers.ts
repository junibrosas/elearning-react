export interface ICourse {
  name: string;
  description: string;
}

const initialState: ICourse[] = [{
  name: 'first course',
  description: 'very exciting'
}]

export const courseReducer = (state = initialState, action: any): ICourse[] => {
  console.warn(action);
  switch (action.type) {
    case 'Testing':
      return Object.assign({}, state, { location: action.payload });

    default:
      return state;
  }
}