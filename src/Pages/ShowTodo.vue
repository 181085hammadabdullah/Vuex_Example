<template>
  <div>
    <h1>Show Todos</h1>
    <mdb-tbl hover>
      <mdb-tbl-head>
        <tr>
          <th>Name</th>
          <th>Completed</th>
          <th colspan="2">Action</th>
        </tr>
      </mdb-tbl-head>
      <mdb-tbl-body v-bind:key="todo.id" v-for="todo in todos">
        <tr>
          <td>{{ todo.name }}</td>
          <td>{{ todo.completed }}</td>
          <td>
            <router-link
              :to="{name: 'EditTodo', params: {id: todo.id}}"
              class="btn btn-secondary"
              size="sm"
              id="b1"
            >Edit</router-link>
          </td>
          <td>
            <mdb-btn color="danger" size="sm" @click="confirm = true;settodo(todo)">Delete</mdb-btn>
          </td>
        </tr>
      </mdb-tbl-body>
    </mdb-tbl>
    <mdb-container>
      <!-- trigger modal button -->

      <!-- confirm modal -->
      <mdb-modal :show="confirm" @close="confirm = false" size="sm" class="text-center" danger>
        <mdb-modal-header center :close="false">
          <p class="heading">Are you sure Want To delete This Todo?</p>
        </mdb-modal-header>
        <mdb-modal-body>
          <mdb-icon icon="times" size="4x" class="animated rotateIn" />
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn outline="danger" @click="removetodo(Todo);confirm = false">Yes</mdb-btn>
          <mdb-btn color="danger" @click="confirm = false">No</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </mdb-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mdbTbl, mdbTblHead, mdbTblBody, mdbBtn } from "mdbvue";
import {
  mdbIcon,
  mdbModal,
  mdbModalHeader,
  mdbModalBody,
  mdbModalFooter,
  mdbContainer
} from "mdbvue";
export default {
  name: "ShowTodo",
  components: {
    mdbTbl,
    mdbTblHead,
    mdbTblBody,

    mdbBtn,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbContainer
  },
  computed: {
    todos() {
      return this.$store.state.Todos;
    }
  },
  data() {
    return {
      confirm: false,
      Todo:""
    };
  },
  mounted() {
    this.getCartItems();
  },
  methods: {
    settodo(data) {
      this.Todo=data;
     
    },
    ...mapActions(["getCartItems", "removetodo", "EditTodo"])
  }
};
</script>
<style scoped>
</style>


