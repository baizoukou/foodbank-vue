

<template>
  <b-modal :id="id" :title="title" hide-footer>
    <b-form>
      <b-form-group id="input-group-1" label="Name" label-for="input-1">
        <b-form-input v-model="foodbankData.name" id="input-1" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="City" label-for="input-1">
        <b-form-input v-model="foodbankData.city"  id="input-1" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Donation Type" label-for="input-1">
        <b-form-input v-model="foodbankData.typedonation"  id="input-1" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Quantity" label-for="input-1">
        <b-form-input v-model="foodbankData.quantity" type="number" id="input-1">required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Dietary Requirement" label-for="input-1">
        <b-form-select v-model="foodbankData.dietaryRequirement" :options="options"></b-form-select>
      </b-form-group>
      <b-form-group class="text-right" id="input-group-1" label-for="input-1">
        <b-button class="donate" v-on:click="createOrUpdate(foodbankData)">{{action}}</b-button>
      </b-form-group> 
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: "foodbank-form",
  props: {
    foodbank: Object,
    mode: String,
  },
  data() {
    return {
      title: 'Donate Foodbank',
      id: "modal-1",
      action: null,
      foodbankData: {
        name: "",
        city: "",
        typedonation: "",
        quantity: 0,
        rate: 0,
        dietaryRequirement: "Other",
      },
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'Vegan', text: 'Vegan' },
        { value: 'Vegetarian', text: 'Vegetarian' },
        { value: 'Gluten', text: 'Gluten'},
        { value: 'Others', text: 'Others'},
      ],
      errors: null
    };
  },
  mounted() {
    this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
      let vm = this;
      vm.$nextTick(() => {
        this.foodbankData = (this.foodbank) ? {...this.foodbank} : {...this.resetFoodbankData()};
        this.title = (this.mode === 'create') ? 'Donate Foodbank' : 'Update Foodbank';
        this.action = (this.mode === 'create') ? 'Donate' : 'Update';
      })
    })
  },
  methods: {
    createOrUpdate(foodbank) {
      return (this.mode === 'create') ?
        this.$emit('create', foodbank)
        : this.$emit('update', foodbank)
    },
    update(foodbank) {
      this.$emit('update', foodbank);
    },
    resetFoodbankData() {
      return {
        name: "",
        city: "",
        typedonation: "",
        quantity: 0,
        rate: 0,
        dietaryRequirement: "Other",
      };
    }
  }
};
</script>

<style scoped>
  .donate{
    background-color: #01c19a !important;
  }
</style>
