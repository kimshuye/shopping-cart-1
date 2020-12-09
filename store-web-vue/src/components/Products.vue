<template>
    <div>
        <p id="productList">Toys</p>
    </div>
    <div>
        <div>
            <label for="inputAge">Select age</label>
            <select id="inputAge" v-model="selected">
                <option value="aSelect" disabled="disabled" >Choose</option>
                <option value="a1">less 6 m</option>
                <option value="a2">7-12 m</option>
                <option value="a3">1-2 y</option>
                <option value="a4">3-6 y</option>
                <option value="a5">more 6 y</option>
                <option value="a6">All ages</option>
            </select>
        </div>
        <div>
            <label for="inputGender">Select gender</label>

        </div>
    </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      selected: 'aSelect'
    }
  }

}
</script>

<style>

</style>
