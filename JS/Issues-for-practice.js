
// Если не использовать стрелку, как достучаться до контекста из функции fn() ????


const hotel = {
  name: 'Resort hotel',
  showThis() {
    const fn = function () {
      /*
       * Стрелки запоминают контекст во время объявления,
       * из родительской области видимости
       */
      console.log('this in fn: ', this);
    };

   fn()
    console.log('this in showThis: ', this);
  },
};

 hotel.showThis();

