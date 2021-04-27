function convertActionTypeToName(actionType) {
    //SET_FIRST_NAME_USER -> set_first_name_user -> setFirstNameUser
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
}
  
export default function createReducer(state, action, handlers) {
    const key = convertActionTypeToName(action.type);
    const handler = handlers[key];
    if (handler) {
        handler(state, action);
    }
}