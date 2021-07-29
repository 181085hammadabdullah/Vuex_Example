<template>
  <div>
    <h1>Edit Todo</h1>
    <div v-if="todo">
      <div class="container col-lg-4 offset-lg-4">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="validate1" novalidate autocomplete="nope" action="FormSubmit">
              <p class="h4 text-center py-4">Add todo</p>
              <div class="grey-text">
                <mdb-input
                  label="Todo Name"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  v-model="todo.name"
                  :customValidation="validation.name.validated"
                  :isValid="validation.name.valid"
                  @change="validate('name')"
                  required
                  validFeedback="Look's good."
                  :invalidFeedback="validation.name.invalidFeedback"
                  autocomplete="nope"
                  id="name"
                />
                <br />
                <p v-if="todo.completed=='false'">
                  <md-checkbox
                    v-model="boolean.value"
                    @change="tick1"
                  >Completed ({{ boolean.value }})</md-checkbox>
                </p>
                <p v-else>
                  <md-checkbox
                    v-model="boolean1.value"
                    @change="tick2"
                  >Completed ({{ boolean1.value }})</md-checkbox>
                </p>
              </div>
              <div class="text-center py-4 mt-3">
                <mdb-btn color="cyan" type="submit">Update</mdb-btn>
              </div>
            </form>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from "mdbvue";
import router from "../router";
export default {
  props: ["id"],
  name: "EditTodo",
  components: {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody
  },
  data() {
    return {
      boolean: {
        value: false,
        check: 0
      },
      boolean1: {
        value: true,
        check: 0
      },
      customValues: {
        name: ""
      },
      validation: {
        name: {
          valid: false,
          validated: false,
          invalidFeedback: ""
        }
      },
      check: ""
    };
  },

  computed: {
    ...mapState(["todo"]),
    set() {
      return this.$state.todo;
    }
  },

  mounted() {
    this.EditTodo(this.$route.params.id);
  },

  methods: {
    validate1() {
      Object.keys(this.customValues).forEach(key => {
        this.check = this.validate(key);
      });
      if (this.check == true) {
        const obj = {
          id: this.$route.params.id,
          name: document.getElementById("name").value,
          completed: this.finalcompleted()
        };

        this.UpdateTodo(obj);
        this.getCartItems();
        router.push({ name: "ShowTodo" });
      }
    },
    validate(key) {
      this.validation[key].validated = true;

      if (key === "name") {
        if (document.getElementById("name").value == "") {
          this.validation[key].valid = false;
          this.validation[key].invalidFeedback = "* Name Required";
          return false;
        } else if (document.getElementById("name").value.length < 3) {
          this.validation[key].valid = false;
          this.validation[key].invalidFeedback =
            "* Name Must be Min 3 characters";
          return false;
        } else {
          this.validation[key].valid = true;
          this.validation[key].invalidFeedback = "";
          return true;
        }
      }
    },
    tick1() {
      this.boolean.check = 1;
    },
    tick2() {
      this.boolean1.check = 1;
    },
    finalcompleted() {
      if (this.boolean.check == 1) {
        return this.boolean.value;
      } else if (this.boolean1.check == 1) {
        return this.boolean1.value;
      } else {
        return this.todo.completed;
      }
    },
    ...mapActions(["EditTodo","UpdateTodo","getCartItems"])
  }
};
</script>