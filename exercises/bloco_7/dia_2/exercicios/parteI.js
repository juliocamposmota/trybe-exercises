const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPersonName = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const customerPhone = order.phoneNumber;
  const customerStreet = order.address.street;
  const streetNumber = order.address.number;
  const apartmentNumber = order.address.apartment;

  console.log(`Olá ${deliveryPersonName}, entrega para ${customerName}, Telefone: ${customerPhone}, R. ${customerStreet}, N: ${streetNumber}, AP: ${apartmentNumber}`);
}

customerInfo(order);

const orderModifier = (order) => {
  let customerName = order.name;
  customerName  = 'Luiz Silva';

  const foodOrder = order.order.pizza;
  const coke = order.order.drinks.coke; 
  foodOrder.muzzarella = { amount: 1, price: 20, }
  foodOrder.calabresa = { amount: 1, price: 20, }
  delete foodOrder.margherita;
  delete foodOrder.pepperoni;

  const foodOrderKeys = Object.keys(foodOrder);
  const drinkOrderKeys = Object.keys(coke);

  const price1 = order.order.pizza.muzzarella.price;
  const price2 = order.order.pizza.calabresa.price;
  const price3 = order.order.drinks.coke.price;

  const orderPrice = price1 + price2 + price3;

  console.log(`Olá ${customerName}, o total do seu pedido de ${foodOrderKeys[0]}, ${foodOrderKeys[1]} e ${drinkOrderKeys[0]} é R$ ${orderPrice}.`);
}

orderModifier(order);