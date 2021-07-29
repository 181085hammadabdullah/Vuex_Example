<template>
  <div>
    <h1>Add Todo</h1>
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
                v-model="customValues.name"
                :customValidation="validation.name.validated"
                :isValid="validation.name.valid"
                @change="validate('name')"
                required
                validFeedback="Look's good."
                :invalidFeedback="validation.name.invalidFeedback"
                autocomplete="nope"
              />
            </div>
            <div class="text-center py-4 mt-3">
              <mdb-btn color="cyan" type="submit">Register</mdb-btn>
            </div>
          </form>
        </mdb-card-body>
      </mdb-card>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from "mdbvue";
import router from "../router";
export default {
  name: "AddTodo",
  components: {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody
  },
  data() {
    return {
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

  methods: {
    validate1() {
      Object.keys(this.customValues).forEach(key => {
        this.check = this.validate(key);
      });
      if (this.check == true) {
        const obj = {
          name: this.customValues.name,
          completed: false
        };
        this.AddTodo(obj);
        this.getCartItems();
        router.push({ name: "ShowTodo" });
      }
    },
    validate(key) {
      this.validation[key].validated = true;
      if (key === "name") {
        if (this.customValues[key] == "") {
          this.validation[key].valid = false;
          this.validation[key].invalidFeedback = "* Name Required";
          return false;
        } else if (this.customValues[key].length < 3) {
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
    ...mapActions(["AddTodo", "getCartItems"])
  }
};
</script>