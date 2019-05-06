import * as types from "../mutationType";
import router from "../../router";
import axios from 'axios'


export default {
    async getAllItems ({ commit }) {
        await axios.get('URL').then(res => {
            commit(types.getAllItems, res.data);
        });
    },
    addItem:({ commit }, value) => {
        commit(types.addItem, value);
        router.push("/");
    },
    deleteItem: ({ state, commit }, id) => {
        const items = state.items.filter(item => {
            return item.id !== id;
        });
        commit(types.deleteItem, items);
    },
    updateItem: ({ commit }, value) => {
        commit(types.updateItem, value);
        router.push("/");
    }
};