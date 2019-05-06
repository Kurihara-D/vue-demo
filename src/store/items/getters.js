export default {
    getItems: state => {
        console.log(state.items)
        return state.items[0];
    },
    getItem: state => id => {
        const item = state.items.filter(item => {
            return item.id == Number(id);
        });
        return item[0]
    }
};