import * as types from "../mutationType";

export default {
    [types.getAllItems](state, payload) {
        console.log('mutation')
        console.log(payload)
        state.items.push(payload)
    },
    [types.addItem](state, payload) {
        state.items.push(payload)
    },
    [types.deleteItem](state, payload) {
        state.items = payload;
    },
    [types.updateItem](state, payload) {
        const pos = state.items.map(item => {
            return item.id
        })
        .indexOf(payload.id);
        state.items[pos] = payload;
    }
};