<template>
    <div class="container">

        <div class="row">
            <p id="productList">Toys</p>
        </div>

        <div class="row">
            <div class="col">
                <label for="inputAge">Select age</label>&nbsp;
                <select id="inputAge" >
                    <option value="aSelect" disabled="disabled" >Choose</option>
                    <option value="a1">less 6 m</option>
                    <option value="a2">7-12 m</option>
                    <option value="a3">1-2 y</option>
                    <option value="a4">3-6 y</option>
                    <option value="a5">more 6 y</option>
                    <option value="a6">All ages</option>
                </select>
            </div>
            <div class="col">
                <label for="inputGender">Select gender</label>&nbsp;

            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      // selectedAge: ''
    }
  }
  // created: function () {
  //   this.onInit()
  //   // `this` points to the vm instance
  //   console.log('selectedAge is: ' + this.selectedAge)
  // },
  // methods: {
  //   onInit(){
  //     console.log("onInit");
  //     this.selectedAge = 'aSelect'
  //   }
  // },

}
</script>

<style>

</style>
