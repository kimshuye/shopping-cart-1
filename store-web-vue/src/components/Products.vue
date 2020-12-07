<template>
    <div>
        <p id="productList">Toys</p>
    </div>
    <div>
        <div>
            <label for="inputAge">Select age</label>
            <select id="inputAge" v-model="selected">
                <option value="aSelect">Choose</option>
            </select>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'Products'
}
</script>

<style>

</style>
