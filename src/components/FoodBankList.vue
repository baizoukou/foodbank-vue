<template>
  <section class="wrapper">
    <div class="row">
      <div class="col-sm-4">
        <b-form-group id="input-group-1" label="Filter By Dietary Requirement" label-for="input-1">
          <b-form-select v-model="filter.dietaryRequirement" :options="options"></b-form-select>
        </b-form-group>
      </div>
      <div class="col-sm-6">
        <b-form-group id="input-group-1" label="Filter By Rate" label-for="input-1">
          <b-form-select v-model="filter.rate" :options="rateOptions"></b-form-select>
        </b-form-group>
      </div>
      <div class="col-sm- filter">
        <b-button @click="filterFoodbanks">Filter</b-button>
      </div>
    </div>
    <section class="row donation-list">
      <div class="filter">
        <b-button @click="openCreate" v-b-modal.modal-1>Donate a foodbank</b-button>
      </div>
        <table class="table table-hover">
          <thead>
            <tr class="tr-head">
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Donation Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Dietary Requirement</th>
              <th scope="col">Rating</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <foodbank
              v-for="foodbank in data"
              :key="foodbank._id"
              :foodbank="foodbank"
              @openUpdate="openUpdate($event)"
              @onDelete="onDelete($event)"
              @vote="vote($event)"
            />
          </tbody>
        </table>
    </section>
      <foodbank-form
        v-bind:mode="mode"
        @create="create($event)"
        v-bind:foodbank="foodbank"
        @update="update($event)"
      >
      </foodbank-form>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Foodbank from "./Foodbank";
import FoodbankForm from './FoodbankForm';

export default {
  name: "foodbank-list",
  components: { Foodbank, FoodbankForm },
  data() {
    return {
      foodbanks: [],
      foodbank: null,
      filter: {
        dietaryRequirement: '',
        rate: ''
      },
      mode: '',
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'Vegan', text: 'Vegan' },
        { value: 'Vegetarian', text: 'Vegetarian' },
        { value: 'Gluten', text: 'Gluten'},
        { value: 'Others', text: 'Others'},
        { value: 'All', text: 'All'},
      ],
      rateOptions: [
        { value: null, text: 'Please select an option' },
        { value: 'ascending', text: 'ascending' },
        { value: 'descending', text: 'descending' },
      ],
    };
  },
  mounted() {
    this.fetchAllFoodBank()
    this.foodbanks = this.data;
  },
  computed: {
    ...mapState('foodbank', ['data'])
  },
  methods: {
    ...mapActions('foodbank',
    ['getAllFoodBank',
    'createFoodbank',
    'updateFoodbank',
    'deleteFoodbank',
    'voteFoodbank',
    'filterFoodbank',
    ]),
    fetchAllFoodBank() {
      this.getAllFoodBank();
    },
    
    filterFoodbanks() {
      this.filterFoodbank(this.filter)
    },
    openCreate() {
      this.mode = 'create';
      this.foodbank = null;
      this.$bvModal.show('modal-1')
    },
    openUpdate(event) {
      this.mode = 'update';
      this.foodbank = event;
      this.$bvModal.show('modal-1')
    },
    create(event) {
      this.createFoodbank(event)
      this.$bvModal.hide('modal-1')
    },
    update(event) {
      this.updateFoodbank(event);
      this.$bvModal.hide('modal-1')
    },
    onDelete(event) {
      this.deleteFoodbank(event);
    },
    vote(event) {
      this.voteFoodbank(event)
    }
  }
};
</script>

<style scoped>
.btn {
  background-color: #01c19a
}

button.btn-primary {
  background-color: #01c19a !important;
}

.wrapper {
  width: 100%;
  flex-direction: column;
}

.tr-head {
  background-color: #01c19a;
}

.filter {
  display: flex;
  justify-content: center;
  margin: 34px 0 14px auto;
}
.diet,
.rating {
  height: 30px;
  border: 1px solid #00c19a;
}
label[for="diet"] {
  width: 70%;
}
.label[for="rating"] {
  width: 30%;
}
label {
  display: flex;
  font-size: 10px;
  padding: 0 20px;
}
select {
  width: 100%;
  display: inline-block;
}
@media screen and (min-width: 768px) and (max-width: 1199px) {
  .donation-list {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
  }
}
@media screen and (min-width: 1200px) {
  .donation-list {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;
  }
}
</style>
