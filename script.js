function hey() {
    console.log('hey')
}

function init() {
    setTimeout(() => {
        console.log(`timeout`)
    }, 0);
}

function close( ) {
    console.log(`close`)
}

// hey();
// init();
// close();

// async function restaurantCustomer() {
//     try{
//         let customer = await getCustomer();
//         let order = await getOrder(customer);
//         let meal = await prepareFood(order);
//         let food = await serveFood(meal);
//         return await eatFood(food);
//     } catch(e) {
//         showError(e);
//     }
// }
