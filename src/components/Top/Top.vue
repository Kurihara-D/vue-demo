<template>
  <div class="app">
    <router-link to="/create">作成する</router-link>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Body</th>
        <th>Desc</th>
        <th></th>
      </tr>
      <tr v-for="item in getItems" :key="item.id">
        <td>
          <router-link :to="`edit/${item.id}`">{{ item.id }}</router-link>
        </td>
        <td>{{ item.body}}</td>
        <td>{{ item.description}}</td>
        <td>
          <button type="button" @click="deleteItem(item.id)">削除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Top",
  computed: {
    ...mapGetters("items", ["getItems"])
  },
  mounted () {
      this.getAllItems();
  },
  methods: {
    ...mapActions("items", ["getAllItems", "deleteItem"])
  }
};
</script>

<style lang="scss" scoped>
// @import "./Top";
</style>
