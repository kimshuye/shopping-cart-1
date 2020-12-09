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
                <option value="a3">1-2 y</option>
            </select>
        </div>
        <div>

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
