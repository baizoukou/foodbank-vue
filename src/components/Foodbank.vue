<template>
  <tr>
    <td>{{foodbank.name}}</td>
    <td>{{foodbank.city}}</td>
    <td>{{foodbank.typedonation}}</td>
    <td>{{foodbank.quantity}}</td>
    <td>{{foodbank.dietaryRequirement}}</td>
    <td>{{foodbank.rate}}</td>
    <td>
      <button
        v-b-tooltip.hover title="Update"
        type="button"
        class="btn btn-default"
        @click="openUpdate(foodbank)"
      >
        <i class="fa fa-pencil" aria-hidden="true"></i>
      </button>
      <div class="divider"></div>
      <button
        v-b-tooltip.hover title="Delete"
        @click="onDelete(foodbank._id)"
        type="button"
        class="btn btn-default"
      >
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
      <div class="divider"></div>
      <button
        v-b-tooltip.hover title="Upvote"
        @click="vote(foodbank)"
        type="button"
        class="btn btn-default"
      >
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "foodbank",
  props: ["foodbank"],
  methods: {
    openUpdate(foodbank) {
      this.$emit('openUpdate', foodbank)
    },
    onDelete(id) {
      this.$emit('onDelete', id)
    },
    vote(foodbank) {
      this.$emit('vote', foodbank)
    }
  },
  computed: {}
};
</script>

<style scoped>
.box {
  border: 1px solid #025441;
  padding: 10px;
  max-height: 400px;
}

strong {
  display: inline-block;
}
.upvote {
  font-size: 18px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
.upvote:active {
  transform: scale(2);
}
.upvote:active ~ strong {
  transform: scale(1.6);
}
.upvote,
strong {
  transition: transform 0.3s ease-in-out;
}

.divider {
    width: 5px;
    height: auto;
    display: inline-block;
}
.delete {
  color: red;
  font-weight: bolder;
  text-align: right;
}
</style>
