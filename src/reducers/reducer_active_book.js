//State argument is not application state,
//only the state this reducer is responsible for

/**
all reducers have two args:
state
action - reducer is only called when there is an action
Cannot have state be undefined, to solve this set state = null to start
**/
export default function(state=null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
