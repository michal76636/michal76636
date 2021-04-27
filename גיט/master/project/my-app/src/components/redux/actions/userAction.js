function convertActionNameToType(actionName) {//setFirstName =>set_First_Name_User =>SET_FIEST_NAME_USER
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
export const userAction = new Proxy(
    {},
    {
        get: function (target, prop) {//prop="setFirstNameUser",target=undefined
            if (target[prop] === undefined) {
                
                return function (args) {
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    };
                };
            }
            else
                return target[prop]
        }
    }
)