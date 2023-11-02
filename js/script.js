//Область определения переменных
var btn = document.querySelector('#btn'),
    out = document.querySelector('#out'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    del = document.querySelector('#del'),
    frag = document.querySelector('#frag'),
    range = document.querySelector('#range'),
    rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 500;
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    kg = 5.5,
    kub = 3500,
    km = 2;
 //Выбор значения из range
    document.querySelector('.custom-range').addEventListener('input', ()=> {
    let data = document.querySelector('.custom-range').value;
    document.querySelector('.rasstoyanie').innerHTML = data;
    });
  //Обработка по нажатию кнопки "Считать"
      btn.onclick = function(){
        
        if (weight.value != '' && vol.value != '') { //Проверка на Заполненность данных
            if (weight.value < 0 || vol.value < 0) //Проверка на ввод отрцательных значений
            {
                alert('Должен будешь');
                out.innerHTML = 0.0;
            }
            else
            {
                if (load.checked){ //Проверка на выбор дополнительных условий доставки
                    load.value = 1500; } //Погрузка
                  else 
                  {
                    load.value = 0;
                }
                if (del.checked){ 
                    del.value = 3500; } //Доставка до определенного места
                  else 
                  {
                    del.value = 0;
                }
                if (frag.checked){ 
                    frag.value = 2000; } //Хрупкий груз
                  else 
                  {
                    frag.value = 0;
                }
                var sum = (weight.value * kg) + (vol.value * kub) + Number(load.value) + + Number(del.value) + Number(frag.value) + (range.value * km); //Расчет итогового значения
                out.innerHTML = sum.toFixed(2); //Округление для красивого вывода
            } 
        }
        else{
            alert('Введите вес и объем груза');
        }     
    } 
//Кнопка очистки данных
var ClearButton = document.querySelector('#btn2');
ClearButton.onclick = () =>{
    weight.value = null;
    vol.value = null;
    out.innerHTML = 0;
    let data = document.querySelector('.custom-range').value = 500;
    document.querySelector('.rasstoyanie').innerHTML = data;
    load.checked = false;
    del.checked = false;
    frag.checked = false;
}
